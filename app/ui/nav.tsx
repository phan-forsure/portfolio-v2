import Link from "next/link";
import { Home, User, Code, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

function NavItem({
  href,
  children,
  label,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <Tooltip delayDuration={500}>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className="p-4 bg-accent/70 rounded-sm border-1 border-transparent hover:border-accent-foreground/20 transition-all hover:text-accent-foreground"
        >
          {children}
        </Link>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}

export default function Nav() {
  return (
    <nav className="fixed max-md:sticky left-6 top-1/2 -translate-y-1/2 z-50 border-2 h-[60%] rounded-2xl max-md:top-11 max-md:left-0 max-md:w-full max-md:h-auto">
      <div className="relative">
        <div className="flex flex-col max-md:flex-row items-center gap-2 p-2 bg-background/70 backdrop-blur-xl border border-border/40 rounded-2xl shadow-lg">
          <NavItem href="/" label="Home">
            <Home size={18} />
          </NavItem>
          <NavItem href="/about" label="About">
            <User size={18} />
          </NavItem>
          <NavItem href="/projects" label="Projects">
            <Code size={18} />
          </NavItem>
          <NavItem href="/contact" label="Contact">
            <Mail size={18} />
          </NavItem>
        </div>

        <div className="absolute -right-3 top-0 bottom-0 w-3 bg-gradient-to-r from-background/20 to-transparent rounded-r-lg my-4 blur-sm"></div>
      </div>
    </nav>
  );
}
