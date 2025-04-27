import React from "react";

const internships = [
  {
    company: "Research Centre Imarat (RCI) – DRDO",
    role: "Intern",
    period: "Apr 2023 – Jun 2023",
    description: [
      "Worked on signal processing techniques related to defense communication systems.",
      "Analyzed wireless sensor network vulnerabilities and proposed ML-based improvements.",
      "Collaborated with a team of researchers on performance testing of secure protocols.",
    ],
  },
  {
    company: "Cognifyz Technologies",
    role: "Data Analyst Intern",
    period: "Sep 2024 – Oct 2024",
    description: [
      "Collected, cleaned, and analyzed datasets using Python, Pandas, and Matplotlib.",
      "Built dashboards and data visualizations to showcase insights from business datasets.",
      "Presented findings to the team and contributed to real-time data-driven decision-making.",
    ],
  },
];

const Internships = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-8 border-b-4 border-indigo-500 inline-block">
        Internships
      </h2>

      {internships.map((intern, index) => (
        <div
          key={index}
          className="mb-8 p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition"
        >
          <h3 className="text-2xl font-semibold text-indigo-700">
            {intern.company}
          </h3>
          <p className="text-gray-600 italic mb-2">
            {intern.role} | {intern.period}
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            {intern.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Internships;

