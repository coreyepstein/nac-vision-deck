"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Slide } from "./Slide";

export interface DeckSection {
  title: string;
  slides: { content: ReactNode; variant: "light" | "dark" }[];
}

interface DeckProps {
  sections: DeckSection[];
}

export function Deck({ sections }: DeckProps) {
  const { allSlides, sectionMeta } = useMemo(() => {
    const slides: { content: ReactNode; variant: "light" | "dark" }[] = [];
    const meta: { title: string; startIndex: number }[] = [];

    for (const section of sections) {
      meta.push({ title: section.title, startIndex: slides.length });
      for (const slide of section.slides) {
        slides.push(slide);
      }
    }

    return { allSlides: slides, sectionMeta: meta };
  }, [sections]);

  const totalSlides = allSlides.length;

  const getInitialSlide = (): number => {
    if (typeof window === "undefined") return 0;
    const hash = window.location.hash;
    const match = hash.match(/^#slide-(\d+)$/);
    if (match) {
      const index = parseInt(match[1], 10) - 1;
      if (index >= 0 && index < totalSlides) return index;
    }
    return 0;
  };

  const [currentSlide, setCurrentSlide] = useState(getInitialSlide);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, totalSlides - 1));
      setCurrentSlide(clamped);
      window.history.replaceState(null, "", `#slide-${clamped + 1}`);
    },
    [totalSlides]
  );

  const next = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const prev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
          e.preventDefault();
          prev();
          break;
        case "Home":
          e.preventDefault();
          goTo(0);
          break;
        case "End":
          e.preventDefault();
          goTo(totalSlides - 1);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [next, prev, goTo, totalSlides]);

  // Hash change listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#slide-(\d+)$/);
      if (match) {
        const index = parseInt(match[1], 10) - 1;
        if (index >= 0 && index < totalSlides) setCurrentSlide(index);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [totalSlides]);

  // Sync hash on mount
  useEffect(() => {
    window.history.replaceState(null, "", `#slide-${currentSlide + 1}`);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Touch swipe
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null || touchStartY.current === null) return;

      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      const deltaY = e.changedTouches[0].clientY - touchStartY.current;

      if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) next();
        else prev();
      }

      touchStartX.current = null;
      touchStartY.current = null;
    },
    [next, prev]
  );

  // Click to advance
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("a") || target.closest("nav")) return;

      if (e.clientX > window.innerWidth / 2) next();
      else prev();
    },
    [next, prev]
  );

  return (
    <div
      className="relative h-dvh w-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      {allSlides.map((slide, index) => (
        <Slide key={index} isActive={index === currentSlide} variant={slide.variant}>
          {slide.content}
        </Slide>
      ))}

      <Navigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        sections={sectionMeta}
        onGoTo={goTo}
        onPrev={prev}
        onNext={next}
      />
    </div>
  );
}
