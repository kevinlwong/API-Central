"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function HomeButton() {
  const pathname = usePathname();

  //avoid showing on home itself
  if (pathname == "/") return null;

  return (
    <div className="mt-6 text-center">
      <Link
        href={"/"}
        className="inline-block px-5 py-2 rounded-md text-sm font-medium text-white bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
