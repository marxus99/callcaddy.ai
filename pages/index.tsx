// pages/index.tsx
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  PhoneArrowUpRightIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserPlusIcon,
  SparklesIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'
import HeroParticles from '@/components/HeroParticles'


export default function Home() {
  const features = [
    {
      icon: PhoneArrowUpRightIcon,
      title: 'AI Reception',
      desc: 'Instantly greet every caller with a friendly, human-like voice.',
    },
    {
      icon: CalendarDaysIcon,
      title: '24/7 Scheduling',
      desc: 'Book jobs automatically and fill your calendar around the clock.',
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
    {
      icon: UserPlusIcon,
      text: 'Sign up and tell us about your business',
    },
    {
      icon: PhoneArrowUpRightIcon,
      text: 'Forward your calls or chat messages',
    },
    {
      icon: CalendarDaysIcon,
      text: 'Relax while CallCaddy books jobs for you',
    },
  ]

  const highlights = [
    {
      icon: RocketLaunchIcon,
      title: 'Fast Setup',
      desc: 'Get started quickly with streamlined onboarding.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Reliable Service',
      desc: 'We answer every call so you never miss an opportunity.',
    },
    {
      icon: SparklesIcon,
      title: 'Always Improving',
      desc: 'We continually refine our AI to better serve you.',
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

      <main className="text-white font-sans">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#0f172a] pt-40 pb-20 px-6 md:px-8 animate-fadeIn">
          <HeroParticles />
          <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
                Never Miss Another Call
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-xl">
                CallCaddy&apos;s AI receptionist answers instantly, schedules jobs and follows up so you can focus on running your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact" className="w-full sm:w-auto w-40 text-center px-8 py-5 text-lg bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-transform transform hover:scale-105 shadow">
                  Start Now
                </Link>
                <Link href="/contact?demo=true" className="w-full sm:w-auto w-40 text-center px-8 py-5 text-lg border border-white hover:bg-white hover:text-black rounded-full font-semibold transition-transform transform hover:scale-105">
                  Book a Demo
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center mt-10 md:mt-0">
              <Image
                src="/hero.svg"
                alt="AI receptionist illustration"
                width={256}
                height={256}
                className="w-64 md:w-80 animate-float"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 md:py-32 px-6 md:px-8 bg-gray-900 animate-fadeIn">
          <div className="container mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-gray-800 p-8 rounded-lg text-center flex flex-col items-center transition hover:shadow-lg"
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
        <section className="py-24 md:py-32 px-6 md:px-8 bg-black animate-fadeIn">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step) => (
                <div key={step.text} className="p-6 bg-gray-900 rounded-lg flex flex-col items-center transition hover:shadow-lg">
                  <step.icon className="w-12 h-12 text-blue-500 mb-4" />
                  <p className="text-lg text-gray-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose CallCaddy */}
        <section className="py-24 md:py-32 px-6 md:px-8 bg-gray-900 animate-fadeIn">
          <div className="container mx-auto text-center space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold">Why Choose CallCaddy?</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {highlights.map((h) => (
                <div key={h.title} className="p-6 bg-gray-800 rounded-lg flex flex-col items-center text-gray-300 transition hover:shadow-lg">
                  <h.icon className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{h.title}</h3>
                  <p className="leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-32 px-6 md:px-8 bg-gray-900 animate-fadeIn">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to grow with CallCaddy?
            </h2>
            <Link href="/contact" className="px-8 py-5 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-transform transform hover:scale-105 shadow">
              Start Now
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

