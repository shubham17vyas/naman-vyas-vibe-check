
import { useState, useEffect, useRef } from 'react';

interface TypewriterOptions {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

export function useTypewriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
}: TypewriterOptions) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const typeNextCharacter = () => {
      if (isDeleting) {
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
          
          timeoutRef.current = setTimeout(typeNextCharacter, delayBetweenTexts);
          return;
        }
        
        setDisplayText(currentText.substring(0, displayText.length - 1));
        timeoutRef.current = setTimeout(typeNextCharacter, deletingSpeed);
      } else {
        if (displayText.length === currentText.length) {
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
            typeNextCharacter();
          }, delayBetweenTexts);
          return;
        }
        
        setDisplayText(currentText.substring(0, displayText.length + 1));
        timeoutRef.current = setTimeout(typeNextCharacter, typingSpeed);
      }
    };
    
    timeoutRef.current = setTimeout(typeNextCharacter, typingSpeed);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);
  
  return { displayText };
}
