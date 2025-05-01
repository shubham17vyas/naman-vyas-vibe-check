
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { profileData } from '@/data/portfolioData';

const Contact = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div 
        className="section-container"
        ref={elementRef as React.RefObject<HTMLDivElement>}
      >
        <div className={cn(
          'scroll-animation',
          isVisible && 'visible'
        )}>
          <h2 className="section-title">Get in Touch</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-10 text-center">
              Feel free to reach out if you're looking for a dedicated IT/Business Analyst intern, 
              have a question, or just want to connect.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary text-2xl">📧</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <a href={`mailto:${profileData.email}`} className="text-gray-600 hover:text-brand-primary">
                  {profileData.email}
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <a href={`tel:${profileData.phone}`} className="text-gray-600 hover:text-brand-primary">
                  {profileData.phone}
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-primary text-2xl">📍</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <p className="text-gray-600">{profileData.location}</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-10">
              {Object.entries(profileData.socialLinks).map(([platform, url]) => (
                <a 
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-brand-primary hover:text-white transition-colors duration-300"
                  aria-label={platform}
                >
                  <span className="capitalize text-sm">{platform.charAt(0).toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
