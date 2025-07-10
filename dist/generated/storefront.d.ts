import type { AxiosRequestConfig, AxiosResponse } from 'axios';
/**
 * Represents a customer's shopping cart
 */
export interface CartDto {
    store_id: FlakeId;
    customer_id: FlakeId;
    /** The line items in the cart */
    lines: CartLineDto[];
    /** The total price of all items in the cart in the smallest currency unit (e.g., cents) */
    total: number;
    /** The currency code (e.g., usd, eur, gbp) */
    currency: string;
}
export interface CartLineCustomVariableDto {
    id: FlakeId;
    /** The display name of the custom variable */
    name: string;
    /** The unique identifier string for the custom variable */
    identifier: string;
    /** The description of the custom variable */
    description: string;
    type: CustomVariableType;
    /** The selected value of the custom variable */
    value: string;
    /** The collection of available options for this custom variable. Only present for dropdown type */
    options: StorefrontCustomVariableOptionDto[];
    selected_option?: StorefrontCustomVariableOptionDto;
}
/**
 * Represents a line item in a cart
 */
export interface CartLineDto {
    /** The unique key for this line item */
    line_key: string;
    product_id: FlakeId;
    /** The name of the product */
    name: string;
    /** The slug of the product */
    slug: string;
    /** The price of the product in the smallest currency unit (e.g., cents) */
    price: number;
    /** The quantity of this product in the cart */
    quantity: number;
    /** Indicates whether this line item should be a subscription */
    subscription: boolean;
    /**
     * The URL to the product image
     * @nullable
     */
    image_url?: string | null;
    selected_gameserver_id?: FlakeId;
    selected_gameserver?: GameServerDto;
    pricing: StorefrontProductPricingDetailsDto;
    /** Selected custom variables for this cart line. */
    custom_variables: CartLineCustomVariableDto[];
}
/**
 * Optional metadata to associate with the checkout session.
Do not store any sensitive information here.
 * @nullable
 */
export type CreateCartCheckoutSessionDtoMetadata = {
    [key: string]: string;
} | null;
/**
 * Request to create a new checkout session from a cart
 */
export interface CreateCartCheckoutSessionDto {
    coupon_id?: FlakeId;
    /**
     * Optional affiliate code to track referrals
     * @nullable
     */
    affiliate_code?: string | null;
    /**
     * Optional URL to redirect to after successful checkout
     * @nullable
     */
    return_url?: string | null;
    /**
     * Optional URL to redirect to if checkout is canceled
     * @nullable
     */
    cancel_url?: string | null;
    /** Whether to automatically redirect the customer (return_url must be set) */
    auto_redirect: boolean;
    /**
     * Optional metadata to associate with the checkout session.
  Do not store any sensitive information here.
     * @nullable
     */
    metadata?: CreateCartCheckoutSessionDtoMetadata;
}
/**
 * Optional metadata to associate with the checkout session line.
Do not store any sensitive information here.
 * @nullable
 */
export type CreateCheckoutSessionLineDtoMetadata = {
    [key: string]: string;
} | null;
/**
 * Key-value pair mapping custom variable identifiers to their selected values.
Required only when the product includes custom variables.
 * @nullable
 */
export type CreateCheckoutSessionLineDtoCustomVariables = {
    [key: string]: string;
} | null;
/**
 * Represents a line item in a checkout session request
 */
export interface CreateCheckoutSessionLineDto {
    product_id: FlakeId;
    /** Determines whether this line should create a subscription */
    subscription: boolean;
    gift_to?: CustomerPlatformAccountDto;
    gift_to_customer_id?: FlakeId;
    /** The quantity of this product to purchase */
    quantity: number;
    selected_gameserver_id?: FlakeId;
    /**
     * Optional metadata to associate with the checkout session line.
  Do not store any sensitive information here.
     * @nullable
     */
    metadata?: CreateCheckoutSessionLineDtoMetadata;
    /**
     * Key-value pair mapping custom variable identifiers to their selected values.
  Required only when the product includes custom variables.
     * @nullable
     */
    custom_variables?: CreateCheckoutSessionLineDtoCustomVariables;
}
/**
 * Optional metadata to associate with the checkout session.
Do not store any sensitive information here.
 * @nullable
 */
export type CreateCheckoutSessionRequestDtoMetadata = {
    [key: string]: string;
} | null;
/**
 * Request to create a new checkout session
 */
