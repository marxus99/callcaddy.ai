import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-20 backdrop-blur bg-black/60 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          CallCaddy
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-base font-medium">
          <Link href="/how-it-works" className="hover:text-blue-400">How It Works</Link>
          <Link href="/pricing" className="hover:text-blue-400">Pricing</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact</Link>
        </nav>
        <button
          type="button"
          className="md:hidden p-3" aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
        <div className="hidden md:flex items-center space-x-3">
          <Link href="/contact" className="hidden sm:inline-block px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition text-base font-semibold shadow">
            Get Started
          </Link>
          <Link href="/contact?demo=true" className="text-base font-semibold px-6 py-3 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-black transition">
            Book a Demo
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-black/90 px-6 pb-6 pt-4 space-y-5 text-center">
          <nav className="space-y-4">
            <Link href="/how-it-works" onClick={() => setMenuOpen(false)} className="block py-3 text-lg">How It Works</Link>
            <Link href="/pricing" onClick={() => setMenuOpen(false)} className="block py-3 text-lg">Pricing</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="block py-3 text-lg">Contact</Link>
          </nav>
          <div className="flex flex-col items-center space-y-4 pt-2">
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="w-full px-6 py-4 bg-blue-600 rounded-full hover:bg-blue-700 font-semibold text-base">
              Get Started
            </Link>
            <Link href="/contact?demo=true" onClick={() => setMenuOpen(false)} className="w-full px-6 py-4 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-black font-semibold text-base">
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
