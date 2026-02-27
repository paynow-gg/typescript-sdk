export interface paths {
    "/v1/store/cart": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get cart
         * @description Retrieves the current customer's shopping cart.
         */
        get: operations["Cart_GetCart"];
        put?: never;
        post?: never;
        /**
         * Clear cart
         * @description Clears all items from the customer's shopping cart.
         */
        delete: operations["Cart_ClearCart"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/store/cart/lines": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Add product to cart
         * @description Adds a product to the cart or updates the quantity of an existing product.
         *     When increment parameter is "true" or "1", the specified quantity will be added to any existing quantity.
         *     Otherwise, the quantity will be set to the specified value, replacing any existing quantity.
         */
        put: operations["Cart_AddLine"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/store/cart/checkout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a cart checkout session
         * @description Creates a checkout session from the contents of the cart.
         *     After creating the checkout session, redirect the customer to the `url` returned.
         */
        post: operations["Cart_CreateCartCheckout"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/checkouts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a checkout session
         * @description Creates a checkout session using a Customer token.
         *     After creating the checkout session, redirect the customer to the `url` returned.
         */
        post: operations["Checkout_CreateCheckoutSession"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/store/customer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get current customer
         * @description Retrieves the current customer from the passed Customer token.
         */
        get: operations["Customer_GetStorefrontCustomer"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/store/customer/giftcards/lookup/{code}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Lookup a gift card by the code */
        get: operations["Customer_GetStorefrontGiftCard"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/store/customer/auth": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Authenticate customer
         * @description Creates a customer and returns a customer token from a platform account.
         */
        post: operations["Customer_AuthenticateStorefrontCustomer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/store/customer/delivery/items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get the customers delivery items
         * @description Retrieves the current customers delivery items.
         */
        get: operations["Delivery_GetStorefrontCustomerDeliveryItems"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/store/customer/command-delivery": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/product_versions/discord_actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Discord_DoProductsHaveDiscordActions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/store/navlinks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get navlinks
         * @description Retrieves the store's navlink structure used for navigation.
         */
        get: operations["Navlinks_GetStorefrontNavLinks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/store/products": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get products
         * @description Retrieves the available products. To make sure all VAT rates are properly displayed, pass in the IP headers as instructed.
         */
        get: operations["Products_GetStorefrontProducts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/store/products/{idOrSlug}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get product by ID or slug
         * @description Retrieves a product by an ID or a slug. To make sure all VAT rates are properly displayed, pass in the IP headers as instructed.
         */
        get: operations["Products_GetStorefrontProductByIdOrSlug"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get current store
         * @description Retrieves a store by the passed in x-paynow-store-id or Customer token.
         */
        get: operations["Store_GetStorefrontStore"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/store/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get tags
         * @description Retrieves the store's tags.
         */
        get: operations["Tags_GetStorefrontTags"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        ActorDto: {
            type: components["schemas"]["PayNowActorType"];
            id?: components["schemas"]["FlakeId"];
        };
        AuthenticateStorefrontCustomerRequestDto: {
            platform: components["schemas"]["CustomerProfilePlatform"];
            /**
             * @description The account ID on the platform
             * @example 76561198152492642
             */
            id: string;
        };
        AuthenticateStorefrontCustomerResponseDto: {
            /** @description The token for the Customer */
            customer_token: string;
        };
        /** @description Represents a customer's shopping cart */
        CartDto: {
            store_id: components["schemas"]["FlakeId"];
            customer_id: components["schemas"]["FlakeId"];
            /** @description The line items in the cart */
            lines: components["schemas"]["CartLineDto"][];
            /**
             * Format: int64
             * @description The total price of all items in the cart in the smallest currency unit (e.g., cents)
             */
            total: number;
            /** @description The currency code (e.g., usd, eur, gbp) */
            currency: string;
        };
        CartLineCustomVariableDto: {
            id: components["schemas"]["FlakeId"];
            /** @description The display name of the custom variable */
            name: string;
            /** @description The unique identifier string for the custom variable */
            identifier: string;
            /** @description The description of the custom variable */
            description: string;
            type: components["schemas"]["CustomVariableType"];
            /** @description The selected value of the custom variable */
            value: string;
            /** @description The collection of available options for this custom variable. Only present for dropdown type */
            options: components["schemas"]["StorefrontCustomVariableOptionDto"][];
            selected_option?: components["schemas"]["StorefrontCustomVariableOptionDto"];
        };
        /** @description Represents a line item in a cart */
        CartLineDto: {
            /** @description The unique key for this line item */
            line_key: string;
            product_id: components["schemas"]["FlakeId"];
            /** @description The name of the product */
            name: string;
            /** @description The slug of the product */
            slug: string;
            /**
             * Format: int64
             * @description The price of the product in the smallest currency unit (e.g., cents)
             */
            price: number;
            /**
             * Format: int32
             * @description The quantity of this product in the cart
             */
            quantity: number;
            /** @description Indicates whether this line item should be a subscription */
            subscription: boolean;
            /** @description Indicates whether this line will be trialied by the customer. */
            trial: boolean;
            /** @description The URL to the product image */
            image_url?: null | string;
            selected_gameserver_id?: components["schemas"]["FlakeId"];
            selected_gameserver?: components["schemas"]["StorefrontGameServerDto"];
            pricing: components["schemas"]["StorefrontProductPricingDetailsDto"];
            /** @description Selected custom variables for this cart line. */
            custom_variables: components["schemas"]["CartLineCustomVariableDto"][];
            gift_to_customer?: components["schemas"]["CustomerDto"];
            gift_to_customer_id?: components["schemas"]["FlakeId"];
        };
        /** @description Request to create a new checkout session from a cart */
        CreateCartCheckoutSessionDto: {
            coupon_id?: components["schemas"]["FlakeId"];
            /** @description Optional affiliate code to track referrals */
            affiliate_code?: null | string;
            /** @description Optional URL to redirect to after successful checkout */
            return_url?: null | string;
            /** @description Optional URL to redirect to if checkout is canceled */
            cancel_url?: null | string;
            /** @description Whether to automatically redirect the customer (return_url must be set) */
            auto_redirect?: null | boolean;
        };
        /** @description Represents a line item in a checkout session request */
        CreateCheckoutSessionLineDto: {
            product_id: components["schemas"]["FlakeId"];
            /** @description Determines whether this line should create a subscription */
            subscription?: null | boolean;
            /** @description Indicates whether the product should be trialed */
            trial?: null | boolean;
            gift_to?: components["schemas"]["CustomerPlatformAccountDto"];
            gift_to_customer_id?: components["schemas"]["FlakeId"];
            /**
             * Format: int32
             * @description The quantity of this product to purchase
             */
            quantity: number;
            selected_gameserver_id?: components["schemas"]["FlakeId"];
            /** @description Key-value pair mapping custom variable identifiers to their selected values.
             *     Required only when the product includes custom variables. */
            custom_variables?: null | {
                [key: string]: string;
            };
        };
        /** @description Request to create a new checkout session */
        CreateCheckoutSessionRequestDto: {
            /** @description The line items to include in the checkout. */
            lines: components["schemas"]["CreateCheckoutSessionLineDto"][];
            /**
             * @deprecated
             * @description Whether this checkout creates a subscription.
             *     DEPRECATED: Use 'subscription' field in 'lines' array objects instead.
             */
            subscription?: null | boolean;
            coupon_id?: components["schemas"]["FlakeId"];
            /** @description Optional affiliate code to track referrals */
            affiliate_code?: null | string;
            /** @description Optional URL to redirect to after successful checkout */
            return_url?: null | string;
            /** @description Optional URL to redirect to if checkout is canceled */
            cancel_url?: null | string;
            /** @description Whether to automatically redirect the customer (return_url must be set) */
            auto_redirect?: null | boolean;
        };
        /** @description Response after creating a checkout session */
        CreateCheckoutSessionResponseDto: {
            id: components["schemas"]["FlakeId"];
            /** @description The token for the checkout session */
            token: string;
            /** @description The URL to redirect the customer to complete checkout */
            url: string;
        };
        /**
         * @description Defines the type of input method for a custom variable.
         * @enum {string}
         */
        CustomVariableType: "dropdown" | "text" | "number";
        /** @description Represents a customer in the PayNow system with their associated profiles and metadata. */
        CustomerDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            store?: components["schemas"]["StoreDto"];
            profile?: components["schemas"]["GenericProfileDto"];
            steam_id?: components["schemas"]["SteamId"];
            steam?: components["schemas"]["SteamProfileDto"];
            /**
             * @description The customer's Minecraft UUID, if they have linked their Minecraft account.
             *     Not set for offline Minecraft stores. If the platform type is Minecraft - Geyser,
             *     and the profile is a bedrock account, this will be a UUID generated from the Xbox XUID.
             * @example f84c6a79-0a4e-45e0-879b-cd49ebd4c4e2
             */
            minecraft_uuid?: null | string;
            minecraft?: components["schemas"]["MinecraftProfileDto"];
            /** @description The customer's Xbox XUID, if available. */
            xbox_xuid?: null | string;
            minecraft_platform?: components["schemas"]["CustomerMinecraftPlatform"];
            /**
             * @description The display name for the customer.
             * @example m0uka
             */
            name?: null | string;
            /**
             * Format: date-time
             * @description The date and time when the customer was created in the system.
             */
            created_at: string;
            /**
             * Format: date-time
             * @description The date and time when the customer was last updated, if applicable.
             */
            updated_at?: null | string;
            /** @description Additional custom data associated with the customer. */
            metadata: {
                [key: string]: string;
            };
        };
        /** @enum {string} */
        CustomerMinecraftPlatform: "unknown" | "java" | "bedrock";
        /** @description Represents a customer platform association, used for gifting */
        CustomerPlatformAccountDto: {
            platform: components["schemas"]["CustomerProfilePlatform"];
            /**
             * @description The account ID on the platform
             * @example 76561198152492642
             */
            id: string;
        };
        /** @enum {string} */
        CustomerProfilePlatform: "invalid" | "steam" | "minecraft" | "paynow_name" | "paynow" | "minecraft_java_name" | "minecraft_bedrock_name" | "xbox_xuid" | "minecraft_uuid";
        /** @description Represents the product information for a delivery item */
        DeliveryItemProductDto: {
            id: components["schemas"]["FlakeId"];
            /**
             * @description The name of the product
             * @example Premium Membership
             */
            name: string;
            /**
             * @description The URL-friendly slug of the product
             * @example premium-membership
             */
            slug: string;
            /**
             * @description The version identifier of the product
             * @example v2.1.0
             */
            version_id: string;
        };
        /** @enum {string} */
        DeliveryItemStateDto: "usable" | "active" | "used" | "revoked" | "renewed";
        /**
         * Format: flake-id
         * @example 411486491630370816
         */
        FlakeId: string;
        /** @description Represents a generic platform profile for a customer. */
        GenericProfileDto: {
            /** @description The platform-specific identifier for the profile. */
            id: string;
            /**
             * @description The name of the platform this profile belongs to.
             * @example steam
             */
            platform: string;
            /** @description The display name of the user on this platform. */
            name: string;
            /** @description The URL to the user's avatar image on this platform. */
            avatar_url?: null | string;
        };
        /** @description Represents a Minecraft profile for a customer. */
        MinecraftProfileDto: {
            /**
             * @description The UUID of the Minecraft player.
             *     If the platform is Minecraft Offline, this will be the name itself.
             *     If the platform is Minecraft Geyser, and this is a Bedrock account, this ID will be an Xbox XUID.
             * @example f84c6a79-0a4e-45e0-879b-cd49ebd4c4e2
             */
            id: string;
            /**
             * @description The username of the Minecraft player.
             * @example notch
             */
            name: string;
            /** @description The URL to the player's Minecraft skin rendered as an avatar. */
            avatar_url: string;
        };
        /** @enum {string} */
        PayNowActorType: "anonymous" | "user" | "customer" | "api_key" | "game_server" | "admin" | "internal" | "platform" | "global_customer";
        /** @description Represents a PayNow error */
        PayNowError: {
            /**
             * Format: int32
             * @description The HTTP status code.
             * @example 400
             */
            status: number;
            /**
             * @description The PayNow parseable error code.
             * @example bad-request
             */
            code: string;
            /**
             * @description The human-readable error message.
             * @example Bad Request Example
             */
            message: string;
            /**
             * @description A distributed trace ID used for debugging.
             * @example 234a5bcd543ef3fa53ce929d0e0e4736
             */
            trace_id?: null | string;
            /** @description An array of multiple errors. Only used by some API services. */
            errors?: null | components["schemas"]["ValidationError"][];
        };
        /** @enum {string} */
        PlatformCapability: "invalid" | "connected_users";
        PlatformStoreTypeAssociationDetailsDto: {
            platform_id: components["schemas"]["FlakeId"];
            associated_platform?: components["schemas"]["PublicPlatformDto"];
            /** @description The store platform identifier string (e.g. "rust", "minecraft"). */
            store_platform: string;
            /**
             * Format: int64
             * @description Overrides the default PayNow platform fee percentage for this association.
             *     Expressed in basis points (e.g. 250 = 2.50%).
             */
            paynow_platform_fee_percentage_override?: null | number;
            /**
             * Format: int64
             * @description The fee percentage charged by the connected platform.
             *     Expressed in basis points (e.g. 250 = 2.50%).
             */
            connected_platform_fee_percentage?: null | number;
            /**
             * Format: int64
             * @description The payout ID associated with the connected platform.
             */
            connected_platform_wallet_id?: null | number;
            /** @description When true, billing plans are disabled for this platform/store type combination. */
            disable_billing_plans: boolean;
            /** @description When true, legal or compliance disclaimers should be displayed to the end user. */
            display_disclaimers: boolean;
            /** @description Whether the management hides some PayNow UI */
            full_external_management: boolean;
        };
        /** @enum {string} */
        PlatformType: "invalid" | "marketplace" | "store_platform" | "other";
        ProductDeliverableActionsDto: {
            /** @description Value indicating whether to grant a giftcard with the product with the subtotal amount. */
            grant_giftcard: boolean;
        };
        ProductGameServerDto: {
            id: components["schemas"]["FlakeId"];
            /**
             * @description The name of the game server.
             * @example US 2x TRIO
             */
            name: string;
            /** @description Indicates whether this game server is enabled. */
            enabled: boolean;
        };
        /** @enum {string} */
        ProductRemoveAfterIntervalScale: "invalid" | "day" | "week" | "month";
        /** @enum {string} */
        ProductSubscriptionIntervalScale: "invalid" | "day" | "week" | "month" | "year";
        ProductTagDto: {
            id: components["schemas"]["FlakeId"];
            /**
             * @description The unique slug for the tag.
             * @example packages
             */
            slug: string;
            /**
             * @description The display name of the tag.
             * @example Packages
             */
            name: string;
        };
        PublicPlatformDto: {
            id: components["schemas"]["FlakeId"];
            slug: string;
            type: components["schemas"]["PlatformType"];
            country_code: string;
            business_name: string;
            name: string;
            description: string;
            website_url: string;
            logo_url: string;
            accent_color: string;
            capabilities: components["schemas"]["PlatformCapability"][];
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
            /** Format: date-time */
            disabled_at?: null | string;
        };
        /** @enum {string} */
        SaleDiscountType: "percent" | "amount";
        /**
         * Format: steam-id
         * @description A 64-bit Steam account identifier. Accepts string or numeric format.
         * @example 76561197960287930
         */
        SteamId: string;
        /** @description Represents a Steam profile for a customer. */
        SteamProfileDto: {
            id: components["schemas"]["SteamId"];
            /** @description The display name of the user on Steam. */
            name: string;
            /** @description The URL to the user's Steam avatar image. */
            avatar_url: string;
        };
        /** @description Represents a PayNow store and its associated configuration. */
        StoreDto: {
            id: components["schemas"]["FlakeId"];
            trust?: components["schemas"]["StoreTrustDto"];
            owner_id: components["schemas"]["FlakeId"];
            /** @description The URL-safe slug used to identify the store (e.g. "my-rust-server"). */
            slug: string;
            /** @description The display name of the store. */
            name: string;
            /** @description The platform this store is associated with (e.g. "rust", "minecraft"). */
            platform: string;
            /** @description Alias for PayNow.Services.HttpGateway.DataTransferObjects.V1.Stores.StoreDto.Platform. Returns the platform identifier as a game name. */
            readonly game: string;
            /** @description The ISO 4217 currency code used by this store for pricing (e.g. "usd", "eur") */
            currency: string;
            /** @description A human-readable description of the store shown to customers and PayNow. */
            description: string;
            /** @description The store's public website URL. */
            website_url?: null | string;
            /** @description General contact email address for the store. */
            contact_email?: null | string;
            /** @description Dedicated support email address for customer inquiries. */
            support_email?: null | string;
            /** @description URL to the store's support portal or help page. */
            support_url?: null | string;
            /** @description The integration type used by the store. */
            integration_type?: null | string;
            /** @description When set to true, the store is processing real transactions in live mode. */
            live_mode: boolean;
            /** @description URL of the store's full-size logo image. */
            logo_url?: null | string;
            /** @description URL of the store's square/icon logo image. */
            logo_square_url?: null | string;
            /** @description Username prefix used to identify Minecraft Bedrock players (e.g. "."). */
            minecraft_bedrock_username_prefix?: null | string;
            /**
             * Format: date-time
             * @description The UTC timestamp when the store was created.
             */
            created_at?: null | string;
            /**
             * Format: date-time
             * @description The UTC timestamp when the store was last updated.
             */
            updated_at?: null | string;
            /**
             * Format: date-time
             * @description The UTC timestamp when the store completed onboarding.
             */
            onboarding_completed_at?: null | string;
            platform_store_type_association?: components["schemas"]["PlatformStoreTypeAssociationDetailsDto"];
            /** @description The list of members who have access to manage this store. */
            members?: null | components["schemas"]["StoreMemberDto"][];
        };
        StoreMemberDto: {
            user: components["schemas"]["StoreMemberUserDto"];
            /** Format: date-time */
            added_at?: null | string;
            added_by?: components["schemas"]["ActorDto"];
            role_id?: components["schemas"]["FlakeId"];
        };
        StoreMemberUserDto: {
            type: components["schemas"]["PayNowActorType"];
            id: components["schemas"]["FlakeId"];
            email: string;
            first_name: string;
            last_name: string;
        };
        /**
         * @description Determines the party that needs to perform or requests a verification
         * @enum {string}
         */
        StoreRequirementActionParty: "invalid" | "store" | "paynow" | "payment_processor" | "payout_provider" | "kyc_provider" | "external";
        /**
         * @description Represents categories of requirements that must be fulfilled for store setup and compliance in the PayNow platform.
         * @enum {string}
         */
        StoreRequirementCategory: "invalid" | "business" | "kyc" | "compliance" | "risk" | "technical" | "financial" | "legal" | "other";
        /** @enum {string} */
        StoreRequirementStatus: "invalid" | "pending" | "under_review" | "requires_revision" | "approved" | "expired" | "waived" | "rejected_final";
        /** @enum {string} */
        StoreRestrictionFlagDto: "none" | "payments_disabled" | "payouts_disabled";
        StoreTrustDto: {
            store_id: components["schemas"]["FlakeId"];
            status: components["schemas"]["StoreTrustStatusDto"];
            status_reason?: null | string;
            restrictions: components["schemas"]["StoreRestrictionFlagDto"];
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at?: null | string;
            onboarding_steps?: components["schemas"]["StoreTrustOnboardingStepsDto"];
            events: components["schemas"]["StoreTrustEventDto"][];
            pending_requirements: components["schemas"]["TrustStoreRequirementDto"][];
        };
        StoreTrustEventDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            type: components["schemas"]["StoreTrustEventTypeDto"];
            description?: null | string;
            store_requirement_id?: components["schemas"]["FlakeId"];
            store_review_id?: components["schemas"]["FlakeId"];
            actor: components["schemas"]["ActorDto"];
            /** Format: date-time */
            created_at: string;
        };
        /** @enum {string} */
        StoreTrustEventTypeDto: "invalid" | "onboarded" | "escalated_to_review" | "action_required" | "restricted" | "offboarded" | "reactivated" | "requirement_added" | "requirement_submitted" | "requirement_verified" | "requirement_rejected" | "requirement_deadline_missed" | "requirement_waived" | "requirement_requires_revision" | "restriction_added" | "restriction_lifted" | "review_scheduled" | "review_completed";
        StoreTrustOnboardingStepsDto: {
            store_id: components["schemas"]["FlakeId"];
            store_owner_id: components["schemas"]["FlakeId"];
            payout_onboarding_completed: boolean;
            kyc_completed: boolean;
            products_created: boolean;
            gameserver_linked: boolean;
            webhooks_active: boolean;
            downloadable_files_added: boolean;
        };
        /** @enum {string} */
        StoreTrustStatusDto: "invalid" | "pending_review" | "requires_action" | "under_review" | "active" | "restricted" | "offboarded";
        StorefrontCustomVariableDto: {
            /** @description Unique identifier string used to reference this custom variable programmatically.
             *     Must contain only letters, numbers, underscores, and hyphens. */
            identifier: string;
            /** @description Display name for the custom variable shown to customers. */
            name: string;
            /** @description Description explaining what this custom variable is for. Can be shown to customers. */
            description: string;
            type: components["schemas"]["CustomVariableType"];
            /** @description Optional regex pattern to validate text/number input values.
             *     Only applies to text and number types.
             *     Uses RE2 syntax - does not support negative lookarounds, backreferences, or other advanced regex features. */
            value_regex?: null | string;
            /** @description Available options for dropdown type custom variables.
             *     Empty for text and number types. */
            options: components["schemas"]["StorefrontCustomVariableOptionDto"][];
        };
        StorefrontCustomVariableOptionDto: {
            /** @description Display name shown to customers for this option. */
            name: string;
            /** @description Internal value used for product command variable replacement, without brackets. */
            value: string;
            /**
             * Format: int64
             * @description Additional price in the lowest denominator (e.g. cents) when this option is selected.
             */
            price: number;
            /** @description Whether this option is selected by default when the custom variable is presented.
             *     Only one option per custom variable should be marked as default. */
            is_default: boolean;
            /**
             * Format: int32
             * @description Sort order for displaying options to customers.
             *     Lower numbers appear first.
             */
            sort_order: number;
        };
        /** @description Represents a delivery item assigned to a customer */
        StorefrontDeliveryItemDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            customer_id: components["schemas"]["FlakeId"];
            order_id?: components["schemas"]["FlakeId"];
            order_line_id?: components["schemas"]["FlakeId"];
            subscription_id?: components["schemas"]["FlakeId"];
            execute_on_gameserver_id?: components["schemas"]["FlakeId"];
            /**
             * Format: int32
             * @description The index of the item when multiple quantities were assigned
             */
            quantity_index?: null | number;
            product: components["schemas"]["DeliveryItemProductDto"];
            state: components["schemas"]["DeliveryItemStateDto"];
            /** @description Indicates whether the delivery item can expire */
            expirable: boolean;
            /** @description Indicates whether the item was given as a gift */
            gift: boolean;
            /**
             * Format: date-time
             * @description The date and time when the item was added
             */
            added_at: string;
            /**
             * Format: date-time
             * @description The date and time when the item became active
             */
            active_at?: null | string;
            /**
             * Format: date-time
             * @description The date and time when the item expires naturally
             */
            expires_at?: null | string;
            /**
             * Format: date-time
             * @description The override expiry date for the delivery item
             */
            override_expires_at?: null | string;
            /**
             * Format: date-time
             * @description The date and time when the item was removed
             */
            removed_at?: null | string;
            /**
             * Format: date-time
             * @description The date and time when the item was revoked
             */
            revoked_at?: null | string;
            /** @description The reason for revoking the delivery item */
            revoke_reason?: null | string;
        };
        /** @description Represents a simplified view of a game server for storefront display purposes. */
        StorefrontGameServerDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            /** @description The display name of the game server. */
            name: string;
            /** @description Indicates whether the game server is currently enabled. */
            enabled: boolean;
        };
        StorefrontGiftCardDto: {
            code: string;
            /** Format: int32 */
            balance: number;
            /** Format: int32 */
            starting_balance: number;
            /** Format: date-time */
            expires_at?: null | string;
        };
        /** @description Represents a navigation link in the storefront's hierarchical navigation structure. */
        StorefrontNavLinkDto: {
            /** @description The unique identifier for this navigation node in the navigation tree. */
            node_id: string;
            /** @description The identifier of the parent navigation node, if this is a child node. */
            parent_node_id?: null | string;
            tag_id: components["schemas"]["FlakeId"];
            /**
             * @description The URL-friendly slug for the tag associated with this navigation link.
             * @example perks
             */
            tag_slug: string;
            /**
             * @description A list containing all parent tags and this node's tag, representing the complete path in the tag hierarchy.
             * @example [
             *       "perks",
             *       "vip"
             *     ]
             */
            tag_query: string[];
            /**
             * @description The display name of the associated tag shown to users in the UI.
             * @example Perks
             */
            name: string;
            /**
             * Format: int32
             * @description The display order of this navigation link relative to its siblings.
             */
            order: number;
            /** @description The collection of child navigation links that appear beneath this link in the hierarchy. */
            children: components["schemas"]["StorefrontNavLinkDto"][];
        };
        StorefrontProductDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            version_id: components["schemas"]["FlakeId"];
            /**
             * @description The URL to the product image.
             * @example https://cdn.paynow.gg/logo/full/logotype-color.svg
             */
            image_url?: null | string;
            /**
             * @description The unique slug for the product.
             * @example premium-game-package
             */
            slug: string;
            /**
             * @description The display name of the product.
             * @example Premium Game Package
             */
            name: string;
            /**
             * @description The detailed description of the product.
             * @example This premium package includes exclusive in-game items, bonus currency, and early access to new content.
             */
            description: string;
            /**
             * Format: date-time
             * @description The date and time when the product becomes enabled.
             */
            enabled_at?: null | string;
            /**
             * Format: date-time
             * @description The date and time until which the product remains enabled.
             */
            enabled_until?: null | string;
            /**
             * @description The display label for the product.
             * @example Premium Items
             */
            label?: null | string;
            /**
             * Format: int32
             * @description The sort order for displaying the product.
             */
            sort_order: number;
            /**
             * Format: int64
             * @description The price of the product, in the lowest denominator (e.g. cents).
             * @example 1999
             */
            price: number;
            /** @description The ISO three-letter lowercase currency code (e.g., usd, eur, gbp) the product is denominated in. */
            currency: string;
            /** @description Indicates whether the product is limited to a single game server. */
            single_game_server_only: boolean;
            /**
             * @description Indicates whether one-time purchases are allowed.
             * @example true
             */
            allow_one_time_purchase: boolean;
            /**
             * @description Indicates whether subscription purchases are allowed.
             * @example true
             */
            allow_subscription: boolean;
            /** @description Indicates whether gifting is disabled for this product. */
            is_gifting_disabled: boolean;
            /** @description Indicates whether gift cards are disabled entirely for the product. */
            is_gift_cards_disabled: boolean;
            /** @description Indicates whether coupons are disabled entirely for the product. */
            is_coupons_disabled: boolean;
            /** @description Indicates whether affiliate links are disabled entirely for the product. */
            is_affiliate_links_disabled: boolean;
            /**
             * Format: int32
             * @description The subscription interval value.
             * @example 1
             */
            subscription_interval_value: number;
            subscription_interval_scale: components["schemas"]["ProductSubscriptionIntervalScale"];
            /**
             * @description Indicates whether automatic removal is enabled.
             * @example true
             */
            remove_after_enabled: boolean;
            /**
             * Format: int32
             * @description The time value for automatic removal.
             * @example 1
             */
            remove_after_time_value: number;
            remove_after_time_scale: components["schemas"]["ProductRemoveAfterIntervalScale"];
            pricing?: components["schemas"]["StorefrontProductPricingDetailsDto"];
            stock?: components["schemas"]["StorefrontProductStockStatusDto"];
            trial: components["schemas"]["StorefrontProductTrialDto"];
            /** @description The tags associated with the product. */
            tags: components["schemas"]["ProductTagDto"][];
            /** @description The game servers associated with the product. */
            gameservers: components["schemas"]["ProductGameServerDto"][];
            /** @description Custom Variables associated with the product. */
            custom_variables: components["schemas"]["StorefrontCustomVariableDto"][];
            deliverable_actions?: components["schemas"]["ProductDeliverableActionsDto"];
            /** @description Additional metadata for the product. */
            metadata?: null | {
                [key: string]: string;
            };
            /**
             * Format: date-time
             * @description The date and time when the product was created.
             */
            created_at?: null | string;
            /**
             * Format: date-time
             * @description The date and time when the product was last updated.
             */
            updated_at?: null | string;
        };
        /** @description The pricing details for the product in the storefront. */
        StorefrontProductPricingDetailsDto: {
            active_sale?: components["schemas"]["StorefrontSaleDto"];
            /**
             * Format: int64
             * @description The amount of the sale discount in the lowest denominator (e.g. cents).
             * @example 500
             */
            sale_value?: null | number;
            upsell_offer_id?: components["schemas"]["FlakeId"];
            /** Format: int64 */
            upsell_discount_amount: number;
            vat_rate?: components["schemas"]["VatRateDto"];
            regional_pricing?: components["schemas"]["StorefrontProductPricingDetailsRegionalPricingDto"];
            /**
             * Format: int64
             * @description The original price of the product before any discounts, in the lowest denominator (e.g. cents).
             * @example 1999
             */
            price_original: number;
            /**
             * Format: int64
             * @description The final price of the product after all discounts, in the lowest denominator (e.g. cents).
             * @example 1499
             */
            price_final: number;
        };
        /** @description Regional pricing information for this product.
         *     Only present if there is a regional pricing configured. */
        StorefrontProductPricingDetailsRegionalPricingDto: {
            /**
             * @description The identifier for the region.
             * @example eu
             */
            region_id: string;
            /**
             * @description The currency code used in the region.
             * @example eur
             */
            currency: string;
            /**
             * @description Indicates whether the base price includes tax.
             * @example true
             */
            tax_inclusive: boolean;
            /**
             * Format: int64
             * @description The base price in the regional currency, in the lowest denominator (e.g. cents).
             * @example 1799
             */
            base_price: number;
        };
        /** @description The stock status information for the product in the storefront. */
        StorefrontProductStockStatusDto: {
            /**
             * @description Indicates whether the product is currently available for purchase (there is available stock).
             * @example true
             */
            available_to_purchase: boolean;
            /**
             * Format: int32
             * @description The number of items available for the customer to purchase (customer stock limit remaining).
             * @example 5
             */
            customer_available: number;
        };
        StorefrontProductTrialDto: {
            /** @description Indicates whether the trial period is enabled for this product. */
            enabled: boolean;
            /** @description Indicates whether the customer is eligible for the trial period. */
            eligible: boolean;
            /**
             * Format: int32
             * @description The duration value of the trial period.
             */
            period_value: number;
            period_scale: components["schemas"]["ProductSubscriptionIntervalScale"];
        };
        StorefrontSaleDto: {
            id: components["schemas"]["FlakeId"];
            /**
             * @description The name of the sale.
             * @example Summer Sale
             */
            name: string;
            discount_type: components["schemas"]["SaleDiscountType"];
            /**
             * Format: int64
             * @description The amount of the discount, either as a percentage in permille or as an absolute value in cents.
             * @example 2000
             */
            discount_amount: number;
            /**
             * Format: int64
             * @description The minimum order value required to apply the discount, in the lowest denominator (e.g. cents).
             * @example 0
             */
            minimum_order_value: number;
            /**
             * Format: date-time
             * @description The date and time when the sale begins.
             * @example 2025-06-01T00:00:00Z
             */
            begins_at: string;
            /**
             * Format: date-time
             * @description The date and time when the sale ends, if applicable.
             * @example 2025-06-30T23:59:59Z
             */
            ends_at?: null | string;
        };
        /** @description Represents a store entity within the storefront system. */
        StorefrontStoreDto: {
            id: components["schemas"]["FlakeId"];
            /**
             * @description The URL-friendly identifier for the store, used in store URLs.
             * @example m0ukas-awesome-store
             */
            slug: string;
            /**
             * @description The display name of the store shown to customers.
             * @example m0uka's awesome store
             */
            name: string;
            /**
             * @description The platform or the game of the store.
             * @example rust
             */
            platform: string;
            /** @description The game of the store. Equivalent to the `platform` for backwards compatibility. */
            readonly game: string;
            /**
             * @description The three-letter ISO currency code used for pricing in this store.
             *     If using the Adaptive Currency feature, this will be updated to reflect customer's local currency
             *     (based on passed in IP / country headers).
             * @example eur
             */
            currency: string;
            /**
             * @description The three-letter ISO currency code signifying the main currency of the store.
             * @example usd
             */
            creator_currency: string;
            /** @description A detailed description of the store. Only present for some platform types. */
            description?: null | string;
            /** @description The URL of the store's main website, if not using Hosted Webstores. */
            website_url?: null | string;
            /**
             * @description The email address customers can use to contact store support.
             * @example support@example.com
             */
            support_email?: null | string;
            /** @description The URL of the store's support page. */
            support_url?: null | string;
            /** @description The type of integration this store uses with external systems. */
            integration_type?: null | string;
            /** @description Indicates whether the store is in live mode (true) or test mode (false). */
            live_mode: boolean;
            /** @description The URL to the store's main logo image. */
            logo_url?: null | string;
            /** @description The URL to the store's square logo image. */
            logo_square_url?: null | string;
            /**
             * Format: date-time
             * @description The date and time when the store was created.
             */
            created_at?: null | string;
            /**
             * Format: date-time
             * @description The date and time when the store was last updated.
             */
            updated_at?: null | string;
        };
        /** @description Represents a tag entity used for categorizing and filtering products within a store. */
        StorefrontTagDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            /** @description The URL-friendly identifier for the tag, used in category URLs. */
            slug: string;
            /** @description The display name of the tag shown to customers. */
            name: string;
            /** @description A detailed description of the tag's purpose or the category it represents. */
            description?: null | string;
            /**
             * @description The URL to the tag image.
             * @example https://cdn.paynow.gg/logo/full/logotype-color.svg
             */
            image_url?: null | string;
            /** @description Indicates whether the tag is active and should be included in navigation and filtering. */
            enabled: boolean;
            /**
             * Format: date-time
             * @description The date and time when the tag was created.
             */
            created_at: string;
            /**
             * Format: date-time
             * @description The date and time when the tag was last updated, if applicable.
             */
            updated_at?: null | string;
        };
        TrustStoreRequirementDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            /** @description Template ID if this requirement was created from a template. Null for ad-hoc requirements. */
            template_id?: null | string;
            originating_flag_id?: components["schemas"]["FlakeId"];
            category: components["schemas"]["StoreRequirementCategory"];
            /** @description Unique code identifying the type of requirement. Copied from template or custom for ad-hoc requirements. */
            code: string;
            /** @description Human-readable name of the requirement. Copied from template or custom for ad-hoc requirements. */
            name: string;
            /** @description Detailed description explaining what the store needs to provide. Copied from template or custom for ad-hoc requirements. */
            description?: null | string;
            /** @description JSON schema defining the form fields, validation rules, and document requirements */
            schema?: null;
            /** @description Additional metadata for this requirement (stored as JSON) */
            metadata: {
                [key: string]: string;
            };
            status: components["schemas"]["StoreRequirementStatus"];
            requested_by: components["schemas"]["StoreRequirementActionParty"];
            /** @description Specifies the specific requester entity (e.g., "stripe", "trolley", or admin user ID)
             *     Free-form string for internal records */
            requested_by_detail?: null | string;
            /**
             * Format: date-time
             * @description When this requirement was created
             */
            created_at: string;
            /**
             * Format: date-time
             * @description When this requirement was last updated
             */
            updated_at?: null | string;
            /**
             * Format: date-time
             * @description When this requirement must be completed by (optional)
             */
            deadline_at?: null | string;
            /**
             * Format: date-time
             * @description When the store submitted their response to this requirement
             */
            submitted_at?: null | string;
            /**
             * Format: date-time
             * @description When this requirement was verified and approved
             */
            verified_at?: null | string;
            /**
             * Format: date-time
             * @description When this requirement was rejected for not meeting standards
             */
            rejected_at?: null | string;
            /** @description Store capabilities that are restricted until this requirement is satisfied */
            restricts_capabilities: string[];
            /** @description Associated submissions for this requriement. */
            submissions: components["schemas"]["TrustStoreRequirementSubmissionDto"][];
        };
        TrustStoreRequirementSubmissionDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            store_requirement_id: components["schemas"]["FlakeId"];
            /** @description The identifier of the specific field within the store requirement. */
            store_requirement_field_id: string;
            /** @description The text value submitted for this field, if applicable. */
            text_value?: null | string;
            /** @description The identifier of the uploaded file, if a file was submitted. */
            file_id?: null | string;
            /** @description The original name of the uploaded file. */
            file_name?: null | string;
            /** @description The MIME content type of the uploaded file. */
            file_content_type?: null | string;
            /**
             * Format: int64
             * @description The size of the uploaded file in bytes.
             */
            file_size_bytes?: null | number;
            /**
             * Format: date-time
             * @description The timestamp when this submission was made.
             */
            submitted_at: string;
            submitted_by: components["schemas"]["ActorDto"];
            /** @description The IP address from which the submission was made. */
            submitted_by_ip_address?: null | string;
            /** @description The user agent string of the client that made the submission. */
            submitted_by_user_agent?: null | string;
        };
        /** @description A validation error. */
        ValidationError: {
            /** @description The parseable error code. */
            code: string;
            /** @description The human-readable error message. */
            message: string;
            /** @description The path leading to the validation error. */
            path: string;
            /** @description Type of the validation that failed. */
            validation: string;
        };
        /** @description The VAT rate estimation for the passed in customer country / IP.
         *     Include the VAT percentage + abbreviation in your product view to inform your customers about the tax. */
        VatRateDto: {
            /**
             * @description The ISO country code.
             * @example CZ
             */
            country_code: string;
            /**
             * @description The full name of the country.
             * @example Czech Republic
             */
            country_name: string;
            /**
             * @description The local currency used in the country.
             * @example CZK
             */
            currency: string;
            /**
             * @description The abbreviation of the VAT term in the local language.
             * @example DPH
             */
            vat_abbreviation: string;
            /**
             * @description The full name of the VAT term in the local language.
             * @example Daň z přidané hodnoty
             */
            vat_local_name: string;
            /**
             * @description Indicates whether the country is a member of the European Union.
             * @example true
             */
            eu_member_state: boolean;
            /**
             * Format: double
             * @description The VAT rate applicable for electronic services, as a percentage.
             * @example 21
             */
            eservice_rate: number;
            /**
             * Format: double
             * @description The VAT rate (synonym for EServiceRate).
             * @example 21
             */
            readonly percentage: number;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    Cart_GetCart: {
        parameters: {
            query?: {
                /** @description The ISO three-letter lowercase currency code (e.g., usd, eur, gbp) to display prices in. If not provided, the store's default currency will be used. */
                currency?: string;
            };
            header?: {
                /** @description The IP address (IPv4 or IPv6) of the customer. Required if the request is not being made from the customer's browser. */
                "x-paynow-customer-ip"?: string;
                /** @description The customer's country code in ISO 3166-1 alpha-2 format. Optional, but recommended if you have this available. */
                "x-paynow-customer-countrycode"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CartDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Cart_ClearCart: {
        parameters: {
            query?: never;
            header?: {
                /** @description The IP address (IPv4 or IPv6) of the customer. Required if the request is not being made from the customer's browser. */
                "x-paynow-customer-ip"?: string;
                /** @description The customer's country code in ISO 3166-1 alpha-2 format. Optional, but recommended if you have this available. */
                "x-paynow-customer-countrycode"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Cart_AddLine: {
        parameters: {
            query: {
                /** @description The ID of the product that should be added to the cart. */
                product_id: components["schemas"]["FlakeId"];
                /** @description The quantity to set or increment. */
                quantity?: number;
                /** @description Set to either '1' or 'true' to store as a subscription line item. */
                subscription?: string;
                /** @description Set to either '1' or 'true' to indicate if the line should be trialed. */
                trial?: string;
                /** @description A game server ID, required if single_game_server_only is enabled for the product. */
                gameserver_id?: components["schemas"]["FlakeId"];
                /** @description Set to either '1' or 'true' to increment (add quantity instead of setting). */
                increment?: string;
                /** @description Dictionary of product custom variables where each entry consists of a string key (identifier)
                 *     and its corresponding selected value. Use the following URL parameter format:
                 *     ?custom_variables[IDENTIFIER]=VALUE */
                custom_variables?: {
                    [key: string]: string;
                };
                /** @description The ID of the customer in which this line is a gift for. */
                gift_to_customer_id?: components["schemas"]["FlakeId"];
                /**
                 * @description The platform type
                 * @example Steam
                 */
                "gift_to.platform"?: components["schemas"]["CustomerProfilePlatform"];
                /**
                 * @description The account ID on the platform
                 * @example 76561198152492642
                 */
                "gift_to.id"?: string;
            };
            header?: {
                /** @description The IP address (IPv4 or IPv6) of the customer. Required if the request is not being made from the customer's browser. */
                "x-paynow-customer-ip"?: string;
                /** @description The customer's country code in ISO 3166-1 alpha-2 format. Optional, but recommended if you have this available. */
                "x-paynow-customer-countrycode"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Cart_CreateCartCheckout: {
        parameters: {
            query?: never;
            header?: {
                /** @description The IP address (IPv4 or IPv6) of the customer. Required if the request is not being made from the customer's browser. */
                "x-paynow-customer-ip"?: string;
                /** @description The customer's country code in ISO 3166-1 alpha-2 format. Optional, but recommended if you have this available. */
                "x-paynow-customer-countrycode"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateCartCheckoutSessionDto"];
                "text/json": components["schemas"]["CreateCartCheckoutSessionDto"];
                "application/*+json": components["schemas"]["CreateCartCheckoutSessionDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateCheckoutSessionResponseDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Checkout_CreateCheckoutSession: {
        parameters: {
            query?: never;
            header?: {
                /** @description The IP address (IPv4 or IPv6) of the customer. Required if the request is not being made from the customer's browser. */
                "x-paynow-customer-ip"?: string;
                /** @description The customer's country code in ISO 3166-1 alpha-2 format. Optional, but recommended if you have this available. */
                "x-paynow-customer-countrycode"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateCheckoutSessionRequestDto"];
                "text/json": components["schemas"]["CreateCheckoutSessionRequestDto"];
                "application/*+json": components["schemas"]["CreateCheckoutSessionRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateCheckoutSessionResponseDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Customer_GetStorefrontCustomer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomerDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Customer_GetStorefrontGiftCard: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StorefrontGiftCardDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Customer_AuthenticateStorefrontCustomer: {
        parameters: {
            query?: never;
            header?: {
                /** @description The IP address (IPv4 or IPv6) of the customer. Required if the request is not being made from the customer's browser. */
                "x-paynow-customer-ip"?: string;
                /** @description The customer's country code in ISO 3166-1 alpha-2 format. Optional, but recommended if you have this available. */
                "x-paynow-customer-countrycode"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AuthenticateStorefrontCustomerRequestDto"];
                "text/json": components["schemas"]["AuthenticateStorefrontCustomerRequestDto"];
                "application/*+json": components["schemas"]["AuthenticateStorefrontCustomerRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthenticateStorefrontCustomerResponseDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Delivery_GetStorefrontCustomerDeliveryItems: {
        parameters: {
            query?: {
                /** @description The maximum number of items to return in a single request. */
                limit?: number;
                /**
                 * @description Returns items after the specified ID.
                 *     Used for forward pagination through results.
                 * @example null
                 */
                after?: components["schemas"]["FlakeId"];
                /**
                 * @description Returns items before the specified ID.
                 *     Used for backward pagination through results.
                 * @example null
                 */
                before?: components["schemas"]["FlakeId"];
                /** @description Determines the sort order of returned items.
                 *     When true, items are returned in ascending order.
                 *     When false, items are returned in descending order. */
                asc?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StorefrontDeliveryItemDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Discord_DoProductsHaveDiscordActions: {
        parameters: {
            query?: {
                product_version_id?: components["schemas"]["FlakeId"][];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: boolean;
                    };
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Navlinks_GetStorefrontNavLinks: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StorefrontNavLinkDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Products_GetStorefrontProducts: {
        parameters: {
            query?: {
                /** @description Tag slugs to filter by. Each tag slug is a separate query parameter. */
                tag?: string[];
                /** @description The ISO three-letter lowercase currency code (e.g., usd, eur, gbp) to display prices in. If not provided, the store's default currency will be used. */
                currency?: string;
            };
            header?: {
                /** @description The IP address (IPv4 or IPv6) of the customer. Required if the request is not being made from the customer's browser. */
                "x-paynow-customer-ip"?: string;
                /** @description The customer's country code in ISO 3166-1 alpha-2 format. Optional, but recommended if you have this available. */
                "x-paynow-customer-countrycode"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StorefrontProductDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Products_GetStorefrontProductByIdOrSlug: {
        parameters: {
            query?: {
                /** @description The ISO three-letter lowercase currency code (e.g., usd, eur, gbp) to display prices in. If not provided, the store's default currency will be used. */
                currency?: string;
            };
            header?: {
                /** @description The IP address (IPv4 or IPv6) of the customer. Required if the request is not being made from the customer's browser. */
                "x-paynow-customer-ip"?: string;
                /** @description The customer's country code in ISO 3166-1 alpha-2 format. Optional, but recommended if you have this available. */
                "x-paynow-customer-countrycode"?: string;
            };
            path: {
                idOrSlug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StorefrontProductDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Store_GetStorefrontStore: {
        parameters: {
            query?: never;
            header?: {
                /** @description The IP address (IPv4 or IPv6) of the customer. Required if the request is not being made from the customer's browser. */
                "x-paynow-customer-ip"?: string;
                /** @description The customer's country code in ISO 3166-1 alpha-2 format. Optional, but recommended if you have this available. */
                "x-paynow-customer-countrycode"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StorefrontStoreDto"];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
    Tags_GetStorefrontTags: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StorefrontTagDto"][];
                };
            };
            /** @description Error response */
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
                };
            };
        };
    };
}


export const operationMappings = {
  "Cart_GetCart": {
    "method": "GET",
    "path": "/v1/store/cart"
  },
  "Cart_ClearCart": {
    "method": "DELETE",
    "path": "/v1/store/cart"
  },
  "Cart_AddLine": {
    "method": "PUT",
    "path": "/v1/store/cart/lines"
  },
  "Cart_CreateCartCheckout": {
    "method": "POST",
    "path": "/v1/store/cart/checkout"
  },
  "Checkout_CreateCheckoutSession": {
    "method": "POST",
    "path": "/v1/checkouts"
  },
  "Customer_GetStorefrontCustomer": {
    "method": "GET",
    "path": "/v1/store/customer"
  },
  "Customer_GetStorefrontGiftCard": {
    "method": "GET",
    "path": "/v1/store/customer/giftcards/lookup/{code}"
  },
  "Customer_AuthenticateStorefrontCustomer": {
    "method": "POST",
    "path": "/v1/store/customer/auth"
  },
  "Delivery_GetStorefrontCustomerDeliveryItems": {
    "method": "GET",
    "path": "/v1/store/customer/delivery/items"
  },
  "Discord_DoProductsHaveDiscordActions": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/product_versions/discord_actions"
  },
  "Navlinks_GetStorefrontNavLinks": {
    "method": "GET",
    "path": "/v1/store/navlinks"
  },
  "Products_GetStorefrontProducts": {
    "method": "GET",
    "path": "/v1/store/products"
  },
  "Products_GetStorefrontProductByIdOrSlug": {
    "method": "GET",
    "path": "/v1/store/products/{idOrSlug}"
  },
  "Store_GetStorefrontStore": {
    "method": "GET",
    "path": "/v1/store"
  },
  "Tags_GetStorefrontTags": {
    "method": "GET",
    "path": "/v1/store/tags"
  }
} as const;
