// components/molecules/NavBar.tsx
'use client';

import { useRouter } from 'next/navigation';
import NavLink from "@/components/molecules/NavLink";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { IUser } from '@/interface/IUser';

interface NavBarProps {
  user?: IUser | null;
}

export default function NavBar({ user }: NavBarProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    router.push("/login");
  };

  if (!mounted) return null;

  const isAuthenticated = !!user;

  return (
    <nav className="flex items-center gap-4">
      <NavLink href="/catalogo">
        <MenuIcon />
        Catálogo
      </NavLink>

      {isAuthenticated ? (
        <>
          <NavLink href="/meu-perfil">
            <PersonIcon />
            Meu perfil
          </NavLink>
          <button
            className="text-primary flex items-center gap-1 hover:text-red-400"
            onClick={handleLogout}
          >
            <LogoutIcon />
            Sair
          </button>
        </>
      ) : (
        <NavLink href="/login">
          <LoginIcon />
          Entrar
        </NavLink>
      )}
    </nav>
  );
}
