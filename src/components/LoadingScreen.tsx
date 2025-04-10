import React, { useEffect, useState } from 'react';
export const LoadingScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000); // Show loading screen for 2 seconds
    return () => clearTimeout(timer);
  }, []);
  return <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wider relative">
          <span className="opacity-0 animate-fadeIn">P</span>
          <span className="opacity-0 animate-fadeIn" style={{
          animationDelay: '0.2s'
        }}>
            E
          </span>
          <span className="opacity-0 animate-fadeIn" style={{
          animationDelay: '0.4s'
        }}>
            R
          </span>
          <span className="opacity-0 animate-fadeIn" style={{
          animationDelay: '0.6s'
        }}>
            F
          </span>
          <span className="opacity-0 animate-fadeIn transition duration-300 ease-linear text-red-500" style={{
          animationDelay: '0.8s'
        }}>
            A
          </span>
          <span className="opacity-0 animate-fadeIn  transition duration-400 ease-linear text-red-500" style={{
          animationDelay: '1s'
        }}>
            M
          </span>
          <span className="opacity-0 animate-fadeIn transition duration-400 ease-linear text-red-500" style={{
          animationDelay: '1.2s'
        }}>
            A
          </span>
          <span className="opacity-0 animate-fadeIn transition duration-400 ease-linear text-red-500" style={{
          animationDelay: '1.4s'
        }}>
            N
          </span>
          <span className="opacity-0 animate-fadeIn transition duration-400 ease-linear text-red-500" style={{
          animationDelay: '1.6s'
        }}>
            A
          </span>
        </h1>
      </div>
    </div>;
};