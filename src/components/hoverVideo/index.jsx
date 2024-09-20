'use client';
import React, { useRef, useEffect, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/sea/index.css';

export default function HoverVideo({ src }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    // Initialize the Video.js player
    playerRef.current = videojs(videoRef.current, {
      controls: true,
      autoplay: false,
      muted: false,
      preload: 'auto',
      responsive: true,
      fluid: true,
    });
  }, [src]);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handlePlayVideo = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasPlayed) {
        console.log('hello');
        playerRef.current.play();
        setHasPlayed(true);
        observer.unobserve(entry.target);
      }
    };

    const observer = new IntersectionObserver(handlePlayVideo, {
      threshold: 0.5,
    });

    if (videoElement) {
      observer.observe(videoElement);
    }
  }, [hasPlayed]);
  console.log(hasPlayed);
  return (
    <div className="h-full w-full bg-[#000000]">
      <div data-vjs-player>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <video
          ref={videoRef}
          className="video-js vjs-default-skin vjs-theme-sea"
          playsInline
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
