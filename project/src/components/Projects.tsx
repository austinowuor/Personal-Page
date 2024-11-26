import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Cloud-Native E-commerce Platform",
      description: "Microservices-based e-commerce solution built with Spring Boot and deployed on GCP Kubernetes Engine.",
      tech: ["Java", "Spring Boot", "GCP", "Kubernetes"],
      github: "#",
      live: "#"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Analytics platform processing millions of events daily using Apache Kafka and Elasticsearch.",
      tech: ["Python", "Kafka", "Elasticsearch", "React"],
      github: "#",
      live: "#"
    },
    {
      title: "Enterprise Resource Planning System",
      description: "Comprehensive ERP solution for medium-sized businesses with modular architecture.",
      tech: ["Java", "Spring", "PostgreSQL", "Docker"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-gray-400 hover:text-white transition">
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}