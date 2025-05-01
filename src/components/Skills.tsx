
import React, { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { skills, SkillType } from '@/data/portfolioData';

// Categories of skills
const categories = Array.from(new Set(skills.map(skill => skill.category)));

const Skills = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
    
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div 
        className="section-container"
        ref={elementRef as React.RefObject<HTMLDivElement>}
      >
        <div className={cn(
          'scroll-animation',
          isVisible && 'visible'
        )}>
          <h2 className="section-title">Skills & Tools</h2>
          
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              className={cn(
                'skill-tag',
                activeCategory === 'all' ? 'skill-tag-active' : 'skill-tag-inactive'
              )}
              onClick={() => setActiveCategory('all')}
            >
              All Skills
            </button>
            
            {categories.map(category => (
              <button
                key={category}
                className={cn(
                  'skill-tag',
                  activeCategory === category ? 'skill-tag-active' : 'skill-tag-inactive'
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className={cn(
                  'card p-6 cursor-pointer transition-all duration-300',
                  activeSkill === skill.name ? 'ring-2 ring-brand-primary' : '',
                  activeSkill && activeSkill !== skill.name ? 'opacity-50' : ''
                )}
                onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
              >
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                  <p className="text-sm text-gray-500">{skill.category}</p>
                </div>
                
                {/* Circular progress indicator */}
                <div className="progress-circle w-20 h-20 mx-auto">
                  <svg width="80" height="80" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#e6e6e6"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke={skill.proficiency >= 80 ? '#14B8A6' : '#3B82F6'}
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (251.2 * skill.proficiency) / 100}
                      strokeLinecap="round"
                      style={{
                        transition: 'stroke-dashoffset 1s ease-in-out',
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold">{skill.proficiency}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
