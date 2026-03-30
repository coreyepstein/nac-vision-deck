"use client";

interface Section {
  title: string;
  startIndex: number;
}

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  sections: Section[];
  onGoTo: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Navigation({
  currentSlide,
  totalSlides,
  sections,
  onGoTo,
  onPrev,
  onNext,
}: NavigationProps) {
  const sectionStartIndices = new Set(sections.map((s) => s.startIndex));

  let currentSectionTitle = sections[0]?.title ?? "";
  for (const section of sections) {
    if (currentSlide >= section.startIndex) {
      currentSectionTitle = section.title;
    }
  }

  const formattedCurrent = String(currentSlide + 1).padStart(2, "0");
  const formattedTotal = String(totalSlides).padStart(2, "0");
  const progressPercent =
    totalSlides > 1 ? (currentSlide / (totalSlides - 1)) * 100 : 0;

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex flex-col border-t border-[#ffffff15] bg-black/95 backdrop-blur-sm"
      aria-label="Slide navigation"
    >
      {/* Mobile progress bar */}
      <div className="h-0.5 w-full bg-[#ffffff10] sm:hidden">
        <div
          className="h-full bg-red transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="flex items-center gap-3 px-4 py-2.5 sm:gap-4 sm:px-8 sm:py-3">
        {/* Section label */}
        <span className="hidden min-w-[100px] font-mono text-[10px] uppercase tracking-[0.35em] text-[#ffffff50] sm:block">
          {currentSectionTitle}
        </span>
        <span className="block max-w-[6rem] truncate font-mono text-[9px] uppercase tracking-[0.25em] text-[#ffffff50] sm:hidden">
          {currentSectionTitle}
        </span>

        {/* Desktop progress dots */}
        <div className="hidden flex-1 items-center justify-center gap-1 sm:flex">
          {Array.from({ length: totalSlides }, (_, i) => {
            const isSectionStart = sectionStartIndices.has(i);
            return (
              <button
                key={i}
                onClick={() => onGoTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-200 ${
                  i === currentSlide
                    ? "h-2 w-2 rounded-full bg-red"
                    : isSectionStart
                      ? "h-2 w-2 rounded-full bg-navy hover:bg-red/60"
                      : "h-1.5 w-1.5 rounded-full bg-[#ffffff20] hover:bg-[#ffffff50]"
                }`}
              />
            );
          })}
        </div>

        {/* Mobile spacer */}
        <div className="flex-1 sm:hidden" />

        {/* Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onPrev}
            disabled={currentSlide === 0}
            aria-label="Previous slide"
            className="p-1 text-[#ffffff60] transition-colors hover:text-offwhite disabled:opacity-30"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 3L5 8L10 13" />
            </svg>
          </button>

          <span className="min-w-[3.5rem] text-center font-mono text-[clamp(0.625rem,1.5vw,0.75rem)] text-[#ffffff60] sm:min-w-[4rem]">
            {formattedCurrent} / {formattedTotal}
          </span>

          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            aria-label="Next slide"
            className="p-1 text-[#ffffff60] transition-colors hover:text-offwhite disabled:opacity-30"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 3L11 8L6 13" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
