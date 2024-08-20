import React, { useState, useEffect } from 'react';
import './TypeWriter.css';

const TypeWriter = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <div className="typewriter">
      <p>{displayedText}</p>
    </div>
  );
};

export default TypeWriter;
