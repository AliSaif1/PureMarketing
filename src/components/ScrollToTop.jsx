import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Instantly scroll to top without smooth animation
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = '';

    // Briefly lock scrolling to hide any scroll flicker
    document.body.style.overflow = 'hidden';

    const timeout = setTimeout(() => {
      document.body.style.overflow = '';
      setLoading(false);
    }, 700); // Adjust duration as per perception

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = '';
    };
  }, [pathname]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-white/100 backdrop-blur-sm flex items-center justify-center">
        <div className="relative w-24 h-24">
          {/* Outer ring - animated */}
          <div className="absolute inset-0 border-4 border-primary-500/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-t-primary-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />

          {/* Center logo element */}
          <div className="absolute inset-4 flex items-center justify-center">
            <div className="relative">
              {/* Diamond shape that could be your logo */}
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rotate-45" />

              {/* Optional sparkle effect */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full animate-pulse delay-300" />
            </div>
          </div>

          {/* Floating dots - optional */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary-400 rounded-full animate-bounce" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-primary-400 rounded-full animate-bounce delay-200" />
        </div>
      </div>
    );
  }

  return null;
};

export default ScrollToTop;