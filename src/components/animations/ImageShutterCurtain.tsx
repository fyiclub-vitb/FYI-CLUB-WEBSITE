import React, { useEffect, useRef, useState } from 'react';

interface ImageShutterCurtainProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  shutterColor?: string;
}

export const ImageShutterCurtain: React.FC<ImageShutterCurtainProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-video',
  shutterColor = 'bg-brand-cyan',
}) => {
  const [isUnmasked, setIsUnmasked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start the one-time reveal when the image is close to entering the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsUnmasked(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden border-2 border-primary ${aspectRatio} ${className} group`}
    >
      {/* The image stays mounted beneath two curtains, which slide away after the observer fires. */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        loading="lazy"
      />

      {/* Cyber Shutter Curtain: Top-left slice */}
      <div
        className={`absolute inset-0 ${shutterColor} z-10 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isUnmasked ? '-translate-y-full' : 'translate-y-0'
        }`}
      />

      {/* Cyber Shutter Curtain: Bottom-right slice (staggered delay) */}
      <div
        className={`absolute inset-0 bg-[#111111] z-10 transition-transform duration-600 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isUnmasked ? 'translate-x-full' : 'translate-x-0'
        }`}
      />

      {/* Tactical scanline grid overlay on hover */}
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20" />
    </div>
  );
};

