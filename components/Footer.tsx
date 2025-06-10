import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-base py-12 px-6 text-center space-y-4">
      <nav className="flex justify-center flex-wrap gap-4">
        <Link href="/pricing"><a className="hover:text-white">Pricing</a></Link>
        <Link href="/how-it-works"><a className="hover:text-white">How It Works</a></Link>
        <Link href="/contact"><a className="hover:text-white">Contact</a></Link>
      </nav>
      <nav className="flex justify-center flex-wrap gap-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
      </nav>
      <nav className="flex justify-center flex-wrap gap-4">
        <Link href="/terms"><a className="hover:text-white">Terms</a></Link>
        <Link href="/privacy"><a className="hover:text-white">Privacy</a></Link>
      </nav>
      <p className="text-sm">Contact: <a href="mailto:hello@callcaddy.ai" className="underline">hello@callcaddy.ai</a></p>
      <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} CallCaddy</p>
    </footer>
  )
}
