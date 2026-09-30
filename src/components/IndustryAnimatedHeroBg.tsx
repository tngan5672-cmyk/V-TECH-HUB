import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface IndustryAnimatedHeroBgProps {
  solutionId: string;
  imageUrl?: string;
  videoUrl?: string;
}

export default function IndustryAnimatedHeroBg({ solutionId, imageUrl, videoUrl }: IndustryAnimatedHeroBgProps) {
  const industryId = (solutionId || '').toLowerCase();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Industry-specific curated high-res real-world footage background videos
  const getIndustryVideos = (): string[] => {
    if (videoUrl) {
      return [videoUrl, 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'];
    }
    switch (industryId) {
      case 'bfsi':
        return [
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
        ];
      case 'manufacturing':
        return [
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        ];
      case 'government':
        return [
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
        ];
      case 'healthcare':
        return [
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
        ];
      case 'media':
        return [
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4'
        ];
      case 'retail':
        return [
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
        ];
      case 'logistics':
        return [
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
        ];
      case 'education':
        return [
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
        ];
      default:
        return [
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        ];
    }
  };

  const getIndustryFallbackImage = () => {
    switch (industryId) {
      case 'bfsi':
        return 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop';
      case 'manufacturing':
        return 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop';
      case 'government':
        return 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop';
      case 'healthcare':
        return 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop';
      case 'media':
        return 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1600&auto=format&fit=crop';
      case 'retail':
        return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop';
      case 'logistics':
        return 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop';
      case 'education':
        return 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop';
      default:
        return imageUrl || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop';
    }
  };

  const videoSources = getIndustryVideos();
  const currentImage = imageUrl || getIndustryFallbackImage();

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.playbackRate = 0.95;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setVideoLoaded(true))
          .catch(() => {
            // Retry on user interaction or fallback
          });
      }
    }
  }, [industryId, videoUrl]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#05080f]">
      {/* 1. Real Cinematic Looping Background Video - High Visibility & Autoplay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          key={`${industryId}-${videoSources[0]}`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          onCanPlay={() => {
            setVideoLoaded(true);
            if (videoRef.current) {
              videoRef.current.play().catch(() => {});
            }
          }}
          className="w-full h-full object-cover opacity-75 sm:opacity-85 scale-105 transition-opacity duration-1000"
        >
          {videoSources.map((src, index) => (
            <source key={index} src={src} type="video/mp4" />
          ))}
        </video>
      </div>

      {/* 2. Fallback Image Layer (fades smoothly when video is active) */}
      <motion.img
        key={currentImage}
        src={currentImage}
        alt="Industry Backdrop"
        className={`absolute inset-0 w-full h-full object-cover mix-blend-screen transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-15' : 'opacity-40'
        }`}
        referrerPolicy="no-referrer"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop';
        }}
      />

      {/* 3. Subtle Cyber Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 70% 50%, black 30%, transparent 100%)'
        }}
      />

      {/* 4. Radiant Ambient Glowing Orbs */}
      <motion.div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#e31e24]/20 blur-[120px]"
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* 5. Left-side gradient ensuring sharp typography readability while keeping right-side vivid video footage */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05080f]/95 via-[#05080f]/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-transparent to-transparent" />
    </div>
  );
}


