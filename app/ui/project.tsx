import { Github, ExternalLink } from "lucide-react";
import Details from "./details";

export default function Project({ project }: { project: Project }) {
  return (
    <div
      key={project.id}
      className="bg-card w-full my-8 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-border"
    >
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={`${project.title} preview`}
          className="w-full object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">
            {project.title}
          </h3>
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground mb-4">{project.description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.longDescription && (
          <Details detail={project.longDescription} />
        )}
      </div>
    </div>
  );
}
