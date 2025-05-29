'use client';

import { useRouter } from 'next/navigation';
import NavLink from "@/components/molecules/NavLink";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import { isAuthenticated, logout } from '@/service/authService';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const router = useRouter();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(isAuthenticated());
  }, []);

  const handleLogout = () => {
    logout();
    setAuth(false);
    router.push('/login');
  };

  return (
    <nav className="flex items-center gap-4">
      <NavLink href="/catalogo">
        <MenuIcon />
        Catálogo
      </NavLink>

      {auth ? (
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
