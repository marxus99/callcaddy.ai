import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-6xl font-extrabold mb-6">Meet Your 24/7 AI Call Caddy</h1>
        <p className="max-w-2xl text-lg mb-8">
          Never miss another call—our AI receptionist answers, qualifies, and books your appointments, day or night.
        </p>
        <div className="space-x-4">
          <Link href="/how-it-works">
            <a className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium">
              How It Works
            </a>
          </Link>
          <Link href="/pricing">
            <a className="px-8 py-3 border border-white hover:bg-white hover:text-black rounded-full font-medium">
              View Pricing
            </a>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto grid gap-12 md:grid-cols-3 px-4">
          {[
            {
              title: 'AI-Powered Calls',
              desc: 'Human-like speech recognition & routing.',
            },
            {
              title: 'Instant Scheduling',
              desc: 'Auto-book into your calendar in real time.',
            },
            {
              title: 'Cost Savings',
              desc: 'Slash your after-hours labor costs by 80%.',
            },
          ].map((f) => (
            <div key={f.title} className="text-center">
              <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to transform your front desk?</h2>
        <Link href="/contact">
          <a className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium">
            Get Started
          </a>
        </Link>
      </section>
    </main>
  );
}

