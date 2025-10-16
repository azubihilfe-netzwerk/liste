import { readSingleton } from "@directus/sdk";
import directus from "./directus";
import type { Home } from "../types/home";

export async function fetchHero(): Promise<Home> {
  const result = await directus.request(
    readSingleton("home") // exact collection name
  );
  return result; // returns a single Home object
}
