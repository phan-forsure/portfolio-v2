import Card from "./ui/card";
import HoverCards from "./ui/hoverCard";
import Reveal from "./ui/reveal";

export default function Technologies() {
  return (
    <Reveal>
      <section className="techs flex flex-col gap-6 p-[var(--padding)] py-16 mb-12 max-sm:text-center w-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-5xl font-bold tracking-[-0.02em]">
            What i work with
          </h2>
        </div>
        <div className="w-full grid grid-cols-3 max-sm:grid-cols-2 max-lg:grid-cols-2 gap-4 mt-4">
          <Card src="/icons/nextjs.svg" title="Next.js" desc="A Modern React framework built by " by="@vercel">
            <span className="font-medium text-lg tracking-tight">Next.js</span>
          </Card>
          <Card src="/icons/react.svg" title="React" desc="A JavaScript library for building user interfaces built by " by="@facebook">
            <span className="font-medium text-lg tracking-tight">React</span>
          </Card>
          <Card src="/icons/tailwind.svg" title="Tailwind CSS" desc="A utility-first CSS framework built by " by="@tailwindcss">
            <span className="font-medium text-lg tracking-tight">
              Tailwind CSS
            </span>
          </Card>

          <Card src="/icons/typescript.svg" title="TypeScript" desc="A statically typed programming language that builds on JavaScript built by " by="@microsoft">
            <span className="font-medium text-lg tracking-tight">
              TypeScript
            </span>
          </Card>
          <Card src="/icons/nodejs.svg" title="Node.js" desc="A runtime environment to run JavaScript on servers " by="@nodejs">
            <span className="font-medium text-lg tracking-tight">Node.js</span>
          </Card>

          <Card src="/icons/supabase.svg" title="Supabase" desc="A modern database that hosts PostgreSQL databases " by="@supabase">
            <span className="font-medium text-lg tracking-tight">Supabase</span>
          </Card>
          <Card src="/icons/postgresql.svg" title="PostgreSQL" desc="A powerful, open source object-relational database system " by="@postgresql">
            <span className="font-medium text-lg tracking-tight">
              PostgreSQL
            </span>
          </Card>
          <Card src="/icons/electron.svg" title="Electron" desc="A framework for building cross-platform desktop applications with web technologies " by="@electron">
            <span className="font-medium text-lg tracking-tight">Electron</span>
          </Card>
        </div>
      </section>
    </Reveal>
  );
}
