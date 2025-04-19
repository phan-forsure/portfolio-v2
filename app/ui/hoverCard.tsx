import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function HoverCards({
  children,
  by,
  title,
}: {
  children: React.ReactNode;
  title: string;
  by: string;
}) {
  return (
    <HoverCard>
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent>
        {title}
        <span className="text-[var(--geist-cyan)] bg-[var(--geist-cyan-dark)]">
          {by}
        </span>
      </HoverCardContent>
    </HoverCard>
  );
}
