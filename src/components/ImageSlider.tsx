"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
// import "./styles/slider-pro.min.css"
import "./styles/ImageSlider.css"

interface Slide {
  id: number
  image: string
  alt: string
}

interface ImageSliderProps {
  slides: Slide[]
  autoplay?: boolean
  autoplayDelay?: number
}

export function ImageSlider({ slides, autoplay = true, autoplayDelay = 5000 }: ImageSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, autoplayDelay)

    return () => clearInterval(interval)
  }, [autoplay, autoplayDelay, slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="slider-pro p_relative w_full h_535 overflow_hidden">
      <div className="sp-slides p_relative w_full h_full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`sp-slide p_absolute inset_0 transition_opacity duration_500 ${
              index === currentSlide ? "opacity_100" : "opacity_0"
            }`}
          >
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.alt}
              className="sp-image wfull hfull object_cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="p_absolute left_4 top_1_2 _transform _translate_y_1_2 bg_black bg_opacity_50 text_white p_2 rounded_full bg_opacity_75 transition_all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="p_absolute right_4 top_1_2 _transform _translate_y_1_2 bg_black bg_opacity-50 text_white p_2 rounded_full bg_opacity_75 transition_all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      {/* <div className="p_absolute bottom_4 left_1_2 _transform _translate_x_1_2 _flex space_x_2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w_3 h_3 rounded_full transition_all ${
              index === currentSlide ? "bg_white" : "bg_white bg_opacity_50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  )
}
