"use client";

import { useEffect, useState } from "react";

interface APICardProps {
  title: string;
  fetcher: () => Promise<unknown>;
}

export function APICard({ title, fetcher }: APICardProps) {
  const [data, setData] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetcher();
      setData(result);
    } catch (err) {
      console.error(err); // logs error for debugging
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-sm bg-white dark:bg-neutral-800 transition-colors duration-300">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>

      {loading && <p className="text-sm text-neutral-500">Loading...</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}
      {!loading && !error && (
        <pre className="text-sm whitespace-pre-wrap break-words">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}

      <button
        onClick={load}
        className="mt-4 px-4 py-1 text-sm rounded bg-black text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition"
      >
        Refresh
      </button>
    </div>
  );
}
