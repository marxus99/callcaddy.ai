import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-8 px-6 text-center space-y-3">
      <nav className="space-x-4">
        <Link href="/pricing"><a className="hover:text-white">Pricing</a></Link>
        <Link href="/how-it-works"><a className="hover:text-white">How It Works</a></Link>
        <Link href="/contact"><a className="hover:text-white">Contact</a></Link>
      </nav>
      <nav className="space-x-4">
        <Link href="/terms"><a className="hover:text-white">Terms</a></Link>
        <Link href="/privacy"><a className="hover:text-white">Privacy</a></Link>
      </nav>
      <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} CallCaddy</p>
    </footer>
  )
}
