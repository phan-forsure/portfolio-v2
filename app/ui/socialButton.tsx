import Link from "next/link";

export default function SocialBtn({
  children,
  link,
}: {
  children?: React.ReactNode;
  link: string;
}) {
  return (
    <Link
      target={"_blank"}
      href={link}
      className="p-4 transition-all bg-accent/70 hover:text-accent-foreground hover:bg-accent rounded-lg border-1 border-transparent hover:border-border"
    >
      {children}
    </Link>
  );
}
