"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "@/lib/axios";

interface AuthState {
  token: string | null;
}

interface AuthCtx extends AuthState {
  login: (u: string, p: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthCtx>({
  token: null,
  login: async () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  //pull from localstorage on first mount
  useEffect(() => {
    const t = localStorage.getItem("jwt");
    if (t) setToken(t);
  }, []);

  async function login(username: string, password: string) {
    try {
      const { data } = await api.post("/login", { username, password });
      localStorage.setItem("jwt", data.access_token);
      setToken(data.access_token);
    } catch (err) {
      console.error("Login failed:", err);
      throw err;
    }
  }

  function logout() {
    localStorage.removeItem("jwt");
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
