import { createDirectus, rest } from "@directus/sdk";

const directus = createDirectus(
  process.env.DIRECTUS_URL || "http://localhost:8055"
).with(rest());

export default directus;
