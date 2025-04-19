import Card from "./ui/card";
import HoverCards from "./ui/hoverCard";

export default function Technologies() {
  return (
    <section className="flex flex-col gap-6 p-[var(--padding)] w-full">
      <div>
        <h2 className="text-5xl font-bold tracking-[-0.02em]">
          What i work with
        </h2>
      </div>
      <div className="w-full grid grid-cols-3 gap-4 mt-4">
        <HoverCards title="A React Framework built by " by="@vercel">
          <Card src="/icons/nextjs.svg" title="Next.js">
            <span className="font-medium text-lg tracking-tight">Next.js</span>
          </Card>
        </HoverCards>
        <HoverCards title="A Javascript Framework built by " by="@facebook">
          <Card src="/icons/react.svg" title="React">
            <span className="font-medium text-lg tracking-tight">React</span>
          </Card>
        </HoverCards>
        <HoverCards title="A CSS Framework built by " by="@tailwindcss">
          <Card src="/icons/tailwind.svg" title="Tailwind CSS">
            <span className="font-medium text-lg tracking-tight">
              Tailwind CSS
            </span>
          </Card>
        </HoverCards>
        <HoverCards
          title="A Javascript type preprocessor developed by "
          by="@microsoft"
        >
          <Card src="/icons/typescript.svg" title="TypeScript">
            <span className="font-medium text-lg tracking-tight">
              TypeScript
            </span>
          </Card>
        </HoverCards>
        <HoverCards title="A Javascript runtime built by " by="@node">
          <Card src="/icons/nodejs.svg" title="Node.js">
            <span className="font-medium text-lg tracking-tight">Node.js</span>
          </Card>
        </HoverCards>
        <HoverCards
          title="A Postgresql relational database hosted on "
          by="@supabase"
        >
          <Card src="/icons/supabase.svg" title="Supabase">
            <span className="font-medium text-lg tracking-tight">Supabase</span>
          </Card>
        </HoverCards>
        <HoverCards title="A SQL relational database " by="@postgresql">
          <Card src="/icons/postgresql.svg" title="PostgreSQL">
            <span className="font-medium text-lg tracking-tight">
              PostgreSQL
            </span>
          </Card>
        </HoverCards>
      </div>
    </section>
  );
}
