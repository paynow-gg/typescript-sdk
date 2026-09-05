export interface AuthConfig {
  scheme: string;
  option: string;
  required: boolean;
  description: string;
}

export interface InjectConfig {
  path: string[];
  header: string[];
  option: string;
  description: string;
}

export interface SpecConfig {
  name: string;
  url: string;
  typesOnly?: boolean;
  inject?: InjectConfig;
  auth?: AuthConfig;
}

const STORE = {
  path: ["storeId", "store_id"],
  option: "storeId",
  description: "The Flake ID of the store every request is scoped to.",
};

export const SPECS: SpecConfig[] = [
  {
    name: "management",
    url: "https://api.paynow.gg/swagger/management-api/openapi.json",
    inject: { ...STORE, header: [] },
    auth: {
      scheme: "APIKey",
      option: "apiKey",
      required: true,
      description: "An API key generated in the PayNow dashboard.",
    },
  },
  {
    name: "storefront",
    url: "https://api.paynow.gg/swagger/storefront-api/openapi.json",
    inject: { ...STORE, header: ["x-paynow-store-id"] },
    auth: {
      scheme: "Customer",
      option: "customerToken",
      required: false,
      description: "A customer token used for identifying the customer.",
    },
  },
  {
    name: "webhooks",
    url: "https://api.paynow.gg/swagger/webhook-definitions/openapi.json",
    typesOnly: true,
  },
];

export const OUTPUT_DIR = "src/generated";
