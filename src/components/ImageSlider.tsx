
("use client");

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./styles/ImageSlider.css";
import "./styles/ImageSlider_2.css";

// interface Slide {
//   id: number;
//   image: string;
//   alt: string;
// }
interface Slide {
  id: number;
  alt: string;
}

interface ImageSliderProps {
  slides: Slide[];
  autoplay?: boolean;
  autoplayDelay?: number;
}

export function ImageSlider({
  slides,
  autoplay = true,
  autoplayDelay = 5000,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Clone les slides pour l'effet infini
  const extendedSlides = [...slides, slides[0]];

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev === slides.length) {
        // Désactive la transition pour le saut invisible
        setTransitionEnabled(false);
        return 0;
      }
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        // Désactive la transition pour le saut invisible
        setTransitionEnabled(false);
        return slides.length;
      }
      return prev - 1;
    });
  };

  useEffect(() => {
    if (!transitionEnabled) {
      // Réactive la transition après le saut
      const timer = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [transitionEnabled]);

  // const goToSlide = (index: number) => {
  //   setCurrentIndex(index);
  // };

  return (
    <div className="slider-pro">
      <div className="sp-slides">
        <div
          ref={sliderRef}
          className="slides-container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: transitionEnabled
              ? "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              : "none",
          }}
        >
          {/* {extendedSlides.map((slide, index) => (
            <div key={`${slide.id}-${index}`} className="sp-slide">
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.alt}
                className="sp-image"
                loading={index > 1 ? "lazy" : "eager"}
              />
            </div>
          ))} */}
          {extendedSlides.map((slide, index) => (
            <div 
              key={`${slide.id}-${index}`} 
              className={`sp-slide slide-${slide.id}`}
              role="img"
              aria-label={slide.alt}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="nav-button nav-button-left"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} strokeWidth={3} />
      </button>

      <button
        onClick={handleNext}
        className="nav-button nav-button-right"
        aria-label="Next slide"
      >
        <ChevronRight size={32} strokeWidth={3} />
      </button>

      {/* <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`indicator ${
              index === currentIndex % slides.length ? "indicator-active" : ""
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
}
