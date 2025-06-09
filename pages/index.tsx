// pages/index.tsx
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {
  PhoneArrowUpRightIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline'


export default function Home() {
  const features = [
    {
      icon: PhoneArrowUpRightIcon,
      title: 'AI Reception',
      desc: 'Instantly pick up every call with a friendly, human-like voice.',
    },
    {
      icon: CalendarDaysIcon,
      title: 'Instant Scheduling',
      desc: 'Book jobs automatically and fill your calendar 24/7.',
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Boost Conversions',
      desc: 'Capture leads even after hours without extra staff.',
    },
    {
      icon: ChatBubbleOvalLeftEllipsisIcon,
      title: 'Smart Follow-ups',
      desc: 'Send text or email reminders so no opportunity slips away.',
    },
  ]

  const steps = [
    'Connect your existing phone number and calendar',
    'Customize responses to match your brand',
    'Sit back while the AI books jobs and qualifies leads',
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

      <main className="text-white font-sans">
        {/* Hero */}
        <section className="pt-36 pb-20 px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Turn Every Caller Into A Customer
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            CallCaddy answers 24/7 with natural AI, books appointments instantly
            and captures leads while you focus on the job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <a className="w-full sm:w-auto px-8 py-4 mb-2 sm:mb-0 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition">
                Get Started Free
              </a>
            </Link>
            <Link href="/contact">
              <a className="w-full sm:w-auto px-8 py-4 border border-white hover:bg-white hover:text-black rounded-full font-semibold transition">
                Book a Demo
              </a>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 md:py-32 px-6 bg-gray-900">
          <div className="container mx-auto grid gap-12 md:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-gray-800 p-8 rounded-lg text-center flex flex-col items-center"
              >
                <f.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {f.title}
                </h3>
                <p className="text-base md:text-lg text-gray-300 flex-grow leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 md:py-32 px-6 bg-black">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How It Works</h2>
            <ol className="space-y-4 text-gray-300 list-decimal list-inside">
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-24 md:py-32 px-6 bg-gray-900">
          <div className="container mx-auto max-w-3xl text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Trusted by Service Pros</h2>
            <p className="text-gray-300 italic">
              &quot;CallCaddy booked 40% more appointments in our first month!&quot; – Jane D., Plumbing Co.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-32 px-6 bg-gray-900">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to grow with CallCaddy?
            </h2>
            <Link href="/contact">
              <a className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition">
                Get Started Free
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

