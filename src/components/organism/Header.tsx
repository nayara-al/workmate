// components/organism/Header.tsx
import { IUser } from "@/interface/IUser";
import AtomComponent from "../atoms";
import MoleculeComponent from "../molecules";

interface HeaderProps {
  user?: IUser | null;
}

export default function Header({ user }: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-4 h-16 bg-secondary shadow-md">
      <AtomComponent.Logo />
      <div className="flex px-4 gap-4">
        <MoleculeComponent.SearchInput />
        <MoleculeComponent.NavBar user={user} />
      </div>
    </header>
  );
}
