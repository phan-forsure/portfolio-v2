import Link from "next/link";
import { Home, User, Code, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Tooltip delayDuration={500}>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className="p-4 bg-accent/70 rounded-sm border-1 border-transparent hover:border-accent-foreground/20 transition-all hover:text-accent-foreground"
        >
          {icon}
        </Link>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}

export default function Nav() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 border-2 h-[60%] rounded-2xl">
      <div className="relative">
        {/* Dock-style navigation */}
        <div className="flex flex-col items-center gap-2 p-2 bg-background/70 backdrop-blur-xl border border-border/40 rounded-full shadow-lg">
          <NavItem href="/" icon={<Home size={18} />} label="Home" />
          <NavItem href="/about" icon={<User size={18} />} label="About" />
          <NavItem
            href="/projects"
            icon={<Code size={18} />}
            label="Projects"
          />
          <NavItem href="/contact" icon={<Mail size={18} />} label="Contact" />
        </div>

        {/* Side reflection effect */}
        <div className="absolute -right-3 top-0 bottom-0 w-3 bg-gradient-to-r from-background/20 to-transparent rounded-r-lg my-4 blur-sm"></div>
      </div>
    </div>
  );
}
