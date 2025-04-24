import Reveal from "./ui/reveal";

export function Hero() {
  return (
    <Reveal>
      <section className="hero flex flex-col justify-center gap-6 p-[var(--padding)] max-sm:items-center border-b-2 border-border h-96">
        <h1 className="text-5xl font-bold tracking-[-0.02em]">Abdulrahman</h1>
        <p className="text-2xl max-sm:text-xl font-medium tracking-[-0.01em] text-muted-foreground max-sm:text-center max-sm:p-4">
          I'm a{" "}
          <span className="text-[var(--geist-cyan)] bg-[var(--geist-cyan-dark)]">
            software developer
          </span>{" "}
          who has been programming for 2 years and still ambitious to learning
          new things everyday
        </p>
      </section>
    </Reveal>
  );
}
