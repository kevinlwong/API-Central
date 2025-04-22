'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react"; // using lucide-react for modern icons

export function HomeButton() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <Link
      href="/"
      aria-label="Back to home"
      title="Home"
      className="hover:scale-105 fixed top-4 left-4 z-50 p-2 rounded-full bg-white dark:bg-black text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 shadow transition"
    >
      <Home className="w-5 h-5" />
    </Link>
  );
}