export interface CreateCheckoutSessionRequestDto {
    /** The line items to include in the checkout */
    lines: CreateCheckoutSessionLineDto[];
    /**
     * Whether this checkout creates a subscription.
  DEPRECATED: Use 'subscription' field in 'lines' array objects instead.
     * @deprecated
     */
    subscription: boolean;
    coupon_id?: FlakeId;
    /**
     * Optional affiliate code to track referrals
     * @nullable
     */
    affiliate_code?: string | null;
    /**
     * Optional URL to redirect to after successful checkout
     * @nullable
     */
    return_url?: string | null;
    /**
     * Optional URL to redirect to if checkout is canceled
     * @nullable
     */
    cancel_url?: string | null;
    /** Whether to automatically redirect the customer (return_url must be set) */
    auto_redirect: boolean;
    /**
     * Optional metadata to associate with the checkout session.
  Do not store any sensitive information here.
     * @nullable
     */
    metadata?: CreateCheckoutSessionRequestDtoMetadata;
}
/**
 * Response after creating a checkout session
 */
export interface CreateCheckoutSessionResponseDto {
    id: FlakeId;
    /** The token for the checkout session */
    token: string;
    /** The URL to redirect the customer to complete checkout */
    url: string;
}
/**
 * Defines the type of input method for a custom variable.
 */
export type CustomVariableType = typeof CustomVariableType[keyof typeof CustomVariableType];
export declare const CustomVariableType: {
    readonly dropdown: "dropdown";
    readonly text: "text";
    readonly number: "number";
};
/**
 * Additional custom data associated with the customer.
 */
export type CustomerDtoMetadata = {
    [key: string]: string;
};
/**
 * Represents a customer in the PayNow system with their associated profiles and metadata.
 */
export interface CustomerDto {
    id: FlakeId;
    store_id: FlakeId;
    profile?: GenericProfileDto;
    /**
     * The customer's 64-bit Steam ID, if they have linked their Steam account.
     * @nullable
     */
    steam_id?: string | null;
    steam?: SteamProfileDto;
    /**
     * The customer's Minecraft UUID, if they have linked their Minecraft account.
  Not set for offline Minecraft stores. If the platform type is Minecraft - Geyser,
  and the profile is a bedrock account, this will be a UUID generated from the Xbox XUID.
     * @nullable
     */
    minecraft_uuid?: string | null;
    minecraft?: MinecraftProfileDto;
    /**
     * The customer's Xbox XUID, if available.
     * @nullable
     */
    xbox_xuid?: string | null;
    minecraft_platform?: CustomerMinecraftPlatform;
    /**
     * The display name for the customer.
     * @nullable
     */
    name?: string | null;
    /** The date and time when the customer was created in the system. */
    created_at: string;
    /**
     * The date and time when the customer was last updated, if applicable.
     * @nullable
     */
    updated_at?: string | null;
    /** Additional custom data associated with the customer. */
    metadata: CustomerDtoMetadata;
}
export type CustomerMinecraftPlatform = typeof CustomerMinecraftPlatform[keyof typeof CustomerMinecraftPlatform];
export declare const CustomerMinecraftPlatform: {
    readonly unknown: "unknown";
    readonly java: "java";
    readonly bedrock: "bedrock";
};
/**
 * Represents a customer platform association, used for gifting
 */
export interface CustomerPlatformAccountDto {
    platform: CustomerProfilePlatform;
    /** The account ID on the platform */
    id: string;
}
/**
 * A customer platform type used while gifting
 */
export type CustomerProfilePlatform = typeof CustomerProfilePlatform[keyof typeof CustomerProfilePlatform];
export declare const CustomerProfilePlatform: {
    readonly invalid: "invalid";
    readonly steam: "steam";
    readonly minecraft: "minecraft";
    readonly paynow_name: "paynow_name";
};
export type FlakeId = string;
/**
 * Represents a game server
 */
export interface GameServerDto {
    id: FlakeId;
    /** The name of the game server */
    name: string;
    /** Represents if the game server is active */
    enabled: boolean;
}
/**
 * Represents a generic platform profile for a customer.
 */
export interface GenericProfileDto {
    /** The platform-specific identifier for the profile. */
    id: string;
    /** The name of the platform this profile belongs to. */
    platform: string;
    /** The display name of the user on this platform. */
    name: string;
    /**
     * The URL to the user's avatar image on this platform.
     * @nullable
     */
    avatar_url?: string | null;
}
/**
 * Represents a Minecraft profile for a customer.
 */
