"use client";
import Link from "next/link";
import Reveal from "../ui/reveal";
import Tab from "./tab";

export default function About() {
  return (
    <Reveal>
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8 tracking-[-0.02em] max-md:hidden">
          About Me
        </h1>

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
          <Tab />
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
