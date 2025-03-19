import React from 'react';
import { Star } from 'lucide-react';
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Log the scan when the page loads
    axios.post(`${import.meta.env.VITE_API_ENDPOINT}/api/log-scan`);
  }, []);

  const handleReviewClick = () => {
    // Log the button click
    axios.post(`${import.meta.env.VITE_API_ENDPOINT}/api/log-button-click`);
    window.open('https://g.page/r/CdBjrENhVz9_EAE/review', "_blank");
  };
  return (
    <div className="md:h-screen h-[100dvh] bg-black text-white">
      <div className="h-full flex flex-col items-center relative">
        {/* Background image */}
        <img
          src="/background.jpg"
          alt="Luxury Jewelry Display"
          className="h-[50vh] w-full object-cover"
        />

        {/* Top gradient overlay */}
        <div
          className="absolute top-0 left-0 right-0 h-[50vh] pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 10%, rgba(0, 0, 0, 0) 100%)'
          }}
        />

        {/* Bottom gradient overlay */}
        <div
          className="absolute top-2 left-0 right-0 h-[50vh] pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.4) 65%, rgba(0, 0, 0, 0.8) 90%, #000000 100%)'
          }}
        />

        {/* Content container - adjusted for left alignment and bottom positioning */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          {/* Logo section at top */}
          <div className="flex flex-col items-center gap-2 lg:mt-12 mt-36">
            <img
              src="/logo.jpg"
              alt="SD Fashion Logo"
              className="w-[100px] h-[100px] object-cover rounded-full"
            />
            <h2 className="text-2xl mt-1 font-medium text-center font-serif">S.D. Fashion</h2>
          </div>

          {/* Text and button section at bottom */}
          <div className="flex flex-col mb-4">
            <h1 className="text-5xl md:text-6xl font-medium mb-2 text-left">
              <span className="text-white">Share Your </span><br className='md:hidden' />
              <span className="text-gradient-gold">Valuable</span><br className='md:hidden' />
              <span className="text-white"> Feedback!</span>
            </h1>

            <p className="text-gray-300 mb-6 text-left">
              Tap below to leave a review. It takes less than a minute. Thank you!
            </p>

            <button
              onClick={handleReviewClick}
              className="w-full bg-white text-black py-3 rounded-lg px-6 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
            >
              <img src="/google.svg" alt="google" />
              <span>Rate Us on Google</span>
            </button>

            <p className="text-center text-sm text-[var(--color-scan-text)] mt-4">
              Powered by Star Boom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}