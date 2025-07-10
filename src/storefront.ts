import type { CreateAxiosDefaults } from "axios";
import type { operations as StorefrontOperation } from "./generated/storefront";

import { operationMappings } from "./generated/storefront";
import { createClient } from "./client";

type StorefrontClient = ReturnType<typeof createClient<StorefrontOperation>>;

export function createStorefrontClient(
  storeId: string,
  customerToken?: string,
  options?: CreateAxiosDefaults,
): StorefrontClient {
  const client = createClient<StorefrontOperation>(
    operationMappings,
    {
      "x-paynow-store-id": storeId,
      Authorization: customerToken ? `Customer ${customerToken}` : "",
    },
    { storeId },
    options,
  );

  return client;
}
