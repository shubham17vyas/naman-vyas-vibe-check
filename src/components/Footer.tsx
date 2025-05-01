
import React from 'react';
import { profileData } from '@/data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10 border-t border-gray-200">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-brand-primary">
              {profileData.name}
            </h2>
            <p className="text-gray-600">
              {profileData.title}
            </p>
          </div>
          
          <div className="flex space-x-4">
            {Object.entries(profileData.socialLinks).map(([platform, url]) => (
              <a 
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-brand-primary hover:text-white transition-colors duration-300"
              >
                <span className="capitalize text-sm">{platform.charAt(0)}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
