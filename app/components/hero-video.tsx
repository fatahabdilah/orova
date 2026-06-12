"use client";

import { useEffect, useRef } from "react";

export function HeroVideo({ className }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // Some browsers only autoplay when muted is set imperatively.
    video.muted = true;

    const tryPlay = () => {
      const p = video.play();
      if (p) p.catch(() => {});
    };

    // Resume if the browser stalls (buffering) or pauses it unexpectedly.
    const onPause = () => {
      if (!video.ended) tryPlay();
    };
    const onVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("stalled", tryPlay);
    video.addEventListener("waiting", tryPlay);
    video.addEventListener("pause", onPause);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("stalled", tryPlay);
      video.removeEventListener("waiting", tryPlay);
      video.removeEventListener("pause", onPause);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/hero-poster.jpg"
      aria-hidden
    >
      {/* WebM (VP9) first — smaller; Safari/iOS falls back to MP4 */}
      <source src="/hero.webm" type="video/webm" />
      <source src="/hero.mp4" type="video/mp4" />
    </video>
  );
}
