import Image from "next/image";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
  id?: string;
  title?: string;
  lazy?: boolean;
}

export default function ImageGallery({
  images,
  id,
  title,
  lazy = true,
}: ImageGalleryProps) {
  return (
    <section id={id} className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-4xl md:text-5xl font-cursive-logo text-center mb-10 text-white">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-image relative aspect-square rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                loading={lazy ? "lazy" : "eager"}
              />
              <div className="absolute inset-0 bg-salsa-red/0 hover:bg-salsa-red/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
