import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-6">
              Hi, I'm Austin Owuor
              <span className="block text-blue-400 mt-2">Software Engineer & Cloud Architect</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              MSc in Computer Science graduate specializing in cloud architecture, 
              distributed systems, and enterprise software development.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://github.com/austinowuor" 
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/austin-owuor-msc/" 
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:austinowuor@gmail.com" 
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition">
                <Mail className="w-6 h-6" />
              </a>
              <a href="/resume.pdf" 
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition">
                <Download className="w-5 h-5" />
                Resume
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}