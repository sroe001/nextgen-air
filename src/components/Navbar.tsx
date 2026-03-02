"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/hub", label: "Innovation Hub" },
  { href: "/support", label: "Student Support" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-cobalt focus:text-white focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>
      <nav
        className={`fixed top-0 left-0 right-0 pt-[15px] z-50 transition-all duration-300 ${
          scrolled
            ? "bg-rich-black/95 backdrop-blur-lg border-b border-french-sky/10"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-2" aria-label="NextGen AIR Academy Home">
              <img
                src="/nextgen-air-logo.png"
                alt="NextGen AIR Logo"
                className="w-[105px] h-[105px] object-contain mt-[20px]"
              />
              <span className="text-white font-bold text-xl tracking-tight">
                NextGen <span className="text-crayola">AIR</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors duration-200 ${
                      isActive ? "text-french-sky" : "text-gray-300 hover:text-french-sky"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-french-sky rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:block">
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-cobalt hover:bg-tang text-white text-sm font-semibold rounded-lg transition-all duration-300 btn-glow"
              >
                Get Started
              </Link>
            </div>

            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden bg-rich-black/98 backdrop-blur-lg border-t border-french-sky/10"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-french-sky py-2 text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                  role="menuitem"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block w-full text-center mt-4 px-5 py-3 bg-cobalt text-white font-semibold rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
