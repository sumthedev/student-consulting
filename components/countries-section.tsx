import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, MapPin, ArrowRight } from "lucide-react"

export default function CountriesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
              Study Destinations
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Popular Study Destinations
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore top educational destinations around the world with world-class universities and diverse cultures.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {countries.map((country, index) => (
            <Card key={index} className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={country.image || "/images/placeholder.jpg"}
                  alt={country.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-medium">
                  <Globe className="h-4 w-4 text-blue-600" />
                  <span>{country.name}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{country.name}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {country.universities.map((university, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700"
                    >
                      {university}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-gray-500">{country.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{country.universities.length} Universities</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Explore All Destinations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

const countries = [
  {
    name: "United States",
    image: "/assets/img/us-uni.jpg",
    universities: ["Harvard", "MIT", "Stanford"],
    description: "Home to many of the world's top-ranked universities with diverse program offerings.",
  },
  {
    name: "United Kingdom",
    image: "/assets/img/us.jpg",
    universities: ["Oxford", "Cambridge", "Imperial"],
    description: "Rich academic heritage with prestigious institutions and cutting-edge research opportunities.",
  },
  {
    name: "Canada",
    image: "/assets/img/canada.jpg",
    universities: ["Toronto", "McGill", "UBC"],
    description: "Known for high-quality education, affordable tuition, and post-graduation work opportunities.",
  },
  {
    name: "Australia",
    image: "/assets/img/aus.jpg",
    universities: ["Melbourne", "Sydney", "ANU"],
    description: "Excellent education system with a focus on research and innovation in a multicultural environment.",
  },
  {
    name: "Germany",
    image: "/assets/img/germany.jpg",
    universities: ["TU Munich", "Heidelberg", "Berlin"],
    description: "Tuition-free education at public universities with strong emphasis on engineering and sciences.",
  },
  {
    name: "Singapore",
    image: "/assets/img/singa.jpg",
    universities: ["NUS", "NTU", "SMU"],
    description: "Asia's education hub with world-class universities and strong connections to global industries.",
  },
]
