import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to CallCaddy.ai</h1>
        <p className="text-lg text-gray-600 mb-8">
          24/7 AI receptionist that books appointments, answers FAQs, and drives revenue.
        </p>
        <Link href="/how-it-works">
          <a className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            How It Works
          </a>
        </Link>
      </section>

      {/* Preview Sections */}
      <section className="py-16 container mx-auto grid gap-12 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">AI-Powered Calls</h2>
          <p className="text-gray-600">Instantly answer and route calls with human-like fluency.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Seamless Scheduling</h2>
          <p className="text-gray-600">Auto-book appointments into your calendar.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Cost-Efficient</h2>
          <p className="text-gray-600">Lower backend spend and boost your margins.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-12">
        <h3 className="text-3xl font-bold mb-4">Ready to elevate your customer experience?</h3>
        <Link href="/pricing">
          <a className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100">
            View Pricing
          </a>
        </Link>
      </section>
    </main>
  );
}

