import { isPayNowError } from "./errors";

import { createManagementClient } from "./management";
import { createStorefrontClient } from "./storefront";

import type { components as ManagementComponents } from "./generated/management";
import type { components as StorefrontComponents } from "./generated/storefront";

export type ManagementSchemas = ManagementComponents["schemas"];
export type StorefrontSchemas = StorefrontComponents["schemas"];

export { createManagementClient, createStorefrontClient, isPayNowError };