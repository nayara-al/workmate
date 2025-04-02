import NavLink from "@/components/Header/NavLink";

type NavBarProps = {
  isAuthenticated: boolean;
};

export default function NavBar({ isAuthenticated }: NavBarProps) {
  return (
    <nav className="flex space-x-4">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/catalog">Catálogo</NavLink>
      {isAuthenticated ? (
        <>
          <NavLink href="/profile">Meu Perfil</NavLink>
          <button className="text-red-500 hover:text-red-700">Sair</button>
        </>
      ) : (
        <NavLink href="/login">Entrar</NavLink>
      )}
    </nav>
  );
}