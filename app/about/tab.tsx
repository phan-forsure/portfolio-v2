"use client";
import { useState } from "react";

export default function Tab() {
  const [activeTab, setActiveTab] = useState("background");

  const skills = [
    { name: "React" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "CSS/Tailwind" },
    { name: "Node.js" },
  ];

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Henji",
      period: "Feb 2025",
      description:
        "Built a social media app working on a team of 2 with my friend.",
    },
    {
      title: "Fullstack developer",
      company: "Workflow",
      period: "Nov 2023",
      description: "Built a notes application by myself. Learned a lot",
    },
  ];

  return (
    <div className="md:w-2/3">
      <div className="mb-6">
        <div className="flex border-b mb-4">
          <button
            className={`py-2 px-4 ${
              activeTab === "background"
                ? "border-b-2 border-black font-medium"
                : "opacity-50"
            } cursor-pointer transition-all hover:opacity-100`}
            onClick={() => setActiveTab("background")}
          >
            Background
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "skills"
                ? "border-b-2 border-black font-medium"
                : "opacity-50"
            } cursor-pointer transition-all hover:opacity-100`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "experience"
                ? "border-b-2 border-black font-medium"
                : "opacity-50"
            } cursor-pointer transition-all hover:opacity-100`}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>
        </div>

        {activeTab === "background" && (
          <div>
            <p className="mb-4">
              Hello! I'm a web developer. With a background in web development
              and a keen eye for design i enjoy creating responsive and
              user-friendly applications.
            </p>
            <p className="mb-4">
              I started learning in 2023 Since then, I've been focused on
              mastering modern web technologies like React, Next.js, and
              TypeScript.
            </p>
            <p>
              When I'm not coding, you can find me learning foreign languages
              and listening to music or on a morning run! I'm always looking to
              learn new technologies and improve my skills as a developer.
            </p>
          </div>
        )}

        {activeTab === "skills" && (
          <div>
            <p className="mb-4">
              Here are some technologies and tools I've been working with:
            </p>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index}>
                <h3 className="text-xl font-medium">{exp.title}</h3>
                <p className="opacity-50">
                  {exp.company} | {exp.period}
                </p>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
