/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
  readonly PUBLIC_STRAPI_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
