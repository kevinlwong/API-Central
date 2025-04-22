export async function getRandomJoke() {
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
  );
  if (!res.ok) throw new Error("Failed to fetch joke");
  return await res.json();
}

export async function getWeather() {
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=34.05&longitude=-118.24&current_weather=true"
  );
  if (!res.ok) throw new Error("Failed to fetch weather");
  return await res.json();
}

export async function getLatestLaunch() {
  const res = await fetch("https://api.spacexdata.com/v5/launches/latest");
  if (!res.ok) throw new Error("Failed to fetch SpaceX launch");
  return await res.json();
}

export async function getNasaPhoto() {
  const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY || "DEMO_KEY";
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
  );

  if (res.status === 429) {
    console.warn("NASA API rate limit hit. Showing fallback image.");
    return {
      title: "NASA APOD - Fallback",
      url: "https://apod.nasa.gov/apod/image/2504/TerminatorMoon_Addis_3558.jpg",
      explanation:
        "A full Moon is shown, but with a dramatically more detailed surface than usually visible. Many craters, dark lunar maria, and light highland regions are clearly discernable. This extraordinary clarity is the result of a digital composite — not a single snapshot, but a stitched image created from many photographs taken near the terminator, the dividing line between lunar night and day. What's different about this Moon? It's the terminator shadows. Although the full Moon usually lacks shadows, this composite was built using strips taken just as the terminator crossed those regions. These long shadows enhance depth and contrast, making the otherwise flat lunar surface appear almost three-dimensional. The shadows cast by craters—all leaning right—reveal the rugged terrain with stunning clarity. The darker patches, called maria, are more than just color differences; they’re also geologically flatter than the lighter, crater-covered highlands. This image was carefully constructed over two weeks in early April 2025, blending science, patience, and artistic vision to present a rarely-seen moonscape of detail and contrast.You're seeing this image because the NASA API is currently rate-limited.",
    };
  }

  if (!res.ok) throw new Error("Failed to fetch NASA photo");
  return await res.json();
}

export async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  if (!res.ok) throw new Error("Failed to fetch advice");
  return await res.json();
}
