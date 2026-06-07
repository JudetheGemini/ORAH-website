"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Theory of Change", href: "/theory-of-change" },
  { label: "Programs", href: "/programs" },
  { label: "Board", href: "/advisory-board" },
]

const initiatives = [
  { label: "Responsible AI Summit", href: "https://summit.responsibleaiottawa.ca", external: true },
  { label: "Responsible AI Talks", href: "https://talks.responsibleaiottawa.ca", external: true },
  { label: "Global Forum for Responsible AI", href: "https://forum.responsibleaiottawa.ca", external: true },
]

const resources = [
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reports", href: "/reports" },
  { label: "Blog", href: "https://blog.responsibleaiottawa.ca", external: true },
]

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [initiativesOpen, setInitiativesOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const close = () => {
    setIsMenuOpen(false)
    setInitiativesOpen(false)
    setResourcesOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-8">

        {/* Logo */}
        <Link href="/" onClick={close} className="flex-shrink-0">
          <img src="/logo2.svg" className="h-8 sm:h-10" alt="ORAH Logo" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center justify-center gap-0.5 flex-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/")
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 block ${
                    isActive
                      ? "text-[#00C4A7] bg-[#00C4A7]/8"
                      : "text-gray-600 hover:text-[#003366] hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}

          {/* Initiatives dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setInitiativesOpen(true)}
            onMouseLeave={() => setInitiativesOpen(false)}
          >
            <button
              className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-[#003366] hover:bg-gray-50 transition-colors duration-200"
            >
              Initiatives
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${initiativesOpen ? "rotate-180 text-[#003366]" : ""}`} />
            </button>
            <div className={`absolute left-0 top-full pt-1.5 transition-all duration-200 ${initiativesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}>
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 min-w-[230px]">
                {initiatives.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#003366] hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </li>

          {/* Resources dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-[#003366] hover:bg-gray-50 transition-colors duration-200"
            >
              Resources
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesOpen ? "rotate-180 text-[#003366]" : ""}`} />
            </button>
            <div className={`absolute left-0 top-full pt-1.5 transition-all duration-200 ${resourcesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}>
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 min-w-[160px]">
                {resources.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={close}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#003366] hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block flex-shrink-0">
          <Link
            href="/#contact"
            className="inline-flex items-center px-5 py-2.5 bg-[#003366] text-white text-sm font-semibold rounded-xl hover:bg-[#00C4A7] transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-screen border-t border-gray-100" : "max-h-0"
        }`}
      >
        <div className="bg-white px-4 py-3 space-y-0.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/")
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#00C4A7] bg-[#00C4A7]/8"
                    : "text-gray-700 hover:text-[#003366] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </a>
            )
          })}

          {/* Mobile — Initiatives */}
          <div>
            <button
              onClick={() => setInitiativesOpen(!initiativesOpen)}
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Initiatives
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${initiativesOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${initiativesOpen ? "max-h-48" : "max-h-0"}`}>
              <div className="pl-3 pb-1 space-y-0.5">
                {initiatives.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-[#003366] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile — Resources */}
          <div>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Resources
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${resourcesOpen ? "max-h-48" : "max-h-0"}`}>
              <div className="pl-3 pb-1 space-y-0.5">
                {resources.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={close}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-[#003366] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-2 pb-1 border-t border-gray-100">
            <Link
              href="/#contact"
              onClick={close}
              className="block px-3 py-3 text-sm font-semibold text-white bg-[#003366] rounded-xl text-center hover:bg-[#00C4A7] transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
