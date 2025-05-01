
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { profileData } from '@/data/portfolioData';

const About = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section id="about" className="py-20 bg-white">
      <div 
        className="section-container"
        ref={elementRef as React.RefObject<HTMLDivElement>}
      >
        <div className={cn(
          'scroll-animation',
          isVisible && 'visible'
        )}>
          <h2 className="section-title">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Driven PGDM graduate and former banking professional transitioning into IT roles—Business Analyst, SEO Specialist, or Digital Marketing Analyst. I combine data-driven problem solving with hands-on experience in customer acquisition and digital campaigns. Skilled at:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Gathering and documenting requirements (BRD, user stories)</li>
                <li>Analyzing data in Excel (PivotTables, VLOOKUP) to surface insights</li>
                <li>Optimizing websites for search (on-page SEO, keyword research)</li>
                <li>Communicating with stakeholders to translate business needs into technical solutions</li>
              </ul>
              
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Eager to leverage my analytical mindset, strong communication, and sales background to help teams build more efficient processes and drive measurable results.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="min-w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <span className="text-brand-primary text-lg font-bold">📍</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Location</h3>
                    <p className="text-gray-600">{profileData.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="min-w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <span className="text-brand-primary text-lg font-bold">📧</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-gray-600">{profileData.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="min-w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <span className="text-brand-primary text-lg font-bold">📱</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="text-gray-600">{profileData.phone}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {Object.entries(profileData.socialLinks).map(([platform, url]) => (
                  <a 
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md flex items-center transition-colors duration-200"
                  >
                    <span className="capitalize">{platform}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="relative h-full">
              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8 h-full">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Fun Facts</h3>
                <ul className="space-y-4">
                  {profileData.funFacts.map((fact, index) => (
                    <li 
                      key={index} 
                      className="flex items-center"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="text-xl mr-3">✨</span>
                      <span className="text-gray-700">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-brand-primary/20 animate-pulse"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-brand-secondary/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
