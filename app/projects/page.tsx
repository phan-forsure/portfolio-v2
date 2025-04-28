import Reveal from "../ui/reveal";
import Project from "../ui/project";
import { projectsData } from "../libs/projectsData";
import { smallProjects } from "../libs/smallProjects";

export default function Projects() {
  return (
    <Reveal>
      <section className="py-16 bg-background">
        <Reveal>
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold tracking-[-0.02em] max-sm:text-center">
              My Projects
            </h2>

            <div className="flex flex-wrap">
              {projectsData.map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-[-0.02em] max-sm:text-center">
              Small projects
            </h2>

            <div>
              {smallProjects.map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </Reveal>
  );
}
