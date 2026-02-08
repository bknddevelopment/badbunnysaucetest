export interface EventbriteEvent {
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

export interface EventbriteResponse {
  events: EventbriteEvent[];
  pagination: {
    has_more_items: boolean;
    page_count: number;
  };
}

export async function fetchEventbriteEvents(): Promise<EventbriteEvent[]> {
  const token = process.env.EVENTBRITE_PRIVATE_TOKEN;
  const orgId = process.env.EVENTBRITE_ORG_ID;

  if (!token || !orgId) {
    console.error("Missing Eventbrite credentials");
    return [];
  }

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
          next: { revalidate: 3600 }, // Cache for 1 hour
        },
      );

      if (!response.ok) {
        console.error("Eventbrite API error:", response.status);
        return allEvents;
      }

      const data: EventbriteResponse = await response.json();
      allEvents = allEvents.concat(data.events || []);
      hasMore = data.pagination?.has_more_items ?? false;
      page++;
    }

    return allEvents;
  } catch (error) {
    console.error("Failed to fetch Eventbrite events:", error);
    return [];
  }
}

export function formatEventDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function formatEventTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}
