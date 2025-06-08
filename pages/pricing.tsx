import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      startupFee: '$199 one-time',
      price: '$299/mo',
      volume: '50 voice calls or 150 chats',
      overage: '$4 / call, $0.08 / msg',
      feature: 'Done-for-you setup',
    },
    {
      name: 'Growth',
      startupFee: '$399 one-time',
      price: '$899/mo',
      volume: '250 calls + unlimited chat',
      overage: '$3 / call',
      feature: 'Custom prompt tuning',
    },
    {
      name: 'Scale',
      startupFee: '$799 one-time',
      price: '$2,499/mo',
      volume: '1,000 calls + multi-location',
      overage: '$2.50 / call',
      feature: 'Dedicated success manager + analytics',
    },
    {
      name: 'Enterprise',
      startupFee: 'Custom',
      price: 'Custom',
      volume: 'Built to your needs',
      overage: 'N/A',
      feature: 'Outcome-based pricing, SLAs, on-prem options',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white py-16">
      <h1 className="text-4xl font-extrabold text-center mb-12">Pricing Plans</h1>
      <div className="container mx-auto grid gap-8 md:grid-cols-4 px-4">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col">
            <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-3xl font-bold mb-2">{plan.startupFee}</p>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-6 space-y-1 text-gray-300 flex-grow">
              <li><strong>Volume:</strong> {plan.volume}</li>
              <li><strong>Overage:</strong> {plan.overage}</li>
              <li><strong>Feature:</strong> {plan.feature}</li>
            </ul>
            <Link href="/contact">
              <a className="mt-auto block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                {plan.name === 'Enterprise' ? 'Contact Us' : `Choose ${plan.name}`}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

