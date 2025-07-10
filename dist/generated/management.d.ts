import type { AxiosRequestConfig, AxiosResponse } from 'axios';
/**
 * Represents the store-level configuration for abandoned checkout settings.
 */
export interface AbandonedCheckoutStoreConfigurationDto {
    store_id: FlakeId;
    /** A value indicating whether the abandoned checkout feature is enabled for the store. */
    enabled: boolean;
    /** A value indicating whether the abandoned checkout configuration for the store is invalid. */
    invalid: boolean;
    trigger_after: Period;
    /** The minimum order value required to trigger an abandoned checkout email. */
    minimum_order_value: number;
    /**
     * The optional maximum order value beyond which an abandoned checkout email will not be sent.
     * @nullable
     */
    maximum_order_value?: number | null;
    /**
     * The optional maximum coupons limit per customer beyond which an abandoned checkout email will not be sent.
     * @nullable
     */
    max_coupons_per_customer_amount?: number | null;
    max_coupons_per_customer_period?: Period;
    /**
     * The optional maximum coupons limit store wide beyond which an abandoned checkout email will not be sent.
     * @nullable
     */
    max_coupons_global_amount?: number | null;
    max_coupons_global_period?: Period;
    coupon_configuration: MarketingCouponConfigurationDto;
    updated_by: ActorDto;
    /** The date and time when the configuration was last updated. */
    updated_at: string;
}
/**
 * Used for updating the store-level configuration for abandoned checkout settings.
 */
export interface AbandonedCheckoutStoreConfigurationUpdateDto {
    /** A value indicating whether the abandoned checkout feature is enabled for the store. */
    enabled: boolean;
    trigger_after: Period;
    /** The minimum order value required to trigger an abandoned checkout email. */
    minimum_order_value: number;
    /**
     * The optional maximum order value beyond which an abandoned checkout email will not be sent.
     * @nullable
     */
    maximum_order_value?: number | null;
    /**
     * The optional maximum coupons limit per customer beyond which an abandoned checkout email will not be sent.
     * @nullable
     */
    max_coupons_per_customer_amount?: number | null;
    max_coupons_per_customer_period?: Period;
    /**
     * The optional maximum coupons limit store wide beyond which an abandoned checkout email will not be sent.
     * @nullable
     */
    max_coupons_global_amount?: number | null;
    max_coupons_global_period?: Period;
    coupon_configuration: MarketingCouponConfigurationDto;
}
export interface ActorDto {
    type: PayNowActorType;
    id: FlakeId;
}
export type AffiliateLinkCommissionType = typeof AffiliateLinkCommissionType[keyof typeof AffiliateLinkCommissionType];
export declare const AffiliateLinkCommissionType: {
    readonly none: "none";
    readonly fixed: "fixed";
    readonly percentage: "percentage";
};
export type AffiliateLinkDiscountType = typeof AffiliateLinkDiscountType[keyof typeof AffiliateLinkDiscountType];
export declare const AffiliateLinkDiscountType: {
    readonly none: "none";
    readonly fixed: "fixed";
    readonly percentage: "percentage";
};
export interface AffiliateLinkDto {
    id: FlakeId;
    store_id: FlakeId;
    wallet_id: string;
    enabled: boolean;
    code: string;
    referer_type: AffiliateLinkRefererType;
    tracking_length_days: number;
    apply_for_subscriptions: boolean;
    discount_type: AffiliateLinkDiscountType;
    discount_amount: number;
    commission_type: AffiliateLinkCommissionType;
    commission_amount: number;
    created_by: ActorDto;
    created_at: string;
    updated_by?: ActorDto;
    /** @nullable */
    updated_at?: string | null;
}
export type AffiliateLinkRefererType = typeof AffiliateLinkRefererType[keyof typeof AffiliateLinkRefererType];
export declare const AffiliateLinkRefererType: {
    readonly invalid: "invalid";
    readonly first_referer: "first_referer";
    readonly last_referer: "last_referer";
};
export interface BanDto {
    id: FlakeId;
    store_id: FlakeId;
    reason: string;
    enabled: boolean;
    identities: BanIdentityDto[];
    created_by: ActorDto;
    created_at: string;
    /** @nullable */
    updated_at?: string | null;
    updated_by?: ActorDto;
    /** @nullable */
    expires_at?: string | null;
}
export interface BanIdentityDto {
    ban_type: BanType;
    ban_type_value: string;
}
export type BanType = typeof BanType[keyof typeof BanType];
export declare const BanType: {
    readonly unknown: "unknown";
    readonly steam: "steam";
    readonly ip: "ip";
    readonly customer: "customer";
    readonly customer_name: "customer_name";
    readonly email: "email";
};
export interface CheckForBanIDByIdentitiesRequestDto {
    identities: BanIdentityDto[];
}
/**
 * Specifies the type of discount applied by a coupon.
 */
export type CouponDiscountTypeEnum = typeof CouponDiscountTypeEnum[keyof typeof CouponDiscountTypeEnum];
export declare const CouponDiscountTypeEnum: {
    readonly unspecified: "unspecified";
    readonly percent: "percent";
    readonly amount: "amount";
};
/**
 * Represents a detailed view of a coupon, including configuration and audit information.
 */
export interface CouponDto {
    id: FlakeId;
    store_id: FlakeId;
    /** Indicates whether the coupon is enabled. */
    enabled: boolean;
    /** The unique code associated with the coupon. */
    code: string;
    /**
     * A note or internal description of the coupon.
     * @nullable
     */
    note?: string | null;
    duration: CouponDurationEnum;
    /**
     * The number of months the coupon is valid, used if the duration is repeating.
     * @nullable
     */
    duration_in_months?: number | null;
    discount_type: CouponDiscountTypeEnum;
    /** The discount amount in the smallest currency unit (e.g., cents). */
    discount_amount: number;
    /** Indicates whether the discount should be applied individually to required tags or products. */
    discount_apply_individually: boolean;
    /** Indicates whether the discount is applied before existing sales. */
    discount_apply_before_sales: boolean;
    /**
     * A list of product IDs the coupon applies to.
     * @nullable
     */
    apply_to_products?: FlakeId[] | null;
    /**
     * A list of tag IDs the coupon applies to.
     * @nullable
     */
    apply_to_tags?: FlakeId[] | null;
    usable_by_customer_id?: FlakeId;
    /** The minimum order value required to use the coupon. */
    minimum_order_value: number;
    /** Indicates whether a global redemption limit is enabled. */
    redeem_limit_store_enabled: boolean;
    /** The maximum number of times the coupon can be redeemed across the store. */
    redeem_limit_store_amount: number;
    /** Indicates whether a per-customer redemption limit is enabled. */
    redeem_limit_customer_enabled: boolean;
    /** The maximum number of times the coupon can be redeemed per customer. */
    redeem_limit_customer_amount: number;
    /** Indicates whether the coupon can be used for one-time purchases. */
    usable_on_one_time_purchase: boolean;
    /** Indicates whether the coupon can be used for subscriptions. */
    usable_on_subscription: boolean;
    /**
     * The date and time when the coupon becomes valid.
     * @nullable
     */
    usable_at?: string | null;
    /**
     * The date and time when the coupon expires.
     * @nullable
     */
    expires_at?: string | null;
    created_by?: ActorDto;
    /** The date and time when the coupon was created. */
    created_at: string;
    updated_by?: ActorDto;
    /**
     * The date and time when the coupon was last updated.
     * @nullable
     */
    updated_at?: string | null;
}
/**
 * Defines the duration for which a coupon remains valid.
 */
