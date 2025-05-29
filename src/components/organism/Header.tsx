import AtomComponent from "../atoms";
import MoleculeComponent from "../molecules";

type HeaderProps = {
  isAuthenticated: boolean;
};

export default function Header({ isAuthenticated }: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-4 h-16 bg-secondary shadow-md">
      <AtomComponent.Logo />
      <div className="flex px-4 gap-4">
        {isAuthenticated ?(<MoleculeComponent.SearchInput />):null}
        <MoleculeComponent.NavBar />
      </div>
    </header>
  );
}
