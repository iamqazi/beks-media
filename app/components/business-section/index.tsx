import React, { useRef, useState, useEffect } from "react";

const BusinessSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoHeight, setVideoHeight] = useState<number | null>(null);

  // Toggle Mute Function
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Update container height based on video dimensions
  const updateDimensions = () => {
    if (videoRef.current && containerRef.current) {
      setVideoHeight(videoRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    // Store the current video element in a variable to avoid ref changing during cleanup
    const currentVideo = videoRef.current;

    // Play/pause video based on visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (currentVideo) {
          if (entry.isIntersecting) {
            currentVideo.play();
          } else {
            currentVideo.pause();
          }
        }
      },
      { threshold: 0.5 } // Video plays when at least 50% visible
    );

    if (currentVideo) {
      observer.observe(currentVideo);
    }

    // Set up resize listener to update container height
    window.addEventListener("resize", updateDimensions);

    // Initial dimensions setup
    updateDimensions();

    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo);
      }
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Update dimensions when video metadata is loaded
  const handleVideoLoad = () => {
    updateDimensions();
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full  overflow-hidden"
      style={{ height: videoHeight ? `${videoHeight}px` : "auto" }}
    >
      {/* Background Video */}
      <div className="w-full h-full">
        <video
          ref={videoRef}
          loop
          playsInline
          muted={isMuted}
          onLoadedMetadata={handleVideoLoad}
          className="w-full  sm:object-contain lg:object-cover"
        >
          <source src="/multimedia.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Mute/Unmute Button - Now positioned inside the video with responsive positioning */}
      <button
        onClick={toggleMute}
        className="absolute z-10 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 
                  right-4 bottom-4 
                  sm:right-6 sm:bottom-6 
                  md:right-8 md:bottom-8"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default BusinessSection;