export type CouponDurationEnum = typeof CouponDurationEnum[keyof typeof CouponDurationEnum];
export declare const CouponDurationEnum: {
    readonly once: "once";
    readonly forever: "forever";
    readonly repeating: "repeating";
};
export interface CreateAffiliateLinkDto {
    wallet_id: string;
    enabled: boolean;
    code: string;
    referer_type: AffiliateLinkRefererType;
    tracking_length_days: number;
    apply_for_subscriptions: boolean;
    discount_type: AffiliateLinkDiscountType;
    discount_amount: number;
    commission_type: AffiliateLinkCommissionType;
    commission_amount: number;
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
 * Optional metadata to associate with the checkout session line.
Do not store any sensitive information here.
 * @nullable
 */
export type CreateCheckoutSessionLineManagementDtoMetadata = {
    [key: string]: string;
} | null;
/**
 * Key-value pair mapping custom variable identifiers to their selected values.
Required only when the product includes custom variables.
 * @nullable
 */
export type CreateCheckoutSessionLineManagementDtoCustomVariables = {
    [key: string]: string;
} | null;
/**
 * Represents a line item in a checkout session request.
Opposed to CreateCheckoutSessionLineDto, this is used while creating a checkout session using the Management API,
and allows for creating inline products (which is subject to special approval)
 */
export interface CreateCheckoutSessionLineManagementDto {
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
    metadata?: CreateCheckoutSessionLineManagementDtoMetadata;
    /**
     * Key-value pair mapping custom variable identifiers to their selected values.
  Required only when the product includes custom variables.
     * @nullable
     */
    custom_variables?: CreateCheckoutSessionLineManagementDtoCustomVariables;
    product_id?: FlakeId;
    inline_product?: InlineProductCreateDto;
}
/**
 * Optional metadata to associate with the checkout session.
Do not store any sensitive information here.
 * @nullable
 */
export type CreateCheckoutSessionManagementDtoMetadata = {
    [key: string]: string;
} | null;
/**
 * Request to create a new checkout session from your back-end server using the management API.
`customer_id` needs to be specified explicitly here instead of using a Customer token.
 */
export interface CreateCheckoutSessionManagementDto {
    /** The line items to include in the checkout */
    lines: CreateCheckoutSessionLineManagementDto[];
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
    metadata?: CreateCheckoutSessionManagementDtoMetadata;
    customer_id: FlakeId;
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
export interface CreateDownloadableFileDownloadUrlResponseDto {
    download_signed_url: string;
}
export interface CreateRefundRequestDto {
    order_line_id?: FlakeId;
    /**
     * Determines if the refund should be taken from the connected user's balance.
  Only relevant for connected platforms.
     * @nullable
     */
    refund_from_connected_user_balance?: boolean | null;
}
export interface CreateWebhookDto {
    url: string;
    subscribed_to: WebhookEventType;
    type: WebhookType;
    /** @nullable */
    discord_description_template?: string | null;
    /** @nullable */
    discord_title?: string | null;
    /** @nullable */
    discord_color?: string | null;
}
export interface CustomVariableDto {
    id: FlakeId;
    store_id: FlakeId;
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
    options: CustomVariableOptionDto[];
    created_by: ActorDto;
    /** When this custom variable was created. */
    created_at: string;
    updated_by?: ActorDto;
    /**
     * When this custom variable was last updated.
  Null if never updated.
     * @nullable
     */
    updated_at?: string | null;
}
export interface CustomVariableLineItemDto {
    id: FlakeId;
    /** The identifier used to reference this custom variable (e.g., "color", "size"). */
    identifier: string;
    /** The display name of the custom variable shown to users. */
    name: string;
    /** A detailed description of what this custom variable represents. */
    description: string;
    /** The price associated with this custom variable in the smallest currency unit (e.g., cents). */
    price: number;
    /** The selected value for this custom variable. */
    value: string;
}
export interface CustomVariableOptionDto {
    id: FlakeId;
    store_id: FlakeId;
    custom_variable_id: FlakeId;
    /** Display name shown to customers for this option. */
    name: string;
    /** Internal value used for product command variable replacement, without brackets. */
    value: string;
    /** Price modification when this option is selected.
  Interpretation depends on PriceType (fixed amount or percentage). */
    price: number;
    price_type: CustomVariableOptionPriceType;
    /** Whether this option is selected by default when the custom variable is presented.
  Only one option per custom variable should be marked as default. */
    is_default: boolean;
    /** Sort order for displaying options to customers.
  Lower numbers appear first. */
    sort_order: number;
}
/**
 * Defines how option pricing should be applied to the base product price.
 */
export type CustomVariableOptionPriceType = typeof CustomVariableOptionPriceType[keyof typeof CustomVariableOptionPriceType];
export declare const CustomVariableOptionPriceType: {
    readonly fixed: "fixed";
    readonly percentage: "percentage";
};
/**
 * Request model for defining custom variable options.
Used within UpsertCustomVariableRequestDto for dropdown-type variables.
 */
export interface CustomVariableOptionRequestDto {
    id?: FlakeId;
    /** Display name shown to customers for this option. */
    name: string;
    /** The value the command variable will be replaced with. */
    value: string;
    /** Price modification when this option is selected.
  Interpretation depends on PriceType (fixed amount or percentage).
  If fixed, the value is in cents, if a percentage, in permille. */
    price: number;
    price_type: CustomVariableOptionPriceType;
    /** Whether this option is selected by default.
  Only one option per custom variable should be marked as default. */
    is_default: boolean;
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
export interface CustomerTokenResponseDto {
    /** The generated Customer token. */
    token: string;
}
export interface DataMigrationTaskDto {
    id: FlakeId;
    store_id: FlakeId;
    /** Platform from which data is being migrated (e.g., "tebex"). */
    platform: string;
    /** Masked authentication token used for accessing the source platform API. */
    token: string;
    /**
     * Error message if the migration encountered any errors, otherwise null.
     * @nullable
     */
    error?: string | null;
    /** Timestamp when the migration was initiated. */
    started_at: string;
    /**
     * Timestamp when the migration failed, or null if it didn't fail.
     * @nullable
     */
    failed_at?: string | null;
    /**
     * Timestamp when the migration was successfully completed, or null if not completed.
     * @nullable
     */
    completed_at?: string | null;
    /**
     * Total number of entities that need to be migrated, or null if unknown.
     * @nullable
     */
    total_entities_to_migrate?: number | null;
    /** Number of entities that have been successfully migrated. */
    total_entities_migrated: number;
    started_by: ActorDto;
}
export interface DiscordActionDto {
    id: FlakeId;
    store_id: FlakeId;
    product_id: FlakeId;
    product_version_id: FlakeId;
    discord_server_id: FlakeId;
    execution_stage: DiscordActionExecutionStage;
    revocation_stages: DiscordActionRevocationStage[];
    action_type: DiscordActionType;
    channel_id?: FlakeId;
    role_id?: FlakeId;
    /** @nullable */
    message?: string | null;
}
export type DiscordActionExecutionStage = typeof DiscordActionExecutionStage[keyof typeof DiscordActionExecutionStage];
export declare const DiscordActionExecutionStage: {
    readonly on_purchase: "on_purchase";
    readonly on_expire: "on_expire";
    readonly on_refund: "on_refund";
    readonly on_chargeback: "on_chargeback";
};
export type DiscordActionRevocationStage = typeof DiscordActionRevocationStage[keyof typeof DiscordActionRevocationStage];
export declare const DiscordActionRevocationStage: {
    readonly on_expire: "on_expire";
    readonly on_refund: "on_refund";
    readonly on_chargeback: "on_chargeback";
};
export type DiscordActionType = typeof DiscordActionType[keyof typeof DiscordActionType];
export declare const DiscordActionType: {
    readonly persist_role: "persist_role";
    readonly send_message: "send_message";
    readonly ban_user: "ban_user";
    readonly kick_user: "kick_user";
    readonly generate_invite_link: "generate_invite_link";
};
export interface DiscordProfileDto {
    discord_id: FlakeId;
    username: string;
    avatar_hash: string;
}
export interface DiscordServerChannelDto {
    id: string;
    name: string;
    category: string;
}
export interface DiscordServerLinkDto {
    token: string;
    store_id: FlakeId;
    server_id?: FlakeId;
    /** @nullable */
    server_name?: string | null;
    /** @nullable */
    server_icon_url?: string | null;
    created_at: string;
    /** @nullable */
    linked_at?: string | null;
}
export interface DiscordServerRoleDto {
    id: FlakeId;
    name: string;
}
export interface ExecutedWebhookDto {
    id: FlakeId;
    started_at: string;
    /** @nullable */
    finished_at?: string | null;
    status_code: number;
    /** @nullable */
    response?: string | null;
}
export interface FinishTagImageUploadUrlRequestDto {
    /** The ID of the uploaded image returned by the server. */
    image_id: string;
}
export type FlakeId = string;
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
export interface GetTagImageUploadUrlResponseDto {
    /** The ID of the direct image upload URL. */
    id: string;
    /** The URL to upload the image to. */
    upload_url: string;
}
/**
 * Represents a global command in the system.
Global commands are instructions that can be executed across a store's environment.
 */
export interface GlobalCommandDto {
    id: FlakeId;
    store_id: FlakeId;
    stage: ProductCommandStage;
    /** The actual command content to be executed. */
    content: string;
    /** Indicates whether the command should only be executed when the player is online. */
    online_only: boolean;
    /** List of specific game server IDs where this command should be executed, overriding default behavior. */
    override_execute_on_gameserver_ids: FlakeId[];
    /** Timestamp when the command was created. */
    created_at: string;
    created_by: ActorDto;
    /**
     * Optional timestamp indicating when the command was last updated.
  Null if the command has never been updated.
     * @nullable
     */
    updated_at?: string | null;
    updated_by?: ActorDto;
}
/**
 * Additional metadata for the product.
 * @nullable
 */
export type InlineProductCreateDtoMetadata = {
    [key: string]: string;
} | null;
/**
 * Optional inline product definition for dynamic products.
Requires special approval, use `product_id` instead.
 */
export interface InlineProductCreateDto {
    /**
     * The unique URL-safe identifier (slug) for the product.
     * @nullable
     */
    slug?: string | null;
    /**
     * The display name of the product.
     * @nullable
     */
    name?: string | null;
    /**
     * The detailed description of the product.
     * @nullable
     */
    description?: string | null;
    /**
     * The display label for the product.
     * @nullable
     */
    label?: string | null;
    /**
     * The price of the product in the lowest denominator (e.g. cents).
     * @nullable
     */
    price?: number | null;
    /**
     * Indicates whether the customer is prompted to select a game server before purchasing.
     * @nullable
     */
    single_game_server_only?: boolean | null;
    /**
     * Indicates whether one-time purchases are allowed.
     * @nullable
     */
    allow_one_time_purchase?: boolean | null;
    /**
     * Indicates whether subscription purchases are allowed.
     * @nullable
     */
    allow_subscription?: boolean | null;
    /**
     * The subscription interval value.
     * @nullable
     */
    subscription_interval_value?: number | null;
    subscription_interval_scale?: ProductSubscriptionIntervalScale;
    /**
     * Indicates whether automatic removal is enabled.
     * @nullable
     */
    remove_after_enabled?: boolean | null;
    /**
     * The time value for automatic removal.
     * @nullable
     */
    remove_after_time_value?: number | null;
    remove_after_time_scale?: ProductRemoveAfterIntervalScale;
    store_stock_limit?: ProductStockLimitDto;
    customer_stock_limit?: ProductStockLimitDto;
    /**
     * Indicates whether removed items should be excluded from stock limits.
     * @nullable
     */
    stock_limit_do_not_include_removed?: boolean | null;
    /**
     * The tag IDs associated with the product.
     * @nullable
     */
    tags?: FlakeId[] | null;
    /**
     * The gameserver IDs associated with the product.
     * @nullable
     */
    gameservers?: FlakeId[] | null;
    /**
     * The commands to be executed at different stages.
     * @nullable
     */
    commands?: ProductCommandDto[] | null;
    deliverable_actions?: ProductDeliverableActionsDto;
    /**
     * Additional metadata for the product.
     * @nullable
     */
    metadata?: InlineProductCreateDtoMetadata;
    /**
     * The payout splits for revenue distribution.
  Requires special approval.
     * @nullable
     */
    payout_splits?: ProductPayoutSplitDto[] | null;
    tax_code?: ProductTaxCode;
    /**
     * Indicates whether concurrent active items are allowed.
     * @nullable
     */
    allow_concurrent_active_items?: boolean | null;
    /**
     * Indicates whether using coupons and gift cards on this product is allowed.
     * @nullable
     */
    disable_promo_codes?: boolean | null;
    /**
     * Indicates whether the product is hidden.
     * @nullable
     */
    is_hidden?: boolean | null;
    /**
     * Indicates whether gifting is disabled.
     * @nullable
     */
    is_gifting_disabled?: boolean | null;
    /**
     * The date and time when the product becomes enabled.
  Set to `null` to keep enabled.
     * @nullable
     */
    enabled_at?: string | null;
    /**
     * The date and time until which the product remains enabled.
  Set to `null` to keep enabled.
     * @nullable
     */
    enabled_until?: string | null;
    /**
     * The IDs of products required for purchasing this product.
     * @nullable
     */
    required_product_ids?: FlakeId[] | null;
    /**
     * Indicates whether all required products are needed.
     * @nullable
     */
    required_product_all?: boolean | null;
    /**
     * The IDs of associated custom variables.
     * @nullable
     */
    custom_variable_ids?: FlakeId[] | null;
}
/**
 * The last payment decline object.
 */
export interface LastPaymentErrorDto {
    decline_code: PaymentDeclineCode;
    /** Human-readable decline reason message. */
    message: string;
}
/**
 * Represents the configuration settings for a coupon applied to marketing features.
 */
export interface MarketingCouponConfigurationDto {
    duration: CouponDurationEnum;
    /**
     * Gets or sets the duration of the coupon in months, applicable only for repeating coupons.
     * @nullable
     */
    duration_in_months?: number | null;
    discount_type: CouponDiscountTypeEnum;
    /** Gets or sets the discount amount. */
    discount_amount: number;
    /** Gets or sets a value indicating whether the discount only applies to specific tags or products. */
    discount_only_required_tags_or_products: boolean;
    /** Gets or sets a value indicating whether the discount is applied before any existing sales or discounts. */
    discount_apply_before_sales: boolean;
    /** Gets or sets the list of tag IDs required for the discount to apply. */
    required_tag_ids: FlakeId[];
    /** Gets or sets the list of product IDs required for the discount to apply. */
    required_product_ids: FlakeId[];
    /** Gets or sets the minimum order value required for the discount to be applied. */
    minimum_order_value: number;
    /** Gets or sets a value indicating whether a customer-specific redeem limit is enabled. */
    customer_redeem_limit_enabled: boolean;
    /** Gets or sets the maximum number of times a single customer can redeem the coupon. */
    customer_redeem_limit: number;
    /** Gets or sets a value indicating whether the coupon can be used on one-time purchases. */
    usable_on_one_time_purchases: boolean;
    /** Gets or sets a value indicating whether the coupon can be used on subscription purchases. */
    usable_on_subscriptions: boolean;
    expires_after?: Period;
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
 * Represents a customer order
 */
export interface OrderDto {
    id: FlakeId;
    /** The PayNow order ID identifier starting with pn-. */
    pretty_id: string;
    store_id: FlakeId;
    customer_id: FlakeId;
    customer: CustomerDto;
    type: OrderType;
    status: OrderStatus;
    checkout_id?: FlakeId;
    /**
     * The checkout token for this order
     * @nullable
     */
    checkout_token?: string | null;
    subscription_id?: FlakeId;
    /** Signifies if the order is a subscription order */
    readonly is_subscription: boolean;
    coupon_id?: FlakeId;
    giftcard_id?: FlakeId;
    affiliate_id?: FlakeId;
    /** The billing name for this order */
    billing_name: string;
    /** The billing email for this order */
    billing_email: string;
    /** The billing country for this order */
    billing_country: string;
    /** The billing cycle sequence (current renewal count) if this is a subscription order */
    billing_cycle_sequence: number;
    /** The IP address (IPv4 or IPv6) of the customer at time of order */
    customer_ip: string;
    /** The currency code used for this order */
    currency: string;
    /** The total discount amount applied to this order in smallest currency unit */
    discount_amount: number;
    /** The discount amount formatted as a string */
    discount_amount_str: string;
    /** The subtotal amount for this order in smallest currency unit */
    subtotal_amount: number;
    /** The subtotal amount formatted as a string */
    subtotal_amount_str: string;
    /** The tax amount for this order in smallest currency unit */
    tax_amount: number;
    /** The tax amount formatted as a string */
    tax_amount_str: string;
    /** The total amount for this order in smallest currency unit */
    total_amount: number;
    /** The total amount formatted as a string */
    total_amount_str: string;
    /** The amount of gift card value used for this order in smallest currency unit */
    giftcard_usage_amount: number;
    /** The gift card usage amount formatted as a string */
    giftcard_usage_amount_str: string;
    /**
     * The date and time when this order was created
     * @nullable
     */
    created_at?: string | null;
    /**
     * The date and time when this order was completed, if applicable
     * @nullable
     */
    completed_at?: string | null;
    /** The line items in this order */
    lines: OrderLineDto[];
    /**
     * A list of all tax jurisdictions that were involved in the taxation of this order.
     * @nullable
     */
    tax_jurisdictions?: SalesTaxJurisdictionDto[] | null;
    last_payment_error?: LastPaymentErrorDto;
}
/**
 * Key-value pair of selected custom variables for this order.
 * @nullable
 */
export type OrderLineDtoCustomVariables = {
    [key: string]: CustomVariableLineItemDto;
} | null;
/**
 * Represents an order line item in a customer's order
 */
export interface OrderLineDto {
    id: FlakeId;
    checkout_line_id: FlakeId;
    product_id: FlakeId;
    product_version_id: FlakeId;
    /** The name of the product in this order line */
    product_name: string;
    /**
     * The URL of the product image
     * @nullable
     */
    product_image_url?: string | null;
    subscription_id?: FlakeId;
    /**
     * The interval value for subscription products
     * @nullable
     */
    subscription_interval_value?: number | null;
    subscription_interval_scale?: ProductSubscriptionIntervalScale;
    /** Indicates whether this order line is a gift */
    gift: boolean;
    gift_to_customer_id?: FlakeId;
    gift_to_customer?: CustomerDto;
    sale_id?: FlakeId;
    /** The unit price of the product in the smallest currency unit (e.g., cents) */
    price: number;
    /** The unit price of the product formatted as a string */
    price_str: string;
    /** The quantity of the product in this order line */
    quantity: number;
    /** The discount amount (from sales, coupons, and affiliate links) applied to this order line */
    discount_amount: number;
    /** The discount amount formatted as a string */
    discount_amount_str: string;
    /** The amount of gift card used for this order line */
    giftcard_usage_amount: number;
    /** The gift card usage amount formatted as a string */
    giftcard_usage_amount_str: string;
    /** The subtotal amount for this order line */
    subtotal_amount: number;
    /** The subtotal amount formatted as a string */
    subtotal_amount_str: string;
    /** The tax amount for this order line */
    tax_amount: number;
    /** The tax amount formatted as a string */
    tax_amount_str: string;
    /** The total amount for this order line */
    total_amount: number;
    /** The total amount formatted as a string */
    total_amount_str: string;
    selected_gameserver_id?: FlakeId;
    /** Indicates whether tax is included in the base price, or added on top */
    tax_inclusive: boolean;
    /**
     * The payout splits for this order line
     * @nullable
     */
    payout_splits?: OrderLinePayoutSplitDto[] | null;
    /**
     * The regional pricing region ID for this order line, null if no regional pricing set
     * @nullable
     */
    pricing_region_id?: string | null;
    /**
     * Key-value pair of selected custom variables for this order.
     * @nullable
     */
    custom_variables?: OrderLineDtoCustomVariables;
}
/**
 * Represents an order line-level payout split.
 */
export interface OrderLinePayoutSplitDto {
    user_id: FlakeId;
    /**
     * The percentage in basis points.
     * @nullable
     */
    percentage?: number | null;
    /** The platform fee percentage in basis points.
  Only used by platforms. */
    platform_fee: number;
}
export type OrderStatus = typeof OrderStatus[keyof typeof OrderStatus];
export declare const OrderStatus: {
    readonly created: "created";
    readonly completed: "completed";
    readonly canceled: "canceled";
    readonly refunded: "refunded";
    readonly chargeback: "chargeback";
};
/**
 * Defines the type of items contained in an order
 */
export type OrderType = typeof OrderType[keyof typeof OrderType];
export declare const OrderType: {
    readonly one_time: "one_time";
    readonly subscription: "subscription";
    readonly mixed: "mixed";
};
export type PayNowActorType = typeof PayNowActorType[keyof typeof PayNowActorType];
export declare const PayNowActorType: {
    readonly anonymous: "anonymous";
    readonly user: "user";
    readonly customer: "customer";
    readonly api_key: "api_key";
    readonly game_server: "game_server";
    readonly admin: "admin";
    readonly internal: "internal";
    readonly platform: "platform";
    readonly global_customer: "global_customer";
};
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
/**
 * A payment decline reason code.
 */
export type PaymentDeclineCode = typeof PaymentDeclineCode[keyof typeof PaymentDeclineCode];
export declare const PaymentDeclineCode: {
    readonly unknown: "unknown";
    readonly generic_decline: "generic_decline";
    readonly call_issuer: "call_issuer";
    readonly authentication_required: "authentication_required";
    readonly currency_not_supported: "currency_not_supported";
    readonly duplicate_transaction: "duplicate_transaction";
    readonly expired_card: "expired_card";
    readonly fraudulent: "fraudulent";
    readonly incorrect_number: "incorrect_number";
    readonly incorrect_cvc: "incorrect_cvc";
    readonly incorrect_pin: "incorrect_pin";
    readonly incorrect_zip: "incorrect_zip";
    readonly insufficient_funds: "insufficient_funds";
    readonly invalid_account: "invalid_account";
    readonly invalid_amount: "invalid_amount";
    readonly invalid_expiry_month: "invalid_expiry_month";
    readonly invalid_expiry_year: "invalid_expiry_year";
    readonly issuer_not_available: "issuer_not_available";
    readonly lost_card: "lost_card";
    readonly merchant_blacklist: "merchant_blacklist";
    readonly new_account_information_available: "new_account_information_available";
    readonly no_action_taken: "no_action_taken";
    readonly pickup_card: "pickup_card";
    readonly pin_try_exceeded: "pin_try_exceeded";
    readonly restricted_card: "restricted_card";
    readonly stolen_card: "stolen_card";
    readonly testmode_decline: "testmode_decline";
    readonly try_again_later: "try_again_later";
    readonly security_violation: "security_violation";
    readonly card_velocity_exceeded: "card_velocity_exceeded";
    readonly do_not_honor: "do_not_honor";
    readonly processing_error: "processing_error";
    readonly card_not_supported: "card_not_supported";
    readonly transaction_not_allowed: "transaction_not_allowed";
    readonly authorization_revoked: "authorization_revoked";
};
export interface Period {
    readonly nanoseconds: number;
    readonly ticks: number;
    readonly milliseconds: number;
    readonly seconds: number;
    readonly minutes: number;
    readonly hours: number;
    readonly days: number;
    readonly weeks: number;
    readonly months: number;
    readonly years: number;
    readonly has_time_component: boolean;
    readonly has_date_component: boolean;
}
export interface ProductCommandDto {
    stage: ProductCommandStage;
    /** Content of the command. */
    content: string;
    /** Value indicating whether the command should only execute when the player is online. */
    online_only: boolean;
    /**
     * Value indicating on which game servers should the command be executed.
  If left empty or null, then the default behavior applies
  (executing on all game servers or on the selected game server is selection is enabled)
     * @nullable
     */
    override_execute_on_gameserver_ids?: FlakeId[] | null;
}
/**
 * Defines the stages at which product commands can be executed.
 */
export type ProductCommandStage = typeof ProductCommandStage[keyof typeof ProductCommandStage];
export declare const ProductCommandStage: {
    readonly invalid: "invalid";
    readonly on_purchase: "on_purchase";
    readonly on_expire: "on_expire";
    readonly on_refund: "on_refund";
    readonly on_renew: "on_renew";
    readonly on_chargeback: "on_chargeback";
};
export interface ProductDeliverableActionsDto {
    /** Value indicating whether to grant a giftcard with the product with the subtotal amount. */
    grant_giftcard: boolean;
}
export interface ProductDownloadableFileDto {
    id: FlakeId;
    store_id: FlakeId;
    product_id: FlakeId;
    is_uploaded: boolean;
    /** @nullable */
    file_name?: string | null;
    /** @nullable */
    file_content_type?: string | null;
    /** @nullable */
    file_size?: number | null;
    /** @nullable */
    file_hash?: string | null;
    /** @nullable */
    description?: string | null;
    created_at: string;
    created_by: ActorDto;
    /** @nullable */
    updated_at?: string | null;
    updated_by?: ActorDto;
}
/**
 * Additional metadata for the product.
 * @nullable
 */
export type ProductDtoMetadata = {
    [key: string]: string;
} | null;
export interface ProductDto {
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
     * The display label for the product.
     * @nullable
     */
    label?: string | null;
    /** The sort order for displaying the product. */
    sort_order: number;
    /** The price of the product, in the lowest denominator (e.g. cents). */
    price: number;
    /** Indicates whether the product is limited to a single game server. */
    single_game_server_only: boolean;
    /** Indicates whether one-time purchases are allowed. */
    allow_one_time_purchase: boolean;
    /** Indicates whether subscription purchases are allowed. */
    allow_subscription: boolean;
    /** The subscription interval value. */
    subscription_interval_value: number;
    subscription_interval_scale: ProductSubscriptionIntervalScale;
    /** Indicates whether automatic removal is enabled. */
    remove_after_enabled: boolean;
    /** The time value for automatic removal. */
    remove_after_time_value: number;
    remove_after_time_scale: ProductRemoveAfterIntervalScale;
    stock_available: ProductStockAvailableDto;
    store_stock_limit: ProductStockLimitDto;
    customer_stock_limit: ProductStockLimitDto;
    /**
     * Indicates whether removed items should be excluded from stock limits.
     * @nullable
     */
    stock_limit_do_not_include_removed?: boolean | null;
    /** The tags associated with the product. */
    tags: ProductTagDto[];
    /** The game servers associated with the product. */
    gameservers: ProductGameServerDto[];
    /** The commands to be executed at different stages. */
    commands: ProductCommandDto[];
    created_by?: ActorDto;
    /**
     * The date and time when the product was created.
     * @nullable
     */
    created_at?: string | null;
    updated_by?: ActorDto;
    /**
     * The date and time when the product was last updated.
     * @nullable
     */
    updated_at?: string | null;
    deliverable_actions?: ProductDeliverableActionsDto;
    /**
     * Additional metadata for the product.
     * @nullable
     */
    metadata?: ProductDtoMetadata;
    /**
     * The payout splits for revenue distribution.
     * @nullable
     */
    payout_splits?: ProductPayoutSplitDto[] | null;
    tax_code?: ProductTaxCode;
    /**
     * Indicates whether concurrent active items are allowed.
     * @nullable
     */
    allow_concurrent_active_items?: boolean | null;
    /**
     * Indicates whether using coupons and gift cards on this product is allowed.
     * @nullable
     */
    disable_promo_codes?: boolean | null;
    /**
     * Indicates whether the product is hidden.
     * @nullable
     */
    is_hidden?: boolean | null;
    /**
     * Indicates whether gifting is disabled.
     * @nullable
     */
    is_gifting_disabled?: boolean | null;
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
     * The IDs of products required for purchasing this product.
     * @nullable
     */
    required_product_ids?: FlakeId[] | null;
    /**
     * Indicates whether all required products are needed.
     * @nullable
     */
    required_product_all?: boolean | null;
    /**
     * The IDs of associated custom variables.
     * @nullable
     */
    custom_variable_ids?: FlakeId[] | null;
}
export interface ProductGameServerDto {
    id: FlakeId;
    /** The name of the game server. */
    name: string;
    /** Indicates whether this game server is enabled. */
    enabled: boolean;
}
export interface ProductPayoutSplitDto {
    user_id: FlakeId;
    /**
     * The percentage of the payment allocated to the user, in basis points (500 = 5%).
  The last payout split must have this field set to `null` to receive the remaining portion.
     * @nullable
     */
    percentage?: number | null;
    /** The platform fee percentage your platform receives, in basis points (500 = 5%). */
    platform_fee: number;
}
export interface ProductPricingRegionDto {
    id: string;
    group_id: string;
    local_currency: string;
    local_currency_fx_rate: number;
    blended_vat_rate: number;
    name: string;
    country_codes: string[];
    enabled: boolean;
    /** @nullable */
    price?: number | null;
    /** @nullable */
    default_price_multiplier?: number | null;
    /** @nullable */
    currency?: string | null;
    /** @nullable */
    tax_inclusive?: boolean | null;
    /** @nullable */
    updated_at?: string | null;
}
export interface ProductPricingRegionGroupDto {
    id: string;
    name: string;
    description: string;
    recommended_base_price_multiplier: number;
}
export interface ProductPricingRegionOverrideDto {
    /** @nullable */
    price?: number | null;
    /** @nullable */
    enabled?: boolean | null;
    /** @nullable */
    currency?: string | null;
    /** @nullable */
    tax_inclusive?: boolean | null;
}
export type ProductRemoveAfterIntervalScale = typeof ProductRemoveAfterIntervalScale[keyof typeof ProductRemoveAfterIntervalScale];
export declare const ProductRemoveAfterIntervalScale: {
    readonly invalid: "invalid";
    readonly day: "day";
    readonly week: "week";
    readonly month: "month";
};
export interface ProductStockAvailableDto {
    /** Indicates how many stock is left store-wide. */
    store_available: number;
    customer_available: number;
}
export interface ProductStockLimitDto {
    /** Indicates whether stock limit is enabled. */
    enabled: boolean;
    /**
     * The quantity limit.
     * @nullable
     */
    quantity?: number | null;
    /**
     * The time value for stock limit period.
     * @nullable
     */
    time_value?: number | null;
    time_scale: ProductStockTimeScale;
}
export type ProductStockTimeScale = typeof ProductStockTimeScale[keyof typeof ProductStockTimeScale];
export declare const ProductStockTimeScale: {
    readonly invalid: "invalid";
    readonly day: "day";
    readonly week: "week";
    readonly month: "month";
    readonly year: "year";
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
/**
 * Determines the category of the product for taxation purposes.
Contact support for help with setting the correct tax code.
 */
export type ProductTaxCode = typeof ProductTaxCode[keyof typeof ProductTaxCode];
export declare const ProductTaxCode: {
    readonly unknown: "unknown";
    readonly digital_goods_subscription: "digital_goods_subscription";
    readonly digital_goods_permanent: "digital_goods_permanent";
    readonly saas: "saas";
    readonly downloaded_software: "downloaded_software";
    readonly digital_goods_subscription_gaming: "digital_goods_subscription_gaming";
    readonly digital_goods_permanent_gaming: "digital_goods_permanent_gaming";
};
/**
 * Represents the store-level configuration for abandoned checkout settings.
 */
export interface PurchaseFollowUpStoreConfigurationDto {
    store_id: FlakeId;
    /** A value indicating whether the abandoned checkout feature is enabled for the store. */
    enabled: boolean;
    /** A value indicating whether the abandoned checkout configuration for the store is invalid. */
    invalid: boolean;
    trigger_after: Period;
    /** The minimum order value required to trigger an abandoned checkout email. */
    minimum_order_value: number;
    /**
     * The optional maximum order value beyond which an abandoned checkout email will not be sent.
     * @nullable
     */
    maximum_order_value?: number | null;
    /**
     * The optional maximum coupons limit per customer beyond which an abandoned checkout email will not be sent.
     * @nullable
     */
    max_coupons_per_customer_amount?: number | null;
    max_coupons_per_customer_period?: Period;
    /**
     * The optional maximum coupons limit store wide beyond which an abandoned checkout email will not be sent.
     * @nullable
     */
    max_coupons_global_amount?: number | null;
    max_coupons_global_period?: Period;
    coupon_configuration: MarketingCouponConfigurationDto;
    updated_by: ActorDto;
    /** The date and time when the configuration was last updated. */
    updated_at: string;
}
/**
 * Used for updating the store-level configuration for abandoned checkout settings.
 */
export interface PurchaseFollowUpStoreConfigurationUpdateDto {
    /** A value indicating whether the abandoned checkout feature is enabled for the store. */
    enabled: boolean;
    trigger_after: Period;
    /** The minimum order value required to trigger an abandoned checkout email. */
    minimum_order_value: number;
    /**
     * The optional maximum order value beyond which an abandoned checkout email will not be sent.
     * @nullable
     */
    maximum_order_value?: number | null;
    /**
     * The optional maximum coupons limit per customer beyond which an abandoned checkout email will not be sent.
     * @nullable
     */
    max_coupons_per_customer_amount?: number | null;
    max_coupons_per_customer_period?: Period;
    /**
     * The optional maximum coupons limit store wide beyond which an abandoned checkout email will not be sent.
     * @nullable
     */
    max_coupons_global_amount?: number | null;
    max_coupons_global_period?: Period;
    coupon_configuration: MarketingCouponConfigurationDto;
}
export interface QueuedDiscordActionDto {
    id: number;
    execution_stage: DiscordActionExecutionStage;
    status: QueuedDiscordActionStatus;
    store_id: FlakeId;
    order_id?: FlakeId;
    delivery_item_id: FlakeId;
    checkout_id?: FlakeId;
    checkout_line_id?: FlakeId;
    product_id: FlakeId;
    product_version_id: FlakeId;
    discord_server_id: FlakeId;
    action_type: DiscordActionType;
    discord_user_id?: FlakeId;
    channel_id?: FlakeId;
    role_id?: FlakeId;
    /** @nullable */
    message?: string | null;
    revocation_stages: DiscordActionRevocationStage[];
    enqueued_at: string;
    /** @nullable */
    finalised_at?: string | null;
    executions: QueuedDiscordActionExecutionDto[];
}
export interface QueuedDiscordActionExecutionDto {
    id: number;
    queue_id: number;
    executed_at: string;
    execution_status: QueuedDiscordActionExecutionStatus;
    /** @nullable */
    message?: string | null;
    /** @nullable */
    trace_id?: string | null;
}
export type QueuedDiscordActionExecutionStatus = typeof QueuedDiscordActionExecutionStatus[keyof typeof QueuedDiscordActionExecutionStatus];
export declare const QueuedDiscordActionExecutionStatus: {
    readonly success: "success";
    readonly failure: "failure";
};
export type QueuedDiscordActionStatus = typeof QueuedDiscordActionStatus[keyof typeof QueuedDiscordActionStatus];
export declare const QueuedDiscordActionStatus: {
    readonly active: "active";
    readonly complete: "complete";
    readonly errored: "errored";
    readonly canceled: "canceled";
};
export interface QueuedWebhookDto {
    id: FlakeId;
    webhook_id: FlakeId;
    created_at: string;
    state: WebhookState;
    /** @nullable */
    next_retry?: string | null;
    event: WebhookEventType;
    payload: unknown;
    executions: ExecutedWebhookDto[];
}
export interface RefundDto {
    id: FlakeId;
    store_id: FlakeId;
    payment_id: FlakeId;
    customer_id: FlakeId;
    order_line_id?: FlakeId;
    status: RefundStatus;
    /**
     * Reason for failure if the refund has failed
     * @nullable
     */
    failure_reason?: string | null;
    /** Three-letter currency code of the refund */
    currency: string;
    /** Amount of the refund in smallest currency unit (e.g., cents) */
    amount: number;
    /** String representation of the refund amount, formatted for display */
    amount_str: string;
    /** Amount of payment processor fees in smallest currency unit */
    gateway_fee_amount: number;
    /** String representation of gateway fee amount, formatted for display */
    gateway_fee_amount_str: string;
    /** Amount of tax being refunded in smallest currency unit */
    tax_amount: number;
    /** String representation of tax amount, formatted for display */
    tax_amount_str: string;
    /** Amount of platform fees in smallest currency unit */
    platform_fee_amount: number;
    /** String representation of platform fee amount, formatted for display */
    platform_fee_amount_str: string;
    /** Net amount for the store after fees in smallest currency unit */
    store_net_amount: number;
    /** String representation of store net amount, formatted for display */
    store_net_amount_str: string;
    /** Amount of the refund to be paid by the store in smallest currency unit */
    store_refund_amount: number;
    /** String representation of store refund amount, formatted for display */
    store_refund_amount_str: string;
    /**
     * Optional currency code used for presentment to the customer if different from the base currency
     * @nullable
     */
    presentment_currency?: string | null;
    /**
     * Optional amount in presentment currency in smallest currency unit
     * @nullable
     */
    presentment_amount?: number | null;
    /**
     * Exchange rate used while refunding. Only present for payments made in non-settlement currency.
     * @nullable
     */
    fx_rate?: string | null;
    /** Indicates whether the refund should be taken from the connected user's balance.
  Only relevant for platforms. */
    refund_from_connected_user_balance: boolean;
    /** Date and time when the refund was created */
    created_at: string;
    /**
     * Optional date and time when the refund was approved
     * @nullable
     */
    approved_at?: string | null;
    /**
     * Optional date and time when the refund entered pending status
     * @nullable
     */
    pending_at?: string | null;
    /**
     * Optional date and time when the refund was completed
     * @nullable
     */
    completed_at?: string | null;
    /**
     * Optional date and time when the refund was canceled
     * @nullable
     */
    canceled_at?: string | null;
    /**
     * Optional date and time when the refund failed
     * @nullable
     */
    failed_at?: string | null;
}
/**
 * Represents the current status of a refund in the system
 */
export type RefundStatus = typeof RefundStatus[keyof typeof RefundStatus];
export declare const RefundStatus: {
    readonly created: "created";
    readonly approved: "approved";
    readonly processing: "processing";
    readonly completed: "completed";
    readonly canceled: "canceled";
    readonly failed: "failed";
};
export interface ResendCommandsForGameServerRequestDto {
    /** @nullable */
    starts_at?: string | null;
    /** @nullable */
    ends_at?: string | null;
    inventory_item_id?: FlakeId;
    customer_id?: FlakeId;
    order_id?: FlakeId;
    product_id?: FlakeId;
    subscription_id?: FlakeId;
}
export interface ResendCommandsForGameServerResponseDto {
    enqueued_commands_count: number;
}
/**
 * Object representing a sales tax jurisdiction and its associated taxes.
 */
export interface SalesTaxJurisdictionDto {
    /** The name of the tax jurisdiction. */
    name: string;
    /** List of taxes applied within this jurisdiction. */
    taxes: SalesTaxJurisdictionTaxDto[];
    /**
     * Explanation for why taxes are not applied, if applicable.
  This property is null when taxes are applied.
     * @nullable
     */
    not_taxed_reason?: string | null;
}
/**
 * Object representing a specific tax within a sales tax jurisdiction.
 */
export interface SalesTaxJurisdictionTaxDto {
    /** The name of the tax. */
    tax_name: string;
    /** The amount subject to taxation, formatted as a string. */
    taxable_amount: string;
    /** The calculated tax amount, formatted as a string. */
    tax_amount: string;
    /** The rate at which the tax is applied, formatted as a string. */
    tax_rate: string;
}
export interface SetDiscordActionDto {
    discord_server_id: FlakeId;
    action_type: DiscordActionType;
    execution_stage: DiscordActionExecutionStage;
    /** @nullable */
    revocation_stages?: DiscordActionRevocationStage[] | null;
    channel_id?: FlakeId;
    role_id?: FlakeId;
    /** @nullable */
    message?: string | null;
}
export interface StartDataMigrationFromTebexRequestDto {
    /** The public-facing Headless API token. */
    headless_token: string;
    /** An API token associated to a Tebex game server. */
    plugin_token: string;
}
export interface StartDownloadableFileUploadRequestDto {
    file_name: string;
    file_content_type: string;
    /** @nullable */
    description?: string | null;
}
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
export interface StorePricingRegionOverrideDto {
    /** @nullable */
    default_price_multiplier?: number | null;
    /** @nullable */
    enabled?: boolean | null;
    /** @nullable */
    currency?: string | null;
    /** @nullable */
    tax_inclusive?: boolean | null;
}
/**
 * Data transfer object representing a store subscription.
 */
export interface StoreSubscriptionDto {
    id: FlakeId;
    /** Human-readable identifier for the subscription. */
    pretty_id: string;
    store_id: FlakeId;
    customer: CustomerDto;
    payment_method_id?: FlakeId;
    status: SubscriptionStatus;
    coupon_id?: FlakeId;
    /**
     * Date when a repeating coupon ends for this subscription.
     * @nullable
     */
    coupon_repeating_ends_at?: string | null;
    affiliate_id?: FlakeId;
    checkout_id?: FlakeId;
    checkout_line_id?: FlakeId;
    /**
     * Name used for billing purposes.
     * @nullable
     */
    billing_name?: string | null;
    /**
     * Email used for billing purposes.
     * @nullable
     */
    billing_email?: string | null;
    /**
     * Country code used for billing purposes.
     * @nullable
     */
    billing_country?: string | null;
    /** List of tax jurisdictions applicable to this subscription. */
    tax_jurisdictions: SalesTaxJurisdictionDto[];
    /**
     * IP address of the customer at the time of subscription.
     * @nullable
     */
    customer_ip?: string | null;
    /** Indicates whether this subscription is a gift. */
    gift: boolean;
    gift_to_customer?: CustomerDto;
    product_id: FlakeId;
    product_version_id: FlakeId;
    /** Name of the product associated with this subscription. */
    product_name: string;
    /**
     * URL for the product image.
     * @nullable
     */
    product_image_url?: string | null;
    /** Numeric value of the billing interval. */
    interval_value: number;
    interval_scale: ProductSubscriptionIntervalScale;
    /** Currency code used for billing this subscription. */
    currency: string;
    /** Indicates whether tax is included in the base price itself. */
    tax_inclusive: boolean;
    /** Base price of the subscription in smallest currency units (e.g., cents). */
    price: number;
    /** Formatted string representation of the price. */
    price_str: string;
    /** Amount of discount applied in smallest currency units. */
    discount_amount: number;
    /** Formatted string representation of the discount amount. */
    discount_amount_str: string;
    /** Subtotal amount in smallest currency units. */
    subtotal_amount: number;
    /** Formatted string representation of the subtotal amount. */
    subtotal_amount_str: string;
    /** Tax amount in smallest currency units. */
    tax_amount: number;
    /** Formatted string representation of the tax amount. */
    tax_amount_str: string;
    /** Total amount in smallest currency units. */
    total_amount: number;
    /** Formatted string representation of the total amount. */
    total_amount_str: string;
    /** Initial discount amount in smallest currency units for the first billing cycle. */
    initial_discount_amount: number;
    /** Formatted string representation of the initial discount amount. */
    initial_discount_amount_str: string;
    /** Initial subtotal amount in smallest currency units for the first billing cycle. */
    initial_subtotal_amount: number;
    /** Formatted string representation of the initial subtotal amount. */
    initial_subtotal_amount_str: string;
    /** Initial gift card usage amount in smallest currency units. */
    initial_giftcard_usage_amount: number;
    /** Formatted string representation of the initial gift card usage amount. */
    initial_giftcard_usage_amount_str: string;
    /** Initial tax amount in smallest currency units for the first billing cycle. */
    initial_tax_amount: number;
    /** Formatted string representation of the initial tax amount. */
    initial_tax_amount_str: string;
    /** Initial total amount in smallest currency units for the first billing cycle. */
    initial_total_amount: number;
    /** Formatted string representation of the initial total amount. */
    initial_total_amount_str: string;
    /**
     * Identifier for the pricing region associated with this subscription.
     * @nullable
     */
    pricing_region_id?: string | null;
    /**
     * Start date of the current billing period.
     * @nullable
     */
    current_period_start?: string | null;
    /**
     * End date of the current billing period.
     * @nullable
     */
    current_period_end?: string | null;
    /**
     * Sequence number of the current billing cycle.
     * @nullable
     */
    billing_cycle_sequence?: number | null;
    /**
     * Date and time when the next payment attempt will occur.
     * @nullable
     */
    next_attempt_at?: string | null;
    /**
     * Number of payment attempts made for the current billing cycle.
     * @nullable
     */
    attempt_count?: number | null;
    /** Date and time when the subscription was created. */
    created_at: string;
    /**
     * Date and time when the subscription was last updated.
     * @nullable
     */
    updated_at?: string | null;
    /**
     * Date and time when the subscription became active.
     * @nullable
     */
    active_at?: string | null;
    /**
     * Date and time when the subscription was canceled.
     * @nullable
     */
    canceled_at?: string | null;
    /**
     * Reason provided for cancellation.
     * @nullable
     */
    cancel_reason?: string | null;
}
/**
 * Represents the current state of a subscription.
 */
export type SubscriptionStatus = typeof SubscriptionStatus[keyof typeof SubscriptionStatus];
export declare const SubscriptionStatus: {
    readonly created: "created";
    readonly active: "active";
    readonly canceled: "canceled";
};
export interface TrustStoreOnboardingDto {
    store_id: FlakeId;
    user_id: FlakeId;
    status: TrustStoreOnboardingStatus;
    payout_onboarding_completed: boolean;
    kyc_completed: boolean;
    requires_approval: boolean;
    manually_approved: boolean;
    /** @nullable */
    decline_reason?: string | null;
    /** @nullable */
    requires_action_text?: string | null;
    products_created: boolean;
    kyc_required: boolean;
    gameserver_linked: boolean;
}
export type TrustStoreOnboardingStatus = typeof TrustStoreOnboardingStatus[keyof typeof TrustStoreOnboardingStatus];
export declare const TrustStoreOnboardingStatus: {
    readonly invalid: "invalid";
    readonly pending: "pending";
    readonly approved: "approved";
    readonly declined: "declined";
    readonly requires_action: "requires_action";
    readonly under_review: "under_review";
};
export interface UpdateAffiliateLinkDto {
    /** @nullable */
    enabled?: boolean | null;
    /** @nullable */
    code?: string | null;
    referer_type?: AffiliateLinkRefererType;
    /** @nullable */
    tracking_length_days?: number | null;
    /** @nullable */
    apply_for_subscriptions?: boolean | null;
    discount_type?: AffiliateLinkDiscountType;
    /** @nullable */
    discount_amount?: number | null;
    commission_type?: AffiliateLinkCommissionType;
    /** @nullable */
    commission_amount?: number | null;
}
export interface UpdateProductSortOrderRequestDto {
    /** An array of product IDs in the order that they should be sorted. */
    product_ids: FlakeId[];
}
export interface UpdateWebhookDto {
    url: string;
    reset_secret: boolean;
    subscribed_to: WebhookEventType;
    /** @nullable */
    discord_description_template?: string | null;
    /** @nullable */
    discord_title?: string | null;
    /** @nullable */
    discord_color?: string | null;
}
export interface UpsertBanRequestDto {
    /** @nullable */
    reason?: string | null;
    /** @nullable */
    identities?: BanIdentityDto[] | null;
    /** @nullable */
    expires_at?: string | null;
}
/**
 * Unified request model for creating or updating custom variables.
Contains all the configurable properties of a custom variable.
 */
export interface UpsertCustomVariableRequestDto {
    /** Unique identifier string for programmatic reference.
  Must contain only letters, numbers, underscores, and hyphens. */
    identifier: string;
    /** Display name shown to customers. */
    name: string;
    /**
     * Description explaining the purpose of this custom variable.
     * @nullable
     */
    description?: string | null;
    type: CustomVariableType;
    /**
     * Optional regex pattern for validating customer input.
  Only applies to text and number types. Ignored for dropdown types.
     * @nullable
     */
    value_regex?: string | null;
    /** Predefined options for dropdown-type custom variables.
  Required for dropdown types, ignored for text and number types.
  When updating, this completely replaces all existing options. */
    options: CustomVariableOptionRequestDto[];
}
/**
 * Additional customer information stored as key-value pairs.
 * @nullable
 */
export type UpsertCustomerRequestDtoMetadata = {
    [key: string]: string;
} | null;
export interface UpsertCustomerRequestDto {
    /**
     * The Steam platform identifier (Steam ID 64) for the customer.
     * @nullable
     */
    steam_id?: string | null;
    /**
     * The Minecraft UUID for the customer.
     * @nullable
     */
    minecraft_uuid?: string | null;
    minecraft_platform?: CustomerMinecraftPlatform;
    /**
     * The Xbox XUID (Xbox User ID) for the customer.
     * @nullable
     */
    xbox_xuid?: string | null;
    /**
     * The name of the customer.
     * @nullable
     */
    name?: string | null;
    /**
     * Additional customer information stored as key-value pairs.
     * @nullable
     */
    metadata?: UpsertCustomerRequestDtoMetadata;
}
/**
 * Data transfer object used for creating new global commands or updating existing ones.
Supports partial updates following PATCH semantics.
 */
export interface UpsertGlobalCommandDto {
    stage: ProductCommandStage;
    /** The command content to be executed. */
    content: string;
    /** Indicates whether the command should only be executed when the player is online. */
    online_only: boolean;
    /**
     * List of specific game server IDs where this command should be executed.
     * @nullable
     */
    override_execute_on_gameserver_ids?: FlakeId[] | null;
}
/**
 * Additional metadata for the product.
 * @nullable
 */
export type UpsertProductRequestDtoMetadata = {
    [key: string]: string;
} | null;
export interface UpsertProductRequestDto {
    /**
     * The unique URL-safe identifier (slug) for the product.
     * @nullable
     */
    slug?: string | null;
    /**
     * The display name of the product.
     * @nullable
     */
    name?: string | null;
    /**
     * The detailed description of the product.
     * @nullable
     */
    description?: string | null;
    /**
     * The display label for the product.
     * @nullable
     */
    label?: string | null;
    /**
     * The price of the product in the lowest denominator (e.g. cents).
     * @nullable
     */
    price?: number | null;
    /**
     * Indicates whether the customer is prompted to select a game server before purchasing.
     * @nullable
     */
    single_game_server_only?: boolean | null;
    /**
     * Indicates whether one-time purchases are allowed.
     * @nullable
     */
    allow_one_time_purchase?: boolean | null;
    /**
     * Indicates whether subscription purchases are allowed.
     * @nullable
     */
    allow_subscription?: boolean | null;
    /**
     * The subscription interval value.
     * @nullable
     */
    subscription_interval_value?: number | null;
    subscription_interval_scale?: ProductSubscriptionIntervalScale;
    /**
     * Indicates whether automatic removal is enabled.
     * @nullable
     */
    remove_after_enabled?: boolean | null;
    /**
     * The time value for automatic removal.
     * @nullable
     */
    remove_after_time_value?: number | null;
    remove_after_time_scale?: ProductRemoveAfterIntervalScale;
    store_stock_limit?: ProductStockLimitDto;
    customer_stock_limit?: ProductStockLimitDto;
    /**
     * Indicates whether removed items should be excluded from stock limits.
     * @nullable
     */
    stock_limit_do_not_include_removed?: boolean | null;
    /**
     * The tag IDs associated with the product.
     * @nullable
     */
    tags?: FlakeId[] | null;
    /**
     * The gameserver IDs associated with the product.
     * @nullable
     */
    gameservers?: FlakeId[] | null;
    /**
     * The commands to be executed at different stages.
     * @nullable
     */
    commands?: ProductCommandDto[] | null;
    deliverable_actions?: ProductDeliverableActionsDto;
    /**
     * Additional metadata for the product.
     * @nullable
     */
    metadata?: UpsertProductRequestDtoMetadata;
    /**
     * The payout splits for revenue distribution.
  Requires special approval.
     * @nullable
     */
    payout_splits?: ProductPayoutSplitDto[] | null;
    tax_code?: ProductTaxCode;
    /**
     * Indicates whether concurrent active items are allowed.
     * @nullable
     */
    allow_concurrent_active_items?: boolean | null;
    /**
     * Indicates whether using coupons and gift cards on this product is allowed.
     * @nullable
     */
    disable_promo_codes?: boolean | null;
    /**
     * Indicates whether the product is hidden.
     * @nullable
     */
    is_hidden?: boolean | null;
    /**
     * Indicates whether gifting is disabled.
     * @nullable
     */
    is_gifting_disabled?: boolean | null;
    /**
     * The date and time when the product becomes enabled.
  Set to `null` to keep enabled.
     * @nullable
     */
    enabled_at?: string | null;
    /**
     * The date and time until which the product remains enabled.
  Set to `null` to keep enabled.
     * @nullable
     */
    enabled_until?: string | null;
    /**
     * The IDs of products required for purchasing this product.
     * @nullable
     */
    required_product_ids?: FlakeId[] | null;
    /**
     * Indicates whether all required products are needed.
     * @nullable
     */
    required_product_all?: boolean | null;
    /**
     * The IDs of associated custom variables.
     * @nullable
     */
    custom_variable_ids?: FlakeId[] | null;
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
export type WebhookEventType = typeof WebhookEventType[keyof typeof WebhookEventType];
export declare const WebhookEventType: {
    readonly on_ignore: "on_ignore";
    readonly on_order_completed: "on_order_completed";
    readonly on_refund: "on_refund";
    readonly on_chargeback: "on_chargeback";
    readonly on_delivery_item_added: "on_delivery_item_added";
    readonly on_delivery_item_activated: "on_delivery_item_activated";
    readonly on_delivery_item_used: "on_delivery_item_used";
    readonly on_delivery_item_revoked: "on_delivery_item_revoked";
    readonly on_subscription_activated: "on_subscription_activated";
    readonly on_subscription_renewed: "on_subscription_renewed";
    readonly on_subscription_canceled: "on_subscription_canceled";
    readonly on_discord_order_actions_queued: "on_discord_order_actions_queued";
    readonly on_connected_user_registered: "on_connected_user_registered";
    readonly on_connected_user_became_payable: "on_connected_user_became_payable";
    readonly on_connected_user_payout_created: "on_connected_user_payout_created";
    readonly on_connected_user_payout_completed: "on_connected_user_payout_completed";
    readonly on_connected_user_transaction_inserted: "on_connected_user_transaction_inserted";
    readonly on_connected_user_became_unpayable: "on_connected_user_became_unpayable";
};
export interface WebhookHistoryDto {
    page: number;
    history: QueuedWebhookDto[];
}
export type WebhookState = typeof WebhookState[keyof typeof WebhookState];
export declare const WebhookState: {
    readonly success: "success";
    readonly pending: "pending";
    readonly failed: "failed";
    readonly all: "all";
};
export interface WebhookSubscriptionDto {
    id: FlakeId;
    url: string;
    secret: string;
    subscribed_to: WebhookEventType;
    type: WebhookType;
    /** @nullable */
    discord_description_template?: string | null;
    /** @nullable */
    discord_title?: string | null;
    /** @nullable */
    discord_color?: string | null;
}
export type WebhookType = typeof WebhookType[keyof typeof WebhookType];
export declare const WebhookType: {
    readonly json_v1: "json_v1";
    readonly discord_v1: "discord_v1";
};
export interface WebhookVariablesDto {
    event_type: WebhookEventType;
    variables: string[];
}
export type GetBansParams = {
    ban_type?: BanType;
    ban_type_value?: string;
    reason?: string;
    /**
     * The maximum number of items to return in a single request.
     * @minimum 1
     * @maximum 100
     */
    limit?: number;
    /**
     * Returns items after the specified ID.
    Used for forward pagination through results.
     */
    after?: number;
    /**
     * Returns items before the specified ID.
    Used for backward pagination through results.
     */
    before?: number;
    /**
     * Determines the sort order of returned items.
    When true, items are returned in ascending order.
    When false, items are returned in descending order.
     */
    asc?: boolean;
};
export type GetCouponsParams = {
    /**
     * The maximum number of items to return in a single request.
     * @minimum 1
     * @maximum 100
     */
    limit?: number;
    /**
     * Returns items after the specified ID.
    Used for forward pagination through results.
     */
    after?: number;
    /**
     * Returns items before the specified ID.
    Used for backward pagination through results.
     */
    before?: number;
    /**
     * Determines the sort order of returned items.
    When true, items are returned in ascending order.
    When false, items are returned in descending order.
     */
    asc?: boolean;
};
export type GetCustomersParams = {
    /**
     * The maximum number of items to return in a single request.
     * @minimum 1
     * @maximum 100
     */
    limit?: number;
    /**
     * Returns items after the specified ID.
    Used for forward pagination through results.
     */
    after?: number;
    /**
     * Returns items before the specified ID.
    Used for backward pagination through results.
     */
    before?: number;
    /**
     * Determines the sort order of returned items.
    When true, items are returned in ascending order.
    When false, items are returned in descending order.
     */
    asc?: boolean;
    search?: string;
};
export type GetCustomerLookupParams = {
    /**
     * Looks up customer by PayNow Customer ID.
     */
    id?: string;
    /**
     * Looks up customer by Steam ID 64.
     */
    steam_id?: string;
    /**
     * Looks up customer by a Minecraft UUID.
     */
    minecraft_uuid?: string;
    /**
     * Looks up customer by an Xbox XUID.
     */
    xbox_xuid?: string;
    /**
     * Looks up customer by Minecraft Java name.
     */
    minecraft_java_name?: string;
    /**
     * Looks up customer by Minecraft Bedrock name.
     */
    minecraft_bedrock_name?: string;
    /**
     * Looks up customer by a PayNow Customer Name.
    Name has to be explicitly set in the Customer entity - profile names won't be matched.
     */
    name?: string;
};
export type GetDataMigrationsParams = {
    /**
     * The maximum number of items to return in a single request.
     * @minimum 1
     * @maximum 100
     */
    limit?: number;
    /**
     * Returns items after the specified ID.
    Used for forward pagination through results.
     */
    after?: number;
    /**
     * Returns items before the specified ID.
    Used for backward pagination through results.
     */
    before?: number;
    /**
     * Determines the sort order of returned items.
    When true, items are returned in ascending order.
    When false, items are returned in descending order.
     */
    asc?: boolean;
};
export type GetOrdersParams = {
    /**
     * The maximum number of items to return in a single request.
     * @minimum 1
     * @maximum 100
     */
    limit?: number;
    /**
     * Returns items after the specified ID.
    Used for forward pagination through results.
     */
    after?: number;
    /**
     * Returns items before the specified ID.
    Used for backward pagination through results.
     */
    before?: number;
    /**
     * Determines the sort order of returned items.
    When true, items are returned in ascending order.
    When false, items are returned in descending order.
     */
    asc?: boolean;
    /**
     * List of order statuses to filter by
     */
    status?: OrderStatus[];
    /**
     * Order ID
     */
    order_id?: FlakeId;
    /**
     * Customer ID
     */
    customer_id?: FlakeId;
    /**
     * Subscription ID
     */
    subscription_id?: FlakeId;
    /**
     * Checkout ID
     */
    checkout_id?: FlakeId;
    /**
     * Flag indicating if the order is a subscription
     */
    is_subscription?: boolean;
    /**
     * Affiliate ID
     */
    affiliate_id?: FlakeId;
    /**
     * Coupon ID
     */
    coupon_id?: FlakeId;
    /**
     * Gift card ID
     */
    giftcard_id?: FlakeId;
    /**
     * Product ID
     */
    product_id?: FlakeId;
    /**
     * Sale ID
     */
    sale_id?: FlakeId;
};
export type GetSubscriptionsParams = {
    store_id?: number;
    customer_id?: number;
    subscription_id?: number;
    billing_email?: string;
    payment_method_id?: number;
    checkout_id?: number;
    status?: SubscriptionStatus[];
    /**
     * The maximum number of items to return in a single request.
     * @minimum 1
     * @maximum 100
     */
    limit?: number;
    /**
     * Returns items after the specified ID.
    Used for forward pagination through results.
     */
    after?: number;
    /**
     * Returns items before the specified ID.
    Used for backward pagination through results.
     */
    before?: number;
    /**
     * Determines the sort order of returned items.
    When true, items are returned in ascending order.
    When false, items are returned in descending order.
     */
    asc?: boolean;
};
export type GetWebhookHistoryParams = {
    page?: number;
    state?: string;
};
export declare const getAffiliateLinks: <TData = AxiosResponse<AffiliateLinkDto[]>>(storeId: number, options?: AxiosRequestConfig) => Promise<TData>;
export declare const postAffiliateLink: <TData = AxiosResponse<AffiliateLinkDto>>(storeId: number, createAffiliateLinkDto: CreateAffiliateLinkDto, options?: AxiosRequestConfig) => Promise<TData>;
export declare const getAffiliateLink: <TData = AxiosResponse<AffiliateLinkDto>>(storeId: number, id: number, options?: AxiosRequestConfig) => Promise<TData>;
export declare const patchAffiliateLink: <TData = AxiosResponse<AffiliateLinkDto>>(storeId: number, id: number, updateAffiliateLinkDto: UpdateAffiliateLinkDto, options?: AxiosRequestConfig) => Promise<TData>;
export declare const deleteAffiliateLink: <TData = AxiosResponse<void>>(storeId: number, id: number, options?: AxiosRequestConfig) => Promise<TData>;
export declare const getBans: <TData = AxiosResponse<BanDto[]>>(storeId: number, params?: GetBansParams, options?: AxiosRequestConfig) => Promise<TData>;
export declare const postBan: <TData = AxiosResponse<BanDto>>(storeId: number, upsertBanRequestDto: UpsertBanRequestDto, options?: AxiosRequestConfig) => Promise<TData>;
export declare const getBan: <TData = AxiosResponse<BanDto>>(storeId: number, id: number, options?: AxiosRequestConfig) => Promise<TData>;
export declare const patchBan: <TData = AxiosResponse<BanDto>>(storeId: number, id: number, upsertBanRequestDto: UpsertBanRequestDto, options?: AxiosRequestConfig) => Promise<TData>;
export declare const deleteBan: <TData = AxiosResponse<void>>(storeId: number, id: number, options?: AxiosRequestConfig) => Promise<TData>;
export declare const postBanCheck: <TData = AxiosResponse<CheckForBanIDByIdentitiesRequestDto>>(storeId: number, checkForBanIDByIdentitiesRequestDto: CheckForBanIDByIdentitiesRequestDto, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Creates a checkout session from a secure server using an API Key.
If you have a Customer token, see the Storefront API Create Checkout endpoint.
 * @summary Create a checkout session
 */
export declare const postCheckout: <TData = AxiosResponse<CreateCheckoutSessionResponseDto>>(storeId: string, createCheckoutSessionManagementDto: CreateCheckoutSessionManagementDto, options?: AxiosRequestConfig) => Promise<TData>;
export declare const postCoupon: <TData = AxiosResponse<CouponDto>>(storeId: number, couponDto: CouponDto, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * @summary Fetches all coupons for a store id
 */
export declare const getCoupons: <TData = AxiosResponse<CouponDto[]>>(storeId: number, params?: GetCouponsParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * @summary Retrieves a coupon by ID
 */
export declare const getCoupon: <TData = AxiosResponse<CouponDto>>(storeId: number, couponId: number, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * @summary Performs a Delta Update of a Coupon
 */
export declare const patchCoupon: <TData = AxiosResponse<CouponDto>>(storeId: number, couponId: number, couponDto: CouponDto, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * @summary Deletes a coupon
 */
export declare const deleteCoupon: <TData = AxiosResponse<void>>(storeId: number, couponId: number, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Creates a new custom variable for the specified store.
Custom variables allow customers to provide additional input when purchasing products.
 * @summary Create custom variable
 */
export declare const postCustomVariable: <TData = AxiosResponse<CustomVariableDto>>(storeId: number, upsertCustomVariableRequestDto: UpsertCustomVariableRequestDto, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Retrieves all custom variables for the specified store.
 * @summary Get custom variables
 */
export declare const getCustomVariables: <TData = AxiosResponse<CustomVariableDto[]>>(storeId: number, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Retrieves a specific custom variable by ID from the specified store.
 * @summary Get custom variable
 */
export declare const getCustomVariable: <TData = AxiosResponse<CustomVariableDto>>(storeId: number, customVariableId: number, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Performs a partial update of a custom variable using field mask.
Only the fields specified in the request will be updated.
 * @summary Update custom variable
 */
export declare const patchCustomVariable: <TData = AxiosResponse<CustomVariableDto>>(storeId: number, customVariableId: number, upsertCustomVariableRequestDto: UpsertCustomVariableRequestDto, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Deletes a custom variable from the specified store.
This will also delete all associated options and cannot be undone.
 * @summary Delete custom variable
 */
export declare const deleteCustomVariable: <TData = AxiosResponse<void>>(storeId: number, customVariableId: number, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Retrieves all customers for the specified store.
 * @summary Get customers
 */
export declare const getCustomers: <TData = AxiosResponse<CustomerDto[]>>(storeId: number, params?: GetCustomersParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Creates a new customer based on the fields passed.
 * @summary Create customer
 */
export declare const postCustomer: <TData = AxiosResponse<CustomerDto>>(storeId: number, upsertCustomerRequestDto: UpsertCustomerRequestDto, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Retrieves a customer by the ID for the specified store.
 * @summary Get customer by ID
 */
export declare const getCustomer: <TData = AxiosResponse<CustomerDto>>(storeId: number, customerId: number, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Updates an existing customer based on the fields passed.
 * @summary Update customer
 */
export declare const patchCustomer: <TData = AxiosResponse<CustomerDto>>(storeId: number, customerId: number, upsertCustomerRequestDto: UpsertCustomerRequestDto, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Generates a customer token that can be used by the Storefront (Headless) API.
 * @summary Create customer token
 */
export declare const postCustomerToken: <TData = AxiosResponse<CustomerTokenResponseDto>>(storeId: number, customerId: number, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Invalidates all generated customer tokens.
 * @summary Invalidate customer tokens
 */
export declare const deleteCustomerToken: <TData = AxiosResponse<void>>(storeId: number, customerId: number, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Looks up a customer by an external platform ID.
 * @summary Lookup customer
 */
export declare const getCustomerLookup: <TData = AxiosResponse<CustomerDto>>(storeId: number, params?: GetCustomerLookupParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Creates up to 200 customers at once.
 * @summary Bulk create customers
 */
export declare const postCustomerBulk: <TData = AxiosResponse<CustomerDto[]>>(storeId: number, upsertCustomerRequestDto: UpsertCustomerRequestDto[], options?: AxiosRequestConfig) => Promise<TData>;
export declare const getDataMigrations: <TData = AxiosResponse<DataMigrationTaskDto[]>>(storeId: number, params?: GetDataMigrationsParams, options?: AxiosRequestConfig) => Promise<TData>;
export declare const postDataMigrationTebex: <TData = AxiosResponse<DataMigrationTaskDto[]>>(storeId: number, startDataMigrationFromTebexRequestDto: StartDataMigrationFromTebexRequestDto, options?: AxiosRequestConfig) => Promise<TData>;
export declare const postDeliverableCommandsResend: <TData = AxiosResponse<ResendCommandsForGameServerResponseDto>>(storeId: number, deliverableId: number, resendCommandsForGameServerRequestDto: ResendCommandsForGameServerRequestDto, options?: AxiosRequestConfig) => Promise<TData>;
export declare const getProductDownloadableFiles: <TData = AxiosResponse<ProductDownloadableFileDto[]>>(storeId: number, productId: number, options?: AxiosRequestConfig) => Promise<TData>;
export declare const postProductDownloadableFiles: <TData = AxiosResponse<void>>(storeId: number, productId: number, startDownloadableFileUploadRequestDto: StartDownloadableFileUploadRequestDto, options?: AxiosRequestConfig) => Promise<TData>;
export declare const postProductDownloadableFileUploadFinish: <TData = AxiosResponse<void>>(storeId: number, productId: number, id: number, options?: AxiosRequestConfig) => Promise<TData>;
export declare const getProductDownloadableFileDownloadUrl: <TData = AxiosResponse<CreateDownloadableFileDownloadUrlResponseDto>>(storeId: number, productId: number, id: number, options?: AxiosRequestConfig) => Promise<TData>;
export declare const deleteProductDownloadableFile: <TData = AxiosResponse<void>>(storeId: number, productId: number, id: number, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Retrieves all global commands for the specified store.
 * @summary Get global commands
 */
export declare const getGlobalCommands: <TData = AxiosResponse<GlobalCommandDto[]>>(storeId: number, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Creates a global command for a store.
 * @summary Create global command
 */
export declare const postGlobalCommand: <TData = AxiosResponse<GlobalCommandDto>>(storeId: number, upsertGlobalCommandDto: UpsertGlobalCommandDto, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Updates a global command for a store.
 * @summary Update global command
 */
export declare const patchGlobalCommand: <TData = AxiosResponse<GlobalCommandDto>>(storeId: number, globalCommandId: FlakeId, upsertGlobalCommandDto: UpsertGlobalCommandDto, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Deletes a global command for a store.
 * @summary Delete global command
 */
export declare const deleteGlobalCommand: <TData = AxiosResponse<void>>(storeId: number, globalCommandId: FlakeId, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * @summary Gets the abandoned checkout behaviour for a store
 */
export declare const getAbandonedCheckoutConfiguration: <TData = AxiosResponse<AbandonedCheckoutStoreConfigurationDto>>(storeId: number, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * @summary Sets the abandoned checkout behaviour for a store
 */
export declare const putAbandonedCheckoutConfiguration: <TData = AxiosResponse<AbandonedCheckoutStoreConfigurationDto | void>>(storeId: number, abandonedCheckoutStoreConfigurationUpdateDto: AbandonedCheckoutStoreConfigurationUpdateDto, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * @summary Gets the purchase follow up behaviour for a store
 */
export declare const getPurchaseFollowUpsConfiguration: <TData = AxiosResponse<PurchaseFollowUpStoreConfigurationDto>>(storeId: number, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * @summary Sets the purchase follow up behaviour for a store
 */
export declare const putPurchaseFollowUpsConfiguration: <TData = AxiosResponse<PurchaseFollowUpStoreConfigurationDto | void>>(storeId: number, purchaseFollowUpStoreConfigurationUpdateDto: PurchaseFollowUpStoreConfigurationUpdateDto, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Retrieves all orders for the specified store.
 * @summary Get orders
 */
export declare const getOrders: <TData = AxiosResponse<OrderDto[]>>(storeId: number, params?: GetOrdersParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Retrieves an order by the ID for the specified store.
 * @summary Get order by ID
 */
export declare const getOrder: <TData = AxiosResponse<OrderDto>>(storeId: number, orderId: FlakeId, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Creates a refund for an order by the ID for the specified store.
 * @summary Refund order by ID
 */
export declare const postOrderRefund: <TData = AxiosResponse<RefundDto>>(storeId: number, orderId: FlakeId, createRefundRequestDto: CreateRefundRequestDto, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Retrieves all products for the specified store.
DO NOT USE THIS ROUTE FOR DISPLAYING PRODUCTS ON YOUR STOREFRONT, use the storefront API instead.
 * @summary Get products
 */
export declare const getProducts: <TData = AxiosResponse<ProductDto[]>>(storeId: number, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Creates a new product in the specified store.
Creating dynamic products while creating a checkout session via this endpoint without prior approval is prohibited and will result in store deactivation per our User Agreement.
 * @summary Create product
 */
export declare const postProduct: <TData = AxiosResponse<ProductDto>>(storeId: number, upsertProductRequestDto: UpsertProductRequestDto, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Retrieves a specific product by ID from the specified store.
DO NOT USE THIS ROUTE FOR DISPLAYING PRODUCTS ON YOUR STOREFRONT, use the storefront API instead.
 * @summary Get product
 */
export declare const getProduct: <TData = AxiosResponse<ProductDto>>(storeId: number, productId: number, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Updates an existing product in the specified store.
 * @summary Update product
 */
export declare const patchProduct: <TData = AxiosResponse<ProductDto>>(storeId: number, productId: number, upsertProductRequestDto: UpsertProductRequestDto, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Deletes a product from the specified store.
 * @summary Delete product
 */
export declare const deleteProduct: <TData = AxiosResponse<void>>(storeId: number, productId: number, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Updates the sort order of products in the specified store.
 * @summary Update product sort order
 */
export declare const postProductSortOrder: <TData = AxiosResponse<ProductDto>>(storeId: number, updateProductSortOrderRequestDto: UpdateProductSortOrderRequestDto, options?: AxiosRequestConfig) => Promise<TData>;
export declare const getProductPricingRegions: <TData = AxiosResponse<ProductPricingRegionDto[]>>(storeId: number, productId: number, options?: AxiosRequestConfig) => Promise<TData>;
export declare const patchProductPricingRegion: <TData = AxiosResponse<void>>(storeId: number, productId: number, regionId: string, productPricingRegionOverrideDto: ProductPricingRegionOverrideDto, options?: AxiosRequestConfig) => Promise<TData>;
export declare const getPricingRegions: <TData = AxiosResponse<ProductPricingRegionDto[]>>(storeId: number, options?: AxiosRequestConfig) => Promise<TData>;
export declare const patchPricingRegion: <TData = AxiosResponse<void>>(storeId: number, regionId: string, storePricingRegionOverrideDto: StorePricingRegionOverrideDto, options?: AxiosRequestConfig) => Promise<TData>;
export declare const getPricingRegionGroups: <TData = AxiosResponse<ProductPricingRegionGroupDto[]>>(storeId: number, options?: AxiosRequestConfig) => Promise<TData>;
export declare const getStoreTrustOnboarding: <TData = AxiosResponse<TrustStoreOnboardingDto>>(storeId: number, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Retrieves all subscriptions for the specified store.
 * @summary Get subscriptions
 */
export declare const getSubscriptions: <TData = AxiosResponse<StoreSubscriptionDto[]>>(storeId: number, params?: GetSubscriptionsParams, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Retrieves a subscription for the specified store by the supplied ID.
 * @summary Get subscription by ID
 */
export declare const getSubscription: <TData = AxiosResponse<StoreSubscriptionDto>>(storeId: number, subscriptionId: FlakeId, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Cancels a subscription for the specified store by the supplied ID.
 * @summary Cancel subscription by ID
 */
export declare const postSubscriptionCancel: <TData = AxiosResponse<void>>(storeId: number, subscriptionId: FlakeId, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Retrieves an image upload URL for a tag.
 * @summary Get tag image upload URL
 */
export declare const getTagImageUploadUrl: <TData = AxiosResponse<GetTagImageUploadUrlResponseDto>>(storeId: number, tagId: number, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Finishes an image upload for a tag.
 * @summary Finish tag image upload URL
 */
export declare const postTagImageUploadFinish: <TData = AxiosResponse<void>>(storeId: number, tagId: number, finishTagImageUploadUrlRequestDto: FinishTagImageUploadUrlRequestDto, options?: AxiosRequestConfig) => Promise<TData>;
/**
 * Deletes an image for a tag.
 * @summary Delete tag image URL
 */
export declare const deleteTagImage: <TData = AxiosResponse<void>>(storeId: number, tagId: number, options?: AxiosRequestConfig) => Promise<TData>;
export declare const getWebhooks: <TData = AxiosResponse<WebhookSubscriptionDto[]>>(storeId: number, options?: AxiosRequestConfig) => Promise<TData>;
export declare const postWebhook: <TData = AxiosResponse<WebhookSubscriptionDto>>(storeId: number, createWebhookDto: CreateWebhookDto, options?: AxiosRequestConfig) => Promise<TData>;
export declare const getWebhookVariables: <TData = AxiosResponse<WebhookVariablesDto[]>>(storeId: number, options?: AxiosRequestConfig) => Promise<TData>;
export declare const patchWebhook: <TData = AxiosResponse<WebhookSubscriptionDto>>(storeId: number, webhookId: number, updateWebhookDto: UpdateWebhookDto, options?: AxiosRequestConfig) => Promise<TData>;
export declare const deleteWebhook: <TData = AxiosResponse<void>>(storeId: number, webhookId: number, options?: AxiosRequestConfig) => Promise<TData>;
export declare const getWebhookHistory: <TData = AxiosResponse<WebhookHistoryDto>>(storeId: number, webhookId: number, params?: GetWebhookHistoryParams, options?: AxiosRequestConfig) => Promise<TData>;
export type GetAffiliateLinksResult = AxiosResponse<AffiliateLinkDto[]>;
export type PostAffiliateLinkResult = AxiosResponse<AffiliateLinkDto>;
export type GetAffiliateLinkResult = AxiosResponse<AffiliateLinkDto>;
export type PatchAffiliateLinkResult = AxiosResponse<AffiliateLinkDto>;
export type DeleteAffiliateLinkResult = AxiosResponse<void>;
export type GetBansResult = AxiosResponse<BanDto[]>;
export type PostBanResult = AxiosResponse<BanDto>;
export type GetBanResult = AxiosResponse<BanDto>;
export type PatchBanResult = AxiosResponse<BanDto>;
export type DeleteBanResult = AxiosResponse<void>;
export type PostBanCheckResult = AxiosResponse<CheckForBanIDByIdentitiesRequestDto>;
export type PostCheckoutResult = AxiosResponse<CreateCheckoutSessionResponseDto>;
export type PostCouponResult = AxiosResponse<CouponDto>;
export type GetCouponsResult = AxiosResponse<CouponDto[]>;
export type GetCouponResult = AxiosResponse<CouponDto>;
export type PatchCouponResult = AxiosResponse<CouponDto>;
export type DeleteCouponResult = AxiosResponse<void>;
export type PostCustomVariableResult = AxiosResponse<CustomVariableDto>;
export type GetCustomVariablesResult = AxiosResponse<CustomVariableDto[]>;
export type GetCustomVariableResult = AxiosResponse<CustomVariableDto>;
export type PatchCustomVariableResult = AxiosResponse<CustomVariableDto>;
export type DeleteCustomVariableResult = AxiosResponse<void>;
export type GetCustomersResult = AxiosResponse<CustomerDto[]>;
export type PostCustomerResult = AxiosResponse<CustomerDto>;
export type GetCustomerResult = AxiosResponse<CustomerDto>;
export type PatchCustomerResult = AxiosResponse<CustomerDto>;
export type PostCustomerTokenResult = AxiosResponse<CustomerTokenResponseDto>;
export type DeleteCustomerTokenResult = AxiosResponse<void>;
export type GetCustomerLookupResult = AxiosResponse<CustomerDto>;
export type PostCustomerBulkResult = AxiosResponse<CustomerDto[]>;
export type GetDataMigrationsResult = AxiosResponse<DataMigrationTaskDto[]>;
export type PostDataMigrationTebexResult = AxiosResponse<DataMigrationTaskDto[]>;
export type PostDeliverableCommandsResendResult = AxiosResponse<ResendCommandsForGameServerResponseDto>;
export type GetProductDownloadableFilesResult = AxiosResponse<ProductDownloadableFileDto[]>;
export type PostProductDownloadableFilesResult = AxiosResponse<void>;
export type PostProductDownloadableFileUploadFinishResult = AxiosResponse<void>;
export type GetProductDownloadableFileDownloadUrlResult = AxiosResponse<CreateDownloadableFileDownloadUrlResponseDto>;
export type DeleteProductDownloadableFileResult = AxiosResponse<void>;
export type GetGlobalCommandsResult = AxiosResponse<GlobalCommandDto[]>;
export type PostGlobalCommandResult = AxiosResponse<GlobalCommandDto>;
export type PatchGlobalCommandResult = AxiosResponse<GlobalCommandDto>;
export type DeleteGlobalCommandResult = AxiosResponse<void>;
export type GetAbandonedCheckoutConfigurationResult = AxiosResponse<AbandonedCheckoutStoreConfigurationDto>;
export type PutAbandonedCheckoutConfigurationResult = AxiosResponse<AbandonedCheckoutStoreConfigurationDto | void>;
export type GetPurchaseFollowUpsConfigurationResult = AxiosResponse<PurchaseFollowUpStoreConfigurationDto>;
export type PutPurchaseFollowUpsConfigurationResult = AxiosResponse<PurchaseFollowUpStoreConfigurationDto | void>;
export type GetOrdersResult = AxiosResponse<OrderDto[]>;
export type GetOrderResult = AxiosResponse<OrderDto>;
export type PostOrderRefundResult = AxiosResponse<RefundDto>;
export type GetProductsResult = AxiosResponse<ProductDto[]>;
export type PostProductResult = AxiosResponse<ProductDto>;
export type GetProductResult = AxiosResponse<ProductDto>;
export type PatchProductResult = AxiosResponse<ProductDto>;
export type DeleteProductResult = AxiosResponse<void>;
export type PostProductSortOrderResult = AxiosResponse<ProductDto>;
export type GetProductPricingRegionsResult = AxiosResponse<ProductPricingRegionDto[]>;
export type PatchProductPricingRegionResult = AxiosResponse<void>;
export type GetPricingRegionsResult = AxiosResponse<ProductPricingRegionDto[]>;
export type PatchPricingRegionResult = AxiosResponse<void>;
export type GetPricingRegionGroupsResult = AxiosResponse<ProductPricingRegionGroupDto[]>;
export type GetStoreTrustOnboardingResult = AxiosResponse<TrustStoreOnboardingDto>;
export type GetSubscriptionsResult = AxiosResponse<StoreSubscriptionDto[]>;
export type GetSubscriptionResult = AxiosResponse<StoreSubscriptionDto>;
export type PostSubscriptionCancelResult = AxiosResponse<void>;
export type GetTagImageUploadUrlResult = AxiosResponse<GetTagImageUploadUrlResponseDto>;
export type PostTagImageUploadFinishResult = AxiosResponse<void>;
export type DeleteTagImageResult = AxiosResponse<void>;
export type GetWebhooksResult = AxiosResponse<WebhookSubscriptionDto[]>;
export type PostWebhookResult = AxiosResponse<WebhookSubscriptionDto>;
export type GetWebhookVariablesResult = AxiosResponse<WebhookVariablesDto[]>;
export type PatchWebhookResult = AxiosResponse<WebhookSubscriptionDto>;
export type DeleteWebhookResult = AxiosResponse<void>;
export type GetWebhookHistoryResult = AxiosResponse<WebhookHistoryDto>;
//# sourceMappingURL=management.d.ts.map