import { memo } from 'react';
import Image from 'next/image';

const GalleryImage = memo(function GalleryImage({ image, alt, index }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md">
      <div className="relative aspect-[16/9]">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          loading={index < 2 ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
});

export default function GalleryTab({ project }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Project Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.images.map((image, index) => (
          <GalleryImage 
            key={index}
            image={image}
            alt={`${project.title} - Image ${index + 1}`}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}