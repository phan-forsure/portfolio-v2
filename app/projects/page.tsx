import Reveal from "../ui/reveal";
import Project from "../ui/project";
import { projectsData } from "../libs/projectsData";

export default function Projects() {
  return (
    <Reveal>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold tracking-[-0.02em] max-sm:text-center">My Projects</h2>

          <div className="flex flex-wrap">
            {projectsData.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
