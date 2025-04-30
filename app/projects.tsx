import Link from "next/link";
import { projects } from "./libs/projects";
import Reveal from "./ui/reveal";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <Reveal>
      <section className="projects flex flex-col gap-8 p-[var(--padding)] py-16 mb-12 max-sm:text-center w-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-5xl font-bold tracking-[-0.02em]">Projects</h2>
          <p className="text-lg opacity-70 tracking-[-0.02em] max-w-xl">
            A collection of my recent work and side projects.
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          {projects.map((project) => (
            <Reveal key={project.name}>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.name}
                className="group project-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border flex flex-col hover:border-accent w-full "
              >
                <div className="relative overflow-hidden  ">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full object-cover  transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    {project.techs?.map((e) => (
                      <div key={e} className="px-2 max-sm:text-sm">
                        {e}
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <ExternalLink className="text-white w-5 h-5" />
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl tracking-[-0.02em] font-semibold mb-2 group-hover:text-[var(--geist-cyan)] transition-colors">
                    {project.name}
                  </h3>
                  <p className="tracking-[-0.02em] text-sm flex-grow">
                    {project.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="github flex flex-wrap gap-6">
          <Reveal>
            <a
              href={"https://github.com/phan-forsure/"}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link group project-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border flex flex-col hover:border-accent w-full h-[150px]"
            >
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl tracking-[-0.02em] font-semibold mb-2 group-hover:text-[var(--geist-cyan)] transition-colors">
                  More on github
                </h3>
                <p className="tracking-[-0.02em] text-sm flex-grow"></p>
              </div>
            </a>
          </Reveal>
        </div>
      </section>
    </Reveal>
  );
}
