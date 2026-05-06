import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | Partner With NextGen AIR Academy",
  description: "Get in touch with NextGen AIR Academy. Contact our leadership team for partnership opportunities, funding inquiries, or student enrollment information.",
  openGraph: {
    title: "Contact Us | Partner With NextGen AIR Academy",
    description: "Get in touch with NextGen AIR Academy for partnership opportunities.",
  },
};

const contactInfo = {
  phones: ["937-727-4479", "937-536-1168"],
  email: "nextgenair1@gmail.com",
  address: "Dayton/Miami Valley, Ohio",
};

const funders = [
  {
    title: "501(c)(3) Organizations",
    description: "Tax-deductible investments in workforce development that delivers measurable social impact.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Government Stakeholders",
    description: "Align workforce development with regional economic revitalization initiatives.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Philanthropists",
    description: "High-yield social impact investments that transform lives and communities.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const impactSponsorTiers = [
  {
    tier: "Silver Impact Sponsor",
    amount: "$10,000 - $24,999",
    benefits: [
      "Logo placement on website",
      "Quarterly impact reports",
      "Student mentorship opportunity",
    ],
    color: "from-gray-400 to-gray-500",
  },
  {
    tier: "Gold Impact Sponsor",
    amount: "$25,000 - $49,999",
    benefits: [
      "All Silver benefits",
      "Priority internship recruitment",
      "Annual facility tour",
      "Speaking opportunity at events",
    ],
    color: "from-yellow-500 to-amber-600",
  },
  {
    tier: "Platinum Impact Sponsor",
    amount: "$50,000+",
    benefits: [
      "All Gold benefits",
      "Naming rights for equipment/lab",
      "Board advisory role",
      "Custom curriculum input",
    ],
    color: "from-cobalt to-blue-700",
  },
];

const leadership = [
  {
    name: "Steven D. Roe, Sr.",
    title: "Executive Director",
    focus: "Strategic vision & operations",
    icon: "SR",
  },
  {
    name: "Jalyn Q. Roe",
    title: "Impact Sponsor Specialist",
    focus: "Partnerships & sponsor relations",
    icon: "JR",
  },
];

export default function ContactPage() {
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
              <span className="text-white">Partner </span>
              <span className="gradient-text">With Us</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Join the movement to make Dayton the national epicenter of AI-driven equity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Banner */}
      <section className="py-8 bg-space-cadet border-b border-french-sky/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-jade" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-300">
                {contactInfo.phones[0]} | {contactInfo.phones[1]}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-jade" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-300">{contactInfo.email}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Funder Value Proposition */}
      <section className="py-24 bg-rich-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Invest in <span className="gradient-text">Transformative Impact</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Your investment powers the $6.2M initiative to transform lives and revitalize the Miami Valley economy.
              </p>
            </div>
          </ScrollReveal>
          
          {/* Funding Stats */}
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
              <div className="glass rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold gradient-text mb-2">$6.2M</div>
                <div className="text-gray-400 text-lg">Total Funding Request</div>
              </div>
              <div className="glass rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold gradient-text mb-2">$980,591</div>
                <div className="text-gray-400 text-lg">Year 1 Budget</div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {funders.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="glass rounded-2xl p-8 card-hover h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cobalt to-tang flex items-center justify-center text-white mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Sponsor Program */}
      <section className="py-24 bg-space-cadet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Impact <span className="gradient-text">Sponsor</span> Program
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Become a catalyst for change. Your sponsorship directly funds student success and builds your talent pipeline.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactSponsorTiers.map((tier, index) => (
              <ScrollReveal key={tier.tier} delay={index * 100}>
                <div className="glass rounded-2xl p-8 card-hover h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto`}>
                    {tier.tier.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">{tier.tier}</h3>
                  <p className="text-jade font-semibold mb-6 text-center">{tier.amount}</p>
                  <ul className="space-y-3 flex-1">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-jade mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#contact-form"
                    className={`mt-8 w-full py-3 rounded-xl bg-gradient-to-r ${tier.color} text-white font-semibold text-center transition-all duration-300 hover:scale-105`}
                  >
                    Learn More
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Student CTA */}
      <section className="py-24 bg-rich-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="glass rounded-2xl p-8 md:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-jade to-emerald-600 flex items-center justify-center text-white mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Join the next generation of AI and robotics professionals. 
                Comprehensive support services available for qualified applicants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/curriculum"
                  className="px-8 py-4 bg-jade hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  View Curriculum
                </Link>
                <Link
                  href="/support"
                  className="px-8 py-4 border-2 border-french-sky text-french-sky hover:bg-french-sky hover:text-rich-black font-semibold rounded-xl transition-all duration-300"
                >
                  Student Support Services
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industry Partners CTA */}
      <section className="py-24 bg-space-cadet">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="glass rounded-2xl p-8 md:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cobalt to-tang flex items-center justify-center text-white mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Build Your Talent Pipeline</h2>
              <p className="text-gray-300 text-lg mb-8">
                Connect with a vetted pipeline of trained AI and robotics professionals. 
                70 internship placements available per cohort.
              </p>
              <Link
                href="#contact-form"
                className="px-8 py-4 bg-cobalt hover:bg-tang text-white font-semibold rounded-xl transition-all duration-300 btn-glow"
              >
                Become an Industry Partner
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Leadership */}
      <section className="py-24 bg-rich-black" id="contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Get in <span className="gradient-text">Touch</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Reach out to our leadership team to discuss partnership opportunities.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <ScrollReveal key={leader.name} delay={index * 100}>
                <div className="glass rounded-2xl p-8 card-hover">
                  <div className="flex items-center mb-6">
                    {leader.icon === "SR" ? (
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 relative">
                        <Image 
                          src="/steven-roe-sr-rocket-scientist.jpg" 
                          alt="Steven D. Roe, Sr."
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cobalt to-tang flex items-center justify-center text-white font-bold text-xl mr-4">
                        {leader.icon}
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                      <p className="text-jade font-semibold">{leader.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-400">{leader.focus}</p>
                  <div className="mt-6 pt-6 border-t border-french-sky/10">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-center text-french-sky hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {contactInfo.email}
                    </a>
                    <div className="flex items-center mt-3 text-gray-400">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {contactInfo.phones[0]}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-space-cadet relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build the Future Together
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Whether you're a funder, industry partner, or prospective student, 
              there's a place for you in the NextGen AIR movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}`}
                className="px-8 py-4 bg-cobalt hover:bg-tang text-white font-semibold rounded-xl transition-all duration-300 btn-glow"
              >
                Send Us a Message
              </a>
              <Link
                href="/"
                className="px-8 py-4 border-2 border-french-sky text-french-sky hover:bg-french-sky hover:text-rich-black font-semibold rounded-xl transition-all duration-300"
              >
                Return Home
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
