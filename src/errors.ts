import { AxiosError, type AxiosResponse } from "axios";
import type { components } from "./generated/management";

export type PayNowError = AxiosError<components["schemas"]["PayNowError"]> & {
  response: AxiosResponse<components["schemas"]["PayNowError"]>;
};

export function isPayNowError(error: unknown): error is PayNowError {
  return (
    error instanceof AxiosError &&
    !!error.response &&
    typeof error.response.data === "object" &&
    error.response.data !== null &&
    "status" in error.response.data &&
    "code" in error.response.data &&
    "message" in error.response.data
  );
}
