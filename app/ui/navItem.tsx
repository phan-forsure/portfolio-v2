import Link from "next/link";

export default function NavItem({
  href,
  children,
  target,
}: {
  href: string;
  children?: React.ReactNode;
  target?: string;
}) {
  return (
    <Link
      target={target}
      href={href}
      className="p-1 transition-all hover:text-accent-foreground opacity-50 hover:opacity-100 flex items-center gap-2"
    >
      {children}
    </Link>
  );
}
