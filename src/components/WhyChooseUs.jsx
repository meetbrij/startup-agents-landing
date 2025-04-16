import React from 'react';

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-gray-50 flex flex-col md:flex-row items-center max-w-6xl mx-auto">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 space-y-2 text-left">
          <li>Human + AI Synergy: Blend automation with your brand voice</li>
          <li>Custom-built Agents: Built for your model, not cookie-cutter tools</li>
          <li>Startup-Friendly Pricing: Pay for what grows your business</li>
        </ul>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img src="./src/assets/why-us.jpeg" alt="Why Choose Us" className="rounded-2xl shadow-xl w-4/5" />
      </div>
    </section>
  );
}