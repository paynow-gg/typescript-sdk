import { isPayNowError } from "./errors";
import type { ExtractJsonRequestBodies } from "./types";

import { createManagementClient } from "./management";
import { createStorefrontClient } from "./storefront";

import type { components as ManagementComponents } from "./generated/management";
import type { components as StorefrontComponents } from "./generated/storefront";
import type { webhooks as Webhooks, components as WebhooksComponents } from "./generated/webhooks";

export type ManagementSchemas = ManagementComponents["schemas"];
export type StorefrontSchemas = StorefrontComponents["schemas"];

type ExtractedWebhooks = ExtractJsonRequestBodies<Webhooks>;
export type WebhookPayloadSchemas = {
  [EventType in WebhooksComponents["schemas"]["WebhookEventType"]]: EventType extends keyof Required<ExtractedWebhooks>
    ? Omit<NonNullable<ExtractedWebhooks[EventType]>, "event_type"> & {
        event_type: EventType;
      }
    : {
        event_type: EventType;
        event_id: string;
        body: Record<string, unknown>;
      };
}[WebhooksComponents["schemas"]["WebhookEventType"]];

export { createManagementClient, createStorefrontClient, isPayNowError };
