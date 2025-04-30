import Reveal from "./ui/reveal";
import Techs from "./ui/techs";

export default function Technologies() {
  return (
    <Reveal>
      <section className="techs flex flex-col gap-6 p-[var(--padding)] py-16 mb-12 max-sm:text-center w-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-5xl font-bold tracking-[-0.02em]">
            What i work with
          </h2>
        </div>
        <div className="w-full grid grid-cols-3 grid-rows-3 max-sm:grid-cols-2 max-lg:grid-cols-2 gap-4 mt-4">
          <Techs />
        </div>
      </section>
    </Reveal>
  );
}
