import React from 'react';

export default function HeroSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById('interest-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-purple-700 via-indigo-800 to-black text-white py-24 px-6 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Build Your Dream Team of AI Agents — <br className="hidden sm:inline" /> No Hiring Needed.
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-200">
          Unlock enterprise-grade capabilities with affordable AI agents tailored for <strong>startups</strong>, <strong>solopreneurs</strong>, and <strong>small businesses</strong>.
        </p>
        <button
          onClick={scrollToForm}
          className="bg-white text-indigo-800 font-semibold px-6 py-3 rounded-xl shadow-xl hover:bg-gray-200 transition"
        >
          🚀 Register Your Interest
        </button>
      </div>

      {/* Background Visual or Illustration (Optional) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none select-none">
        <img 
          src="/images/hero-bg-1.jpeg" 
          alt="Decorative AI Graphic" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}