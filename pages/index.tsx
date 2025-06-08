import Link from 'next/link';

export default function Home() {
  const features = [
    { title: 'AI-Powered Calls', desc: 'Human-like speech recognition & routing.' },
    { title: 'Instant Scheduling', desc: 'Auto-book into your calendar in real time.' },
    { title: 'Cost Savings', desc: 'Slash your after-hours labor costs by 80%.' },
  ];

  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex-grow flex items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-6xl font-extrabold mb-4">Meet Your 24/7 AI Call Caddy</h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Never miss another call—our AI receptionist answers, qualifies, and books your
            appointments, day or night.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/how-it-works">
              <a className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium">
                How It Works
              </a>
            </Link>
            <Link href="/pricing">
              <a className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-full font-medium">
                View Pricing
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6 grid gap-12 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About / What / How */}
      <section className="py-16 bg-black px-6">
        <div className="container mx-auto space-y-12 text-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              At CallCaddy.ai, we’re a team of AI and customer-experience experts on a
              mission to revolutionize how small businesses handle calls.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our 24/7 AI receptionist answers calls, qualifies prospects, and books
              appointments right into your calendar.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-300 max-w-3xl mx-auto text-left md:text-center">
              <li>
                <strong>Integration:</strong> Connect your phone system and calendar in just minutes.
              </li>
              <li>
                <strong>Customization:</strong> Tailor call flows and FAQs to match your brand voice.
              </li>
              <li>
                <strong>Go Live:</strong> Our AI picks up calls, qualifies leads, and schedules
                them instantly—day or night.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-12 bg-gray-900 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to transform your front desk?</h2>
        <Link href="/contact">
          <a className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium">
            Get Started
          </a>
        </Link>
      </section>
    </main>
  );
}

