import React, { useState } from 'react';

const agentRoles = {
  Strategy: ["Business Coach AI", "Market Research AI"],
  Marketing: ["Blog Generator AI", "SEO Optimizer AI", "Email Campaign AI"],
  Support: ["AI Helpdesk", "WhatsApp Bot", "FAQ Generator AI"],
  Sales: ["Cold Email AI", "CRM Assistant AI"],
  Operations: ["Finance Tracker AI", "Meeting Summarizer AI"]
};

export default function AgentTabs() {
  const [activeTab, setActiveTab] = useState('Strategy');

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">What Can AI Agents Do for You?</h2>
      <div className="flex justify-center flex-wrap gap-4 mb-6">
        {Object.keys(agentRoles).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full font-semibold transition ${activeTab === tab ? 'bg-indigo-600 font-bold text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>
      <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded-xl text-left">
        <ul className="list-disc pl-5">
          {agentRoles[activeTab].map((role, idx) => (
            <li key={idx}>{role}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
