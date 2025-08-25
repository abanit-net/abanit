import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function TypingAnimation({ 
  text, 
  className = "", 
  delay = 0,
  speed = 50 
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      
      const intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);

      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