export interface MinecraftProfileDto {
    /** The UUID of the Minecraft player.
  If the platform is Minecraft Offline, this will be the name itself.
  If the platform is Minecraft Geyser, and this is a Bedrock account, this ID will be an Xbox XUID. */
    id: string;
    /** The username of the Minecraft player. */
    name: string;
    /** The URL to the player's Minecraft skin rendered as an avatar. */
    avatar_url: string;
}
/**
 * Represents a PayNow error
 */
export interface PayNowError {
    /** The HTTP status code. */
    status: number;
    /** The PayNow parseable error code. */
    code: string;
    /** The human-readable error message. */
    message: string;
    /**
     * A distributed trace ID used for debugging.
     * @nullable
     */
    trace_id?: string | null;
    /**
     * An array of multiple errors. Only used by some API services.
     * @nullable
     */
    errors?: ValidationError[] | null;
}
export interface ProductDeliverableActionsDto {
    /** Value indicating whether to grant a giftcard with the product with the subtotal amount. */
    grant_giftcard: boolean;
}
export interface ProductGameServerDto {
    id: FlakeId;
    /** The name of the game server. */
    name: string;
    /** Indicates whether this game server is enabled. */
    enabled: boolean;
}
export type ProductRemoveAfterIntervalScale = typeof ProductRemoveAfterIntervalScale[keyof typeof ProductRemoveAfterIntervalScale];
export declare const ProductRemoveAfterIntervalScale: {
    readonly invalid: "invalid";
    readonly day: "day";
    readonly week: "week";
    readonly month: "month";
};
export type ProductSubscriptionIntervalScale = typeof ProductSubscriptionIntervalScale[keyof typeof ProductSubscriptionIntervalScale];
export declare const ProductSubscriptionIntervalScale: {
    readonly invalid: "invalid";
    readonly day: "day";
    readonly week: "week";
    readonly month: "month";
    readonly year: "year";
};
export interface ProductTagDto {
    id: FlakeId;
    /** The unique slug for the tag. */
    slug: string;
    /** The display name of the tag. */
    name: string;
}
export type SaleDiscountType = typeof SaleDiscountType[keyof typeof SaleDiscountType];
export declare const SaleDiscountType: {
    readonly percent: "percent";
    readonly amount: "amount";
};
/**
 * Represents a Steam profile for a customer.
 */
export interface SteamProfileDto {
    /** The 64-bit Steam ID of the user. */
    id: string;
    /** The display name of the user on Steam. */
    name: string;
    /** The URL to the user's Steam avatar image. */
    avatar_url: string;
}
export interface StorefrontCustomVariableDto {
    /** Unique identifier string used to reference this custom variable programmatically.
  Must contain only letters, numbers, underscores, and hyphens. */
    identifier: string;
    /** Display name for the custom variable shown to customers. */
    name: string;
    /** Description explaining what this custom variable is for. Can be shown to customers. */
    description: string;
    type: CustomVariableType;
    /**
     * Optional regex pattern to validate text/number input values.
  Only applies to text and number types.
  Uses RE2 syntax - does not support negative lookarounds, backreferences, or other advanced regex features.
     * @nullable
     */
    value_regex?: string | null;
    /** Available options for dropdown type custom variables.
  Empty for text and number types. */
    options: StorefrontCustomVariableOptionDto[];
}
export interface StorefrontCustomVariableOptionDto {
    /** Display name shown to customers for this option. */
    name: string;
    /** Internal value used for product command variable replacement, without brackets. */
    value: string;
    /** Additional price in the lowest denominator (e.g. cents) when this option is selected. */
    price: number;
    /** Whether this option is selected by default when the custom variable is presented.
  Only one option per custom variable should be marked as default. */
    is_default: boolean;
    /** Sort order for displaying options to customers.
  Lower numbers appear first. */
    sort_order: number;
}
/**
 * Represents a navigation link in the storefront's hierarchical navigation structure.
 */
export interface StorefrontNavLinkDto {
    /** The unique identifier for this navigation node in the navigation tree. */
    node_id: string;
    /**
     * The identifier of the parent navigation node, if this is a child node.
     * @nullable
     */
    parent_node_id?: string | null;
    tag_id: FlakeId;
    /** The URL-friendly slug for the tag associated with this navigation link. */
    tag_slug: string;
    /** A list containing all parent tags and this node's tag, representing the complete path in the tag hierarchy. */
    tag_query: string[];
    /** The display name of the associated tag shown to users in the UI. */
    name: string;
    /** The display order of this navigation link relative to its siblings. */
    order: number;
    /** The collection of child navigation links that appear beneath this link in the hierarchy. */
    children: StorefrontNavLinkDto[];
}
/**
 * Additional metadata for the product.
 * @nullable
 */
