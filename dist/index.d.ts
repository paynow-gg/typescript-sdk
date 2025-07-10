import * as GeneratedManagementAPI from "./generated/management";
import * as GeneratedStorefrontAPI from "./generated/storefront";
declare class BasePayNowAPI {
    storeId: string;
    constructor(storeId: string);
}
type StorefrontAPIType = typeof GeneratedStorefrontAPI;
declare class StorefrontAPI extends BasePayNowAPI {
    constructor(storeId: string);
}
interface StorefrontAPI extends StorefrontAPIType {
}
type ManagementAPIType = typeof GeneratedManagementAPI;
declare class ManagementAPI extends BasePayNowAPI {
    apiKey: string;
    constructor(storeId: string, apiKey: string);
}
interface ManagementAPI extends ManagementAPIType {
}
export { StorefrontAPI, ManagementAPI };
//# sourceMappingURL=index.d.ts.map