import { AxiosError } from "axios";
import type { components } from "./generated/management";

import { createManagementClient } from "./management";
import { createStorefrontClient } from "./storefront";

function isPayNowError(
  error: unknown,
): error is AxiosError<components["schemas"]["PayNowError"]> {
  if (!(error instanceof AxiosError)) {
    return false;
  }

  const data = error.response?.data;

  return (
    data !== null &&
    data !== undefined &&
    typeof data === "object" &&
    "status" in data &&
    "code" in data &&
    "message" in data
  );
}

export { createManagementClient, createStorefrontClient, isPayNowError };
