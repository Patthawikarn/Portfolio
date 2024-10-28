// BackToTop.jsx
import React, { useEffect, useState } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-5 right-5 bg-gradient-to-r from-[rgb(3,154,150)] to-[rgb(87,147,110)] text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
          aria-label="Back to Top"
        >
          ↑
        </button>
      )}
    </div>
  );
}
