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
          <Card src="/icons/nextjs.svg" title="Next.js">
            <span className="font-medium text-lg tracking-tight">Next.js</span>
          </Card>
          <Card src="/icons/react.svg" title="React">
            <span className="font-medium text-lg tracking-tight">React</span>
          </Card>
          <Card src="/icons/tailwind.svg" title="Tailwind CSS">
            <span className="font-medium text-lg tracking-tight">
              Tailwind CSS
            </span>
          </Card>

          <Card src="/icons/typescript.svg" title="TypeScript">
            <span className="font-medium text-lg tracking-tight">
              TypeScript
            </span>
          </Card>
          <Card src="/icons/nodejs.svg" title="Node.js">
            <span className="font-medium text-lg tracking-tight">Node.js</span>
          </Card>

          <Card src="/icons/supabase.svg" title="Supabase">
            <span className="font-medium text-lg tracking-tight">Supabase</span>
          </Card>
          <Card src="/icons/postgresql.svg" title="PostgreSQL">
            <span className="font-medium text-lg tracking-tight">
              PostgreSQL
            </span>
          </Card>
        </div>
      </section>
    </Reveal>
  );
}
