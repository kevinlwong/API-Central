export async function getRandomJoke() {
    const res = await fetch('https://v2.jokeapi.dev/joke/Any');
    if (!res.ok) throw new Error('Failed to fetch joke');
    return await res.json();
  }
  
  export async function getWeather() {
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=34.05&longitude=-118.24&current_weather=true');
    if (!res.ok) throw new Error('Failed to fetch weather');
    return await res.json();
  }
  
  export async function getLatestLaunch() {
    const res = await fetch('https://api.spacexdata.com/v5/launches/latest');
    if (!res.ok) throw new Error('Failed to fetch SpaceX launch');
    return await res.json();
  }
  
  export async function getNasaPhoto() {
    const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    if (!res.ok) throw new Error('Failed to fetch NASA photo');
    return await res.json();
  }
  
  export async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    if (!res.ok) throw new Error('Failed to fetch advice');
    return await res.json();
  }
  