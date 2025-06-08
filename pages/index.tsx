// pages/index.tsx
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const features = [
    {
      title: 'AI-Powered Calls',
      desc: 'Human-like speech recognition that answers & routes your calls instantly.',
    },
    {
      title: 'Instant Scheduling',
      desc: 'Auto-book appointments into your calendar in real time—no dropped leads.',
    },
    {
      title: 'Massive Cost Savings',
      desc: 'Cut after-hours labor costs by up to 80% while boosting conversions.',
    },
  ]

  return (
    <>
      <Head>
        <title>CallCaddy.ai • 24/7 AI Receptionist</title>
        <meta
          name="description"
          content="Never miss a call—our AI receptionist answers, qualifies, and books your appointments, day or night."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main
        className="min-h-screen bg-black text-white flex flex-col"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {/* Hero */}
        <section className="pt-32 pb-24 px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Meet Your 24/7 AI Call Caddy
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Never miss another call—our AI receptionist answers, qualifies, and
            books your appointments day or night, so you can focus on growing
            your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/how-it-works">
              <a className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition">
                How It Works
              </a>
            </Link>
            <Link href="/pricing">
              <a className="w-full sm:w-auto px-8 py-3 border border-white hover:bg-white hover:text-black rounded-full font-semibold transition">
                View Pricing
              </a>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="container mx-auto grid gap-10 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-gray-800 p-10 rounded-lg flex flex-col h-full"
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  {f.title}
                </h3>
                <p className="text-base md:text-lg text-gray-400 flex-grow leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-3xl space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                We’re a team of AI pioneers and CX experts dedicated to
                ensuring every call your business receives is handled
                flawlessly—anytime, anywhere.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Our 24/7 AI receptionist takes calls, qualifies leads, and books
                appointments directly into your calendar—boosting revenue and
                slashing overhead.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
              <ol className="list-decimal list-inside text-base md:text-lg text-gray-300 space-y-3 leading-relaxed">
                <li>
                  <strong>Integrate:</strong> Connect your phone system and
                  calendar in under 5 minutes.
                </li>
                <li>
                  <strong>Customize:</strong> Tailor call flows and FAQs to
                  match your brand voice.
                </li>
                <li>
                  <strong>Go Live:</strong> Our AI answers, qualifies, and
                  schedules—24/7.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to elevate your front desk?
            </h2>
            <Link href="/contact">
              <a className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition">
                Get Started Today
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

