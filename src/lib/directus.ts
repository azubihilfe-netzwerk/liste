import { createDirectus, rest } from "@directus/sdk";
import { Home } from "../types/home";

// Define the schema for your Directus collections

type Schema = {
  home: Home;
};

// Create a typed Directus client
const directus = createDirectus<Schema>(
  "https://directus-azubihilfe-netzwerk.labpa.de"
).with(rest());

export default directus;
