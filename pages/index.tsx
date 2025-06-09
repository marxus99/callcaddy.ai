// pages/index.tsx
import React from 'react'
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
      </Head>

      <main
        className="bg-black text-white font-sans"
      >
        {/* Hero */}
        <section className="pt-36 pb-28 px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Meet Your 24/7 AI Call Caddy
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Never miss another call—our AI receptionist answers, qualifies, and
            books your appointments day or night, so you can focus on growing
            your business.
          </p>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
            <Link href="/how-it-works">
              <a className="block w-full sm:w-auto px-8 py-4 text-center bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition">
                How It Works
              </a>
            </Link>
            <Link href="/pricing">
              <a className="block w-full sm:w-auto px-8 py-4 text-center border border-white hover:bg-white hover:text-black rounded-full font-semibold transition">
                View Pricing
              </a>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 md:py-32 px-6 bg-gray-900">
          <div className="container mx-auto grid gap-12 md:grid-cols-3">
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

        {/* About / What / How */}
        <section className="py-24 md:py-32 px-6 bg-black">
          <div className="container mx-auto max-w-3xl space-y-16 text-center">
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
              <img
                src="https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&fit=crop&w=800&q=80"
                alt="Robot receptionist handling calls"
                className="w-full rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-32 px-6 bg-gray-900 mt-12">
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

