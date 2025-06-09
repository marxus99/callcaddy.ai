import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-12 bg-gray-900 text-gray-400 text-sm py-8 px-6 text-center space-y-3">
      <nav className="space-x-4">
        <Link href="/pricing"><a className="hover:text-white hover:underline py-2 inline-block">Pricing</a></Link>
        <Link href="/how-it-works"><a className="hover:text-white hover:underline py-2 inline-block">How It Works</a></Link>
        <Link href="/contact"><a className="hover:text-white hover:underline py-2 inline-block">Contact</a></Link>
      </nav>
      <nav className="space-x-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline py-2 inline-block">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline py-2 inline-block">LinkedIn</a>
      </nav>
      <nav className="space-x-4">
        <Link href="/terms"><a className="hover:text-white hover:underline py-2 inline-block">Terms</a></Link>
        <Link href="/privacy"><a className="hover:text-white hover:underline py-2 inline-block">Privacy</a></Link>
      </nav>
      <p className="text-xs">Contact: <a href="mailto:hello@callcaddy.ai" className="underline">hello@callcaddy.ai</a></p>
      <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} CallCaddy</p>
    </footer>
  )
}
