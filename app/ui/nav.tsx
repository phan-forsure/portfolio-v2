import Link from "next/link";
import {
  Home,
  User,
  Code,
  Mail,
  Github,
  Linkedin,
  X,
  Twitter,
} from "lucide-react";

function NavItem({
  href,
  children,
  label,
  target,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
  target?: string;
}) {
  return (
    <Link
      target={target}
      href={href}
      className="p-4 bg-accent/70 rounded-sm border-1 border-transparent hover:border-accent-foreground/20 transition-all hover:text-accent-foreground"
    >
      {children}
    </Link>
  );
}

export default function Nav() {
  return (
    <nav className="navbar max-sm:w-full fixed max-md:sticky left-6 top-1/2 -translate-y-1/2 z-50 border-2 h-fit rounded-2xl max-md:top-11 max-md:w-fit max-md:h-auto">
      <div className="relative">
        <div className="flex flex-col overflow-x-scroll justify-between max-md:flex-row items-center gap-2 p-2 bg-background/70 backdrop-blur-xl border border-border/40 rounded-2xl shadow-lg">
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

          <NavItem
            target="_blank"
            href="https://github.com/phan-forsure/"
            label="Github"
          >
            <Github size={18} />
          </NavItem>
          <NavItem
            target="_blank"
            href="https://www.linkedin.com/in/abdulrahman-a-12ab482b7/"
            label="Linkedin"
          >
            <Linkedin size={18} />
          </NavItem>
          <NavItem target="_blank" href="https://x.com/phan__n" label="Twitter">
            <Twitter size={18} />
          </NavItem>
          <NavItem
            target="_blank"
            href="https://codeforces.com/profile/phann_"
            label="Codeforces"
          >
            <Code size={18} />
          </NavItem>
        </div>
      </div>
    </nav>
  );
}
