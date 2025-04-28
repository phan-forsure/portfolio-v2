import {
  Home,
  User,
  Code,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import NavItem from "./navItem";

export default function Nav() {
  return (
    <nav className="navbar fixed max-md:mx-auto max-md:sticky left-6 top-1/2 -translate-y-1/2 z-50 border-2 h-fit rounded-2xl max-md:top-11 max-md:w-fit max-md:h-auto">
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
        </div>
      </div>
    </nav>
  );
}
