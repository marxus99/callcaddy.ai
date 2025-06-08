// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      title: 'AI-Powered Calls',
      desc: 'Our AI answers every call with natural, human-like speech recognition and routes leads instantly.',
    },
    {
      title: 'Instant Scheduling',
      desc: 'Seamlessly book appointments into your calendar in real time—no more dropped or missed leads.',
    },
    {
      title: 'Huge Cost Savings',
      desc: 'Eliminate after-hours labor costs—save up to 80% while increasing conversions.',
    },
  ];

  return (
    <>
      <Head>
        <title>CallCaddy.ai • 24/7 AI Receptionist for Small Business</title>
        <meta
          name="description"
          content="Never miss a call again—our AI receptionist answers, qualifies, and books appointments day or night."
        />
      </Head>

      <main className="bg-black text-white min-h-screen flex flex-col pt-16 md:pt-24 pb-16 md:pb-24">
        {/* Hero */}
        <section className="flex-grow flex items-center justify-center">
          <div className="text-center space-y-6 px-6 max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Meet Your 24/7 AI Call Caddy
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Never miss another call—our AI receptionist answers, qualifies, and books your appointments,
              day or night, so you can focus on what matters: growing your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/how-it-works">
                <a className="w-full sm:w-auto text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium">
                  How It Works
                </a>
              </Link>
              <Link href="/pricing">
                <a className="w-full sm:w-auto text-center px-6 py-3 border border-white hover:bg-white hover:text-black rounded-full font-medium">
                  View Pricing
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6">
          <div className="container mx-auto grid gap-8 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-gray-800 p-8 md:p-10 rounded-lg flex flex-col h-full"
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">{f.title}</h3>
                <p className="text-base md:text-lg text-gray-400 flex-grow leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About / What / How */}
        <section className="px-6">
          <div className="container mx-auto max-w-3xl space-y-12 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                We’re a team of AI innovators and customer-experience pros dedicated to ensuring
                every call your business receives is answered professionally—no matter the hour.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Our 24/7 AI receptionist handles calls, qualifies leads, and books appointments
                right into your calendar—boosting revenue and cutting overhead without you lifting
                a finger.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
              <ol className="list-decimal list-inside text-base md:text-lg text-gray-300 space-y-3 leading-relaxed text-left md:text-center">
                <li>
                  <strong>Integrate:</strong> Connect your phone system and calendar in just minutes.
                </li>
                <li>
                  <strong>Customize:</strong> Tailor call flows and FAQs to match your brand voice.
                </li>
                <li>
                  <strong>Go Live:</strong> Our AI answers, qualifies, and schedules calls—all day,
                  every day.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
              Ready to transform your front desk?
            </h2>
            <Link href="/contact">
              <a className="w-full sm:w-auto inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium">
                Get Started
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

