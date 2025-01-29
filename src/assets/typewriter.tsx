import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  loop?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100, loop = false }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  const characters = Array.from(text)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => `${prev}${characters[index] ?? ''}`);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (loop) {
      setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 1000); // Pause before restarting
    }
  }, [index, characters, speed, loop]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
