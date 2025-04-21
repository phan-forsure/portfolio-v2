import Reveal from "./ui/reveal";

export default function Experience() {
  // Experience data with timeline points
  const experiences = [
    {
      year: "2018",
      title: "Junior Developer",
      company: "StartUp Tech",
      description:
        "Contributed to the development of web applications, focusing on frontend components and UI/UX improvements.",
    },
    {
      year: "2019",
      title: "Frontend Developer",
      company: "Creative Web Agency",
      description:
        "Designed and developed user interfaces for client websites. Specialized in responsive design and modern JavaScript frameworks.",
    },
    {
      year: "2021",
      title: "Full Stack Developer",
      company: "Digital Innovations",
      description:
        "Built responsive web applications and RESTful APIs. Worked with React, Node.js, and PostgreSQL in an agile environment.",
    },
    {
      year: "2023",
      title: "Senior Developer",
      company: "Tech Solutions Inc.",
      description:
        "Led development team for multiple client projects, implementing cutting-edge web solutions using Next.js and React.",
    },
  ];

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
                    <span className="font-bold text-lg text-right w-full">{exp.year}</span>
                  </div>
                  <span className="font-bold text-lg sm:hidden">
                    {exp.year}
                  </span>
                </div>

                {/* Experience content */}
                <Reveal>
                  <div className="flex-1 bg-card border border-border p-6 rounded-lg">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-muted-foreground mb-3">{exp.company}</p>
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
