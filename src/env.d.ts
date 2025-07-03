/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DIRECTUS_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
