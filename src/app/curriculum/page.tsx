import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "52-Week AIR Certification Curriculum | NextGen AIR Academy",
  description: "Master the complete AI integration journey — from prompt engineering to cloud deployment. Earn industry-recognized certifications including Microsoft AI Associate, AWS Cloud, and Tableau.",
  openGraph: {
    title: "52-Week AIR Certification Curriculum | NextGen AIR Academy",
    description: "Master the complete AI integration journey — from prompt engineering to cloud deployment.",
  },
};

const curriculumSteps = [
  {
    step: 1,
    title: "Prompt & Context Engineering",
    description: "Mastering precise LLM inputs for business applications.",
    learningOutcome: "Proficiency in chain-of-thought prompting for transparency.",
    marketSkill: "Professional AI Communication",
    certification: "Microsoft AI Associate Level",
    color: "from-cobalt to-blue-600",
  },
  {
    step: 2,
    title: "AI Workflow Development",
    description: "Building no-code/low-code agents (Zapier/Make.com).",
    learningOutcome: "Engineering multi-step automated agents.",
    marketSkill: "Business Process Automation",
    certification: "Automation/No-Code Specialist",
    color: "from-tang to-crayola",
  },
  {
    step: 3,
    title: "Basic ML Workflows & APIs",
    description: "Introduction to supervised learning and REST APIs.",
    learningOutcome: "Safely integrating AI models into existing software environments.",
    marketSkill: "Systems Integration",
    certification: "AWS/Google Cloud ML Foundations",
    color: "from-jade to-emerald-600",
  },
  {
    step: 4,
    title: "AI-Powered Business Analytics",
    description: "Utilizing Tableau and PowerBI.",
    learningOutcome: "Generating predictive insights and real-time data dashboards.",
    marketSkill: "Data-Driven Decision Making",
    certification: "Tableau Desktop / PowerBI Data Analyst",
    color: "from-purple-600 to-indigo-600",
  },
  {
    step: 5,
    title: "MCP Servers & Deployment",
    description: "Capstone course on cloud orchestration.",
    learningOutcome: "Deploying AI models to cloud environments (Azure, AWS, Google).",
    marketSkill: "Cloud Infrastructure Management",
    certification: "Cloud Solutions Architect (Associate)",
    color: "from-orange-500 to-red-600",
  },
];

const credentials = [
  { step: "Step 1", focus: "Prompt & Context Engineering", certification: "Microsoft AI Associate Level" },
  { step: "Step 2", focus: "AI Workflow Development", certification: "Automation/No-Code Specialist" },
  { step: "Step 3", focus: "ML Workflows & APIs", certification: "AWS/Google Cloud ML Foundations" },
  { step: "Step 4", focus: "Business Analytics", certification: "Tableau Desktop / PowerBI Data Analyst" },
  { step: "Step 5", focus: "MCP Servers & Deployment", certification: "Cloud Solutions Architect (Associate)" },
];

export default function CurriculumPage() {
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
              <span className="text-white">52-Week </span>
              <span className="gradient-text">Certification Track</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Master the complete AI integration journey — from prompt engineering to cloud deployment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Track Overview */}
      <section className="py-16 bg-space-cadet">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="glass rounded-2xl p-8 text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-jade/20 border border-jade/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-jade animate-pulse mr-2" />
                <span className="text-jade text-sm font-medium">52-Week Intensive Program</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Precision Pedagogy</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                In the modern Miami Valley labor market, theoretical knowledge is insufficient. 
                Employers require "stacked credentials" — a series of validated, industry-recognized 
                certifications that prove immediate technical proficiency.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Curriculum Steps */}
      <section className="py-24 bg-rich-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                The 5-Step <span className="gradient-text">AIR Curriculum</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A precision-engineered technical journey moving from basic literacy to complex cloud orchestration.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="space-y-8">
            {curriculumSteps.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 100}>
                <div className="glass rounded-2xl p-8 card-hover">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-2xl`}>
                      {item.step}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 mb-4">{item.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-rich-black/50 rounded-lg p-3">
                          <span className="text-jade text-xs font-semibold uppercase tracking-wider block mb-1">Learning Outcome</span>
                          <span className="text-gray-300 text-sm">{item.learningOutcome}</span>
                        </div>
                        <div className="bg-rich-black/50 rounded-lg p-3">
                          <span className="text-crayola text-xs font-semibold uppercase tracking-wider block mb-1">Market-Ready Skill</span>
                          <span className="text-gray-300 text-sm">{item.marketSkill}</span>
                        </div>
                        <div className="bg-rich-black/50 rounded-lg p-3">
                          <span className="text-french-sky text-xs font-semibold uppercase tracking-wider block mb-1">Certification</span>
                          <span className="text-gray-300 text-sm">{item.certification}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Table */}
      <section className="py-24 bg-space-cadet">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Stacked <span className="gradient-text">Credential Path</span>
              </h2>
              <p className="text-xl text-gray-400">
                Vetted by the Industry Liaison to ensure regional employer alignment.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <div className="glass rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-cobalt/20 border-b border-french-sky/20">
                      <th className="text-left text-white font-semibold px-6 py-4">Curriculum Step</th>
                      <th className="text-left text-white font-semibold px-6 py-4">Core Technical Focus</th>
                      <th className="text-left text-white font-semibold px-6 py-4">Industry-Equivalent Certification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {credentials.map((cred, index) => (
                      <tr key={index} className="border-b border-french-sky/10 hover:bg-french-sky/5 transition-colors">
                        <td className="text-jade font-semibold px-6 py-4">{cred.step}</td>
                        <td className="text-gray-300 px-6 py-4">{cred.focus}</td>
                        <td className="text-french-sky px-6 py-4">{cred.certification}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join the next generation of AI and robotics professionals in the Miami Valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-cobalt hover:bg-tang text-white font-semibold rounded-xl transition-all duration-300 btn-glow"
              >
                Apply Now
              </Link>
              <Link
                href="/support"
                className="px-8 py-4 border-2 border-french-sky text-french-sky hover:bg-french-sky hover:text-rich-black font-semibold rounded-xl transition-all duration-300"
              >
                View Student Support
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
