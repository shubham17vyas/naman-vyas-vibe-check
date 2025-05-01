
import React, { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { projects, ProjectType, skills } from '@/data/portfolioData';
import { Button } from '@/components/ui/button';

// Extract all unique skills from projects
const projectSkills = Array.from(
  new Set(projects.flatMap(project => project.skills))
);

const Projects = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  
  // Filter projects based on selected skill
  const filteredProjects = activeSkill 
    ? projects.filter(project => project.skills.includes(activeSkill))
    : projects;
    
  const handleSkillClick = (skill: string) => {
    setActiveSkill(activeSkill === skill ? null : skill);
    setFlippedCard(null); // Reset flipped card when changing filter
  };
  
  const handleCardFlip = (projectId: string) => {
    setFlippedCard(flippedCard === projectId ? null : projectId);
  };
  
  return (
    <section id="projects" className="py-20 bg-white">
      <div 
        className="section-container"
        ref={elementRef as React.RefObject<HTMLDivElement>}
      >
        <div className={cn(
          'scroll-animation',
          isVisible && 'visible'
        )}>
          <h2 className="section-title">Academic Projects</h2>
          
          {/* Skills filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {projectSkills.map(skill => (
              <button
                key={skill}
                className={cn(
                  'skill-tag',
                  activeSkill === skill ? 'skill-tag-active' : 'skill-tag-inactive'
                )}
                onClick={() => handleSkillClick(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="h-80 perspective-1000 cursor-pointer"
                onClick={() => handleCardFlip(project.id)}
              >
                <div className={cn(
                  'card-flip h-full',
                  flippedCard === project.id ? 'rotate-y-180' : ''
                )}>
                  {/* Card Front */}
                  <div className="card-front card p-6 flex flex-col h-full">
                    <div 
                      className="w-full h-32 mb-4 bg-gray-200 rounded-md overflow-hidden"
                      style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 flex-grow">{project.description}</p>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.skills.map(skill => (
                        <span 
                          key={`${project.id}-${skill}`}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-4 text-sm text-brand-primary">
                      Click to see details
                    </div>
                  </div>
                  
                  {/* Card Back */}
                  <div className="card-back card p-6 flex flex-col h-full overflow-y-auto">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">{project.title}</h3>
                    
                    <div className="space-y-4 flex-grow">
                      <div>
                        <h4 className="text-sm font-bold text-brand-primary mb-1">Challenge</h4>
                        <p className="text-sm text-gray-600">{project.details.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-bold text-brand-primary mb-1">Solution</h4>
                        <p className="text-sm text-gray-600">{project.details.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-bold text-brand-primary mb-1">Outcome</h4>
                        <p className="text-sm text-gray-600">{project.details.outcome}</p>
                      </div>
                    </div>
                    
                    {project.links && (
                      <div className="mt-4 flex gap-2">
                        {project.links.github && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                              GitHub
                            </a>
                          </Button>
                        )}
                        {project.links.live && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.links.report && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.links.report} target="_blank" rel="noopener noreferrer">
                              Report
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                    
                    <div className="mt-4 text-sm text-brand-primary">
                      Click to flip back
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-10">
              <p className="text-lg text-gray-500">No projects match the selected filter.</p>
              <Button 
                variant="outline" 
                className="mt-4" 
                onClick={() => setActiveSkill(null)}
              >
                Clear Filter
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
