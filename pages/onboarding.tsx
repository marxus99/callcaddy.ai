import { useState } from 'react';

export default function Onboarding() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white p-8">
        <div className="max-w-xl text-center space-y-6">
          <h1 className="text-3xl font-bold">Thanks for completing onboarding!</h1>
          <p>We will review your details and reach out shortly.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white py-10">
      <h1 className="text-4xl font-extrabold text-center mb-8">Onboarding</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 px-4">
        <label className="flex flex-col">
          <span>Your Name *</span>
          <input required name="name" className="p-2 rounded bg-gray-200 text-black" />
        </label>
        <label className="flex flex-col">
          <span>Business Email *</span>
          <input required type="email" name="email" className="p-2 rounded bg-gray-200 text-black" />
        </label>
        <button type="submit" className="px-6 py-3 bg-blue-600 rounded text-white hover:bg-blue-700">Continue</button>
      </form>
    </main>
  );
}
