import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Innovation Hub | NextGen AIR Academy Facility",
  description: "Explore our state-of-the-art Innovation Hub facility featuring 50 computing stations, production hardware, server architecture, and defense-adjacent security standards.",
  openGraph: {
    title: "Innovation Hub | NextGen AIR Academy Facility",
    description: "Explore our state-of-the-art Innovation Hub facility.",
  },
};

const infrastructure = [
  {
    title: "Production Hardware",
    description: "High-performance 3D printers and specialized robotics kits for project-based portfolios.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Computing Stations",
    description: "50 dedicated computer station desks and chairs equipped with antivirus for 20 PCs to mirror secure corporate environments.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Server Architecture",
    description: "High-capacity servers for running local AI models and managing data orchestrations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: "Instructional Technology",
    description: "Overhead projectors, two teacher desks, and a comprehensive Virtual Learning Environment (VLE).",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Facility Security",
    description: "Professionally installed security systems and enterprise-grade network cabling.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const specs = [
  { label: "Facility Size", value: "Up to 10,000 sq. ft." },
  { label: "Computing Stations", value: "50 desks with 20 PCs" },
  { label: "Annual Consumables Budget", value: "$2,500" },
  { label: "Security Level", value: "Defense-adjacent manufacturing standard" },
];

export default function HubPage() {
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
              <span className="text-white">Innovation </span>
              <span className="gradient-text">Hub</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Where code meets hardware — transforming students from "coders" into "systems integrators."
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-20 bg-space-cadet">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="glass rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">The Physical Foundation</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The transition from digital theory to systems mastery occurs in the lab. By integrating 
                physical hardware — such as 3D printers and robotics kits — into the curriculum, we 
                transform the student from a "coder" into a "systems integrator."
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                This hands-on environment allows students to witness the physical consequences of their 
                AI workflows, creating the tangible evidence needed for professional portfolios.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Infrastructure Grid */}
      <section className="py-24 bg-rich-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Lab <span className="gradient-text">Infrastructure</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                The facility mirrors a professional-grade SME (Small and Medium Enterprise) environment.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructure.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="glass rounded-2xl p-6 card-hover h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cobalt to-tang flex items-center justify-center text-white mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 bg-space-cadet">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Technical <span className="gradient-text">Specifications</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <div className="glass rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {specs.map((spec, index) => (
                  <div key={index} className="p-6 border-b border-french-sky/10 md:border-r md:border-b-0 border-french-sky/10">
                    <span className="text-gray-500 text-sm uppercase tracking-wider block mb-2">{spec.label}</span>
                    <span className="text-white text-xl font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industry Liaison Role */}
      <section className="py-24 bg-rich-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="glass rounded-2xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-jade to-emerald-600 flex items-center justify-center text-white mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Strategic Oversight</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-jade mb-4">Role of the Industry Liaison</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                The Industry Liaison (CTO/Systems Architect) serves as the primary risk-mitigation agent 
                for the Academy's physical assets. By providing technical oversight, the Liaison ensures 
                that the <span className="text-white font-semibold">$2,500 annual consumables budget</span> 
                is not wasted on non-standard materials, but is instead used for industry-grade filaments 
                and robotics components.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Furthermore, the Liaison validates that the lab's IT infrastructure — including servers 
                and network cabling — reflects the security standards of a defense-adjacent manufacturing 
                environment, ensuring the $6.2M investment remains technologically relevant.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-space-cadet relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See the Facility in Action
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Tour our Innovation Hub and see how we prepare students for real-world engineering challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-cobalt hover:bg-tang text-white font-semibold rounded-xl transition-all duration-300 btn-glow"
              >
                Schedule a Tour
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
