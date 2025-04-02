import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className="text-gray-700 hover:text-blue-500 px-4">
      {children}
    </Link>
  );
}