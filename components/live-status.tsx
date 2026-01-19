"use client";

import { useState, useEffect } from "react";
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning, Wind, MapPin } from "lucide-react";

interface WeatherData {
  temp: number;
  condition: string;
  location: string;
}

function getWeatherIcon(condition: string) {
  const lowerCondition = condition.toLowerCase();
  if (lowerCondition.includes("rain") || lowerCondition.includes("drizzle")) {
    return CloudRain;
  }
  if (lowerCondition.includes("snow")) {
    return CloudSnow;
  }
  if (lowerCondition.includes("thunder") || lowerCondition.includes("storm")) {
    return CloudLightning;
  }
  if (lowerCondition.includes("cloud") || lowerCondition.includes("overcast")) {
    return Cloud;
  }
  if (lowerCondition.includes("wind")) {
    return Wind;
  }
  return Sun;
}

export function LiveStatus() {
  const [time, setTime] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  // Live clock - Lagos timezone (WAT)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const lagosTime = now.toLocaleTimeString("en-US", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(lagosTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch weather for Lagos
  useEffect(() => {
    async function fetchWeather() {
      try {
        // Using Open-Meteo API (free, no API key required)
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=6.5244&longitude=3.3792&current=temperature_2m,weather_code&timezone=Africa/Lagos"
        );
        const data = await response.json();
        
        // Weather code to condition mapping
        const weatherCodes: Record<number, string> = {
          0: "Clear sky",
          1: "Mainly clear",
          2: "Partly cloudy",
          3: "Overcast",
          45: "Foggy",
          48: "Foggy",
          51: "Light drizzle",
          53: "Drizzle",
          55: "Heavy drizzle",
          61: "Light rain",
          63: "Rain",
          65: "Heavy rain",
          71: "Light snow",
          73: "Snow",
          75: "Heavy snow",
          80: "Light showers",
          81: "Showers",
          82: "Heavy showers",
          95: "Thunderstorm",
          96: "Thunderstorm with hail",
          99: "Thunderstorm with heavy hail",
        };

        setWeather({
          temp: Math.round(data.current.temperature_2m),
          condition: weatherCodes[data.current.weather_code] || "Clear",
          location: "Lagos, NG",
        });
      } catch (error) {
        // Fallback weather data
        setWeather({
          temp: 28,
          condition: "Partly cloudy",
          location: "Lagos, NG",
        });
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
    // Refresh weather every 30 minutes
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const WeatherIcon = weather ? getWeatherIcon(weather.condition) : Sun;

  return (
    <div className="flex items-center gap-6 text-sm text-muted-foreground">
      {/* Location & Time */}
      <div className="flex items-center gap-2">
        <MapPin className="h-3.5 w-3.5" />
        <span className="font-medium">Lagos, NG</span>
        <span className="text-border">|</span>
        <span className="font-mono tabular-nums">{time || "--:--"}</span>
      </div>

      {/* Weather */}
      {!loading && weather && (
        <div className="flex items-center gap-2">
          <WeatherIcon className="h-4 w-4" />
          <span>{weather.temp}°C</span>
          <span className="hidden sm:inline text-muted-foreground/70">{weather.condition}</span>
        </div>
      )}
    </div>
  );
}
