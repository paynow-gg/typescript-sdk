export interface PayNowValidationError {
  code: string;
  message: string;
  path: string;
  validation: string;
}

export class PayNowApiError extends Error {
  readonly status: number;
  readonly code: string;
  readonly traceId: string | null;
  readonly errors: PayNowValidationError[] | null;
  readonly response: Response;
  readonly body: unknown;

  constructor(response: Response, body: unknown) {
    const parsed = parseErrorBody(body);

    super(parsed.message ?? `PayNow API request failed with status ${response.status}`);

    this.name = "PayNowApiError";
    this.status = response.status;
    this.code = parsed.code ?? String(response.status);
    this.traceId = parsed.traceId;
    this.errors = parsed.errors;
    this.response = response;
    this.body = body;
  }
}

export function isPayNowApiError(error: unknown): error is PayNowApiError {
  return error instanceof PayNowApiError;
}

export const isPayNowError = isPayNowApiError;

interface ParsedErrorBody {
  message: string | null;
  code: string | null;
  traceId: string | null;
  errors: PayNowValidationError[] | null;
}

function parseErrorBody(body: unknown): ParsedErrorBody {
  if (typeof body !== "object" || body === null) {
    return { message: null, code: null, traceId: null, errors: null };
  }

  const record = body as Record<string, unknown>;

  return {
    message: typeof record.message === "string" ? record.message : null,
    code: typeof record.code === "string" ? record.code : null,
    traceId: typeof record.trace_id === "string" ? record.trace_id : null,
    errors: Array.isArray(record.errors) ? (record.errors as PayNowValidationError[]) : null,
  };
}
