import Link from "next/link";
import AtomComponent from "../atoms";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <AtomComponent.Button variant="primary" className="min-w-64">
      <Link href={href} className="text-secondary hover:text-black flex items-center justify-center gap-1">
        {children}
      </Link>
    </AtomComponent.Button>
  );
}