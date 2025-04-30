"use client";

import Reveal from "./ui/reveal";
import Techs from "./ui/techs";
import { useRef } from "react";

export default function Technologies() {
  const cardsRef = useRef<HTMLDivElement>(null);
  return (
    <Reveal>
      <section className="techs flex flex-col gap-6 p-[var(--padding)] py-16 mb-12 max-sm:text-center w-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-5xl font-bold tracking-[-0.02em]">
            What i work with
          </h2>
        </div>
        <div
          ref={cardsRef}
          style={{
            gridTemplateRows: `repeat(3, minmax(0, 1fr))`,
            gridTemplateColumns: `repeat(3, minmax(0, 1fr))`,
          }}
          className="w-full grid grid-cols-3 grid-rows-3 max-sm:grid-cols-2 max-lg:grid-cols-2 gap-4 mt-4"
        >
          <Techs ref={cardsRef}/>
        </div>
      </section>
    </Reveal>
  );
}
