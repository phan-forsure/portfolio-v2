import Link from "next/link";

export default function SocialBtn({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <Link
      target={"_blank"}
      href={"https://github.com/phan-forsure/"}
      className="p-4 transition-all bg-accent/70 hover:text-accent-foreground hover:bg-accent rounded-lg border-1 border-transparent hover:border-border"
    >
      {children}
    </Link>
  );
}
