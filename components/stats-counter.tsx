"use client"

import { useEffect, useState, useRef } from "react"
import { GraduationCap, Award, Globe, Building } from "lucide-react"

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-12 bg-blue-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold md:text-4xl">
                {isVisible ? <Counter end={stat.value} duration={2000} /> : 0}
                {stat.suffix}
              </div>
              <p className="mt-1 text-sm text-blue-100 md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ end, duration }: { end: number; duration: number }) {
  const [count, setCount] = useState(0)
  const stepTime = Math.floor(duration / end)

  useEffect(() => {
    if (count < end) {
      const timer = setTimeout(() => {
        setCount((prev) => {
          const next = prev + 1
          return next <= end ? next : end
        })
      }, stepTime)
      return () => clearTimeout(timer)
    }
  }, [count, end, stepTime])

  return <>{count}</>
}

const stats = [
  {
    value: 5000,
    suffix: "+",
    label: "Students Placed",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    value: 98,
    suffix: "%",
    label: "Success Rate",
    icon: <Award className="h-6 w-6" />,
  },
  {
    value: 25,
    suffix: "+",
    label: "Countries",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    value: 100,
    suffix: "+",
    label: "Partner Universities",
    icon: <Building className="h-6 w-6" />,
  },
]
