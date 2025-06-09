import Link from 'next/link';

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 md:py-24">
      <div className="container mx-auto space-y-16 px-4">
        <h1 className="text-4xl font-extrabold text-center">How It Works</h1>
        <ol className="space-y-8 list-decimal list-inside text-lg text-gray-700">
          <li>
            <strong>Integration:</strong> Connect CallCaddy.ai to your phone system and calendar.
          </li>
          <li>
            <strong>Agent Training:</strong> Customize conversational flows for your brand.
          </li>
          <li>
            <strong>Go Live:</strong> We answer calls day or night, book appointments, and follow up.
          </li>
        </ol>
        <div className="text-center">
          <Link href="/">
            <a className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Back to Home
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}

