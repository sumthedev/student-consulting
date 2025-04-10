"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-in" | "slide-up" | "slide-down" | "slide-left" | "slide-right"
  delay?: number
  threshold?: number
  once?: boolean
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && sectionRef.current) {
            observer.unobserve(sectionRef.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [threshold, once])

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0"

    switch (animation) {
      case "fade-in":
        return "animate-section-fade-in"
      case "slide-up":
        return "animate-section-slide-up"
      case "slide-down":
        return "animate-section-slide-down"
      case "slide-left":
        return "animate-section-slide-left"
      case "slide-right":
        return "animate-section-slide-right"
      default:
        return "animate-section-fade-in"
    }
  }

  return (
    <div ref={sectionRef} className={`${className} ${getAnimationClass()}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
