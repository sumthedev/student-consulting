"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export default function ConsultationForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    studyLevel: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          phone: "",
          country: "",
          studyLevel: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Get Started</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Book Your Free Consultation
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Take the first step towards your international education journey. Schedule a personalized consultation
                with our experts.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Personalized Guidance</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Get expert advice tailored to your academic profile and career goals.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Scholarship Assessment</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Discover scholarship opportunities that match your profile and aspirations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">University Recommendations</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Get a curated list of universities and programs that align with your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="mx-auto w-full max-w-sm space-y-6 rounded-lg border bg-card p-6 shadow-lg">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Thank You!</h3>
                  <p className="text-gray-500">
                    Your consultation request has been submitted. We will contact you within 24 hours to schedule your
                    session.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Personal Information</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="country" className="text-sm font-medium leading-none">
                        Preferred Study Destination
                      </label>
                      <Select value={formState.country} onValueChange={(value) => handleSelectChange("country", value)}>
                        <SelectTrigger id="country">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="australia">Australia</SelectItem>
                          <SelectItem value="germany">Germany</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="studyLevel" className="text-sm font-medium leading-none">
                        Study Level
                      </label>
                      <Select
                        value={formState.studyLevel}
                        onValueChange={(value) => handleSelectChange("studyLevel", value)}
                      >
                        <SelectTrigger id="studyLevel">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bachelors">Bachelors Degree</SelectItem>
                          <SelectItem value="masters">Masters Degree</SelectItem>
                          <SelectItem value="phd">PhD / Doctoral</SelectItem>
                          <SelectItem value="diploma">Diploma / Certificate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Your Query
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        className="min-h-[100px] w-full"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Book Consultation"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
