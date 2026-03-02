import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const impactCards = [
  {
    title: "Technical Mastery",
    description: "Master AI and robotics technologies through hands-on training with industry-standard tools and real-world projects.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Economic Security",
    description: "Gain certifications and skills that lead to high-demand, well-paying careers in the growing AI and automation sector.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Community Revival",
    description: "Join a network of skilled professionals dedicated to revitalizing the Miami Valley economy through technology innovation.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "100+", label: "Annual Enrollment" },
  { value: "80%", label: "Completion Rate" },
  { value: "70%", label: "Job Placement" },
  { value: "70", label: "Internships/Cohort" },
];

const ctas = [
  {
    title: "Students",
    description: "Start your journey to a tech career",
    href: "/contact",
    cta: "Apply Now",
    color: "from-jade to-emerald-600",
  },
  {
    title: "Funders",
    description: "Invest in transformative impact",
    href: "/contact",
    cta: "Partner With Us",
    color: "from-cobalt to-blue-700",
  },
  {
    title: "Partners",
    description: "Build your talent pipeline",
    href: "/contact",
    cta: "Get Involved",
    color: "from-tang to-crayola",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cobalt/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-tang/20 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <ScrollReveal>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-space-cadet/50 border border-french-sky/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-jade animate-pulse mr-2" />
              <span className="text-french-sky text-sm font-medium">Now Enrolling for 2026</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              <span className="text-white">Future of the</span>
              <br />
              <span className="gradient-text">Miami Valley Workforce</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              NextGen AIR Academy is establishing Dayton as the national epicenter of AI-driven equity. 
              We transform lives through comprehensive AI and robotics training.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {ctas.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`inline-flex flex-col items-center px-8 py-4 rounded-xl bg-gradient-to-r ${item.color} text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cobalt/25`}
                >
                  <span className="text-lg">{item.title}</span>
                  <span className="text-sm opacity-90">{item.cta}</span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-french-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Impact Cards Section */}
      <section className="py-24 bg-rich-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why <span className="gradient-text">NextGen AIR</span>?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                We don't just teach technology—we transform lives and revitalize communities.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactCards.map((card, index) => (
              <ScrollReveal key={card.title} delay={index * 100}>
                <div className="glass rounded-2xl p-8 card-hover h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cobalt to-tang flex items-center justify-center text-white mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{card.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-space-cadet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
              Join the next generation of AI and robotics professionals in the Miami Valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-cobalt hover:bg-tang text-white font-semibold rounded-xl transition-all duration-300 btn-glow"
              >
                Get Started Today
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
