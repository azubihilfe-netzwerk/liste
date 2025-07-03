import React from "react";
import { readItems } from "@directus/sdk";
import directus from "../lib/directus";

interface Global {
  id: string;
  title: string;
  description: string;
  // Add other fields from your Directus collection
}

async function getGlobals(): Promise<Global[]> {
  const result = await directus.request(readItems("global"));
  return result as Global[];
}

export default async function Dashboard() {
  const globals = await getGlobals();
  const global = globals[0]; // Consider handling undefined case
  return (
    <div>
      <h1>{global.title}</h1>
      <p>{global.description}</p>
    </div>
  );
}
