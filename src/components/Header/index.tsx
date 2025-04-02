import Logo from "./Logo";
import NavBar from "./NavBar";


type HeaderProps = {
  isAuthenticated: boolean;
};

export default function Header({ isAuthenticated }: HeaderProps) {
  return (
    <header className="flex justify-between items-center p-4 bg-primary shadow-md">
      <Logo />
      <NavBar isAuthenticated={isAuthenticated} />
    </header>
  );
}