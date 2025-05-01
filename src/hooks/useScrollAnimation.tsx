
import { useEffect, useState, useRef } from 'react';

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  
  const handleScroll = () => {
    if (!elementRef.current) return;
    
    const elementTop = elementRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // Element is visible when it enters the bottom 80% of the viewport
    if (elementTop < windowHeight * 0.8) {
      setIsVisible(true);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Initial check in case element is already in view on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return { elementRef, isVisible };
}
