
import React, { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { experience, certifications } from '@/data/portfolioData';
import { ChevronDown } from 'lucide-react';

const Experience = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);
  
  const toggleExperience = (company: string) => {
    setExpandedExperience(expandedExperience === company ? null : company);
  };
  
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div 
        className="section-container"
        ref={elementRef as React.RefObject<HTMLDivElement>}
      >
        <div className={cn(
          'scroll-animation',
          isVisible && 'visible'
        )}>
          <h2 className="section-title">Professional Experience</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Work History</h3>
              
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div 
                    key={`${job.company}-${index}`}
                    className="card overflow-hidden"
                  >
                    <div 
                      className="p-6 cursor-pointer flex justify-between items-center"
                      onClick={() => toggleExperience(job.company)}
                    >
                      <div>
                        <h4 className="font-bold text-lg text-gray-800">{job.position}</h4>
                        <p className="text-brand-primary">{job.company}</p>
                        <p className="text-sm text-gray-500">{job.duration}</p>
                      </div>
                      <ChevronDown 
                        className={cn(
                          'h-5 w-5 text-gray-500 transition-transform duration-300',
                          expandedExperience === job.company ? 'transform rotate-180' : ''
                        )}
                      />
                    </div>
                    
                    <div className={cn(
                      'overflow-hidden transition-all duration-300',
                      expandedExperience === job.company ? 'max-h-96' : 'max-h-0'
                    )}>
                      <div className="p-6 pt-0 border-t border-gray-100">
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          {job.description.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>
                        
                        <div className="mt-4 flex flex-wrap gap-2">
                          {job.skills.map(skill => (
                            <span 
                              key={`${job.company}-${skill}`}
                              className="bg-brand-primary/10 text-brand-primary text-xs px-2 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Certifications & Workshops</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={`${cert.name}-${index}`}
                    className="card p-6 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h4 className="font-bold text-gray-800">{cert.name}</h4>
                    <p className="text-sm text-brand-primary">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
                    
                    {cert.skills && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {cert.skills.map(skill => (
                          <span 
                            key={`${cert.name}-${skill}`}
                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {cert.link && (
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-sm text-brand-primary hover:underline"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
