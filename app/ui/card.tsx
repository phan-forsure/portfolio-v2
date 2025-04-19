export default function Card({
  children,
  src,
  title,
}: {
  children: React.ReactNode;
  src: string;
  title: string;
}) {
  return (
    <div className="card w-full h-44 bg-card rounded-md border-1 border-border hover:border-[var(--geist-cyan-dark)] transition-all">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <img
            className="p-4 pb-0 w-[100px] h-auto object-contain"
            src={src}
            alt={title}
          />
          {children}
        </div>
      </div>
    </div>
  );
}
