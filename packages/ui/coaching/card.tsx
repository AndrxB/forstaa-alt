import React, { useEffect, useRef } from 'react';
import './coaching.css'

import { H3 } from '../typography';
import { cn } from '../utils';
import text from '@/packages/json/coaching.json'

const AutoScrollCards = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    // Define scroll speed
    const scrollSpeed = 0.1; // Adjust this value for faster/slower scroll speed

    // Auto-scroll the container
    const interval = setInterval(() => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0; // Reset to the beginning when halfway
      } else {
        container.scrollLeft += scrollSpeed; // Scroll by 1px
      }
    }, 20); // Scroll every 20ms (controls speed)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="scroll-container rounded-2xl" ref={scrollContainer}>
      <div className="scroll-content">
        {/* First set of cards */}
        <Card title={text.coaching.content.list.consultation.title} className="card">
          {text.coaching.content.list.consultation.content}
        </Card>
        <Card title={text.coaching.content.list.custom_lessons.title} className="card">
          {text.coaching.content.list.custom_lessons.content}
        </Card>
        <Card title={text.coaching.content.list.flexible_sessions.title} className="card">
          {text.coaching.content.list.flexible_sessions.content}
        </Card>
        <Card title={text.coaching.content.list.adjustments.title} className="card">
          {text.coaching.content.list.adjustments.content}
        </Card>

        {/* Duplicate the cards for the infinite effect */}
        <Card title={text.coaching.content.list.consultation.title} className="card">
          {text.coaching.content.list.consultation.content}
        </Card>
        <Card title={text.coaching.content.list.custom_lessons.title} className="card">
          {text.coaching.content.list.custom_lessons.content}
        </Card>
        <Card title={text.coaching.content.list.flexible_sessions.title} className="card">
          {text.coaching.content.list.flexible_sessions.content}
        </Card>
        <Card title={text.coaching.content.list.adjustments.title} className="card">
          {text.coaching.content.list.adjustments.content}
        </Card>
      </div>
    </div>
  );
};

type CardProps = {
    title?: string;
    children?: React.ReactNode;
    className?: string;
    shadow?: any
}

export const Card = ({children, className, title, shadow} : CardProps) => {
    return(
        <div 
          className={cn(
            "p-10 rounded-2xl flex flex-col gap-5", 
            className,
            shadow && "shadow-2xl"
            )} 
          id="foreground"
        >
            {title ? <H3>{title}</H3> : null}
            {children}
        </div>
    )
}

export default AutoScrollCards;
