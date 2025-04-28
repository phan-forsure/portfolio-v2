import Link from "next/link";

export default function NavItem({
  href,
  children,
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