export type StorefrontProductDtoMetadata = {
    [key: string]: string;
} | null;
export interface StorefrontProductDto {
    id: FlakeId;
    store_id: FlakeId;
    version_id: FlakeId;
    /**
     * The URL to the product image.
     * @nullable
     */
    image_url?: string | null;
    /** The unique slug for the product. */
    slug: string;
    /** The display name of the product. */
    name: string;
    /** The detailed description of the product. */
    description: string;
    /**
     * The date and time when the product becomes enabled.
     * @nullable
     */
    enabled_at?: string | null;
    /**
     * The date and time until which the product remains enabled.
     * @nullable
     */
    enabled_until?: string | null;
    /**
     * The display label for the product.
     * @nullable
     */
    label?: string | null;
    /** The sort order for displaying the product. */
    sort_order: number;
    /** The price of the product, in the lowest denominator (e.g. cents). */
    price: number;
    /** The ISO three-letter lowercase currency code (e.g., usd, eur, gbp) the product is denominated in. */
    currency: string;
    /** Indicates whether the product is limited to a single game server. */
    single_game_server_only: boolean;
    /** Indicates whether one-time purchases are allowed. */
    allow_one_time_purchase: boolean;
    /** Indicates whether subscription purchases are allowed. */
    allow_subscription: boolean;
    /** Indicates whether gifting is disabled for this product. */
    is_gifting_disabled: boolean;
    /** The subscription interval value. */
    subscription_interval_value: number;
    subscription_interval_scale: ProductSubscriptionIntervalScale;
    /** Indicates whether automatic removal is enabled. */
    remove_after_enabled: boolean;
    /** The time value for automatic removal. */
    remove_after_time_value: number;
    remove_after_time_scale: ProductRemoveAfterIntervalScale;
    pricing?: StorefrontProductPricingDetailsDto;
    stock?: StorefrontProductStockStatusDto;
    /** The tags associated with the product. */
    tags: ProductTagDto[];
    /** The game servers associated with the product. */
    gameservers: ProductGameServerDto[];
    /** Custom Variables associated with the product. */
    custom_variables: StorefrontCustomVariableDto[];
    deliverable_actions?: ProductDeliverableActionsDto;
    /**
     * Additional metadata for the product.
     * @nullable
     */
    metadata?: StorefrontProductDtoMetadata;
    /**
     * The date and time when the product was created.
     * @nullable
     */
    created_at?: string | null;
    /**
     * The date and time when the product was last updated.
     * @nullable
     */
    updated_at?: string | null;
}
/**
 * The pricing details for the product in the storefront.
 */
export interface StorefrontProductPricingDetailsDto {
    active_sale?: StorefrontSaleDto;
    /**
     * The amount of the sale discount in the lowest denominator (e.g. cents).
     * @nullable
     */
    sale_value?: number | null;
    vat_rate?: VatRateDto;
    regional_pricing?: StorefrontProductPricingDetailsRegionalPricingDto;
    /** The original price of the product before any discounts, in the lowest denominator (e.g. cents). */
    price_original: number;
    /** The final price of the product after all discounts, in the lowest denominator (e.g. cents). */
    price_final: number;
}
/**
 * Regional pricing information for this product.
Only present if there is a regional pricing configured.
 */
export interface StorefrontProductPricingDetailsRegionalPricingDto {
    /** The identifier for the region. */
    region_id: string;
    /** The currency code used in the region. */
    currency: string;
    /** Indicates whether the base price includes tax. */
    tax_inclusive: boolean;
    /** The base price in the regional currency, in the lowest denominator (e.g. cents). */
    base_price: number;
}
/**
 * The stock status information for the product in the storefront.
 */
