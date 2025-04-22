import { experiences } from "./libs/experience";
import Reveal from "./ui/reveal";

export default function Experience() {
  return (
    <Reveal>
      <section className="flex flex-col gap-6 p-[var(--padding)] w-full max-sm:text-center">
        <h2 className="text-5xl font-bold tracking-[-0.02em]">Experience</h2>

        <div className="mt-8 relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-border ml-4 max-sm:hidden"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex gap-8 items-start max-sm:flex-col"
              >
                {/* Timeline point with year */}
                <div className="relative min-w-[120px] text-right max-sm:text-left">
                  <div className="flex items-center max-sm:hidden">
                    <div className="absolute right-[96px] w-4 h-4 rounded-full bg-accent"></div>
                    <span className="font-bold text-lg text-right w-full">
                      {exp.year}
                    </span>
                  </div>
                  <span className="font-bold text-lg sm:hidden">
                    {exp.year}
                  </span>
                </div>

                {/* Experience content */}
                <Reveal>
                  <div className="flex-1 bg-card border border-border p-6 rounded-lg">
                    <span className="text-xl text-[var(--geist-cyan)] bg-[var(--geist-cyan-dark)] cursor-pointer">
                      {exp.project}
                    </span>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-muted-foreground mb-3">{exp.date}</p>
                    <p>{exp.description}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
