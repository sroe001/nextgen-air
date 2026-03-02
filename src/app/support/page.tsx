import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Student Support Services | NextGen AIR Academy",
  description: "Holistic wrap-around support services including mental health, housing assistance, and transportation. We ensure every student reaches their potential with 80% completion rate goal.",
  openGraph: {
    title: "Student Support Services | NextGen AIR Academy",
    description: "Holistic wrap-around support services for student success.",
  },
};

const supportServices = [
  {
    title: "Mental Health Services",
    description: "Specialized referrals to address trauma and build resilience. We understand that our students face unique challenges and provide the resources needed to overcome them.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "from-purple-600 to-indigo-600",
  },
  {
    title: "Housing Assistance",
    description: "Ensuring stable environments to allow for focused study. We connect students with safe, affordable housing options to remove this barrier to success.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: "from-jade to-emerald-600",
  },
  {
    title: "Transportation Solutions",
    description: "Removing the physical barriers to daily lab attendance. We provide transportation assistance to ensure every student can access our facility.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    color: "from-cobalt to-tang",
  },
];

const metrics = [
  { value: "100+", label: "Minimum Annual Enrollment", description: "Students per year" },
  { value: "80%", label: "Target Completion Rate", description: "Program graduation" },
  { value: "70%", label: "Job Placement Rate", description: "Within 6 months of graduation" },
  { value: "70", label: "Internship Placements", description: "Per cohort with industry partners" },
];

const targetPopulations = [
  "Foster Youth",
  "High School Dropouts",
  "Veterans",
  "Displaced Workers",
];

export default function SupportPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-rich-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cobalt/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-tang/20 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="text-white">Student </span>
              <span className="gradient-text">Support</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Holistic wrap-around services to ensure every student reaches the finish line.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Target Populations */}
      <section className="py-16 bg-space-cadet">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8">
              <p className="text-gray-400 text-lg">
                We serve <span className="text-white font-semibold">target populations</span> including:
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {targetPopulations.map((pop) => (
                <span 
                  key={pop} 
                  className="px-4 py-2 rounded-full bg-jade/20 border border-jade/30 text-jade font-medium"
                >
                  {pop}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Wrap-Around Support */}
      <section className="py-24 bg-rich-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Wrap-Around <span className="gradient-text">Support Services</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Student success is fueled by a combination of career coaching and referral-based services.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className="glass rounded-2xl p-8 card-hover h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-space-cadet">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="glass rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                The <span className="gradient-text">So What?</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                By providing holistic support, we ensure that personal instability does not preclude professional 
                success. We directly drive our <span className="text-jade font-semibold">80% program completion goal</span> 
                by addressing the fundamental needs of our students.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                This approach not only improves graduation rates but also drives a <span className="text-crayola font-semibold">
                Government Fiscal Impact</span> by reducing long-term dependence on social assistance.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Metrics Dashboard */}
      <section className="py-24 bg-rich-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Accountability & <span className="gradient-text">Impact Metrics</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                We're committed to measurable outcomes that demonstrate real impact on students' lives.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <ScrollReveal key={metric.label} delay={index * 100}>
                <div className="glass rounded-2xl p-6 text-center card-hover">
                  <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">{metric.value}</div>
                  <div className="text-white font-semibold mb-1">{metric.label}</div>
                  <div className="text-gray-500 text-sm">{metric.description}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Teaser */}
      <section className="py-24 bg-space-cadet">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="glass rounded-2xl p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-jade to-emerald-600 text-white mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">From Dependence to Independence</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our target is a <span className="text-jade font-semibold">70% placement rate</span> that moves families 
                from social dependence to fiscal independence. Every graduate represents a life transformed and a 
                community strengthened.
              </p>
              <p className="text-gray-400">
                Join us in creating the next generation of AI and robotics professionals who will revitalize the Miami Valley economy.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-rich-black relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              We're here to support you every step of the way on your journey to economic sovereignty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-cobalt hover:bg-tang text-white font-semibold rounded-xl transition-all duration-300 btn-glow"
              >
                Apply Now
              </Link>
              <Link
                href="/curriculum"
                className="px-8 py-4 border-2 border-french-sky text-french-sky hover:bg-french-sky hover:text-rich-black font-semibold rounded-xl transition-all duration-300"
              >
                View Curriculum
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
