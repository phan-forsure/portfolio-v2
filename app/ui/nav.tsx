import NavItem from "./navItem";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Nav() {
  return (
    <nav className="navbar bg-background/50 max-sm:text-sm flex gap-5 justify-center items-center fixed w-full backdrop-blur-xl z-40 border border-border/40 shadow-lg p-2">
      <div className="flex overflow-x-scroll w-fit justify-center items-center gap-5">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
            ].map((item: CommandItemType) => (
              <NavItem key={item.name} href={item.path}>
                <h2>{item.name}</h2>
              </NavItem>
            ))}
      </div>
      <div className="max-sm:hidden">
        <p
          className={`${geistMono.className} bg-[var(--geist-cyan-dark)] text-[var(--geist-cyan)] rounded-md flex items-center p-2 text-sm font-semibold`}
        >
          CTRL + K
        </p>
      </div>
    </nav>
  );
}
