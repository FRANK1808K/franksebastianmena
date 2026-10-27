'use client';

import { useRef, useState } from 'react';
import { PlayIcon as Play } from '@phosphor-icons/react/dist/ssr';
import type { FeaturedVideo } from '@/types';
import { cn } from '@/lib/utils';

/** "PT16S" → "0:16" */
function formatDuration(iso: string) {
  const seconds = Number(iso.match(/(\d+)S/)?.[1] ?? 0) + Number(iso.match(/(\d+)M/)?.[1] ?? 0) * 60;
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}

/**
 * Video vertical propio. No descarga nada hasta que la persona pulsa reproducir
 * (preload="none"); a partir de ahí usa los controles nativos, accesibles por teclado.
 */
export function TalkVideo({ video, className }: { video: FeaturedVideo; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    setStarted(true);
    const el = videoRef.current;
    if (!el) return;
    el.play().catch(() => {
      // Si el navegador bloquea la reproducción, quedan los controles nativos
    });
    el.focus();
  };

  return (
    <div className={cn('relative aspect-[9/16] overflow-hidden rounded-3xl bg-ink ring-1 ring-line', className)}>
      <video
        ref={videoRef}
        className="size-full object-cover"
        poster={video.poster}
        width={video.width}
        height={video.height}
        preload="none"
        playsInline
        controls={started}
        onPlay={() => setStarted(true)}
        aria-label={video.title}
      >
        <source src={video.src} type="video/mp4" />
        Tu navegador no puede reproducir este video.{' '}
        <a href={video.src} className="underline">
          Descárgalo aquí
        </a>
        .
      </video>

      {!started && (
        <button
          type="button"
          onClick={play}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-3"
        >
          <span className="sr-only">Reproducir video: {video.title}</span>
          <span
            aria-hidden="true"
            className="flex size-16 items-center justify-center rounded-full bg-canvas/90 text-ink backdrop-blur-xl transition-transform duration-500 ease-fluid group-hover:scale-105 group-active:scale-[0.98]"
          >
            {/* Corrección óptica: el triángulo se ve centrado un poco a la derecha */}
            <Play weight="fill" className="size-6 translate-x-0.5" />
          </span>
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-2 py-0.5 text-xs font-medium tabular-nums text-canvas backdrop-blur-xl"
          >
            {formatDuration(video.duration)}
          </span>
        </button>
      )}
    </div>
  );
}

export default TalkVideo;
