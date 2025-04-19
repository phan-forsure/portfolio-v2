import { Hero } from "./hero";
import Experience from "./experience";
import Technologies from "./technologies";

export default function Home() {
  return (
    <main className="main-content font-sans px-72 max-md:px-0 max-[1200px]:px-48 py-8 flex flex-wrap justify-center">
      <Hero />
      <Technologies />
      <Experience />
    </main>
  );
}
