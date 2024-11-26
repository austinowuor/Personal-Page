import React from 'react';

export default function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Incentro Africa",
      period: "2022 - Present",
      description: [
        "Lead development of cloud-native applications using Java, Spring Boot, and GCP",
        "Architect and implement microservices-based solutions",
        "Mentor junior developers and conduct code reviews"
      ]
    },
    {
      title: "Software Engineer",
      company: "Incentro Africa",
      period: "2020 - 2022",
      description: [
        "Developed enterprise applications using Java and Spring Framework",
        "Implemented CI/CD pipelines and automated deployment processes",
        "Collaborated with cross-functional teams on large-scale projects"
      ]
    },
    {
      title: "Software Developer",
      company: "Incentro Africa",
      period: "2019 - 2020",
      description: [
        "Built and maintained web applications using Java and JavaScript",
        "Participated in agile development processes",
        "Contributed to system architecture discussions"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8 hover:transform hover:scale-[1.02] transition">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                <p className="text-gray-500">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}