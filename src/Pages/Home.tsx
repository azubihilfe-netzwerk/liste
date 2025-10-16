"use client";

import { useEffect, useState } from "react";
import { fetchHero } from "../lib/fetchHero";
import type { Home } from "../types/home";

export default function HomePage() {
  const [page, setPage] = useState<Home | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const result = await fetchHero();
        console.log("Fetched result:", result);
        setPage(result);
      } catch (err: any) {
        console.error("Error fetching hero:", err);
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!page) return <p>No data found</p>;

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">{page.titel}</h1>
      <div
        className="text-lg prose"
        dangerouslySetInnerHTML={{ __html: page.willkommenstext ?? "" }}
      />
    </section>
  );
}
