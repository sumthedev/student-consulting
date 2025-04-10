import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, GraduationCap, Globe, Award, BookOpen, Users, ArrowRight, MapPin } from "lucide-react"
import CountriesSection from "@/components/countries-section"
import ProcessSteps from "@/components/process-steps"
import TestimonialSlider from "@/components/testimonial-slider"
import FAQAccordion from "@/components/faq-accordion"
import StatsCounter from "@/components/stats-counter"
import ConsultationForm from "@/components/consultation-form"
import SiteHeader from "@/components/site-header"
import AnimatedSection from "@/components/animated-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <AnimatedSection animation="slide-right" className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Your Journey to Global Education Starts Here
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Expert guidance for international scholarships and admissions. Transform your academic dreams into
                  reality.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Explore Scholarships
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>98% Success Rate</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>5000+ Students Placed</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span>100+ Universities</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={300} className="flex items-center justify-center">
              <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px]">
                <Image
                  src="/assets/img/hero.png"
                  alt="Students celebrating graduation"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg animate-slide-up">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Success Rate</p>
                      <p className="text-2xl font-bold text-blue-600">98%</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg animate-slide-down">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Globe className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Countries</p>
                      <p className="text-2xl font-bold text-green-600">25+</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Services Section */}
      <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection
            animation="fade-in"
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Study Abroad Solutions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We provide end-to-end support for your international education journey, from university selection to
                visa approval.
              </p>
            </div>
          </AnimatedSection>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                animation="slide-up"
                delay={index * 100}
                className="group relative overflow-hidden transition-all hover:shadow-lg"
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">{service.description}</p>
                    <Link
                      href="#"
                      className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection
            animation="fade-in"
            delay={600}
            className="flex justify-center flex-col sm:flex-row items-start gap-4"
          >
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Contact Sales
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Tour the Platform
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSteps />

      {/* Countries Section */}
      <div id="destinations">
        <CountriesSection />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialSlider />
      </div>

      {/* Scholarship Section */}
      <section id="scholarships" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection
            animation="fade-in"
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Scholarships</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Find Your Perfect Scholarship</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We help you discover and apply for scholarships that match your academic profile and career aspirations.
              </p>
            </div>
          </AnimatedSection>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {scholarships.map((scholarship, index) => (
              <AnimatedSection
                key={index}
                animation="slide-up"
                delay={index * 150}
                className="group overflow-hidden transition-all hover:shadow-lg"
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-2">
                      <Award className="h-5 w-5 text-yellow-500" />
                      <span className="text-sm font-medium text-yellow-500">{scholarship.type}</span>
                    </div>
                    <h3 className="text-xl font-bold">{scholarship.name}</h3>
                    <div className="mt-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">{scholarship.country}</span>
                    </div>
                    <p className="mt-4 text-gray-500">{scholarship.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="font-bold text-blue-600">{scholarship.coverage}</span>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection animation="fade-in" delay={500} className="flex justify-center mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Browse All Scholarships
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Consultation Form Section */}
      <div id="contact">
        <ConsultationForm />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <FAQAccordion />
      </div>

      {/* CTA Section */}
      <AnimatedSection animation="fade-in" className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Begin Your Global Education Journey?
              </h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step towards your international academic success. Our experts are ready to guide you.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule a Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-blue-600 border-white hover:bg-blue-700">
                Explore Scholarships
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="w-full py-12 md:py-16 lg:py-20 bg-gray-900 text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-6 w-6 text-blue-500" />
                <span className="text-xl font-bold text-white">EduConsult</span>
              </div>
              <p className="text-sm text-gray-400">
                Your trusted partner for international education and scholarship guidance.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    University Admissions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Scholarship Applications
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Visa Guidance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Test Preparation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Career Counseling
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Study Destinations</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    United States
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    United Kingdom
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Canada
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Australia
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Germany
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 text-gray-400"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span className="text-gray-400">123 Education Street, Academic City, 10001</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span className="text-gray-400">info@educonsult.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
              </ul>
              <form className="mt-4 space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe to Newsletter</Button>
              </form>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} EduConsult. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const services = [
  {
    title: "University Admissions",
    description: "Expert guidance on university selection, application preparation, and admission requirements.",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    title: "Scholarship Applications",
    description: "Identify and apply for scholarships that match your academic profile and career goals.",
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: "Visa Guidance",
    description: "Complete support for student visa applications, documentation, and interview preparation.",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: "Test Preparation",
    description: "Specialized coaching for IELTS, TOEFL, GRE, GMAT, and other standardized tests.",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    title: "Career Counseling",
    description: "Personalized guidance to align your education with your long-term career objectives.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Post-Admission Support",
    description: "Assistance with accommodation, travel arrangements, and pre-departure orientation.",
    icon: <CheckCircle className="h-6 w-6" />,
  },
]

const scholarships = [
  {
    name: "Global Excellence Scholarship",
    type: "Full Scholarship",
    country: "United States",
    description: "Merit-based scholarship covering tuition, accommodation, and living expenses.",
    coverage: "100% Coverage",
  },
  {
    name: "Commonwealth Scholarship",
    type: "Partial Scholarship",
    country: "United Kingdom",
    description: "For outstanding students from Commonwealth countries pursuing master's degrees.",
    coverage: "Tuition + Stipend",
  },
  {
    name: "Maple Leaf Scholarship",
    type: "Tuition Waiver",
    country: "Canada",
    description: "For international students with exceptional academic achievements.",
    coverage: "Tuition Waiver",
  },
]
