"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementAPI = exports.StorefrontAPI = void 0;
const GeneratedManagementAPI = __importStar(require("./generated/management"));
const GeneratedStorefrontAPI = __importStar(require("./generated/storefront"));
class BasePayNowAPI {
    storeId;
    constructor(storeId) {
        this.storeId = storeId;
    }
}
class StorefrontAPI extends BasePayNowAPI {
    constructor(storeId) {
        super(storeId);
        Object.assign(this, GeneratedStorefrontAPI);
        return new Proxy(this, {
            get(target, prop) {
                const value = target[prop];
                if (typeof value !== "function" || prop in BasePayNowAPI.prototype) {
                    return value;
                }
                return (...args) => {
                    const headers = {
                        "x-paynow-store-id": storeId,
                    };
                    const lastArg = args[args.length - 1];
                    if (lastArg?.headers) {
                        lastArg.headers = { ...headers, ...lastArg.headers };
                    }
                    else {
                        args.push({ headers });
                    }
                    return value(...args);
                };
            },
        });
    }
}
exports.StorefrontAPI = StorefrontAPI;
class ManagementAPI extends BasePayNowAPI {
    apiKey;
    constructor(storeId, apiKey) {
        super(storeId);
        this.apiKey = apiKey;
        Object.assign(this, GeneratedManagementAPI);
        return new Proxy(this, {
            get(target, prop) {
                const value = target[prop];
                if (typeof value !== "function" || prop in BasePayNowAPI.prototype) {
                    return value;
                }
                return (...args) => {
                    const headers = {
                        "x-paynow-store-id": storeId,
                        Authorization: `APIKey ${apiKey}`,
                    };
                    const lastArg = args[args.length - 1];
                    if (lastArg?.headers) {
                        lastArg.headers = { ...headers, ...lastArg.headers };
                    }
                    else {
                        args.push({ headers });
                    }
                    return value(...args);
                };
            },
        });
    }
}
exports.ManagementAPI = ManagementAPI;
//# sourceMappingURL=index.js.map