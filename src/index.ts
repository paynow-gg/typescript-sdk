import { isPayNowError } from "./errors";
import type { ExtractJsonRequestBodies } from "./types";

import { createManagementClient } from "./management";
import { createStorefrontClient } from "./storefront";

import type { components as ManagementComponents } from "./generated/management";
import type { components as StorefrontComponents } from "./generated/storefront";
import type { webhooks as Webhooks } from "./generated/webhooks";

export type ManagementSchemas = ManagementComponents["schemas"];
export type StorefrontSchemas = StorefrontComponents["schemas"];
export type WebhookPayloadSchemas = ExtractJsonRequestBodies<Webhooks>;

export { createManagementClient, createStorefrontClient, isPayNowError };
