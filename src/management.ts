import type { CreateAxiosDefaults } from "axios";
import type { operations as ManagementOperations } from "./generated/management";

import { operationMappings } from "./generated/management";
import { createClient } from "./client";

type ManagementClient = ReturnType<typeof createClient<ManagementOperations>>;

export function createManagementClient(
  storeId: string,
  apiKey: string,
  options?: CreateAxiosDefaults,
): ManagementClient {
  const client = createClient<ManagementOperations>(
    operationMappings,
    {
      Authorization: `APIKey ${apiKey}`,
    },
    { storeId },
    options,
  );

  return client;
}
