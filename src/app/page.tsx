import { ThemeToggle } from "@/components/ThemeToggle";

export default function HomePage() {
  return (
    <main className="transition-colors duration-1000 min-h-screen bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Welcome to API Central
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg">
          A full-stack authentication flow with FastAPI and Next.js
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/login"
            className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium shadow-md hover:bg-neutral-800 transition"
          >
            Log in
          </a>
          <a
            href="/dashboard"
            className="px-6 py-3 border dark:hover:bg-neutral-800 dark:text-white dark:border-neutral-600 border-neutral-300 rounded-full text-sm font-medium text-black hover:bg-neutral-100 transition"
          >
            Dashboard
          </a>
        </div>
      </div>
      <ThemeToggle />
    </main>
  );
}
