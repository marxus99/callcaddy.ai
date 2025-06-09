import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$299/mo',
      setup: '$199 setup',
      summary: 'Ideal for solo entrepreneurs',
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
      badge: 'Most Popular',
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
      <h1 className="text-4xl font-extrabold text-center mb-12">Pricing Plans</h1>
      <div className="container mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="relative bg-gray-900 p-6 rounded-lg shadow-xl flex flex-col"
          >
            {plan.badge && (
              <span className="absolute top-0 right-0 bg-blue-600 text-xs font-semibold px-2 py-1 rounded-tr-lg rounded-bl-lg">
                {plan.badge}
              </span>
            )}
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
              <a className="mt-auto block text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold">
                {plan.cta ? plan.cta : 'Choose Plan'}
              </a>
            </Link>
          </div>
        ))}
      </div>

      <section className="container mx-auto max-w-3xl mt-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <h3 className="text-xl font-semibold mb-1">{faq.q}</h3>
              <p className="text-gray-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

