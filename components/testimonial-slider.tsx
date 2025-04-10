"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Success Stories</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Students Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from students who achieved their academic dreams with our guidance and support.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="overflow-hidden border-none shadow-lg">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-[2fr_3fr]">
                          <div className="relative h-60 w-full md:h-full">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col justify-center p-6 md:p-8">
                            <div className="mb-4 text-blue-600">
                              <Quote className="h-8 w-8" />
                            </div>
                            <p className="mb-6 italic text-gray-700">{testimonial.quote}</p>
                            <div>
                              <h4 className="text-lg font-bold">{testimonial.name}</h4>
                              <p className="text-sm text-gray-500">{testimonial.program}</p>
                              <div className="mt-2 flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prev}
              className="absolute -left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous</span>
            </button>
            <button
              onClick={next}
              className="absolute -right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next</span>
            </button>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full ${index === current ? "bg-blue-600" : "bg-gray-300"}`}
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: "Sarah Johnson",
    program: "MBA, Harvard University",
    quote:
      "EduConsult helped me secure a full scholarship to my dream business school. Their guidance throughout the application process was invaluable.",
      image: "/assets/img/sarah.png",
    rating: 5,
  },
  {
    name: "David Chen",
    program: "Computer Science, Stanford University",
    quote:
      "I couldn't have navigated the complex application process without EduConsult. They helped me highlight my strengths and secure admission to a top program.",
      image: "/assets/img/john.jpg",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    program: "Medicine, University of Toronto",
    quote:
      "From test preparation to visa guidance, EduConsult provided comprehensive support that made my dream of studying medicine abroad a reality.",
      image: "/assets/img/priya.jpg",
    rating: 5,
  },
  {
    name: "Mohammed Al-Farsi",
    program: "Engineering, Imperial College London",
    quote:
      "The personalized attention and expert advice from EduConsult consultants helped me secure admission to a prestigious engineering program with a partial scholarship.",
      image: "/assets/img/muhammad.jpg",
    rating: 4,
  },
]
