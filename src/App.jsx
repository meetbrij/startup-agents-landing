import './App.css';
import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import ValuePropositions from './components/ValuePropositions';
import AgentTabs from './components/AgentTabs';
import WhyChooseUs from './components/WhyChooseUs';
import InterestForm from './components/InterestForm';

function App() {
  const formRef = useRef(null);

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-gray-900">
      <HeroSection onRegisterClick={handleScrollToForm} />
      <ValuePropositions />
      <AgentTabs />
      <WhyChooseUs />
      <InterestForm ref={formRef} />
    </div>
  );
}

export default App;