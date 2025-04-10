import { CheckCircle } from "lucide-react"

export default function ProcessSteps() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">Our Process</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How We Help You Succeed</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our proven step-by-step approach ensures your international education journey is smooth and successful.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-start pb-12 last:pb-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                {index + 1}
              </div>
              <div
                className={`absolute left-5 top-10 h-full w-px bg-blue-200 ${index === steps.length - 1 ? "hidden" : ""}`}
              />
              <div className="ml-6">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-gray-500">{step.description}</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    title: "Initial Consultation",
    description: "We begin with a comprehensive assessment of your academic background, career goals, and preferences.",
    features: ["Profile Evaluation", "Goal Setting", "Country & Program Recommendations", "Financial Planning"],
  },
  {
    title: "University Selection",
    description:
      "Based on your profile, we help you select universities that align with your academic and career goals.",
    features: [
      "Shortlisting Universities",
      "Program Comparison",
      "Admission Requirements Analysis",
      "Scholarship Opportunities",
    ],
  },
  {
    title: "Application Preparation",
    description: "We guide you through the entire application process, ensuring all requirements are met.",
    features: ["Document Preparation", "Statement of Purpose", "Recommendation Letters", "Resume Enhancement"],
  },
  {
    title: "Visa Processing",
    description: "Our experts provide comprehensive support for your student visa application.",
    features: ["Visa Documentation", "Financial Statements", "Interview Preparation", "Legal Compliance"],
  },
  {
    title: "Pre-Departure Guidance",
    description: "We prepare you for your journey abroad with essential information and support.",
    features: ["Accommodation Assistance", "Travel Arrangements", "Cultural Orientation", "Arrival Support"],
  },
]
