import { Hero } from "./hero";
import Experience from "./experience";
import Technologies from "./technologies";
import Projects from "./projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Technologies />
      <Experience />
      <Projects />
    </>
  );
}
