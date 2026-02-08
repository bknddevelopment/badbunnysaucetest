"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
  id?: string;
  lazy?: boolean;
}

export default function ImageGallery({
  images,
  id,
  lazy = true,
}: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <section id={id} className="py-20 md:py-28 px-6 bg-salsa-black">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="text-salsa-red text-sm font-semibold uppercase tracking-[0.2em]">
              Gallery
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white mt-3">
              Captured Moments
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              The energy, the connection, the fire — a glimpse into our nights
              on the floor.
            </p>
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((image, index) => {
              // Vary heights for masonry feel
              const heightClass =
                index % 5 === 0
                  ? "h-[400px] md:h-[500px]"
                  : index % 3 === 0
                    ? "h-[350px] md:h-[420px]"
                    : "h-[260px] md:h-[320px]";

              return (
                <div
                  key={index}
                  onClick={() => setLightboxIndex(index)}
                  className={`group relative rounded-xl overflow-hidden cursor-pointer break-inside-avoid ${heightClass}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={lazy ? "lazy" : "eager"}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wide">
                      View
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex(
              (lightboxIndex - 1 + images.length) % images.length,
            )
          }
          onNext={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
        />
      )}
    </>
  );
}
