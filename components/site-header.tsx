"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Menu, X } from "lucide-react"

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <GraduationCap className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold">EduConsult</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="text-sm font-medium transition-colors hover:text-blue-600">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Log In
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Free Consultation</Button>
        </div>
        <button
          className="flex md:hidden items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white p-4 md:hidden animate-fade-in">
          <nav className="flex flex-col gap-4 py-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-lg font-medium py-2 transition-colors hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 mt-4">
            <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
              Log In
            </Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Free Consultation</Button>
          </div>
        </div>
      )}
    </header>
  )
}

const navItems = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "Scholarships", href: "#scholarships" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]