export interface StorefrontProductStockStatusDto {
    /** Indicates whether the product is currently available for purchase (there is available stock). */
    available_to_purchase: boolean;
    /** The number of items available for the customer to purchase (customer stock limit remaining). */
    customer_available: number;
}
export interface StorefrontSaleDto {
    id: FlakeId;
    /** The name of the sale. */
    name: string;
    discount_type: SaleDiscountType;
    /** The amount of the discount, either as a percentage in permille or as an absolute value in cents. */
    discount_amount: number;
    /** The minimum order value required to apply the discount, in the lowest denominator (e.g. cents). */
    minimum_order_value: number;
    /** The date and time when the sale begins. */
    begins_at: string;
    /**
     * The date and time when the sale ends, if applicable.
     * @nullable
     */
    ends_at?: string | null;
}
/**
 * Represents a store entity within the storefront system.
 */
export interface StorefrontStoreDto {
    id: FlakeId;
    /** The URL-friendly identifier for the store, used in store URLs. */
    slug: string;
    /** The display name of the store shown to customers. */
    name: string;
    /** The platform or the game of the store. */
    platform: string;
    /** The game of the store. Equivalent to the `platform` for backwards compatibility. */
    readonly game: string;
    /** The three-letter ISO currency code used for pricing in this store. */
    currency: string;
    /**
     * A detailed description of the store. Only present for some platform types.
     * @nullable
     */
    description?: string | null;
    /**
     * The URL of the store's main website, if not using Hosted Webstores.
     * @nullable
     */
    website_url?: string | null;
    /**
     * The email address customers can use to contact store support.
     * @nullable
     */
    support_email?: string | null;
    /**
     * The type of integration this store uses with external systems.
     * @nullable
     */
    integration_type?: string | null;
    /** Indicates whether the store is in live mode (true) or test mode (false). */
    live_mode: boolean;
    /**
     * The URL to the store's main logo image.
     * @nullable
     */
    logo_url?: string | null;
    /**
     * The URL to the store's square logo image.
     * @nullable
     */
    logo_square_url?: string | null;
    /**
     * The date and time when the store was created.
     * @nullable
     */
    created_at?: string | null;
    /**
     * The date and time when the store was last updated.
     * @nullable
     */
    updated_at?: string | null;
}
/**
 * Represents a tag entity used for categorizing and filtering products within a store.
 */
export interface StorefrontTagDto {
    id: FlakeId;
    store_id: FlakeId;
    /** The URL-friendly identifier for the tag, used in category URLs. */
    slug: string;
    /** The display name of the tag shown to customers. */
    name: string;
    /**
     * A detailed description of the tag's purpose or the category it represents.
     * @nullable
     */
    description?: string | null;
    /**
     * The URL to the tag image.
     * @nullable
     */
    image_url?: string | null;
    /** Indicates whether the tag is active and should be included in navigation and filtering. */
    enabled: boolean;
    /** The date and time when the tag was created. */
    created_at: string;
    /**
     * The date and time when the tag was last updated, if applicable.
     * @nullable
     */
    updated_at?: string | null;
}
/**
 * A validation error.
 */
export interface ValidationError {
    /** The parseable error code. */
    code: string;
    /** The human-readable error message. */
    message: string;
    /** The path leading to the validation error. */
    path: string;
    /** Type of the validation that failed. */
    validation: string;
}
/**
 * The VAT rate estimation for the passed in customer country / IP.
Include the VAT percentage + abbreviation in your product view to inform your customers about the tax.
 */
export interface VatRateDto {
    /** The ISO country code. */
    country_code: string;
    /** The full name of the country. */
    country_name: string;
    /** The local currency used in the country. */
    currency: string;
    /** The abbreviation of the VAT term in the local language. */
    vat_abbreviation: string;
    /** The full name of the VAT term in the local language. */
    vat_local_name: string;
    /** Indicates whether the country is a member of the European Union. */
    eu_member_state: boolean;
    /** The VAT rate applicable for electronic services, as a percentage. */
    eservice_rate: number;
    /** The VAT rate (synonym for EServiceRate). */
    readonly percentage: number;
}
export type GetCartParams = {
    /**
     * The ISO three-letter lowercase currency code (e.g., usd, eur, gbp) to display prices in. If not provided, the store's default currency will be used.
     */
    currency?: string;
};
export type PutCartLineParams = {
    /**
     * The ID of the product that should be added to the cart.
     */
    product_id: number;
    /**
     * The quantity to set or increment.
     */
    quantity?: number;
    /**
     * Set to either '1' or 'true' to store as a subscription line item.
     */
    subscription?: string;
    /**
     * A game server ID, required if single_game_server_only is enabled for the product.
     */
    gameserver_id?: number;
    /**
     * Set to either '1' or 'true' to increment (add quantity instead of setting).
     */
    increment?: string;
    /**
     * Dictionary of product custom variables where each entry consists of a string key (identifier)
    and its corresponding selected value. Use the following URL parameter format:
    ?custom_variables[IDENTIFIER]=VALUE
     */
    custom_variables?: {
        [key: string]: string;
    };
};
export type GetProductsParams = {
    /**
     * Tags to filter by. Each tag is a separate query parameter.
     */
    tag?: string[];
    /**
     * The ISO three-letter lowercase currency code (e.g., usd, eur, gbp) to display prices in. If not provided, the store's default currency will be used.
     */
    currency?: string;
};
export type GetProductParams = {
    /**
     * The ISO three-letter lowercase currency code (e.g., usd, eur, gbp) to display prices in. If not provided, the store's default currency will be used.
     */
    currency?: string;
};
/**
 * Retrieves the current customer's shopping cart.
 * @summary Get cart
 */
