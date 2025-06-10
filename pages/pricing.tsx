import Link from 'next/link'
import { useState } from 'react'
import {
  CheckCircleIcon,
  SparklesIcon,
  FireIcon,
  RocketLaunchIcon,
  BuildingOfficeIcon,
  ChevronDownIcon
} from '@heroicons/react/24/solid'

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [sent, setSent] = useState(false)
  const plans = [
    {
      name: 'Starter',
      price: '$299/mo',
      setup: '$199 setup',
      summary: 'Ideal for solo entrepreneurs',
      icon: SparklesIcon,
      features: [
        '50 voice calls or 150 chats',
        'Done-for-you setup',
        'Real-time notifications',
      ],
    },
    {
      name: 'Growth',
      price: '$899/mo',
      setup: '$399 setup',
      summary: 'Built for growing teams',
      badge: 'Best Value',
      icon: FireIcon,
      features: [
        '250 calls + unlimited chat',
        'Custom prompt tuning',
        'Integrations & analytics',
      ],
    },
    {
      name: 'Scale',
      price: '$2,499/mo',
      setup: '$799 setup',
      summary: 'Ideal for multi-location businesses',
      icon: RocketLaunchIcon,
      features: [
        '1,000 calls included',
        'Dedicated success manager',
        'Advanced scheduling automation',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      setup: 'Custom',
      summary: 'Tailored for large operations',
      icon: BuildingOfficeIcon,
      features: [
        'Outcome-based pricing',
        'Premium onboarding & support',
        'On‑prem deployment options',
      ],
      cta: 'Book a Demo',
    },
  ]

  const faqs = [
    {
      q: 'Can I upgrade my plan later?',
      a: 'Absolutely. You can change plans at any time and only pay the prorated difference.',
    },
    {
      q: 'What happens if I want to cancel?',
      a: 'You can cancel whenever you need. Your service will remain active until the end of your billing period.',
    },
    {
      q: 'Is support included with every plan?',
      a: 'Yes. All plans include email support, and higher tiers receive priority responses.',
    },
    {
      q: 'How does billing work?',
      a: 'Plans are billed monthly to your credit card on file. Setup fees are charged when you first sign up.',
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white py-20 md:py-24">
      <h1 className="text-4xl font-extrabold text-center mb-4">Pricing Plans</h1>
      <p className="text-center text-gray-300 mb-12">Simple pricing, no hidden fees. Cancel anytime.</p>
      <div className="container mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4 md:px-8 animate-fadeIn">
        {plans.map((plan) => {
          const Icon = plan.icon
          return (
            <div
              key={plan.name}
              className={`relative bg-gray-900 p-6 rounded-lg shadow-xl flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl ${plan.badge ? 'ring-2 ring-blue-600' : ''}`}
            >
              {plan.badge && (
                <span className="absolute top-0 right-0 bg-blue-600 text-xs font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg">
                  {plan.badge}
                </span>
              )}
              <Icon className="w-8 h-8 text-blue-500 mb-3" />
              <h2 className="text-2xl font-bold mb-1">{plan.name}</h2>
              <p className="text-sm text-gray-400 mb-4">{plan.summary}</p>
              <p className="text-4xl font-extrabold mb-1">{plan.price}</p>
              <p className="text-sm text-gray-400 mb-4">{plan.setup}</p>
              <ul className="space-y-2 mb-6 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/contact?plan=${encodeURIComponent(plan.name)}`}>
                <a className="mt-auto block text-center px-6 py-4 bg-blue-600 hover:bg-blue-700 rounded font-semibold transition-transform transform hover:scale-105">
                  {plan.cta ? plan.cta : 'Choose Plan'}
                </a>
              </Link>
            </div>
          )
        })}
      </div>

      <div className="my-12">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-10 text-gray-900">
          <path d="M0 20 Q300 40 600 20 T1200 20 V40 H0z" fill="currentColor" />
        </svg>
      </div>

      <section className="container mx-auto max-w-3xl mt-16 px-4 md:px-8 animate-fadeIn">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={faq.q} className="border-b border-gray-700 pb-3">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-lg md:text-xl font-medium">{faq.q}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                />
              </button>
              {openFaq === idx && (
                <p className="mt-2 text-gray-300 text-base md:text-lg">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-xl mt-16 px-4 md:px-8 animate-fadeIn">
        <h3 className="text-2xl font-semibold text-center mb-4">Still have questions?</h3>
        {sent ? (
          <p className="text-center text-green-500">Thanks! We&apos;ll be in touch soon.</p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
            className="bg-gray-900 p-6 rounded-lg space-y-4"
          >
            <input
              required
              placeholder="Name"
              className="w-full p-2 rounded bg-gray-200 text-black"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-gray-200 text-black"
            />
            <textarea
              placeholder="Message"
              rows={3}
              className="w-full p-2 rounded bg-gray-200 text-black"
            />
            <button type="submit" className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 rounded font-semibold transition-transform transform hover:scale-105">
              Send Message
            </button>
          </form>
        )}
      </section>
    </main>
  )
}

