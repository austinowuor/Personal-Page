import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-8">
          <p className="text-center text-gray-300 mb-8">
            I'm always interested in hearing about new opportunities, innovative projects, 
            and potential collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="mailto:austinowuor@gmail.com" 
              className="flex items-center gap-3 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
              <Mail className="w-5 h-5" />
              austinowuor@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/austin-owuor-msc/" 
              className="flex items-center gap-3 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
              target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
            <a href="https://github.com/austinowuor" 
              className="flex items-center gap-3 px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
              target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}