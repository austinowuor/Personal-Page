import React from 'react';
import { Code2, Cloud, Database, Terminal } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript/TypeScript", "Go"]
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: "Cloud & DevOps",
      skills: ["GCP", "AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: "Databases & Storage",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
    },
    {
      icon: <Terminal className="w-8 h-8 text-blue-400" />,
      title: "Frameworks & Tools",
      skills: ["Spring Boot", "React", "Node.js", "Microservices"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition">
              <div className="flex items-center gap-4 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}