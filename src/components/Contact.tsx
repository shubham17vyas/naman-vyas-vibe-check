
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { profileData } from '@/data/portfolioData';

const Contact = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  
  const handleContactFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };
  
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Feel free to reach out if you're looking for a dedicated IT/Business Analyst intern, 
                have a question, or just want to connect.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="min-w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <span className="text-brand-primary text-lg">📧</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Email</h3>
                    <a href={`mailto:${profileData.email}`} className="text-gray-600 hover:text-brand-primary">
                      {profileData.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="min-w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <span className="text-brand-primary text-lg">📱</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Phone</h3>
                    <a href={`tel:${profileData.phone}`} className="text-gray-600 hover:text-brand-primary">
                      {profileData.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="min-w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <span className="text-brand-primary text-lg">📍</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Location</h3>
                    <p className="text-gray-600">{profileData.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                {Object.entries(profileData.socialLinks).map(([platform, url]) => (
                  <a 
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-brand-primary hover:text-white transition-colors duration-300"
                  >
                    <span className="capitalize text-sm">{platform.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <form onSubmit={handleContactFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-primary hover:bg-brand-primary/90"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
