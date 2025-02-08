import React from 'react';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ContactSection from './ContactSection';

function About() {
  return (
    <div className="container mx-auto p-4">
      <nav className="flex justify-around bg-gray-800 text-white py-4">
        <button className="hover:underline">About</button>
        <button className="hover:underline">Experience</button>
        <button className="hover:underline">Contact</button>
      </nav>
      <div className="mt-8">
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default About;
