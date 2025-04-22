"use client";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { HomeButton } from "@/components/HomeButton";

export default function Login() {
  const { login } = useContext(AuthContext);
  const router = useRouter();
  const [user, setUser] = useState("kevin");
  const [pass, setPass] = useState("muaythai");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await login(user, pass);
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setMsg("Invalid credentials");
    }
  }

  return (
    <main className="transition-colors duration-1000 min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white dark:bg-neutral-800 shadow-md rounded-xl p-6 space-y-4"
      >
        <h1 className="text-2xl font-semibold text-center text-neutral-900 dark:text-white">
          Log in
        </h1>

        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Username"
          className="w-full px-4 py-2 border rounded-md bg-neutral-100 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md bg-neutral-100 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        />

        {msg && <p className="text-sm text-red-500">{msg}</p>}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-black text-white text-sm font-medium rounded-md hover:bg-neutral-800 transition"
        >
          Log in
        </button>
        <HomeButton />
      </form>
    </main>
  );
}
