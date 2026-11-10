import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';

interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  exif: string;
  stamp: string;
  stampBg: string;
  imgUrl: string;
  rotate: string;
}

const PHOTOS: GalleryPhoto[] = [
  {
    id: "p1",
    title: "MIDNIGHT COMPILER DEBUG",
    caption: "\"We fixed the packet drops with two capacitors and pure willpower.\"",
    exif: "02:48 AM • SHOT ON PIXEL",
    stamp: "BLOCK 02 LAB",
    stampBg: "bg-brand-cyan text-primary",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVIyAullLxSZquuJ4K6-d_ct0QtajO73NGfit7OrvtHeBBQU9sTduXoF8w3P78RnD91q80p1n2JqqOBoAhuiPIhOwqgJ1QpOuofb7YyCXJJLBVticf2pfaY9m3k9I1XGUpIIUqQKii3e243NoFEIJ6Ky0Cc6L_stonoh8jktNVxecwliJQv8PKM5TFLano0NHy0ClqTsZaYPKT4Z_cD7AMcB5crl71vOUS9r073b0O",
    rotate: "-rotate-1"
  },
  {
    id: "p2",
    title: "PULSEBOTICS RURAL MUD RUN",
    caption: "\"Field-testing custom LoRa antennas across Sehore farming district.\"",
    exif: "04:15 PM • SEHORE HIGHWAY",
    stamp: "FIELD TEST #04",
    stampBg: "bg-brand-orange text-white",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKFEEJ3YeWL7Cv0Ar6FmKBEJ17R2Xj56-cLUHvhIga3tdXdlN2KqGVx8WL0YND8YFdO2wWswIjDg5UvKSbPz3KwuZj8-ZvwDl3FVnQOkUeIj8zT57-heG1mj8nd2KsWwuv4fJeKafk6mRc0rc47IgzR7FnHLdrrJPrEp0gupst5wk9UGwt5LZ2Ywnyichoq81B1gypsohOzR3c953OXKP6Zl2W6i1E-V_bwBN1P_B0",
    rotate: "rotate-2"
  },
  {
    id: "p3",
    title: "NEUROCANVAS SHADER TEST",
    caption: "\"Running 60fps local diffusion shaders inside browser memory.\"",
    exif: "01:22 AM • WEBGL 2.0",
    stamp: "BENCHMARK PASS",
    stampBg: "bg-brand-yellow text-primary",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCweTy2fX-E7w5a7-Ohpcd9GZz_8rSnWsqqdl7EVnmCRQA5Asi0dk5u5W7fgVgWWm3tK-k2f_iwPxRDW-1h0IeIExEdncYKqN09Sz5mp_Z2jimZxAlHmS0ty_vFJj98zJd8vfoNz9a3BPXtysjzsjhpDdLv8XOxMut0Ytnfv8j3BprGQfEZ8k4BA-5oVxcuPpc8eRcaCp0fdzCxPX13njngTXBHh12TRG9r67j_rwZn",
    rotate: "-rotate-2"
  },
  {
    id: "p4",
    title: "AETHER OS PEER ROUTING",
    caption: "\"Distributed mesh network topology connecting 128 campus peers.\"",
    exif: "11:58 PM • RUST CORE",
    stamp: "ZERO CENTRAL RELAY",
    stampBg: "bg-primary text-white",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPQ3i3lRc6apQNGaxFKrQFmK2bU2uVVAzk83sz7i8VVsva6Xi75Kkfl1rcMSurKSrEk9vXB3ClpKrA57H4kaFM8DoWJ6L5qlAsIHRBAdi4gpN5xKy2KjVK7D5LQZjbuB4UoAvlM1ZyFGWpqbVuK3tLFalg240c6vMTcj4pJRm3xWWAWixnd59UOryvrj1E2hlsFScGcofGaQALGtY8sMr-rsjgNh77nyYqcXqQ2cWn",
    rotate: "rotate-1"
  }
];

export const GalleryPage: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  return (
    <div className="w-full">
      <PageHeader
        tag="05 • CLUB ARCHIVE"
        badge="UNEDITED DISPATCHES"
        title="THE 2 AM LAB LOGS"
        subtitle="Raw visual evidence of what happens when students skip PowerPoint pitches and build directly on the workbench."
      />

      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className={`bg-white p-5 border-2 border-primary brutal-shadow-lg ${photo.rotate} hover:rotate-0 hover:-translate-y-2 transition-all duration-300 cursor-pointer group`}
            >
              {/* Tape Strips on Polaroid */}
              <div className="relative">
                <div className="absolute -top-7 left-6 w-20 h-6 tape-strip -rotate-6 border border-primary/20 z-10" />
                <div className="absolute -top-7 right-6 w-20 h-6 tape-strip rotate-6 border border-primary/20 z-10" />

                <div className="w-full aspect-[4/3] bg-black overflow-hidden border-2 border-primary mb-4 relative">
                  <img
                    src={photo.imgUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-primary text-brand-yellow font-mono text-[10px] font-bold px-2 py-0.5">
                    {photo.exif}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <h3 className="font-headline text-xl font-black uppercase text-primary group-hover:text-brand-orange transition-colors">
                  {photo.title}
                </h3>
                <span className={`font-mono text-[10px] font-bold px-2 py-0.5 border border-primary ${photo.stampBg}`}>
                  {photo.stamp}
                </span>
              </div>

              <p className="font-hand text-lg text-brand-orange">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="max-w-3xl w-full bg-white border-4 border-primary brutal-shadow-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 bg-primary text-white p-2 border border-primary hover:bg-brand-orange font-mono text-xs font-bold"
            >
              CLOSE ✕
            </button>
            <div className="w-full aspect-[16/10] overflow-hidden border-2 border-primary mb-4">
              <img
                src={activePhoto.imgUrl}
                alt={activePhoto.title}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-mono text-xs font-bold text-brand-orange uppercase">
              {activePhoto.exif} • {activePhoto.stamp}
            </span>
            <h2 className="font-headline text-2xl font-black uppercase text-primary mt-1">
              {activePhoto.title}
            </h2>
            <p className="font-hand text-2xl text-brand-orange mt-2">
              {activePhoto.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

