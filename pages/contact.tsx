import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Contact() {
  const router = useRouter();
  const { plan } = router.query;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white p-8">
        <div className="max-w-xl text-center space-y-6">
          <h1 className="text-3xl font-bold">Thanks for reaching out!</h1>
          <p>We&apos;ll call you within 2 business hours to finish setup.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white py-10">
      <h1 className="text-4xl font-extrabold text-center mb-8">Start Now</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 px-4 md:px-8 animate-fadeIn">
        <input type="hidden" name="package" value={typeof plan === 'string' ? plan : ''} />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <div className="flex flex-col space-y-2">
            <label className="flex flex-col">
              <span>Full Name *</span>
              <input
                required
                name="fullName"
                className="p-2 rounded bg-gray-200 text-black"
              />
            </label>
            <label className="flex flex-col">
              <span>Business Email *</span>
              <input
                required
                type="email"
                name="email"
                className="p-2 rounded bg-gray-200 text-black"
              />
            </label>
            <label className="flex flex-col">
              <span>Phone Number *</span>
              <input
                required
                name="phone"
                className="p-2 rounded bg-gray-200 text-black"
              />
            </label>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Company Details</h2>
          <div className="flex flex-col space-y-2">
            <label className="flex flex-col">
              <span>Company Name *</span>
              <input
                required
                name="company"
                className="p-2 rounded bg-gray-200 text-black"
              />
            </label>
            <label className="flex flex-col">
              <span>Website URL</span>
              <input
                type="url"
                name="website"
                className="p-2 rounded bg-gray-200 text-black"
              />
            </label>
            <label className="flex flex-col">
              <span>Industry</span>
              <input
                name="industry"
                className="p-2 rounded bg-gray-200 text-black"
                placeholder="e.g. Residential Plumbing"
              />
            </label>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Usage Estimates</h2>
          <div className="flex flex-col space-y-2">
            <label className="flex flex-col">
              <span>Approx. Monthly Call Volume</span>
              <select name="volume" className="p-2 rounded bg-gray-200 text-black">
                <option value="< 100">&lt; 100</option>
                <option value="100-500">100–500</option>
                <option value="500-1,000">500–1,000</option>
                <option value="> 1,000">1,000+</option>
              </select>
            </label>
            <label className="flex flex-col">
              <span># of Locations or Technicians</span>
              <input name="locations" className="p-2 rounded bg-gray-200 text-black" />
            </label>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Integration Preferences</h2>
          <div className="flex flex-col space-y-2">
            <div>
              <p className="mb-1">Calendar Platform</p>
              <label className="mr-4">
                <input type="radio" name="calendar" value="Google Calendar" className="mr-1" defaultChecked /> Google Calendar
              </label>
              <label className="mr-4">
                <input type="radio" name="calendar" value="Office 365" className="mr-1" /> Office 365
              </label>
              <label>
                <input type="radio" name="calendar" value="Other" className="mr-1" /> Other
              </label>
            </div>
            <label className="flex flex-col">
              <span>CRM or Helpdesk</span>
              <input
                name="crm"
                className="p-2 rounded bg-gray-200 text-black"
                placeholder="HubSpot, Salesforce, etc."
              />
            </label>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Kickoff Scheduling</h2>
          <input type="date" name="kickoff" className="p-2 rounded bg-gray-200 text-black" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Additional Requirements or Questions</h2>
          <textarea
            name="notes"
            className="p-2 w-full rounded bg-gray-200 text-black"
            rows={4}
          ></textarea>
        </section>

        <section className="flex items-center space-x-2">
          <input id="optin" type="checkbox" required className="" />
          <label htmlFor="optin" className="text-sm">
            I agree to receive setup emails and reminders
          </label>
        </section>
        <p className="text-sm">
          <a href="/terms" className="underline" target="_blank" rel="noopener noreferrer">Terms &amp; Privacy</a>
        </p>
        <button type="submit" className="w-full px-6 py-5 bg-blue-600 rounded text-white hover:bg-blue-700 transition-transform transform hover:scale-105">Start Now</button>
      </form>
    </main>
  );
}
