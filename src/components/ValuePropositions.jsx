import React from 'react';

const cards = [
  { title: "Startup-Ready", text: "Agents tailored for early-stage founders and lean teams." },
  { title: "SMB-Focused", text: "Perfect for marketing, customer support, and ops in growing companies." },
  { title: "No-Code Friendly", text: "Easily deploy via Airtable, Notion, Zapier, and n8n." },
  { title: "Workflow-Based", text: "Custom AI workflows built around your goals." },
  { title: "Affordable", text: "Enterprise-grade automation at startup-friendly pricing." },
  { title: "Custom-Tailored", text: "We match agents to your industry, size, and growth stage." }
];

export default function ValuePropositions() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Why AI Agents Are a Game-Changer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((item, idx) => (
          <div key={idx} className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}