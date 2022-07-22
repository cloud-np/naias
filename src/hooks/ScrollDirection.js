import React from 'react'
import { useState, useRef, useEffect, useCallback } from 'react';

export const useScrollDirection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const prevScrollPosition = useRef(0);

  const handleScroll = useCallback(() => {
    prevScrollPosition.current = scrollPosition;
    const position = window.pageYOffset;
    setScrollPosition(position);
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    if (scrollPosition - prevScrollPosition.current > 0) {
      setIsScrollingUp(false);
      setIsScrollingDown(true);
    } else if (scrollPosition - prevScrollPosition.current < 0) {
      setIsScrollingDown(false);
      setIsScrollingUp(true);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, scrollPosition]);

  return [isScrollingDown, isScrollingUp];
};