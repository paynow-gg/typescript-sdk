import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { HttpClient } from "./http.js";

function capture() {
  const seen: string[] = [];
  const client = new HttpClient({
    baseUrl: "https://api.example.test",
    fetch: async (input) => {
      seen.push(String(input));
      return new Response("{}", { status: 200, headers: { "content-type": "application/json" } });
    },
  });
  return { client, seen };
}

describe("HttpClient path parameters", () => {
  it("encodes reserved characters so a value cannot add path segments", async () => {
    const { client, seen } = capture();
    await client.request("GET", "/v1/stores/{storeId}/orders/{orderId}", {
      path: { storeId: "s1", orderId: "a/b?c#d" },
    });
    assert.equal(seen[0], "https://api.example.test/v1/stores/s1/orders/a%2Fb%3Fc%23d");
  });

  it('rejects "." so the request cannot fall through to the parent endpoint', async () => {
    const { client, seen } = capture();
    await assert.rejects(
      client.request("GET", "/v1/stores/{storeId}/orders/{orderId}", {
        path: { storeId: "s1", orderId: "." },
      }),
      /invalid value "\."/,
    );
    assert.equal(seen.length, 0);
  });

  it('rejects ".." so the request cannot climb the path', async () => {
    const { client, seen } = capture();
    await assert.rejects(
      client.request("GET", "/v1/stores/{storeId}/orders/{orderId}", {
        path: { storeId: "..", orderId: "o1" },
      }),
      /invalid value "\.\."/,
    );
    assert.equal(seen.length, 0);
  });

  it("does not let a percent-encoded dot bypass the check", async () => {
    const { client, seen } = capture();
    await client.request("GET", "/v1/stores/{storeId}/orders/{orderId}", {
      path: { storeId: "s1", orderId: "%2E" },
    });
    assert.equal(seen[0], "https://api.example.test/v1/stores/s1/orders/%252E");
  });

  it("still accepts ordinary ids containing dots", async () => {
    const { client, seen } = capture();
    await client.request("GET", "/v1/store/products/{idOrSlug}", {
      path: { idOrSlug: "my.product" },
    });
    assert.equal(seen[0], "https://api.example.test/v1/store/products/my.product");
  });
});
