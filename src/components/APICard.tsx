/* eslint-disable @next/next/no-img-element */
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

  const formatOutput = () => {
    if (!data) return "";
    try {
      if (
        title === "Random Joke" &&
        typeof data === "object" &&
        data !== null
      ) {
        const joke = data as any;
        if (joke.type === "single") return joke.joke;
        if (joke.type === "twopart") {
          return (
            <>
              <p className="font-semibold">{joke.setup}</p>
              <p className="mt-1">{joke.delivery}</p>
            </>
          );
        }
      }
      if (title === "Advice" && typeof data === "object" && data !== null) {
        const advice = data as any;
        return `Advice No. ${advice.slip.id}... ${advice.slip.advice}`;
      }
      if (title === "NASA Photo" && typeof data === "object" && data !== null) {
        const photo = data as any;
        return (
          <div>
            <p className="font-medium mb-2">{photo.title}</p>
            <img
              src={photo.url}
              alt={photo.title}
              className="w-96 rounded-md mb-2"
            />
            <p className="text-sm text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap">
              {photo.explanation}
            </p>
            <a
              href="https://apod.nasa.gov/apod/image/2504/TerminatorMoon_Addis_3558.jpg "
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >View Original Image</a>
          </div>
        );
      }
      if (title === "Weather" && typeof data === "object" && data !== null) {
        const weather = data as any;
        const w = weather.current_weather;
        return `Temperature: ${w.temperature}°C\nWind Speed: ${w.windspeed} km/h\nWeather Code: ${w.weathercode}`;
      }
      if (title === "SpaceX Launch" && typeof data === "object" && data !== null) {
        const launch = data as any;
        return (
          <div className="whitespace-pre-wrap text-sm">
            <p><strong>Mission:</strong> {launch.name}</p>
            <p><strong>Date:</strong> {launch.date_utc}</p>
            <p><strong>Success:</strong> {launch.success ? "Yes" : "No"}</p>
            <p><strong>Rocket ID:</strong> {launch.rocket}</p>
            <p><strong>Launch ID:</strong> {launch.id}</p>
            <p><strong>Crew:</strong></p>
            <ul className="ml-4 list-disc">
              {launch.crew?.map((c: any, idx: number) => (
                <li key={idx}>{c.role}</li>
              ))}
            </ul>
            <p><strong>Cores:</strong></p>
            <ul className="ml-4 list-disc">
              {launch.cores?.map((core: any, idx: number) => (
                <li key={idx}>
                  Core: {core.core}, Flight: {core.flight},
                  Gridfins: {core.gridfins ? "Yes" : "No"}, Legs: {core.legs ? "Yes" : "No"},
                  Reused: {core.reused ? "Yes" : "No"}, Landing Success: {core.landing_success ? "Yes" : "No"},
                  Type: {core.landing_type}
                </li>
              ))}
            </ul>
            <p><strong>Webcast:</strong> <a href={launch.links.webcast} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Watch Launch</a></p>
            <p><strong>Wikipedia:</strong> <a href={launch.links.wikipedia} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">{launch.links.wikipedia}</a></p>
            <p><strong>Patch:</strong> <img src={launch.links.patch.small} alt="patch" className="w-16 h-auto mt-1" /></p>
          </div>
        );
      }
      return JSON.stringify(data, null, 2);
    } catch (err) {
      console.error("Formatting error:", err);
      return JSON.stringify(data, null, 2);
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
          {formatOutput()}
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
