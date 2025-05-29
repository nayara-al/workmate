// hooks/useAuth.ts
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const USER_COOKIE_KEY = 'user';
const TOKEN_COOKIE_KEY = 'token';

interface AuthUser {
  usuarioId: string;
  nome?: string;
}

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const cookieData = Cookies.get(USER_COOKIE_KEY);
    if (cookieData) {
      try {
        setUser(JSON.parse(cookieData));
      } catch {
        setUser(null);
      }
    }
  }, []);

  function isAuthenticated() {
    return !!Cookies.get(TOKEN_COOKIE_KEY);
  }

  function logout() {
    Cookies.remove(USER_COOKIE_KEY);
    Cookies.remove(TOKEN_COOKIE_KEY);
    setUser(null);
  }

  return {
    user,
    isAuthenticated: isAuthenticated(),
    logout,
  };
}

export function getUserFromCookie(): { usuarioId: string } | null {
  const raw = Cookies.get('user');
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}