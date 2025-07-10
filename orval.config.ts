import { defineConfig } from "orval";

export default defineConfig({
  storefront: {
    input: {
      target:
        "https://api.staging.paynow.gg/swagger/storefront-api/openapi.json",
    },
    output: {
      baseUrl: "https://api.paynow.gg",
      target: "./src/generated/storefront.ts",
      client: "axios-functions",
      mode: "single",
    },
  },
  management: {
    input: {
      target:
        "https://api.staging.paynow.gg/swagger/management-api/openapi.json",
    },
    output: {
      baseUrl: "https://api.paynow.gg",
      target: "./src/generated/management.ts",
      client: "axios-functions",
      mode: "single",
    },
  },
});
