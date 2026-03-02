import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | NextGen AIR Academy - Ethical AI Education",
  description: "Learn about NextGen AIR Academy's mission to build the future of inclusive technology careers. Meet our leadership team and discover our Responsible AI framework.",
  openGraph: {
    title: "About Us | NextGen AIR Academy",
    description: "Building the future of inclusive technology careers through ethical AI education.",
  },
};

const boardMembers = [
  {
    role: "Board Chair",
    title: "Strategic Visionary",
    description: "Senior executive from the Dayton aerospace/manufacturing sector tasked with finalizing the lease for a facility of up to 10,000 sq. ft. and leading the "Founding Donors" campaign.",
  },
  {
    role: "Board Treasurer",
    title: "Fiscal Steward",
    description: "CPA responsible for establishing audit and grant compliance protocols to manage the $6.2M total funding request.",
  },
  {
    role: "Industry Liaison",
    title: "Technology Expert",
    description: "CTO-level architect from local industry (e.g., Wright-Patterson AFB partners) who validates that the AIR Curriculum meets real-world SME standards.",
  },
  {
    role: "Community Advocate",
    title: "Social Impact Leader",
    description: "Leader from the social service sector focused on the student pipeline for foster youth, high school dropouts, and veterans.",
  },
  {
    role: "Development Chair",
    title: "Resource Connector",
    description: "Professional fundraiser dedicated to securing private philanthropic support and launching "Impact Sponsor" initiatives.",
  },
];

const responsibleAIPillars = [
  {
    title: "Ethics",
    description: "Ensuring AI-enabled systems are designed for the holistic benefit of the Dayton community.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Safety",
    description: "Prioritizing reliable, predictable outcomes in every automated workflow.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Security",
    description: "Embedding rigorous data protection and antivirus standards into the technical curriculum.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description: "Utilizing \"explainable\" AI methods, such as chain-of-thought prompting, to eliminate \"black box\" risks in business applications.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

const year1Goals = [
  "Finalize the lease for facility (up to 10,000 sq. ft.)",
  "Launch "Founding Donors" capital campaign",
  "Establish audit and grant compliance protocols",
  "Complete industry validation of stacked credentials",
  "Secure initial $980,591 Year 1 funding",
];

export default function AboutPage() {
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
              <span className="text-white">About </span>
              <span className="gradient-text">NextGen AIR</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Building the future of inclusive technology careers through ethical AI education and workforce development.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-space-cadet">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="glass rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                NextGen AIR Academy is built on a vision where overlooked talent leads the AI-powered economy. 
                We bridge the critical chasm between regional skills shortages and untapped human potential through 
                equitable access to advanced digital integration.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our mission is to equip Dayton's most valuable resource with market-ready skills in AI-driven 
                systems integration, empowering individuals to secure high-demand careers while helping local 
                organizations modernize their technology with an ethical, human-centered approach.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Co-Founders Section */}
      <section className="py-24 bg-rich-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Meet Our <span className="gradient-text">Leadership</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Experienced leaders driving workforce transformation in the Miami Valley.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="glass rounded-2xl p-8 card-hover">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 mx-auto">
                  <img 
                    src="/steven-roe-sr-rocket-scientist.jpg" 
                    alt="Steven D. Roe, Sr."
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Steven D. Roe, Sr.</h3>
                <p className="text-jade font-semibold mb-4">Executive Director</p>
                <p className="text-gray-400 leading-relaxed">
                  Drawing on extensive experience in business strategy and workforce development, 
                  Steven has designed the Academy to serve as a scalable model for youth empowerment 
                  and industrial transformation across the Greater Miami Valley.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <div className="glass rounded-2xl p-8 card-hover">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-tang to-crayola flex items-center justify-center text-white text-3xl font-bold mb-6">
                  JR
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Jalyn Q. Roe</h3>
                <p className="text-jade font-semibold mb-4">Impact Sponsor Specialist</p>
                <p className="text-gray-400 leading-relaxed">
                  Leading strategic partnerships and sponsor relationships to connect students 
                  with industry opportunities. Jalyn bridges the gap between training and 
                  career placement through impactful sponsor engagements.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Responsible AI Framework */}
      <section className="py-24 bg-space-cadet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Ethical <span className="gradient-text">North Star</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                We believe that as technology modernizes, it must remain human-centered. 
                Our "Responsible AI" framework is "baked into" every lesson.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responsibleAIPillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 100}>
                <div className="glass rounded-2xl p-6 card-hover h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cobalt to-jade flex items-center justify-center text-white mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-24 bg-rich-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Board of <span className="gradient-text">Directors</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our Board is composed of senior leaders who translate social impact into technical requirements.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member, index) => (
              <ScrollReveal key={member.role} delay={index * 100}>
                <div className="glass rounded-2xl p-6 card-hover h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cobalt to-tang flex items-center justify-center text-white font-bold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{member.role}</h3>
                      <p className="text-jade text-sm">{member.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Year 1 Goals */}
      <section className="py-24 bg-space-cadet">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="glass rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Year 1 <span className="gradient-text">Strategic Goals</span>
              </h2>
              
              <div className="space-y-4">
                {year1Goals.map((goal, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-jade flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-300 text-lg">{goal}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-french-sky/20">
                <div className="flex flex-col md:flex-row gap-6 text-center">
                  <div className="flex-1">
                    <div className="text-4xl font-bold gradient-text mb-2">$6.2M</div>
                    <div className="text-gray-400">Total Funding Request</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-4xl font-bold gradient-text mb-2">$980,591</div>
                    <div className="text-gray-400">Year 1 Budget</div>
                  </div>
                </div>
              </div>
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
              Join Us in Building the Future
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Whether you're a funder, industry partner, or prospective student, 
              there's a place for you in the NextGen AIR movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-cobalt hover:bg-tang text-white font-semibold rounded-xl transition-all duration-300 btn-glow"
              >
                Partner With Us
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
