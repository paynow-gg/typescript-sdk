import * as GeneratedManagementAPI from "./generated/management";
import * as GeneratedStorefrontAPI from "./generated/storefront";

class BasePayNowAPI {
  storeId: string;

  constructor(storeId: string) {
    this.storeId = storeId;
  }
}

// Storefront

type StorefrontAPIType = typeof GeneratedStorefrontAPI;

class StorefrontAPI extends BasePayNowAPI {
  constructor(storeId: string) {
    super(storeId);

    Object.assign(this, GeneratedStorefrontAPI);

    return new Proxy(this, {
      get(target: any, prop: any) {
        const value = target[prop] as any;

        if (typeof value !== "function" || prop in BasePayNowAPI.prototype) {
          return value;
        }

        return (...args: any[]) => {
          const headers = {
            "x-paynow-store-id": storeId,
          };

          const lastArg = args[args.length - 1];

          if (lastArg?.headers) {
            lastArg.headers = { ...headers, ...lastArg.headers };
          } else {
            args.push({ headers });
          }

          return value(...args);
        };
      },
    });
  }
}

interface StorefrontAPI extends StorefrontAPIType {}

// Management

type ManagementAPIType = typeof GeneratedManagementAPI;

class ManagementAPI extends BasePayNowAPI {
  apiKey: string;

  constructor(storeId: string, apiKey: string) {
    super(storeId);
    this.apiKey = apiKey;

    Object.assign(this, GeneratedManagementAPI);

    return new Proxy(this, {
      get(target: any, prop: any) {
        const value = target[prop] as any;

        if (typeof value !== "function" || prop in BasePayNowAPI.prototype) {
          return value;
        }

        return (...args: any[]) => {
          const headers = {
            "x-paynow-store-id": storeId,
            Authorization: `APIKey ${apiKey}`,
          };

          const lastArg = args[args.length - 1];

          if (lastArg?.headers) {
            lastArg.headers = { ...headers, ...lastArg.headers };
          } else {
            args.push({ headers });
          }

          return value(...args);
        };
      },
    });
  }
}

interface ManagementAPI extends ManagementAPIType {}

export { StorefrontAPI, ManagementAPI };
