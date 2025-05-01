
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { profileData } from '@/data/portfolioData';
import { useTypewriter } from '@/hooks/useTypewriter';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [offset, setOffset] = useState(0);
  const { displayText } = useTypewriter({ texts: profileData.taglines });
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * 0.5);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${offset}px)`,
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          opacity: 0.8,
        }}
      />
      
      {/* Content */}
      <div className="section-container relative z-10 text-center">
        <div className="animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full overflow-hidden shadow-lg">
            {/* Placeholder for profile image - replace with actual image */}
            <div className="w-full h-full bg-gradient-to-r from-brand-primary to-brand-secondary flex items-center justify-center text-white text-4xl font-bold">
              NV
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {profileData.name}
          </h1>
          
          <div className="h-8 mb-6">
            <p className="text-xl md:text-2xl font-medium text-brand-primary inline-block typewriter">
              {displayText}
              <span className="typewriter-cursor">&nbsp;</span>
            </p>
          </div>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
            {profileData.title}
          </p>
          
          <a 
            href="#contact"
            className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-6 text-lg rounded-md shadow-md animate-float inline-block"
          >
            Contact Info
          </a>
        </div>
        
        {/* Scroll indicator */}
        <a 
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8 text-gray-600" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
