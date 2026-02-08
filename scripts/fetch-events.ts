import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: ".env.local" });

interface EventbriteEvent {
  id: string;
  name: { text: string };
  description: { text: string } | null;
  start: { local: string; timezone: string };
  end: { local: string; timezone: string };
  url: string;
  venue?: {
    name: string;
    address: {
      localized_address_display: string;
    };
  };
  logo?: {
    url: string;
  };
  is_free: boolean;
}

async function fetchEvents(): Promise<void> {
  const token = process.env.EVENTBRITE_PRIVATE_TOKEN;
  const orgId = process.env.EVENTBRITE_ORG_ID;

  if (!token || !orgId) {
    console.error(
      "Missing EVENTBRITE_PRIVATE_TOKEN or EVENTBRITE_ORG_ID in .env.local",
    );
    process.exit(1);
  }

  console.log("Fetching events from Eventbrite...");

  try {
    let allEvents: EventbriteEvent[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(
        `https://www.eventbriteapi.com/v3/organizations/${orgId}/events/?expand=venue&status=live&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Eventbrite API error:", response.status, errorText);
        process.exit(1);
      }

      const data = await response.json();
      const events: EventbriteEvent[] = data.events || [];
      allEvents = allEvents.concat(events);

      hasMore = data.pagination?.has_more_items ?? false;
      page++;
      console.log(`Fetched page ${page - 1}: ${events.length} events`);
    }

    const events = allEvents;

    console.log(`Fetched ${events.length} events`);

    // Write to data file
    const outputDir = path.join(process.cwd(), "src", "data");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, "events.json");
    fs.writeFileSync(
      outputPath,
      JSON.stringify(
        {
          events,
          lastUpdated: new Date().toISOString(),
        },
        null,
        2,
      ),
    );

    console.log(`Events saved to ${outputPath}`);
  } catch (error) {
    console.error("Failed to fetch events:", error);
    process.exit(1);
  }
}

fetchEvents();
