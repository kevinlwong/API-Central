"use client";

// import { useEffect, useState } from "react";
import { getRandomJoke, getWeather, getLatestLaunch, getNasaPhoto, getAdvice } from "@/lib/api";
import { APICard } from "@/components/APICard";
import { HomeButton } from "@/components/HomeButton";

export default function ShowcasePage() {
  return (
    <main className="items-start min-h-screen px-4 py-10 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Public API Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6 items-start">
        <APICard title="Random Joke" fetcher={getRandomJoke} />
        <APICard title="Weather" fetcher={getWeather} />
        <APICard title="SpaceX Launch" fetcher={getLatestLaunch} />
        <APICard title="Advice" fetcher={getAdvice} />
        <APICard title="NASA Photo" fetcher={getNasaPhoto} />
        
      </div>
      <HomeButton></HomeButton>
    </main>
  );
}
