import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

export default function HoverCards({
  children,
  by,
  title,
  link,
}: {
  children: React.ReactNode;
  title: string;
  by: string;
  link: string;
}) {
  return (
    <HoverCard>
      <HoverCardTrigger>{children}</HoverCardTrigger>
      <HoverCardContent>
        {title}
        <Link href={link} target="_blank">
          <span className="text-[var(--geist-cyan)] bg-[var(--geist-cyan-dark)]">
            {by}
          </span>
        </Link>
      </HoverCardContent>
    </HoverCard>
  );
}
