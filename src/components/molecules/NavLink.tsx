import Link from "next/link";
import AtomComponent from "../atoms";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className="">
      <AtomComponent.Button variant="primary" className="min-w-64 cursor-pointer flex items-center justify-center gap-1 text-secondary hover:text-black ">
        {children}
      </AtomComponent.Button>
    </Link>
  );
}