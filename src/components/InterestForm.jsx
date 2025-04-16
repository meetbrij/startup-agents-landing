import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function InterestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    stage: '',
    needs: [],
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        needs: checked ? [...prev.needs, value] : prev.needs.filter((n) => n !== value)
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, stage, needs, notes } = formData;
    const { error } = await supabase.from('AGENT SMB LEADS').insert({
      name,
      email,
      stage,
      needs,
      notes
    });
    if (!error) {
      setSubmitted(true);
    } else {
      alert('Error submitting the form. Please try again.');
    }
  };

  return (
    <section id="interest-form" className="py-20 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Let’s Build Your AI Team Together</h2>
      {!submitted ? (
        <>
          <p className="max-w-xl mx-auto mb-10">Tell us about your business. We'll match you with the right AI agents — or build custom ones for you.</p>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid grid-cols-1 gap-4">
            <input name="name" type="text" placeholder="Your Name" className="p-3 border rounded-xl" onChange={handleChange} />
            <input name="email" type="email" placeholder="Email" className="p-3 border rounded-xl" onChange={handleChange} />
            <select name="stage" className="p-3 border rounded-xl" onChange={handleChange}>
              <option>Business Stage</option>
              <option value="Idea">Idea</option>
              <option value="MVP">MVP</option>
              <option value="Live Product">Live Product</option>
              <option value="Scaling">Scaling</option>
            </select>
            <div className="text-left">
              <label className="font-semibold mb-2 block">What do you need help with?</label>
              <div className="flex flex-wrap gap-2">
                {["Strategy", "Content", "Marketing", "Support", "Sales", "Other"].map((option) => (
                  <label key={option} className="inline-flex items-center gap-2">
                    <input type="checkbox" value={option} onChange={handleChange} /> {option}
                  </label>
                ))}
              </div>
            </div>
            <textarea name="notes" placeholder="Tell us about your business (optional)" className="p-3 border rounded-xl" rows={4} onChange={handleChange}></textarea>
            <button type="submit" className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 transition">Register Interest</button>
          </form>
        </>
      ) : (
        <p className="text-xl font-medium text-green-600">Thank you for registering your interest! Please check your email for updates and next steps. 🚀</p>
      )}
    </section>
  );
}