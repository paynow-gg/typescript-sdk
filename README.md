# PayNow TypeScript SDK

A TypeScript/JavaScript SDK for the [PayNow.gg API](https://paynow.gitbook.io/paynow-api)

## Installation

```bash
npm install @paynow-gg/typescript-sdk
```

## Quick Start

```typescript
import { createStorefrontClient } from "@paynow-gg/typescript-sdk";

const storefront = createStorefrontClient("411486491630370816");

storefront.store.getStorefrontStore().then((res) => console.log(res.data));
```

For issues with the SDK, please open an issue on GitHub.
For PayNow API documentation and support, visit the PayNow developer portal.

## PayNow.gg Support

For support, questions, or more information, join our Discord community:

- [Discord](https://discord.com/invite/paynow)

## Contributing

Contributions are welcome! If you'd like to improve the SDK or suggest new features, please fork the repository, make your changes, and submit a pull request.