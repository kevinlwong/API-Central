import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="transition-colors duration-1000 min-h-screen bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Welcome to API Central
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-xl mb-2">
          All Your Favorite APIs In One Place
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-10">
          Build. Test. Explore.
        </p>

        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Link
            href="/login"
            className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium shadow-md hover:bg-neutral-800 transition"
          >
            Log in
          </Link>
          <Link
            href="/dashboard"
            className="px-6 py-3 border dark:hover:bg-neutral-800 dark:text-white dark:border-neutral-600 border-neutral-300 rounded-full text-sm font-medium text-black hover:bg-neutral-100 transition"
          >
            Dashboard
          </Link>
          <Link
            href="/showcase"
            className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium shadow-md hover:bg-neutral-800 transition"
          >
            API Showcase
          </Link>
        </div>
      </div>
      <ThemeToggle />
    </main>
  );
}
