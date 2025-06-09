import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      title: "Connect",
      desc: "Sync your existing phone number and calendar in just a few minutes—no new hardware required.",
    },
    {
      title: "Train",
      desc: "We craft call flows and responses that match your brand so every caller receives a familiar experience.",
    },
    {
      title: "Launch",
      desc: "Our AI receptionist answers every call 24/7, books appointments, and follows up automatically.",
    },
  ];

  return (
    <main className="bg-black text-white font-sans">
      <section className="pt-36 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">How It Works</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          From setup to your first booked appointment, putting CallCaddy.ai to work is fast and effortless.
        </p>
      </section>

      <section className="py-12 md:py-16 px-6 bg-gray-900">
        <div className="container mx-auto max-w-3xl space-y-12">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex gap-6">
              <div className="text-3xl font-semibold shrink-0">{idx + 1}.</div>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                <strong className="block text-white text-2xl mb-1">{step.title}</strong>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24 px-6 bg-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to see it in action?</h2>
        <Link href="/pricing">
          <a className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition">
            Get Started
          </a>
        </Link>
      </section>
    </main>
  );
}

