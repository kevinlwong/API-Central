"use client";

import { useEffect, useState } from "react";
import { getRandomJoke, getWeather, getLatestLaunch, getNasaPhoto, getAdvice } from "@/lib/api";
import { APICard } from "@/components/APICard";
import { HomeButton } from "@/components/HomeButton";

export default function ShowcasePage() {
  return (
    <main className="min-h-screen px-4 py-10 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Public API Showcase</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <APICard title="Random Joke" fetcher={getRandomJoke} />
        <APICard title="Weather" fetcher={getWeather} />
        <APICard title="SpaceX Launch" fetcher={getLatestLaunch} />
        <APICard title="NASA Photo" fetcher={getNasaPhoto} />
        <APICard title="Advice" fetcher={getAdvice} />
      </div>
      <HomeButton></HomeButton>
    </main>
  );
}
