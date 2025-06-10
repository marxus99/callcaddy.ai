import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-20 backdrop-blur bg-black/60 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <Link href="/">
          <a className="text-xl font-bold">CallCaddy</a>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Link href="/how-it-works"><a className="hover:text-blue-400">How It Works</a></Link>
          <Link href="/pricing"><a className="hover:text-blue-400">Pricing</a></Link>
          <Link href="/contact"><a className="hover:text-blue-400">Contact</a></Link>
        </nav>
        <button
          type="button"
          className="md:hidden p-2" aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
        <div className="hidden md:flex items-center space-x-2">
          <Link href="/contact">
            <a className="hidden sm:inline-block px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition text-sm font-semibold shadow">
              Get Started
            </a>
          </Link>
          <Link href="/contact?demo=true">
            <a className="text-sm font-semibold px-4 py-2 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-black transition">
              Book a Demo
            </a>
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-black/90 px-6 pb-6 pt-4 space-y-4 text-center">
          <nav className="space-y-3">
            <Link href="/how-it-works"><a onClick={() => setMenuOpen(false)} className="block py-2">How It Works</a></Link>
            <Link href="/pricing"><a onClick={() => setMenuOpen(false)} className="block py-2">Pricing</a></Link>
            <Link href="/contact"><a onClick={() => setMenuOpen(false)} className="block py-2">Contact</a></Link>
          </nav>
          <div className="flex flex-col items-center space-y-3 pt-2">
            <Link href="/contact">
              <a className="w-full px-4 py-3 bg-blue-600 rounded-full hover:bg-blue-700 font-semibold" onClick={() => setMenuOpen(false)}>
                Get Started
              </a>
            </Link>
            <Link href="/contact?demo=true">
              <a className="w-full px-4 py-3 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-black font-semibold" onClick={() => setMenuOpen(false)}>
                Book a Demo
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
