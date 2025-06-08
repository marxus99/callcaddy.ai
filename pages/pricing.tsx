import Link from 'next/link';

export default function Pricing() {
  const plans = [
    { name: 'Starter', price: '$99/mo', features: ['500 calls', 'Basic AI flows'] },
    { name: 'Business', price: '$199/mo', features: ['2,000 calls', 'Custom AI flows'] },
    { name: 'Enterprise', price: 'Contact Us', features: ['Unlimited calls', 'Dedicated support'] },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-12">Pricing Plans</h1>
      <div className="container mx-auto grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-6 space-y-2 text-gray-600">
              {plan.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <Link href="/how-it-works">
              <a className="block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Choose {plan.name}
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/">
          <a className="underline text-blue-600 hover:text-blue-800">Back to Home</a>
        </Link>
      </div>
    </main>
  );
}

