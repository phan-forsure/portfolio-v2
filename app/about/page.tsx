"use client";
import Link from "next/link";
import { useState } from "react";
import Reveal from "../ui/reveal";

export default function About() {
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
    <Reveal>
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8 tracking-[-0.02em] max-md:hidden">About Me</h1>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] max-md:text-4xl">
                Abdulrahman
              </h2>
              <p className="opacity-50 tracking-[-0.02em]">
                Software Developer
              </p>
              <div className="flex justify-center md:justify-start gap-4 mt-4">
                <Link
                  href="https://github.com/phan-forsure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-50 hover:opacity-100 transition-all"
                >
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com/in/https:/www.linkedin.com/in/abdulrahman-a-12ab482b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-50 hover:opacity-100 transition-all"
                >
                  LinkedIn
                </Link>
                <Link
                  href="mailto:phantommy38@gmail.com"
                  className="opacity-50 hover:opacity-100 transition-all"
                >
                  Email
                </Link>
              </div>
            </div>
          </div>

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
                    Hello! I'm a web developer. With a background in web
                    development and a keen eye for design i enjoy creating
                    responsive and user-friendly applications.
                  </p>
                  <p className="mb-4">
                    I started learning in 2023 Since then, I've been focused on
                    mastering modern web technologies like React, Next.js, and
                    TypeScript.
                  </p>
                  <p>
                    When I'm not coding, you can find me learning foreign
                    languages and listening to music or on a morning run! I'm
                    always looking to learn new technologies and improve my
                    skills as a developer.
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
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="mb-6">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <Link
            href="mailto:your.email@example.com"
            className="inline-block bg-accent px-6 py-3 rounded border-2 border-accent hover:border-border transition"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </Reveal>
  );
}