export declare const getCart: <TData = AxiosResponse<CartDto>>(params?: GetCartParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Clears all items from the customer's shopping cart.
 * @summary Clear cart
 */
export declare const deleteCart: <TData = AxiosResponse<void>>(options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Adds a product to the cart or updates the quantity of an existing product.
When increment parameter is "true" or "1", the specified quantity will be added to any existing quantity.
Otherwise, the quantity will be set to the specified value, replacing any existing quantity.
 * @summary Add product to cart
 */
export declare const putCartLine: <TData = AxiosResponse<void>>(params: PutCartLineParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Creates a checkout session from the contents of the cart.
After creating the checkout session, redirect the customer to the `url` returned.
 * @summary Create a cart checkout session
 */
export declare const postCartCheckoutSession: <TData = AxiosResponse<CreateCheckoutSessionResponseDto>>(createCartCheckoutSessionDto: CreateCartCheckoutSessionDto, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Creates a checkout session using a Customer token.
After creating the checkout session, redirect the customer to the `url` returned.
 * @summary Create a checkout session
 */
export declare const postCheckoutSession: <TData = AxiosResponse<CreateCheckoutSessionResponseDto>>(createCheckoutSessionRequestDto: CreateCheckoutSessionRequestDto, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Retrieves the current customer from the passed Customer token.
 * @summary Get current customer
 */
export declare const getCurrentCustomer: <TData = AxiosResponse<CustomerDto>>(options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Retrieves the store's navlink structure used for navigation.
 * @summary Get navlinks
 */
export declare const getNavlinks: <TData = AxiosResponse<StorefrontNavLinkDto[]>>(options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Retrieves the available products. To make sure all VAT rates are properly displayed, pass in the IP headers as instructed.
 * @summary Get products
 */
export declare const getProducts: <TData = AxiosResponse<StorefrontProductDto[]>>(params?: GetProductsParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Retrieves a product by an ID or a slug. To make sure all VAT rates are properly displayed, pass in the IP headers as instructed.
 * @summary Get product by ID or slug
 */
export declare const getProduct: <TData = AxiosResponse<StorefrontProductDto>>(idOrSlug: string, params?: GetProductParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Retrieves a store by the passed in x-paynow-store-id or Customer token.
 * @summary Get current store
 */
export declare const getStore: <TData = AxiosResponse<StorefrontStoreDto>>(options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Retrieves the store's tags.
 * @summary Get tags
 */
export declare const getTags: <TData = AxiosResponse<StorefrontTagDto[]>>(options?: AxiosRequestConfig) => Promise<TData>;
export type GetCartResult = AxiosResponse<CartDto>;
export type DeleteCartResult = AxiosResponse<void>;
export type PutCartLineResult = AxiosResponse<void>;
export type PostCartCheckoutSessionResult = AxiosResponse<CreateCheckoutSessionResponseDto>;
export type PostCheckoutSessionResult = AxiosResponse<CreateCheckoutSessionResponseDto>;
export type GetCurrentCustomerResult = AxiosResponse<CustomerDto>;
export type GetNavlinksResult = AxiosResponse<StorefrontNavLinkDto[]>;
export type GetProductsResult = AxiosResponse<StorefrontProductDto[]>;
export type GetProductResult = AxiosResponse<StorefrontProductDto>;
export type GetStoreResult = AxiosResponse<StorefrontStoreDto>;
export type GetTagsResult = AxiosResponse<StorefrontTagDto[]>;
//# sourceMappingURL=storefront.d.ts.map