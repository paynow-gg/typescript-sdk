# PayNow TypeScript SDK

A TypeScript/JavaScript SDK for the [PayNow.gg API](https://paynow.gitbook.io/paynow-api)

## Installation

```bash
npm install @paynow-gg/typescript-sdk
```

## Management API

```typescript
import { createManagementClient, type Management } from "@paynow-gg/typescript-sdk";

const management = createManagementClient({
  apiKey: process.env.PAYNOW_API_KEY!,
  storeId: "411486491630370816",
});

const bans: Management.BanDto[] = await management.bans.getBans({ limit: 50, ban_type: "steam" });
const ban = await management.bans.getBan("411486491630370816");

await management.bans.updateBan(ban.id, { reason: "chargeback" });
await management.bans.deleteBan(ban.id);
```

## Storefront API

```typescript
import { createStorefrontClient } from "@paynow-gg/typescript-sdk";

const storefront = createStorefrontClient({
  storeId: "411486491630370816",
  customerToken: process.env.PAYNOW_CUSTOMER_TOKEN, // optional
});

const store = await storefront.store.getStorefrontStore();
const cart = await storefront.cart.getCart();

await storefront.cart.addLine(
  { product_id: "411486491630370816", quantity: 1 },
  { headers: { "x-paynow-customer-ip": "127.0.0.1" } },
);
```

## Error handling

```typescript
import { isPayNowApiError } from "@paynow-gg/typescript-sdk";

try {
  await management.bans.getBan("nope");
} catch (error) {
  if (isPayNowApiError(error)) {
    console.error(error.status, error.code, error.message, error.traceId);
    console.error(error.errors); // field-level validation failures, when returned
    console.error(error.response.headers.get("retry-after"));
  }
}
```

## PayNow.gg Support

For support, questions, or more information, join our Discord community:

- [Discord](https://discord.com/invite/paynow)

## Contributing

Contributions are welcome! If you'd like to improve the SDK or suggest new features, please fork the repository, make your changes, and submit a pull request.