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
      <section className="pt-36 pb-10 px-6 md:px-8 text-center animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">How It Works</h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          CallCaddy automatically answers your calls, schedules appointments and follows up with leads so you never miss a chance to grow your business.
        </p>
      </section>

      <section className="py-12 md:py-16 px-6 md:px-8 bg-gray-900 animate-fadeIn">
        <div className="container mx-auto max-w-3xl grid gap-12 justify-items-center text-center">
          {steps.map((step, idx) => (
            <div key={step.title} className="transition hover:shadow-lg">
              <div className="text-3xl font-semibold mb-3">{idx + 1}.</div>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                <strong className="block text-white text-2xl mb-1">{step.title}</strong>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 md:px-8 bg-black animate-fadeIn">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Key Benefits</h2>
          <ul className="space-y-2 text-gray-300 list-disc list-inside text-lg md:text-xl">
            {benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6 md:px-8 bg-gray-900 animate-fadeIn">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Why Choose CallCaddy?</h2>
          <ul className="space-y-2 text-gray-300 list-disc list-inside text-lg md:text-xl">
            {reasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-24 px-6 md:px-8 bg-black text-center animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to see it in action?</h2>
        <Link href="/pricing" className="px-8 py-5 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-transform transform hover:scale-105">
          Start Now
        </Link>
      </section>
    </main>
  );
}

