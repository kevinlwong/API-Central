"use client";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/axios";
import { AuthContext } from "@/context/AuthContext";
import { HomeButton } from "@/components/HomeButton";

export default function Dashboard() {
  const { token, logout } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.replace("/login");
      return;
    }

    async function load() {
      try {
        const { data } = await api.get("/protected");
        setMessage(data.msg);
      } catch {
        logout();
        router.replace("/login");
      }
    }

    load();
  }, [token, logout, router]);

  return (
    <main className="transition-colors duration-1000 min-h-screen bg-neutral-50 dark:bg-neutral-900 flex flex-col items-center justify-center px-4 py-24 text-center">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          {message || "Loading..."}
        </p>
        <button
          onClick={logout}
          className="px-6 py-2 text-sm font-medium text-white bg-black hover:bg-neutral-800 rounded-md transition"
        >
          Log out
        </button>
        <HomeButton></HomeButton>
      </div>
    </main>
  );
}
