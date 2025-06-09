import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-20 backdrop-blur bg-black/60 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/">
          <a className="text-xl font-bold">CallCaddy</a>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Link href="/how-it-works"><a className="hover:text-blue-400">How It Works</a></Link>
          <Link href="/pricing"><a className="hover:text-blue-400">Pricing</a></Link>
          <Link href="/contact"><a className="hover:text-blue-400">Contact</a></Link>
        </nav>
        <div className="flex items-center space-x-2">
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
    </header>
  )
}
