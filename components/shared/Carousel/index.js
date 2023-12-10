"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton, usePrevNextButtons } from "./buttons";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";

const EmblaCarousel = ({ slides, options, categories }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onButtonClick = useCallback((emblaApi) => {
    const { autoplay } = emblaApi.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onButtonClick);

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2 overflow-auto no-scrollbar">
          {categories.map((s) => (
            <button
              key={s}
              className="flex-shrink-0 text-sm md:text-base px-5 py-2 bg-white active:text-white active:bg-primary hover:bg-gray-200 rounded-full duration-200 transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
        <div className="hidden md:flex gap-x-2.5">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
            <ArrowLeft size="20" color="#2d2d2d" />
          </PrevButton>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}>
            <ArrowRight size="20" color="#2d2d2d" />
          </NextButton>
        </div>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-x-5">
          {slides.map((index) => (
            <div
              className="w-full md:w-96 h-96 flex-shrink-0 bg-white rounded-3xl"
              key={index}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
