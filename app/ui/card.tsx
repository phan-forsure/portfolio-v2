import HoverCards from "./hoverCard";

export default function Card({
  children,
  src,
  title,
  desc,
  by,
  link,
}: {
  children: React.ReactNode;
  src: string;
  title: string;
  desc: string;
  by: string;
  link: string;
}) {
  return (
    <div className="card w-full h-44 bg-card rounded-md border-1 border-border hover:border-[var(--border-bright)] hover:bg-[var(--accent-bright)] transition-all">
      <HoverCards
        title={desc}
        by={by}
        link={link}
      >
        <div className="w-full h-full flex items-center justify-center group">
          <div className="flex flex-col items-center justify-center h-full gap-4 opacity-60 group-hover:opacity-100 transition-opacity duration-200">
            <img
              className="p-4 pb-0 w-[100px] h-auto object-contain"
              src={src}
              alt={title}
            />
            {children}
          </div>
        </div>
      </HoverCards>
    </div>
  );
}
