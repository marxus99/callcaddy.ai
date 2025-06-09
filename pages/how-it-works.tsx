import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      title: "Connect",
      desc:
        "Link your existing phone line and calendar—there's no new hardware or complicated setup.",
    },
    {
      title: "Customize",
      desc: "We craft call flows and responses that sound just like you so every caller receives a familiar experience.",
    },
    {
      title: "Launch",
      desc:
        "Your AI receptionist answers around the clock, books appointments, and follows up automatically.",
    },
    {
      title: "Grow",
      desc: "Track call activity and fine-tune scripts to keep conversions climbing.",
    },
  ];

  const benefits = [
    "Save hours of phone tag every week",
    "Capture leads even when you're off the clock",
    "Increase bookings with instant scheduling",
    "Automate follow-ups so no opportunity slips through",
  ];

  const reasons = [
    "Human-like AI conversations that build trust",
    "Done-for-you setup and friendly support",
    "Built specifically for service businesses",
    "Reliable 24/7 coverage at a fraction of the cost of staffing",
  ];

  return (
    <main className="bg-black text-white font-sans">
      <section className="pt-36 pb-10 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">How It Works</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          CallCaddy automatically answers your calls, schedules appointments and follows up with leads so you never miss a chance to grow your business.
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

      <section className="py-12 px-6 bg-black">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Key Benefits</h2>
          <ul className="space-y-2 text-gray-300 list-disc list-inside">
            {benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6 bg-gray-900">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Why Choose CallCaddy?</h2>
          <ul className="space-y-2 text-gray-300 list-disc list-inside">
            {reasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
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

