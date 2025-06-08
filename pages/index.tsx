// pages/index.tsx
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const features = [
    {
      title: 'AI-Powered Calls',
      desc:
        'Human-like speech recognition that answers and routes your calls instantly.',
    },
    {
      title: 'Instant Scheduling',
      desc:
        'Auto-book appointments directly into your calendar—no more dropped leads.',
    },
    {
      title: 'Massive Cost Savings',
      desc: 'Reduce after-hours labor costs by up to 80% while boosting conversions.',
    },
  ];

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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main
        className="bg-gray-950 text-gray-100 font-sans"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Meet Your 24/7 AI Call Caddy
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Never miss another call—our AI receptionist answers, qualifies, and
            books your appointments day or night, so you can focus on growing
            your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-2">
            <Link href="/how-it-works">
              <a className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition">
                How It Works
              </a>
            </Link>
            <Link href="/pricing">
              <a className="w-full sm:w-auto px-8 py-4 border border-white hover:bg-white hover:text-black rounded-full font-semibold transition">
                View Pricing
              </a>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="container mx-auto grid gap-12 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-gray-800 p-8 rounded-lg flex flex-col h-full space-y-4"
              >
                <h3 className="text-2xl md:text-3xl font-semibold">
                  {f.title}
                </h3>
                <p className="text-base md:text-lg text-gray-400 flex-grow leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About / What / How */}
        <section className="py-24 px-6 bg-black">
          <div className="container mx-auto max-w-3xl space-y-20 text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                We’re a team of AI innovators and customer-experience experts
                dedicated to ensuring every call your business receives is
                handled flawlessly—anytime, anywhere.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Our 24/7 AI receptionist answers calls, qualifies leads, and books
                appointments directly into your calendar—boosting revenue and
                cutting overhead.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <ol className="list-decimal list-inside text-base md:text-lg text-gray-300 space-y-4 leading-relaxed text-left md:text-center">
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
                  schedules calls—all day, every day.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 bg-gray-900">
          <div className="container mx-auto text-center space-y-6">
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

