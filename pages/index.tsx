import Link from 'next/link';

export default function Home() {
  const features = [
    { title: 'AI-Powered Calls', desc: 'Human-like speech recognition & routing.' },
    { title: 'Instant Scheduling', desc: 'Auto-book into your calendar in real time.' },
    { title: 'Cost Savings', desc: 'Slash your after-hours labor costs by 80%.' },
  ];

  return (
    <main className="bg-black text-white min-h-screen flex flex-col space-y-12">
      {/* Hero */}
      <section className="flex-grow flex items-center justify-center">
        <div className="text-center space-y-6 px-8 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Meet Your 24/7 AI Call Caddy
          </h1>
          <p className="text-lg md:text-xl">
            Never miss another call—our AI receptionist answers, qualifies, and books your appointments,
            day or night.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
      <section className="px-8">
        <div className="container mx-auto grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-800 p-8 rounded-lg text-center flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 flex-grow">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About / What / How */}
      <section className="px-8 space-y-12">
        <div className="container mx-auto max-w-3xl space-y-12 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
            <p className="text-gray-300">
              At CallCaddy.ai, we’re a team of AI and customer-experience experts on a mission
              to revolutionize how small businesses handle calls. We blend cutting-edge AI with
              real-world insights to make every interaction seamless and every lead captured.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
            <p className="text-gray-300">
              Our 24/7 AI receptionist answers calls, qualifies prospects, and books appointments
              directly into your calendar. Automate your front desk to reduce overhead, never miss
              a call, and boost revenue—all while preserving your brand’s unique voice.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 text-left md:text-center">
              <li>
                <strong>Integration:</strong> Connect your phone system and calendar in just minutes.
              </li>
              <li>
                <strong>Customization:</strong> Tailor call flows and FAQs to match your brand voice.
              </li>
              <li>
                <strong>Go Live:</strong> Our AI picks up calls, qualifies leads, and schedules them
                instantly—day or night.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to transform your front desk?
          </h2>
          <Link href="/contact">
            <a className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium">
              Get Started
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
}

