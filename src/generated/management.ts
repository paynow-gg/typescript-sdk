export interface paths {
    "/v1/stores/{storeId}/affiliate-links": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AffiliateLinks_GetAffiliateLinks"];
        put?: never;
        post: operations["AffiliateLinks_CreateAffiliateLink"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/affiliate-links/{affiliateLinkId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["AffiliateLinks_GetAffiliateLink"];
        put?: never;
        post?: never;
        delete: operations["AffiliateLinks_DeleteAffiliateLink"];
        options?: never;
        head?: never;
        patch: operations["AffiliateLinks_UpdateAffiliateLink"];
        trace?: never;
    };
    "/v1/stores/{storeId}/bans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Bans_GetBans"];
        put?: never;
        post: operations["Bans_CreateBan"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/bans/{banId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Bans_GetBan"];
        put?: never;
        post?: never;
        delete: operations["Bans_DeleteBan"];
        options?: never;
        head?: never;
        patch: operations["Bans_UpdateBan"];
        trace?: never;
    };
    "/v1/stores/{storeId}/bans/check": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["Bans_CheckForBanByIdentities"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/checkouts": {
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
         * @description Creates a checkout session from a secure server using an API Key.
         *     If you have a Customer token, see the Storefront API Create Checkout endpoint.
         */
        post: operations["Checkout_CreateCheckoutSession"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/coupons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Fetches all coupons for a store id */
        get: operations["Coupons_GetCouponsForStore"];
        put?: never;
        post: operations["Coupons_CreateCouponForStore"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/coupons/{couponId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves a coupon by ID */
        get: operations["Coupons_GetCouponByIdForStore"];
        put?: never;
        post?: never;
        /** Deletes a coupon */
        delete: operations["Coupons_DeleteCouponForStore"];
        options?: never;
        head?: never;
        /** Performs a Delta Update of a Coupon */
        patch: operations["Coupons_UpdateCouponForStore"];
        trace?: never;
    };
    "/v1/stores/{storeId}/custom-variables": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get custom variables
         * @description Retrieves all custom variables for the specified store.
         */
        get: operations["CustomVariables_GetCustomVariablesForStore"];
        put?: never;
        /**
         * Create custom variable
         * @description Creates a new custom variable for the specified store.
         *     Custom variables allow customers to provide additional input when purchasing products.
         */
        post: operations["CustomVariables_CreateCustomVariableForStore"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/custom-variables/{customVariableId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get custom variable
         * @description Retrieves a specific custom variable by ID from the specified store.
         */
        get: operations["CustomVariables_GetCustomVariableByIdForStore"];
        put?: never;
        post?: never;
        /**
         * Delete custom variable
         * @description Deletes a custom variable from the specified store.
         *     This will also delete all associated options and cannot be undone.
         */
        delete: operations["CustomVariables_DeleteCustomVariableForStore"];
        options?: never;
        head?: never;
        /**
         * Update custom variable
         * @description Performs a partial update of a custom variable using field mask.
         *     Only the fields specified in the request will be updated.
         */
        patch: operations["CustomVariables_UpdateCustomVariableForStore"];
        trace?: never;
    };
    "/v1/stores/{storeId}/customers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get customers
         * @description Retrieves all customers for the specified store.
         */
        get: operations["Customers_GetCustomers"];
        put?: never;
        /**
         * Create customer
         * @description Creates a new customer based on the fields passed.
         */
        post: operations["Customers_CreateCustomer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/customers/{customerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get customer by ID
         * @description Retrieves a customer by the ID for the specified store.
         */
        get: operations["Customers_GetCustomerById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update customer
         * @description Updates an existing customer based on the fields passed.
         */
        patch: operations["Customers_UpdateCustomer"];
        trace?: never;
    };
    "/v1/stores/{storeId}/customers/{customerId}/tokens": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create customer token
         * @description Generates a customer token that can be used by the Storefront (Headless) API.
         */
        post: operations["Customers_CreateCustomerToken"];
        /**
         * Invalidate customer tokens
         * @description Invalidates all generated customer tokens.
         */
        delete: operations["Customers_InvalidateCustomerTokens"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/customers/lookup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Lookup customer
         * @description Looks up a customer by an external platform ID.
         */
        get: operations["Customers_LookupCustomer"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/customers/bulk": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Bulk create customers
         * @description Creates up to 200 customers at once.
         */
        post: operations["Customers_BulkCreateCustomers"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/data-migrations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DataMigrations_GetDataMigrations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/data-migrations/tebex": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["DataMigrations_StartDataMigrationFromTebex"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/orders/{orderId}/delivery/items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get delivery items associated with an order
         * @description Retrieves all delivery items associated with a specific order.
         */
        get: operations["Delivery_GetOrderDeliveryItems"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/orders/{orderId}/command-delivery": {
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
    "/v1/stores/{storeId}/delivery/items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Assign delivery items in bulk
         * @description Allows you to assign multiple delivery items for multiple customers in bulk
         */
        post: operations["Delivery_AssignDeliveryItemsBulk"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/delivery/commands/unqueue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Unqueue commands by Attempt IDs */
        post: operations["Delivery_UnqueueDeliveryCommandAttemptByAttemptIDs"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/delivery/items/update-product-versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update product version id for delivery items of given product id */
        post: operations["Delivery_UpdateDeliveryItemProductVersions"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/command-delivery": {
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
    "/v1/stores/{storeId}/command-delivery/unqueue": {
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
    "/v1/stores/{storeId}/customers/{customerId}/delivery/items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get delivery items associated with a customer
         * @description Retrieves delivery items associated with a customer
         */
        get: operations["Delivery_GetDeliveryItems"];
        put?: never;
        /**
         * Assign a delivery item to a customer
         * @description Allows you to assign a delivery item to a customer
         */
        post: operations["Delivery_AssignDeliveryItem"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/customers/{customerId}/delivery/items/{deliveryItemId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Revoke a delivery item from a customer
         * @description Allows you to revoke a delivery item associated with a customer
         */
        delete: operations["Delivery_RevokeDeliveryItem"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/customers/{customerId}/delivery/commands": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get command attempts associated with a customer
         * @description Retrieves command attempts associated with a customer
         */
        get: operations["Delivery_GetCommandAttempts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/customers/{customerId}/command-delivery": {
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
    "/v1/stores/{storeId}/customers/{customerId}/command-delivery/{deliveryItemId}": {
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
    "/v1/stores/{storeId}/gameservers/{gameServerId}/delivery/commands/resend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Resend commands for a given Gameserver */
        post: operations["Delivery_ResendDeliveryCommandsForGameServer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/product_versions/{productVersionId}/discord_actions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Discord_GetActions"];
        put: operations["Discord_CreateAction"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/orders/{orderId}/discord": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Discord_GetLinkedDiscordAccounts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/orders/{orderId}/discord/queued": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Discord_GetDiscordActionExecutionHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/inventory/{inventoryItemId}/discord/queued": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Discord_GetQueuedDiscordActionForDeliveryItem"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/inventory/{inventoryItemId}/discord/link": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Discord_GetUserToDeliveryItemLinks"];
        put: operations["Discord_SetUserToDeliveryItemLink"];
        post?: never;
        delete: operations["Discord_DeleteUserToDeliveryItemLink"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/discord/links": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Discord_GetDiscordServerLinks"];
        put?: never;
        post: operations["Discord_CreateDiscordServerLink"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/discord/links/{token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["Discord_DeleteDiscordServerLinks"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/discord/{discordServerId}/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Discord_GetDiscordServerRoles"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/discord/{discordServerId}/discord/text_channels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Discord_GetDiscordServerTextChannels"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/products/{productId}/downloadable-files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DownloadableFiles_GetDownloadableFiles"];
        put?: never;
        post: operations["DownloadableFiles_StartDownloadableFileUpload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/products/{productId}/downloadable-files/{downloadableFileId}/finish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["DownloadableFiles_FinishDownloadableFileUpload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/products/{productId}/downloadable-files/{downloadableFileId}/download-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["DownloadableFiles_CreateDownloadUrl"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/products/{productId}/downloadable-files/{downloadableFileId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["DownloadableFiles_DeleteDownloadableFile"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/gameservers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Game Servers for a store */
        get: operations["GameServers_GetGameServers"];
        put?: never;
        /** Create a new Game Server for a store */
        post: operations["GameServers_CreateGameServer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/gameservers/{gameServerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a Game Server by ID for a store */
        get: operations["GameServers_GetGameServer"];
        put?: never;
        post?: never;
        /** Delete a Game Server by ID for a store */
        delete: operations["GameServers_DeleteGameServer"];
        options?: never;
        head?: never;
        /** Update a Game Server By ID for a store */
        patch: operations["GameServers_UpdateGameServer"];
        trace?: never;
    };
    "/v1/stores/{storeId}/gameservers/{gameServerId}/reset-token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Reset the API Key Token for a Game Server for a store */
        post: operations["GameServers_ResetGameServerToken"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/giftcards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Gift Cards for a store */
        get: operations["Giftcards_GetGiftCards"];
        put?: never;
        /** Create a Gift Card for a store */
        post: operations["Giftcards_CreateGiftCard"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/giftcards/{giftCardId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a Gift Card By ID for a store */
        get: operations["Giftcards_GetGiftCard"];
        put?: never;
        post?: never;
        /** Delete a Gift Card By ID for a store */
        delete: operations["Giftcards_DeleteGiftCard"];
        options?: never;
        head?: never;
        /** Update a Gift Card By ID for a store */
        patch: operations["Giftcards_UpdateGiftCard"];
        trace?: never;
    };
    "/v1/stores/{storeId}/global-commands": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get global commands
         * @description Retrieves all global commands for the specified store.
         */
        get: operations["GlobalCommands_GetGlobalCommands"];
        put?: never;
        /**
         * Create global command
         * @description Creates a global command for a store.
         */
        post: operations["GlobalCommands_CreateGlobalCommand"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/global-commands/{globalCommandId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete global command
         * @description Deletes a global command for a store.
         */
        delete: operations["GlobalCommands_DeleteGlobalCommand"];
        options?: never;
        head?: never;
        /**
         * Update global command
         * @description Updates a global command for a store.
         */
        patch: operations["GlobalCommands_UpdateGlobalCommand"];
        trace?: never;
    };
    "/v1/stores/{storeId}/marketing/abandoned-checkouts/configuration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets the abandoned checkout behaviour for a store */
        get: operations["Marketing_GetStoreAbandonedCheckoutConfigurationOptions"];
        /** Sets the abandoned checkout behaviour for a store */
        put: operations["Marketing_SetStoreAbandonedCheckoutConfigurationOptions"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/marketing/purchase-follow-ups/configuration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets the purchase follow up behaviour for a store */
        get: operations["Marketing_GetStorePurchaseFollowUpConfigurationOptions"];
        /** Sets the purchase follow up behaviour for a store */
        put: operations["Marketing_SetStorePurchaseFollowUpConfigurationOptions"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/navlinks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all NavLinks for a store */
        get: operations["Navlinks_GetNavLinks"];
        put?: never;
        /** Create a new NavLink for a store */
        post: operations["Navlinks_CreateNavLink"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/navlinks/{navLinkId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a NavLink by ID for a store */
        get: operations["Navlinks_GetNavLink"];
        put?: never;
        post?: never;
        /** Delete a NavLink for a store */
        delete: operations["Navlinks_DeleteNavLink"];
        options?: never;
        head?: never;
        /** Update a NavLink By ID for a store */
        patch: operations["Navlinks_UpdateNavLink"];
        trace?: never;
    };
    "/v1/stores/{storeId}/navlinks/sort-orders": {
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
        /** Update the sort orders of NavLinks for a Store */
        patch: operations["Navlinks_UpdateNavLinkOrder"];
        trace?: never;
    };
    "/v1/stores/{storeId}/orders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get orders
         * @description Retrieves all orders for the specified store.
         */
        get: operations["Orders_GetOrders"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/orders/{orderId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get order by ID
         * @description Retrieves an order by the ID for the specified store.
         */
        get: operations["Orders_GetOrderById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/orders/{orderId}/refund": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Refund order by ID
         * @description Creates a refund for an order by the ID for the specified store.
         */
        post: operations["Orders_RefundOrder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/payment-method-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get store payment method types
         * @description Retrieves all payment method types associated with a store
         */
        get: operations["PaymentMethodTypes_GetStorePaymentMethodTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/payment-method-types/{paymentMethodTypeId}/toggle": {
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
        /**
         * Toggle a store payment method type
         * @description Enables or disabled a payment method type for a store
         */
        patch: operations["PaymentMethodTypes_ToggleStorePaymentMethodType"];
        trace?: never;
    };
    "/v1/stores/{storeId}/payment-settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get store payment settings
         * @description Retrieves payment settings for a store.
         */
        get: operations["PaymentSettings_GetStorePaymentSettings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Updates store payment settings
         * @description Updates payment settings for a store.
         */
        patch: operations["PaymentSettings_UpdateStorePaymentSettings"];
        trace?: never;
    };
    "/v1/stores/{storeId}/payments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get payments
         * @description Retrieves all payments for the specified store using the filter specified.
         */
        get: operations["Payments_GetPayments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/payments/{paymentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get payment by ID
         * @description Retrieves a payment by an ID.
         */
        get: operations["Payments_GetPaymentById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/products": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get products
         * @description Retrieves all products for the specified store.
         *     DO NOT USE THIS ROUTE FOR DISPLAYING PRODUCTS ON YOUR STOREFRONT, use the storefront API instead!
         */
        get: operations["Products_GetProducts"];
        put?: never;
        /**
         * Create product
         * @description Creates a new product in the specified store.
         *     Creating dynamic products while creating a checkout session via this endpoint without prior approval is prohibited and will result in store deactivation per our User Agreement.
         */
        post: operations["Products_CreateProduct"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/products/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get product
         * @description Retrieves a specific product by ID from the specified store.
         *     DO NOT USE THIS ROUTE FOR DISPLAYING PRODUCTS ON YOUR STOREFRONT, use the storefront API instead.
         */
        get: operations["Products_GetProduct"];
        put?: never;
        post?: never;
        /**
         * Delete product
         * @description Deletes a product from the specified store.
         */
        delete: operations["Products_DeleteProduct"];
        options?: never;
        head?: never;
        /**
         * Update product
         * @description Updates an existing product in the specified store.
         */
        patch: operations["Products_UpdateProduct"];
        trace?: never;
    };
    "/v1/stores/{storeId}/products/sort-order": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update product sort order
         * @description Updates the sort order of products in the specified store.
         */
        post: operations["Products_UpdateProductSortOrder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/products/{productId}/pricing/regions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RegionalPricing_GetProductPricingRegions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/products/{productId}/pricing/regions/{regionId}": {
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
        patch: operations["RegionalPricing_SetProductPricingRegionOverride"];
        trace?: never;
    };
    "/v1/stores/{storeId}/products/pricing/regions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RegionalPricing_GetStorePricingRegions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/products/pricing/regions/{regionId}": {
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
        patch: operations["RegionalPricing_SetStorePricingRegionOverride"];
        trace?: never;
    };
    "/v1/stores/{storeId}/products/pricing/region-groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["RegionalPricing_GetStorePricingRegionGroups"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/sales": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get sales associated with a store. */
        get: operations["Sales_GetSales"];
        put?: never;
        /** Create a sale by ID for a store */
        post: operations["Sales_CreateSale"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/sales/{saleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a sale by ID for a store */
        get: operations["Sales_GetSale"];
        put?: never;
        post?: never;
        /** Delete a sale by ID for a store */
        delete: operations["Sales_DeleteSaleById"];
        options?: never;
        head?: never;
        /** Update a sale by ID for a store */
        patch: operations["Sales_UpdateSale"];
        trace?: never;
    };
    "/v1/stores/{storeId}/subscriptions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get subscriptions
         * @description Retrieves all subscriptions for the specified store.
         */
        get: operations["Subscriptions_GetSubscriptions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/subscriptions/{subscriptionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get subscription by ID
         * @description Retrieves a subscription for the specified store by the supplied ID.
         */
        get: operations["Subscriptions_GetSubscriptionById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/subscriptions/{subscriptionId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cancel subscription by ID
         * @description Cancels a subscription for the specified store by the supplied ID.
         */
        post: operations["Subscriptions_CancelSubscription"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all tags for a store */
        get: operations["Tags_GetTags"];
        put?: never;
        /** Create a new tag */
        post: operations["Tags_CreateTag"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/tags/{tagId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a tag by an ID */
        get: operations["Tags_GetTag"];
        put?: never;
        post?: never;
        /** Delete a tag by ID */
        delete: operations["Tags_DeleteTag"];
        options?: never;
        head?: never;
        /** Update a tag by ID */
        patch: operations["Tags_UpdateTag"];
        trace?: never;
    };
    "/v1/stores/{storeId}/tags/{tagId}/image-upload-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get upload URL for tag image
         * @description Gets a pre-signed upload URL for uploading an image to a tag
         */
        get: operations["Tags_GetTagImageUploadUrl"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/tags/{tagId}/image-upload-finish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Finish tag image upload
         * @description Finishes an image upload for a tag
         */
        post: operations["Tags_FinishTagImageUpload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/tags/{tagId}/image": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete tag image
         * @description Deletes an image for a tag
         */
        delete: operations["Tags_DeleteTagImage"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/trials": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get trials for a store */
        get: operations["Trials_GetTrials"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/trials/{trialId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a trial by ID for a store */
        get: operations["Trials_GetTrial"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/customers/{customerId}/trials/eligibility/overrides": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get trial eligibility overrides for a specific customer
         * @description Retrieves all trial eligibility overrides for the specified customer.
         */
        get: operations["Trials_GetEligibilityOverridesForCustomer"];
        put?: never;
        /**
         * Create trial eligibility override for a customer
         * @description Creates a new trial eligibility override for the specified customer.
         */
        post: operations["Trials_CreateEligibilityOverrideForCustomer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/customers/{customerId}/trials/eligibility/overrides/{trialEligibilityOverrideId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete trial eligibility override for a customer
         * @description Deletes an existing trial eligibility override.
         */
        delete: operations["Trials_DeleteEligibilityOverrideForCustomer"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/trust/onboarding/status": {
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
    "/v1/stores/{storeId}/trust/requirements": {
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
    "/v1/stores/{storeId}/webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Webhooks_GetSubscriptions"];
        put?: never;
        post: operations["Webhooks_CreateSubscription"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/webhooks/variables": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Webhooks_GetVariables"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/webhooks/{webhookId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["Webhooks_DeleteSubscription"];
        options?: never;
        head?: never;
        patch: operations["Webhooks_UpdateSubscription"];
        trace?: never;
    };
    "/v1/stores/{storeId}/webhooks/resend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["Webhooks_Resend"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/stores/{storeId}/webhooks/{webhookId}/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["Webhooks_GetHistory"];
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
        /** @description Represents a command associated with the store-level abandoned checkout configuration. */
        AbandonedCheckoutStoreConfigurationCommandDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            /** @description The command to execute. */
            command: string;
            /** @description Indicates if the command should be executed if the player is online. */
            online_only: boolean;
        };
        /** @description Represents the store-level configuration for abandoned checkout settings. */
        AbandonedCheckoutStoreConfigurationDto: {
            store_id: components["schemas"]["FlakeId"];
            /** @description A value indicating whether the abandoned checkout feature is enabled for the store. */
            enabled: boolean;
            /** @description A value indicating whether the abandoned checkout configuration for the store is invalid. */
            invalid: boolean;
            trigger_after: components["schemas"]["Period"];
            /**
             * Format: int64
             * @description The minimum order value required to trigger an abandoned checkout email.
             */
            minimum_order_value: number;
            /**
             * Format: int64
             * @description The optional maximum order value beyond which an abandoned checkout email will not be sent.
             */
            maximum_order_value?: null | number;
            /**
             * Format: int32
             * @description The optional maximum coupons limit per customer beyond which an abandoned checkout email will not be sent.
             */
            max_coupons_per_customer_amount?: null | number;
            max_coupons_per_customer_period?: components["schemas"]["Period"];
            /**
             * Format: int32
             * @description The optional maximum coupons limit store wide beyond which an abandoned checkout email will not be sent.
             */
            max_coupons_global_amount?: null | number;
            max_coupons_global_period?: components["schemas"]["Period"];
            coupon_configuration: components["schemas"]["MarketingCouponConfigurationDto"];
            /** @description The commands you want to execute when the email is sent. */
            commands: components["schemas"]["AbandonedCheckoutStoreConfigurationCommandDto"][];
            updated_by: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description The date and time when the configuration was last updated.
             */
            updated_at: string;
        };
        /** @description Represents a command associated with the store-level abandoned checkout configuration. */
        AbandonedCheckoutStoreConfigurationUpdateCommandDto: {
            /** @description The command to execute. */
            command: string;
            /** @description Indicates if the command should be executed if the player is online. */
            online_only: boolean;
        };
        /** @description Used for updating the store-level configuration for abandoned checkout settings. */
        AbandonedCheckoutStoreConfigurationUpdateDto: {
            /** @description A value indicating whether the abandoned checkout feature is enabled for the store. */
            enabled: boolean;
            trigger_after: components["schemas"]["Period"];
            /**
             * Format: int64
             * @description The minimum order value required to trigger an abandoned checkout email.
             */
            minimum_order_value: number;
            /**
             * Format: int64
             * @description The optional maximum order value beyond which an abandoned checkout email will not be sent.
             */
            maximum_order_value?: null | number;
            /**
             * Format: int32
             * @description The optional maximum coupons limit per customer beyond which an abandoned checkout email will not be sent.
             */
            max_coupons_per_customer_amount?: null | number;
            max_coupons_per_customer_period?: components["schemas"]["Period"];
            /**
             * Format: int32
             * @description The optional maximum coupons limit store wide beyond which an abandoned checkout email will not be sent.
             */
            max_coupons_global_amount?: null | number;
            max_coupons_global_period?: components["schemas"]["Period"];
            commands: components["schemas"]["AbandonedCheckoutStoreConfigurationUpdateCommandDto"][];
            coupon_configuration: components["schemas"]["MarketingCouponConfigurationDto"];
        };
        ActorDto: {
            type: components["schemas"]["PayNowActorType"];
            id?: components["schemas"]["FlakeId"];
        };
        /** @enum {string} */
        AffiliateLinkCommissionType: "none" | "fixed" | "percentage";
        /** @enum {string} */
        AffiliateLinkDiscountType: "none" | "fixed" | "percentage";
        AffiliateLinkDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            wallet_id: string;
            enabled: boolean;
            code: string;
            referer_type: components["schemas"]["AffiliateLinkRefererType"];
            /** Format: int32 */
            tracking_length_days: number;
            apply_for_subscriptions: boolean;
            discount_type: components["schemas"]["AffiliateLinkDiscountType"];
            /** Format: int64 */
            discount_amount: number;
            commission_type: components["schemas"]["AffiliateLinkCommissionType"];
            /** Format: int64 */
            commission_amount: number;
            created_by: components["schemas"]["ActorDto"];
            /** Format: date-time */
            created_at: string;
            updated_by?: components["schemas"]["ActorDto"];
            /** Format: date-time */
            updated_at?: null | string;
        };
        /** @enum {string} */
        AffiliateLinkRefererType: "invalid" | "first_referer" | "last_referer";
        /** @description Alipay payment method details */
        AlipayDetailsDto: {
            /**
             * @description The Alipay buyer identifier
             * @example buyer_abc123
             */
            buyer_id?: null | string;
            /**
             * @description A unique fingerprint for this Alipay account
             * @example fingerprint_xyz789
             */
            fingerprint?: null | string;
        };
        BanDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            reason: string;
            enabled: boolean;
            identities: components["schemas"]["BanIdentityDto"][];
            created_by: components["schemas"]["ActorDto"];
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at?: null | string;
            updated_by?: components["schemas"]["ActorDto"];
            /** Format: date-time */
            expires_at?: null | string;
        };
        BanIdentityDto: {
            ban_type: components["schemas"]["BanType"];
            ban_type_value: string;
        };
        /** @enum {string} */
        BanType: "unknown" | "steam" | "ip" | "customer" | "customer_name" | "email";
        /** @description Bancontact payment method details */
        BancontactDetailsDto: {
            /**
             * @description The bank identifier
             * @example bnp_paribas
             */
            bank?: null | string;
            /**
             * @description The bank name
             * @example BNP Paribas
             */
            bank_name?: null | string;
            /**
             * @description The Bank Identifier Code
             * @example GEBABEBB
             */
            bic?: null | string;
            /**
             * @description The last 4 digits of the IBAN
             * @example 3456
             */
            iban_last4?: null | string;
            /**
             * @description The payer name
             * @example Jean Dupont
             */
            payer_name?: null | string;
        };
        /** @description Card payment method details */
        CardDetailsDto: {
            /**
             * @description The card brand
             * @example visa
             */
            brand: string;
            /**
             * @description The country code where the card was issued
             * @example US
             */
            country: string;
            /**
             * Format: int32
             * @description The card expiration month
             * @example 12
             */
            exp_month: number;
            /**
             * Format: int32
             * @description The card expiration year
             * @example 2028
             */
            exp_year: number;
            /**
             * @description A unique fingerprint for this card
             * @example abc123def456
             */
            fingerprint: string;
            /**
             * @description The card funding type
             * @example credit
             */
            funding: string;
            /**
             * @description The last 4 digits of the card number
             * @example 4242
             */
            last4: string;
            /**
             * @description The Bank Identification Number (first 6/8 digits of card).
             *     Only available internally.
             * @example 424242
             */
            bin?: null | string;
            /**
             * @description The card issuer/bank name.
             *     Only available internally.
             * @example Chase Bank
             */
            issuer?: null | string;
            /**
             * @description The card description.
             *     Only available internally.
             * @example Visa Signature
             */
            description?: null | string;
            wallet?: components["schemas"]["CardWalletDto"];
        };
        /** @description Digital wallet details for a card */
        CardWalletDto: {
            /**
             * @description The type of digital wallet
             * @example apple_pay
             */
            type: string;
        };
        /** @description Cash App payment method details */
        CashAppDetailsDto: {
            /**
             * @description The Cash App buyer identifier
             * @example buyer_abc123
             */
            buyer_id: string;
            /**
             * @description The Cash App cashtag
             * @example $johndoe
             */
            cashtag: string;
        };
        /**
         * @description Defines the type of chargeback coverage provided.
         * @enum {string}
         */
        ChargebackCoverageTypeDto: "unspecified" | "none" | "fraudulent" | "all";
        CheckForBanIDByIdentitiesRequestDto: {
            identities: components["schemas"]["BanIdentityDto"][];
        };
        CheckForBanIDByIdentitiesResponseDto: {
            is_banned: boolean;
            ban_id?: components["schemas"]["FlakeId"];
        };
        CommandAttemptDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            inventory_item_id?: components["schemas"]["FlakeId"];
            gameserver_id: components["schemas"]["FlakeId"];
            steam_id?: components["schemas"]["SteamId"];
            minecraft_uuid?: null | string;
            customer_name?: null | string;
            customer_id?: components["schemas"]["FlakeId"];
            command_stage?: null | string;
            command: string;
            online_only: boolean;
            rerun: boolean;
            /** Format: date-time */
            queued_at: string;
            /** Format: date-time */
            executed_at?: null | string;
            executed_by_ip?: null | string;
            /** Format: date-time */
            unqueued_at?: null | string;
        };
        /**
         * @description Specifies the type of discount applied by a coupon.
         * @enum {string}
         */
        CouponDiscountTypeEnum: "unspecified" | "percent" | "amount";
        /** @description Represents a detailed view of a coupon, including configuration and audit information. */
        CouponDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            /** @description Indicates whether the coupon is enabled. */
            enabled: boolean;
            /** @description The unique code associated with the coupon. */
            code: string;
            /** @description A note or internal description of the coupon. */
            note?: null | string;
            duration: components["schemas"]["CouponDurationEnum"];
            /**
             * Format: int32
             * @description The number of months the coupon is valid, used if the duration is repeating.
             */
            duration_in_months?: null | number;
            discount_type: components["schemas"]["CouponDiscountTypeEnum"];
            /**
             * Format: int64
             * @description The discount amount in the smallest currency unit (e.g., cents).
             */
            discount_amount: number;
            /** @description Indicates whether the discount should be applied individually to required tags or products. */
            discount_apply_individually: boolean;
            /** @description Indicates whether the discount is applied before existing sales. */
            discount_apply_before_sales: boolean;
            /** @description A list of product IDs the coupon applies to. */
            apply_to_products?: null | components["schemas"]["FlakeId"][];
            /** @description A list of tag IDs the coupon applies to. */
            apply_to_tags?: null | components["schemas"]["FlakeId"][];
            usable_by_customer_id?: components["schemas"]["FlakeId"];
            /**
             * Format: int64
             * @description The minimum order value required to use the coupon.
             */
            minimum_order_value: number;
            /** @description Indicates whether a global redemption limit is enabled. */
            redeem_limit_store_enabled: boolean;
            /**
             * Format: int64
             * @description The maximum number of times the coupon can be redeemed across the store.
             */
            redeem_limit_store_amount: number;
            /** @description Indicates whether a per-customer redemption limit is enabled. */
            redeem_limit_customer_enabled: boolean;
            /**
             * Format: int64
             * @description The maximum number of times the coupon can be redeemed per customer.
             */
            redeem_limit_customer_amount: number;
            /** @description Indicates whether the coupon can be used for one-time purchases. */
            usable_on_one_time_purchase: boolean;
            /** @description Indicates whether the coupon can be used for subscriptions. */
            usable_on_subscription: boolean;
            /**
             * Format: date-time
             * @description The date and time when the coupon becomes valid.
             */
            usable_at?: null | string;
            /**
             * Format: date-time
             * @description The date and time when the coupon expires.
             */
            expires_at?: null | string;
            created_by?: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description The date and time when the coupon was created.
             */
            created_at: string;
            updated_by?: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description The date and time when the coupon was last updated.
             */
            updated_at?: null | string;
        };
        /**
         * @description Defines the duration for which a coupon remains valid.
         * @enum {string}
         */
        CouponDurationEnum: "once" | "forever" | "repeating";
        /**
         * @description Will filter by coupon status.
         * @enum {string}
         */
        CouponFilterStatusEnum: "all" | "active" | "inactive";
        /**
         * @description Will filter by coupon creation type.
         * @enum {string}
         */
        CouponFilterTypeEnum: "all" | "manual" | "generated";
        CreateAffiliateLinkDto: {
            wallet_id: string;
            enabled: boolean;
            code: string;
            referer_type: components["schemas"]["AffiliateLinkRefererType"];
            /** Format: int32 */
            tracking_length_days: number;
            apply_for_subscriptions: boolean;
            discount_type: components["schemas"]["AffiliateLinkDiscountType"];
            /** Format: int64 */
            discount_amount: number;
            commission_type: components["schemas"]["AffiliateLinkCommissionType"];
            /** Format: int64 */
            commission_amount: number;
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
            /** @description Optional metadata to associate with the checkout session line.
             *     Do not store any sensitive information here. */
            metadata?: null | {
                [key: string]: string;
            };
            /** @description Key-value pair mapping custom variable identifiers to their selected values.
             *     Required only when the product includes custom variables. */
            custom_variables?: null | {
                [key: string]: string;
            };
        };
        /** @description Represents a line item in a checkout session request.
         *     Opposed to CreateCheckoutSessionLineDto, this is used while creating a checkout session using the Management API,
         *     and allows for creating inline products (which is subject to special approval) */
        CreateCheckoutSessionLineManagementDto: {
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
            /** @description Optional metadata to associate with the checkout session line.
             *     Do not store any sensitive information here. */
            metadata?: null | {
                [key: string]: string;
            };
            /** @description Key-value pair mapping custom variable identifiers to their selected values.
             *     Required only when the product includes custom variables. */
            custom_variables?: null | {
                [key: string]: string;
            };
            product_id?: components["schemas"]["FlakeId"];
            inline_product?: components["schemas"]["InlineProductCreateDto"];
        };
        /** @description Request to create a new checkout session from your back-end server using the management API.
         *     `customer_id` needs to be specified explicitly here instead of using a Customer token. */
        CreateCheckoutSessionManagementDto: {
            /** @description The line items to include in the checkout */
            lines: components["schemas"]["CreateCheckoutSessionLineManagementDto"][];
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
            /** @description Optional metadata to associate with the checkout session.
             *     Do not store any sensitive information here. */
            metadata?: null | {
                [key: string]: string;
            };
            customer_id: components["schemas"]["FlakeId"];
        };
        /** @description Response after creating a checkout session */
        CreateCheckoutSessionResponseDto: {
            id: components["schemas"]["FlakeId"];
            /** @description The token for the checkout session */
            token: string;
            /** @description The URL to redirect the customer to complete checkout */
            url: string;
        };
        CreateCouponDto: {
            enabled: boolean;
            code: string;
            note?: string;
            duration: components["schemas"]["CouponDurationEnum"];
            /** Format: int32 */
            duration_in_months?: null | number;
            discount_type: components["schemas"]["CouponDiscountTypeEnum"];
            /** Format: int64 */
            discount_amount: number;
            discount_apply_individually: boolean;
            discount_apply_before_sales: boolean;
            apply_to_products?: components["schemas"]["FlakeId"][];
            apply_to_tags?: components["schemas"]["FlakeId"][];
            usable_by_customer_id?: components["schemas"]["FlakeId"];
            /** Format: int64 */
            minimum_order_value: number;
            redeem_limit_store_enabled: boolean;
            /** Format: int64 */
            redeem_limit_store_amount: number;
            redeem_limit_customer_enabled: boolean;
            /** Format: int64 */
            redeem_limit_customer_amount: number;
            usable_on_one_time_purchase: boolean;
            usable_on_subscription: boolean;
            /** Format: date-time */
            usable_at?: null | string;
            /** Format: date-time */
            expires_at?: null | string;
        };
        CreateDownloadableFileDownloadUrlResponseDto: {
            download_signed_url: string;
        };
        CreateGameServerDto: {
            name: string;
            enabled: boolean;
        };
        CreateGiftCardDto: {
            enabled: boolean;
            code: string;
            note?: string;
            /** Format: int64 */
            balance: number;
            /** Format: date-time */
            usable_at: string;
            /** Format: date-time */
            expires_at?: null | string;
        };
        CreateNavLinkDto: {
            tag_id: components["schemas"]["FlakeId"];
            parent_node_id?: string;
            /** Format: int32 */
            order?: null | number;
        };
        CreateRefundRequestDto: {
            order_line_id?: components["schemas"]["FlakeId"];
            /** @description Determines if the refund should be taken from the connected user's balance.
             *     Only relevant for connected platforms. */
            refund_from_connected_user_balance?: null | boolean;
        };
        CreateSaleDto: {
            enabled: boolean;
            name: string;
            discount_type: components["schemas"]["SaleDiscountType"];
            /** Format: int32 */
            discount_amount: number;
            apply_to_product_ids: components["schemas"]["FlakeId"][];
            apply_to_tag_ids: components["schemas"]["FlakeId"][];
            /** Format: int32 */
            minimum_order_value: number;
            /** Format: date-time */
            begins_at: string;
            /** Format: date-time */
            ends_at?: null | string;
        };
        CreateStorePaymentSettingsDto: {
            show_all_payment_methods_for_subscriptions: boolean;
            store_tax_inclusive_pricing: boolean;
            block_prepaid_cards: components["schemas"]["PrepaidCardsBlockingTypeDto"];
        };
        CreateTrialEligibilityOverrideDto: {
            product_id: components["schemas"]["FlakeId"];
            /** Format: date-time */
            expires_at: string;
            note?: string;
        };
        CreateWebhookDto: {
            url: string;
            subscribed_to: components["schemas"]["WebhookEventType"];
            type: components["schemas"]["WebhookType"];
            discord_description_template?: null | string;
            discord_title?: null | string;
            discord_color?: null | string;
        };
        /** @description Cryptocurrency payment method details */
        CryptoDetailsDto: {
            /**
             * @description The cryptocurrency used
             * @example BTC
             */
            crypto_currency: string;
            /**
             * @description The amount in cryptocurrency
             * @example 0.00150000
             */
            crypto_amount: string;
            /**
             * @description The total amount paid in cryptocurrency
             * @example 0.00150000
             */
            total_paid: string;
            /**
             * Format: int32
             * @description The number of blockchain confirmations
             * @example 6
             */
            confirmations: number;
        };
        CustomVariableDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
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
            options: components["schemas"]["CustomVariableOptionDto"][];
            created_by: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description When this custom variable was created.
             */
            created_at: string;
            updated_by?: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description When this custom variable was last updated.
             *     Null if never updated.
             */
            updated_at?: null | string;
        };
        CustomVariableLineItemDto: {
            id: components["schemas"]["FlakeId"];
            /** @description The identifier used to reference this custom variable (e.g., "color", "size"). */
            identifier: string;
            /** @description The display name of the custom variable shown to users. */
            name: string;
            /** @description A detailed description of what this custom variable represents. */
            description: string;
            /**
             * Format: int64
             * @description The price associated with this custom variable in the smallest currency unit (e.g., cents).
             */
            price: number;
            /** @description The selected value for this custom variable. */
            value: string;
        };
        CustomVariableOptionDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            custom_variable_id: components["schemas"]["FlakeId"];
            /** @description Display name shown to customers for this option. */
            name: string;
            /** @description Internal value used for product command variable replacement, without brackets. */
            value: string;
            /**
             * Format: int64
             * @description Price modification when this option is selected.
             *     Interpretation depends on PriceType (fixed amount or percentage).
             */
            price: number;
            price_type: components["schemas"]["CustomVariableOptionPriceType"];
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
        /**
         * @description Defines how option pricing should be applied to the base product price.
         * @enum {string}
         */
        CustomVariableOptionPriceType: "fixed" | "percentage";
        /** @description Request model for defining custom variable options.
         *     Used within UpsertCustomVariableRequestDto for dropdown-type variables. */
        CustomVariableOptionRequestDto: {
            id?: components["schemas"]["FlakeId"];
            /** @description Display name shown to customers for this option. */
            name: string;
            /** @description The value the command variable will be replaced with. */
            value: string;
            /**
             * Format: int64
             * @description Price modification when this option is selected.
             *     Interpretation depends on PriceType (fixed amount or percentage).
             *     If fixed, the value is in cents, if a percentage, in permille.
             */
            price: number;
            price_type: components["schemas"]["CustomVariableOptionPriceType"];
            /** @description Whether this option is selected by default.
             *     Only one option per custom variable should be marked as default. */
            is_default: boolean;
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
        CustomerTokenResponseDto: {
            /** @description The generated Customer token. */
            token: string;
        };
        DataMigrationTaskDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            /** @description Platform from which data is being migrated (e.g., "tebex"). */
            platform: string;
            /** @description Masked authentication token used for accessing the source platform API. */
            token: string;
            /** @description Error message if the migration encountered any errors, otherwise null. */
            error?: null | string;
            /**
             * Format: date-time
             * @description Timestamp when the migration was initiated.
             */
            started_at: string;
            /**
             * Format: date-time
             * @description Timestamp when the migration failed, or null if it didn't fail.
             */
            failed_at?: null | string;
            /**
             * Format: date-time
             * @description Timestamp when the migration was successfully completed, or null if not completed.
             */
            completed_at?: null | string;
            /**
             * Format: int64
             * @description Total number of entities that need to be migrated, or null if unknown.
             */
            total_entities_to_migrate?: null | number;
            /**
             * Format: int32
             * @description Number of entities that have been successfully migrated.
             */
            total_entities_migrated: number;
            started_by: components["schemas"]["ActorDto"];
        };
        DeliveryItemAssignmentBulkDto: {
            customer_id: components["schemas"]["FlakeId"];
            product_version_id?: components["schemas"]["FlakeId"];
            execute_on_gameserver_id?: components["schemas"]["FlakeId"];
            /**
             * Format: int32
             * @description Quantity of products to assign.
             */
            quantity?: null | number;
            /**
             * Format: date-time
             * @description Override expiry date for the delivery item.
             */
            override_expires_at?: null | string;
            /** @description Skip command execution when assigning the item. */
            skip_commands?: null | boolean;
            /** @description Custom variables for the assignment. */
            custom_variables?: null | {
                [key: string]: string;
            };
        };
        DeliveryItemAssignmentDto: {
            product_id?: components["schemas"]["FlakeId"];
            product_version_id?: components["schemas"]["FlakeId"];
            execute_on_gameserver_id?: components["schemas"]["FlakeId"];
            /**
             * Format: int32
             * @description Quantity of products to assign.
             */
            quantity?: null | number;
            /**
             * Format: date-time
             * @description Override expiry date for the delivery item.
             */
            override_expires_at?: null | string;
            /** @description Skip command execution when assigning the item. */
            skip_commands?: null | boolean;
            /** @description Custom variables for the assignment. */
            custom_variables?: null | {
                [key: string]: string;
            };
        };
        /** @description Represents a delivery item assigned to a customer */
        DeliveryItemDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            customer_id: components["schemas"]["FlakeId"];
            customer: components["schemas"]["CustomerDto"];
            order_customer_id?: components["schemas"]["FlakeId"];
            order_customer?: components["schemas"]["CustomerDto"];
            checkout_id?: components["schemas"]["FlakeId"];
            checkout_line_id?: components["schemas"]["FlakeId"];
            order_id?: components["schemas"]["FlakeId"];
            order_line_id?: components["schemas"]["FlakeId"];
            subscription_id?: components["schemas"]["FlakeId"];
            trial_id?: components["schemas"]["FlakeId"];
            execute_on_gameserver_id?: components["schemas"]["FlakeId"];
            /**
             * Format: int32
             * @description The index of the item when multiple quantities were assigned
             */
            quantity_index?: null | number;
            product: components["schemas"]["DeliveryItemProductDto"];
            state: components["schemas"]["DeliveryItemStateDto"];
            /**
             * Format: date-time
             * @description The date and time when the item was added
             */
            added_at: string;
            added_by?: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description The date and time when the item became active
             */
            active_at?: null | string;
            /** @description Indicates whether the delivery item can expire */
            expirable: boolean;
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
            revoked_by?: components["schemas"]["ActorDto"];
            /** @description The command execution attempts for this delivery item */
            command_attempts: components["schemas"]["CommandAttemptDto"][];
            /** @description Indicates whether command execution should be skipped for this item */
            skip_commands: boolean;
            /** @description Custom variables associated with the delivery item */
            custom_variables: {
                [key: string]: string;
            };
            /** @description Indicates whether the item was given as a gift */
            gift: boolean;
        };
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
        DiscordActionDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            product_id: components["schemas"]["FlakeId"];
            product_version_id: components["schemas"]["FlakeId"];
            discord_server_id: components["schemas"]["FlakeId"];
            execution_stage: components["schemas"]["DiscordActionExecutionStage"];
            revocation_stages: components["schemas"]["DiscordActionRevocationStage"][];
            action_type: components["schemas"]["DiscordActionType"];
            channel_id?: components["schemas"]["FlakeId"];
            role_id?: components["schemas"]["FlakeId"];
            message?: null | string;
        };
        /** @enum {string} */
        DiscordActionExecutionStage: "on_purchase" | "on_expire" | "on_refund" | "on_chargeback";
        /** @enum {string} */
        DiscordActionRevocationStage: "on_expire" | "on_refund" | "on_chargeback";
        /** @enum {string} */
        DiscordActionType: "persist_role" | "send_message" | "ban_user" | "kick_user" | "generate_invite_link";
        DiscordProfileDto: {
            discord_id: components["schemas"]["FlakeId"];
            username: string;
            avatar_hash: string;
        };
        DiscordServerChannelDto: {
            id: string;
            name: string;
            category: string;
        };
        DiscordServerLinkDto: {
            token: string;
            store_id: components["schemas"]["FlakeId"];
            server_id?: components["schemas"]["FlakeId"];
            server_name?: null | string;
            server_icon_url?: null | string;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            linked_at?: null | string;
        };
        DiscordServerRoleDto: {
            id: components["schemas"]["FlakeId"];
            name: string;
        };
        ExecutedWebhookDto: {
            id: components["schemas"]["FlakeId"];
            /** Format: date-time */
            started_at: string;
            /** Format: date-time */
            finished_at?: null | string;
            /** Format: int32 */
            status_code: number;
            response?: null | string;
        };
        FinishTagImageUploadUrlRequestDto: {
            /** @description The ID of the uploaded image returned by the server. */
            image_id: string;
        };
        /**
         * Format: flake-id
         * @example 411486491630370816
         */
        FlakeId: string;
        /** @description Represents a game server in the PayNow system with authentication tokens and linking information. */
        GameServerDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            /** @description The display name of the game server. */
            name: string;
            /** @description Indicates whether the game server is currently enabled. */
            enabled: boolean;
            /** @description The authentication token used by the game server to access the PayNow API. */
            token?: null | string;
            /**
             * Format: date-time
             * @description The date and time when the authentication token was last reset, if applicable.
             */
            token_reset_at?: null | string;
            linked_to: components["schemas"]["GameServerLinkDto"];
            /**
             * Format: date-time
             * @description The date and time when the game server was created in the system.
             */
            created_at: string;
            created_by: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description The date and time when the game server was last updated, if applicable.
             */
            updated_at?: null | string;
            updated_by: components["schemas"]["ActorDto"];
        };
        GameServerLinkDto: {
            ip: string;
            hostname: string;
            platform: string;
            version: string;
            /** Format: date-time */
            saved_at: string;
            /** Format: date-time */
            last_fetched_commands_at?: null | string;
            last_fetched_commands_from_ip?: null | string;
        };
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
        GetTagImageUploadUrlResponseDto: {
            /** @description The ID of the direct image upload URL. */
            id: string;
            /** @description The URL to upload the image to. */
            upload_url: string;
        };
        /** @description Represents a gift card in the PayNow system. */
        GiftCardDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            /** @description Indicates whether the gift card is currently enabled and can be used. */
            enabled: boolean;
            /**
             * @description The unique code that customers use to redeem the gift card.
             * @example GIFT-2024-ABCD1234
             */
            code: string;
            /** @description Optional note or description associated with the gift card. */
            note?: null | string;
            /**
             * Format: int64
             * @description The current balance remaining on the gift card in cents.
             * @example 2500
             */
            balance: number;
            /**
             * Format: int64
             * @description The original balance when the gift card was first created in cents.
             * @example 5000
             */
            starting_balance: number;
            /**
             * Format: date-time
             * @description The date and time when the gift card becomes usable.
             */
            usable_at: string;
            /**
             * Format: date-time
             * @description The date and time when the gift card expires, if applicable.
             */
            expires_at?: null | string;
            /**
             * Format: date-time
             * @description The date and time when the gift card was created.
             */
            created_at?: null | string;
            created_by?: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description The date and time when the gift card was last updated, if applicable.
             */
            updated_at?: null | string;
            updated_by?: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description The date and time when the gift card was canceled, if applicable.
             */
            canceled_at?: null | string;
            canceled_by?: components["schemas"]["ActorDto"];
        };
        /** @description Represents a global command in the system.
         *     Global commands are instructions that can be executed across a store's environment. */
        GlobalCommandDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            stage: components["schemas"]["ProductCommandStage"];
            /** @description The actual command content to be executed. */
            content: string;
            /** @description Indicates whether the command should only be executed when the player is online. */
            online_only: boolean;
            /** @description List of specific game server IDs where this command should be executed, overriding default behavior. */
            override_execute_on_gameserver_ids: components["schemas"]["FlakeId"][];
            execution_rule: components["schemas"]["ProductCommandExecutionRuleDto"];
            /**
             * Format: date-time
             * @description Timestamp when the command was created.
             */
            created_at: string;
            created_by: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description Optional timestamp indicating when the command was last updated.
             *     Null if the command has never been updated.
             */
            updated_at?: null | string;
            updated_by?: components["schemas"]["ActorDto"];
        };
        /** @description iDEAL payment method details */
        IdealDetailsDto: {
            /**
             * @description The bank identifier
             * @example abn_amro
             */
            bank: string;
            /**
             * @description The Bank Identifier Code
             * @example ABNANL2A
             */
            bic: string;
            /**
             * @description The last 4 digits of the IBAN
             * @example 1234
             */
            iban_last4?: null | string;
            /**
             * @description The payer name
             * @example John Doe
             */
            payer_name?: null | string;
        };
        /** @description Optional inline product definition for dynamic products.
         *     Requires special approval, use `product_id` instead. */
        InlineProductCreateDto: {
            /** @description The unique URL-safe identifier (slug) for the product. */
            slug?: null | string;
            /** @description The display name of the product. */
            name?: null | string;
            /** @description The detailed description of the product. */
            description?: null | string;
            /** @description The display label for the product. */
            label?: null | string;
            /**
             * Format: int64
             * @description The price of the product in the lowest denominator (e.g. cents).
             */
            price?: null | number;
            /** @description Indicates whether the customer is prompted to select a game server before purchasing. */
            single_game_server_only?: null | boolean;
            /** @description Indicates whether one-time purchases are allowed. */
            allow_one_time_purchase?: null | boolean;
            /** @description Indicates whether subscription purchases are allowed. */
            allow_subscription?: null | boolean;
            /**
             * Format: int32
             * @description The subscription interval value.
             */
            subscription_interval_value?: null | number;
            subscription_interval_scale?: components["schemas"]["ProductSubscriptionIntervalScale"];
            trial?: components["schemas"]["UpsertProductTrialConfigurationDto"];
            /** @description Indicates whether automatic removal is enabled. */
            remove_after_enabled?: null | boolean;
            /**
             * Format: int32
             * @description The time value for automatic removal.
             */
            remove_after_time_value?: null | number;
            remove_after_time_scale?: components["schemas"]["ProductRemoveAfterIntervalScale"];
            store_stock_limit?: components["schemas"]["ProductStockLimitDto"];
            customer_stock_limit?: components["schemas"]["ProductStockLimitDto"];
            /** @description Indicates whether removed items should be excluded from stock limits. */
            stock_limit_do_not_include_removed?: null | boolean;
            /** @description The tag IDs associated with the product. */
            tags?: null | components["schemas"]["FlakeId"][];
            /** @description The gameserver IDs associated with the product. */
            gameservers?: null | components["schemas"]["FlakeId"][];
            /** @description The commands to be executed at different stages. */
            commands?: null | components["schemas"]["ProductCommandDto"][];
            deliverable_actions?: components["schemas"]["ProductDeliverableActionsDto"];
            /** @description Additional metadata for the product. */
            metadata?: null | {
                [key: string]: string;
            };
            /** @description The payout splits for revenue distribution.
             *     Requires special approval. */
            payout_splits?: null | components["schemas"]["ProductPayoutSplitDto"][];
            tax_code?: components["schemas"]["ProductTaxCode"];
            /** @description Indicates whether concurrent active items are allowed. */
            allow_concurrent_active_items?: null | boolean;
            /** @description Indicates whether the product is hidden. */
            is_hidden?: null | boolean;
            /** @description Indicates whether gifting is disabled. */
            is_gifting_disabled?: null | boolean;
            /**
             * Format: date-time
             * @description The date and time when the product becomes enabled.
             *     Set to `null` to keep enabled.
             */
            enabled_at?: null | string;
            /**
             * Format: date-time
             * @description The date and time until which the product remains enabled.
             *     Set to `null` to keep enabled.
             */
            enabled_until?: null | string;
            /** @description The IDs of products required for purchasing this product. */
            required_product_ids?: null | components["schemas"]["FlakeId"][];
            /** @description Indicates whether all required products are needed. */
            required_product_all?: null | boolean;
            /** @description The IDs of associated custom variables. */
            custom_variable_ids?: null | components["schemas"]["FlakeId"][];
            /** @description Indicates if applying gift cards should be disabled on the product. */
            is_gift_cards_disabled?: null | boolean;
            /** @description Indicates if applying coupons should be disabled on the product. */
            is_coupons_disabled?: null | boolean;
            /** @description Indicates if applying affiliate links should be disabled on the product. */
            is_affiliate_links_disabled?: null | boolean;
        };
        /** @description Klarna payment method details */
        KlarnaDetailsDto: {
            /**
             * @description The country code
             * @example SE
             */
            country?: null | string;
            /**
             * @description The Klarna payment method category
             * @example pay_later
             */
            method_category?: null | string;
        };
        /** @description The last payment decline object. */
        LastPaymentErrorDto: {
            decline_code: components["schemas"]["PaymentDeclineCode"];
            /** @description Human-readable decline reason message. */
            message: string;
        };
        /** @description Link payment method details */
        LinkDetailsDto: {
            /**
             * @description The email associated with the Link account
             * @example john.doe@example.com
             */
            email: string;
        };
        /** @description Represents the configuration settings for a coupon applied to marketing features. */
        MarketingCouponConfigurationDto: {
            duration: components["schemas"]["CouponDurationEnum"];
            /**
             * Format: int32
             * @description Gets or sets the duration of the coupon in months, applicable only for repeating coupons.
             */
            duration_in_months?: null | number;
            discount_type: components["schemas"]["CouponDiscountTypeEnum"];
            /**
             * Format: int64
             * @description Gets or sets the discount amount.
             */
            discount_amount: number;
            /** @description Gets or sets a value indicating whether the discount only applies to specific tags or products. */
            discount_only_required_tags_or_products: boolean;
            /** @description Gets or sets a value indicating whether the discount is applied before any existing sales or discounts. */
            discount_apply_before_sales: boolean;
            /** @description Gets or sets the list of tag IDs required for the discount to apply. */
            required_tag_ids: components["schemas"]["FlakeId"][];
            /** @description Gets or sets the list of product IDs required for the discount to apply. */
            required_product_ids: components["schemas"]["FlakeId"][];
            /**
             * Format: int64
             * @description Gets or sets the minimum order value required for the discount to be applied.
             */
            minimum_order_value: number;
            /** @description Gets or sets a value indicating whether a customer-specific redeem limit is enabled. */
            customer_redeem_limit_enabled: boolean;
            /**
             * Format: int64
             * @description Gets or sets the maximum number of times a single customer can redeem the coupon.
             */
            customer_redeem_limit: number;
            /** @description Gets or sets a value indicating whether the coupon can be used on one-time purchases. */
            usable_on_one_time_purchases: boolean;
            /** @description Gets or sets a value indicating whether the coupon can be used on subscription purchases. */
            usable_on_subscriptions: boolean;
            expires_after?: components["schemas"]["Period"];
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
        NavLinkDto: {
            node_id: string;
            tag_id: components["schemas"]["FlakeId"];
            parent_node_id?: null | string;
            tag_slug: string;
            name: string;
            /** Format: int32 */
            order?: null | number;
        };
        /** @description Represents a customer order */
        OrderDto: {
            id: components["schemas"]["FlakeId"];
            /**
             * @description The PayNow order ID identifier starting with pn-.
             * @example pn-355eevennsow
             */
            pretty_id: string;
            store_id: components["schemas"]["FlakeId"];
            customer_id: components["schemas"]["FlakeId"];
            customer: components["schemas"]["CustomerDto"];
            type: components["schemas"]["OrderType"];
            status: components["schemas"]["OrderStatus"];
            checkout_id?: components["schemas"]["FlakeId"];
            /**
             * @description The checkout token for this order
             * @example c4qqilpphugeqf2gndnkk5ad8fdq
             */
            checkout_token?: null | string;
            subscription_id?: components["schemas"]["FlakeId"];
            /** @description Signifies if the order is a subscription order */
            readonly is_subscription: boolean;
            coupon_id?: components["schemas"]["FlakeId"];
            giftcard_id?: components["schemas"]["FlakeId"];
            affiliate_id?: components["schemas"]["FlakeId"];
            /**
             * @description The billing name for this order
             * @example John Doe
             */
            billing_name: string;
            /**
             * @description The billing email for this order
             * @example john.doe@example.com
             */
            billing_email: string;
            /**
             * @description The billing country for this order
             * @example US
             */
            billing_country: string;
            /**
             * Format: int32
             * @description The billing cycle sequence (current renewal count) if this is a subscription order
             */
            billing_cycle_sequence: number;
            /**
             * @description The IP address (IPv4 or IPv6) of the customer at time of order
             * @example 192.168.1.1
             */
            customer_ip: string;
            /**
             * @description The currency code used for this order
             * @example usd
             */
            currency: string;
            /**
             * Format: int32
             * @description The total discount amount applied to this order in smallest currency unit
             * @example 500
             */
            discount_amount: number;
            /**
             * @description The discount amount formatted as a string
             * @example $5.00
             */
            discount_amount_str: string;
            /**
             * Format: int32
             * @description The subtotal amount for this order in smallest currency unit
             * @example 9995
             */
            subtotal_amount: number;
            /**
             * @description The subtotal amount formatted as a string
             * @example $99.95
             */
            subtotal_amount_str: string;
            /**
             * Format: int32
             * @description The tax amount for this order in smallest currency unit
             * @example 999
             */
            tax_amount: number;
            /**
             * @description The tax amount formatted as a string
             * @example $9.99
             */
            tax_amount_str: string;
            /**
             * Format: int32
             * @description The total amount for this order in smallest currency unit
             * @example 10494
             */
            total_amount: number;
            /**
             * @description The total amount formatted as a string
             * @example $104.94
             */
            total_amount_str: string;
            /**
             * Format: int32
             * @description The amount of gift card value used for this order in smallest currency unit
             * @example 0
             */
            giftcard_usage_amount: number;
            /**
             * @description The gift card usage amount formatted as a string
             * @example $0.00
             */
            giftcard_usage_amount_str: string;
            /**
             * Format: date-time
             * @description The date and time when this order was created
             * @example 2025-04-01T15:30:45Z
             */
            created_at?: null | string;
            /**
             * Format: date-time
             * @description The date and time when this order was completed, if applicable
             * @example 2025-04-01T15:35:22Z
             */
            completed_at?: null | string;
            /** @description The line items in this order */
            lines: components["schemas"]["OrderLineDto"][];
            /** @description A list of all tax jurisdictions that were involved in the taxation of this order. */
            tax_jurisdictions?: null | components["schemas"]["SalesTaxJurisdictionDto"][];
            last_payment_error?: components["schemas"]["LastPaymentErrorDto"];
        };
        /** @description Represents an order line item in a customer's order */
        OrderLineDto: {
            id: components["schemas"]["FlakeId"];
            checkout_line_id: components["schemas"]["FlakeId"];
            product_id: components["schemas"]["FlakeId"];
            product_version_id: components["schemas"]["FlakeId"];
            /**
             * @description The name of the product in this order line
             * @example Premium Game Pass
             */
            product_name: string;
            /**
             * @description The URL of the product image
             * @example https://cdn.example.com/images/premium-game-pass.jpg
             */
            product_image_url?: null | string;
            /** @description The Gift Card ID of that product in this order line */
            created_giftcard_id?: null | string;
            subscription_id?: components["schemas"]["FlakeId"];
            trial_id?: components["schemas"]["FlakeId"];
            /**
             * Format: int32
             * @description The interval value for subscription products
             * @example 1
             */
            subscription_interval_value?: null | number;
            subscription_interval_scale?: components["schemas"]["ProductSubscriptionIntervalScale"];
            /**
             * @description Indicates whether this order line is a gift
             * @example false
             */
            gift: boolean;
            gift_to_customer_id?: components["schemas"]["FlakeId"];
            gift_to_customer?: components["schemas"]["CustomerDto"];
            sale_id?: components["schemas"]["FlakeId"];
            /**
             * Format: int32
             * @description The unit price of the product in the smallest currency unit (e.g., cents)
             * @example 1999
             */
            price: number;
            /**
             * @description The unit price of the product formatted as a string
             * @example $19.99
             */
            price_str: string;
            /**
             * Format: int32
             * @description The quantity of the product in this order line
             * @example 1
             */
            quantity: number;
            /**
             * Format: int32
             * @description The discount amount (from sales, coupons, and affiliate links) applied to this order line
             * @example 0
             */
            discount_amount: number;
            /**
             * @description The discount amount formatted as a string
             * @example $0.00
             */
            discount_amount_str: string;
            /**
             * Format: int32
             * @description The amount of gift card used for this order line
             * @example 0
             */
            giftcard_usage_amount: number;
            /**
             * @description The gift card usage amount formatted as a string
             * @example $0.00
             */
            giftcard_usage_amount_str: string;
            /**
             * Format: int32
             * @description The subtotal amount for this order line
             * @example 1999
             */
            subtotal_amount: number;
            /**
             * @description The subtotal amount formatted as a string
             * @example $19.99
             */
            subtotal_amount_str: string;
            /**
             * Format: int32
             * @description The tax amount for this order line
             * @example 200
             */
            tax_amount: number;
            /**
             * @description The tax amount formatted as a string
             * @example $2.00
             */
            tax_amount_str: string;
            /**
             * Format: int32
             * @description The total amount for this order line
             * @example 2199
             */
            total_amount: number;
            /**
             * @description The total amount formatted as a string
             * @example $21.99
             */
            total_amount_str: string;
            selected_gameserver_id?: components["schemas"]["FlakeId"];
            /**
             * @description Indicates whether tax is included in the base price, or added on top
             * @example false
             */
            tax_inclusive: boolean;
            /** @description The payout splits for this order line */
            payout_splits?: null | components["schemas"]["OrderLinePayoutSplitDto"][];
            /**
             * @description The regional pricing region ID for this order line, null if no regional pricing set
             * @example eu
             */
            pricing_region_id?: null | string;
            /** @description Key-value pair of selected custom variables for this order. */
            custom_variables?: null | {
                [key: string]: components["schemas"]["CustomVariableLineItemDto"];
            };
        };
        /** @description Represents an order line-level payout split. */
        OrderLinePayoutSplitDto: {
            user_id: components["schemas"]["FlakeId"];
            /**
             * Format: int64
             * @description The percentage in basis points.
             */
            percentage?: null | number;
            /**
             * Format: int64
             * @description The platform fee percentage in basis points.
             *     Only used by platforms.
             */
            platform_fee: number;
        };
        /** @enum {string} */
        OrderStatus: "created" | "completed" | "canceled" | "refunded" | "chargeback";
        /**
         * @description Defines the type of items contained in an order
         * @enum {string}
         */
        OrderType: "one_time" | "subscription" | "mixed";
        /** @description Przelewy24 payment method details */
        P24DetailsDto: {
            /**
             * @description The bank identifier
             * @example ing
             */
            bank: string;
            /**
             * @description The payer name
             * @example Jan Kowalski
             */
            payer_name?: null | string;
        };
        /** @description Pay by Bank payment method details */
        PayByBankDetailsDto: {
            /**
             * @description The bank name
             * @example Chase Bank
             */
            bank_name?: null | string;
            /**
             * @description The Bank Identifier Code
             * @example CHASUS33
             */
            bic?: null | string;
            /**
             * @description The country code
             * @example US
             */
            country?: null | string;
            /**
             * @description The payer name
             * @example John Smith
             */
            payer_name?: null | string;
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
        /** @description PayPal payment method details */
        PayPalDetailsDto: {
            /**
             * @description The PayPal payer identifier
             * @example PAYERID123
             */
            payer_id: string;
            /**
             * @description The PayPal account email
             * @example john.doe@example.com
             */
            payer_email: string;
            /**
             * @description The PayPal account holder name
             * @example John Doe
             */
            payer_name: string;
            /**
             * @description The country code of the PayPal account
             * @example US
             */
            country: string;
            /**
             * @description Indicates if this PayPal account is vaulted
             * @example true
             */
            vault: boolean;
            /**
             * @description Indicates if vault approval is pending
             * @example false
             */
            pending_vault_approval?: null | boolean;
            /**
             * @description Indicates if this is a standalone setup
             * @example false
             */
            standalone_setup?: null | boolean;
        };
        /**
         * @description Represents chargeback status of a payment
         * @enum {string}
         */
        PaymentChargebackStatusDto: "none" | "pending" | "won" | "lost";
        /**
         * @description A payment decline reason code.
         * @enum {string}
         */
        PaymentDeclineCode: "unknown" | "generic_decline" | "call_issuer" | "authentication_required" | "currency_not_supported" | "duplicate_transaction" | "expired_card" | "fraudulent" | "incorrect_number" | "incorrect_cvc" | "incorrect_pin" | "incorrect_zip" | "insufficient_funds" | "invalid_account" | "invalid_amount" | "invalid_expiry_month" | "invalid_expiry_year" | "issuer_not_available" | "lost_card" | "merchant_blacklist" | "new_account_information_available" | "no_action_taken" | "pickup_card" | "pin_try_exceeded" | "restricted_card" | "stolen_card" | "testmode_decline" | "try_again_later" | "security_violation" | "card_velocity_exceeded" | "do_not_honor" | "processing_error" | "card_not_supported" | "transaction_not_allowed" | "authorization_revoked" | "store_blocked";
        /** @description Represents a payment transaction */
        PaymentDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            order_id: components["schemas"]["FlakeId"];
            customer_id: components["schemas"]["FlakeId"];
            customer: components["schemas"]["CustomerDto"];
            /** @description The list of refunds associated with this payment */
            refunds?: null | components["schemas"]["RefundDto"][];
            /**
             * @description The payment gateway provider
             * @example stripe
             */
            gateway: string;
            /** @description The gateway entity identifier */
            gateway_entity_identifier: string;
            /** @description The gateway payment identifier */
            gateway_id: string;
            method: components["schemas"]["PaymentMethodDto"];
            method_id?: components["schemas"]["FlakeId"];
            status: components["schemas"]["PaymentStatusDto"];
            /**
             * @description The currency code used for this payment in the store's currency
             * @example usd
             */
            currency: string;
            /**
             * Format: int32
             * @description The total payment amount in smallest currency unit
             * @example 10000
             */
            amount: number;
            /**
             * Format: int32
             * @description The gateway fee amount in smallest currency unit
             * @example 320
             */
            gateway_fee_amount: number;
            /**
             * Format: int32
             * @description The tax amount in smallest currency unit
             * @example 850
             */
            tax_amount: number;
            /**
             * Format: int32
             * @description The platform fee amount in smallest currency unit
             * @example 500
             */
            platform_fee_amount: number;
            /**
             * Format: int32
             * @description The net amount going to the store in smallest currency unit
             * @example 8330
             */
            store_net_amount: number;
            /**
             * @description The currency code used for presentment to the customer
             * @example eur
             */
            presentment_currency: string;
            /**
             * Format: int32
             * @description The amount presented to the customer in smallest currency unit
             * @example 9500
             */
            presentment_amount: number;
            /**
             * Format: double
             * @description The foreign exchange rate used for currency conversion
             * @example 1.085
             */
            fx_rate?: null | number;
            /**
             * Format: int32
             * @description The platform fee rate applied to this payment (in basis points)
             * @example 500
             */
            platform_fee_rate: number;
            chargeback_status: components["schemas"]["PaymentChargebackStatusDto"];
            /**
             * Format: date-time
             * @description The date and time when the chargeback status was last updated
             */
            chargeback_status_updated_at?: null | string;
            /** @description The payout split rules for multi-party payments */
            payout_split_rules?: null | components["schemas"]["PaymentPayoutSplitRuleDto"][];
            /** @description The payout split results for multi-party payments */
            payout_split_results?: null | components["schemas"]["PaymentPayoutSplitResultDto"][];
            /**
             * Format: date-time
             * @description The date and time when this payment was created
             * @example 2025-04-01T15:30:45Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @description The date and time when this payment entered pending status
             * @example 2025-04-01T15:30:46Z
             */
            pending_at?: null | string;
            /**
             * Format: date-time
             * @description The date and time when this payment was completed
             * @example 2025-04-01T15:31:12Z
             */
            completed_at?: null | string;
            /**
             * Format: date-time
             * @description The date and time when this payment was canceled
             */
            canceled_at?: null | string;
            /**
             * Format: date-time
             * @description The date and time when this payment failed
             */
            failed_at?: null | string;
            /**
             * Format: date-time
             * @description The date and time when this payment was last refunded
             */
            refunded_at?: null | string;
            /**
             * Format: date-time
             * @description The date and time when a chargeback was initiated on this payment
             */
            chargeback_at?: null | string;
            last_payment_error?: components["schemas"]["LastPaymentErrorDto"];
        };
        /** @enum {string} */
        PaymentGatewayDto: "invalid" | "stripe" | "paypal" | "forumpay" | "steamskins" | "nuvei" | "pagseguro" | "tazapay";
        /** @description Contains detailed information about a payment method.
         *     DISCLAIMER: These fields are not guaranteed to be backwards compatible and may change or be removed without notice. */
        PaymentMethodDetailsDto: {
            card?: components["schemas"]["CardDetailsDto"];
            cashapp?: components["schemas"]["CashAppDetailsDto"];
            paypal?: components["schemas"]["PayPalDetailsDto"];
            link?: components["schemas"]["LinkDetailsDto"];
            crypto?: components["schemas"]["CryptoDetailsDto"];
            steamskins?: components["schemas"]["SteamSkinsDetailsDto"];
            ideal?: components["schemas"]["IdealDetailsDto"];
            p24?: components["schemas"]["P24DetailsDto"];
            bancontact?: components["schemas"]["BancontactDetailsDto"];
            klarna?: components["schemas"]["KlarnaDetailsDto"];
            alipay?: components["schemas"]["AlipayDetailsDto"];
            pay_by_bank?: components["schemas"]["PayByBankDetailsDto"];
            pix?: components["schemas"]["PixDetailsDto"];
        };
        /** @description Represents a stored payment method */
        PaymentMethodDto: {
            id: components["schemas"]["FlakeId"];
            customer_id: components["schemas"]["FlakeId"];
            /** @description The payment gateway provider */
            gateway: string;
            /** @description The gateway's identifier for this payment method */
            gateway_id: string;
            /** @description The gateway's customer identifier */
            gateway_customer_id: string;
            /**
             * @description The gateway-specific type identifier
             * @example card
             */
            gateway_type: string;
            /**
             * @description The payment method type
             * @example card
             */
            method_type: string;
            method_details: components["schemas"]["PaymentMethodDetailsDto"];
            /**
             * Format: date-time
             * @description The date and time when this payment method was created
             * @example 2025-03-15T10:20:30Z
             */
            created_at: string;
            /** @description The gateway entity identifier */
            gateway_entity_identifier: string;
            /**
             * Format: date-time
             * @description The date and time when this payment method was last updated
             * @example 2025-03-20T14:30:00Z
             */
            updated_at?: null | string;
        };
        PaymentMethodTypeCountryCurrencyMappingDto: {
            country: string;
            currencies: string[];
        };
        PaymentMethodTypeDto: {
            id: string;
            name: string;
            logo_url?: null | string;
            checkout_logo_url_light?: null | string;
            checkout_logo_url_dark?: null | string;
            category: string;
            confirmation: string;
            enabled: boolean;
            refunds_supported: boolean;
            subscriptions_supported: boolean;
            kyc_required: boolean;
            supported_currencies: string[];
            supported_settlement_currencies: string[];
            supported_countries: string[];
            gateways: components["schemas"]["PaymentGatewayDto"][];
            fee_overrides: components["schemas"]["PaymentMethodTypeFeeOverrideDto"][];
            country_currency_mapping: components["schemas"]["PaymentMethodTypeCountryCurrencyMappingDto"][];
            /** Format: int64 */
            revenue_usage: number;
            /** Format: int64 */
            monthly_revenue_limit?: null | number;
            /** Format: int64 */
            default_monthly_revenue_limit?: null | number;
            settlement_time?: null | string;
        };
        PaymentMethodTypeFeeOverrideDto: {
            /** Format: int32 */
            fee_percentage: number;
            /** Format: int32 */
            fee_cents: number;
            countries: string[];
        };
        /** @description Represents payout split results for multi-party payments */
        PaymentPayoutSplitResultDto: {
            user_id: components["schemas"]["FlakeId"];
            /**
             * Format: int32
             * @description The gross amount before fees in smallest currency unit
             * @example 10000
             */
            gross_amount: number;
            /**
             * Format: int32
             * @description The tax amount in smallest currency unit
             * @example 850
             */
            tax_amount: number;
            /**
             * Format: int32
             * @description The gateway fee amount in smallest currency unit
             * @example 320
             */
            gateway_fee_amount: number;
            /**
             * Format: int32
             * @description The platform fee amount in smallest currency unit
             * @example 500
             */
            platform_fee_amount: number;
            /**
             * Format: int32
             * @description The connected platform fee amount in smallest currency unit
             * @example 100
             */
            connected_platform_fee_amount: number;
            /**
             * Format: int32
             * @description The net amount after all fees in smallest currency unit
             * @example 8230
             */
            net_amount: number;
            line_id: components["schemas"]["FlakeId"];
        };
        /** @description Represents payout split rules for a payment line */
        PaymentPayoutSplitRuleDto: {
            line_id: components["schemas"]["FlakeId"];
            /**
             * Format: int32
             * @description The total amount of the line item in smallest currency unit
             * @example 10000
             */
            line_amount_total: number;
            /**
             * Format: int32
             * @description The tax amount of the line item in smallest currency unit
             * @example 850
             */
            line_amount_tax: number;
            /** @description The list of splits defining how the payout should be divided */
            splits: components["schemas"]["PaymentPayoutSplitRuleSplitDto"][];
        };
        /** @description Represents a single split configuration within a payout split rule */
        PaymentPayoutSplitRuleSplitDto: {
            user_id: components["schemas"]["FlakeId"];
            /**
             * Format: int32
             * @description The percentage of the line amount this user receives (in basis points, e.g., 5000 = 50%)
             * @example 5000
             */
            percentage?: null | number;
            /**
             * Format: int32
             * @description The platform fee percentage applied to this split (in basis points)
             * @example 500
             */
            platform_fee_percentage: number;
        };
        /**
         * @description Represents payment status
         * @enum {string}
         */
        PaymentStatusDto: "unknown" | "created" | "pending" | "completed" | "canceled" | "failed" | "refunded" | "chargeback" | "refund_failed" | "refund_processing";
        /**
         * Format: period
         * @description ISO 8601 duration format
         * @example P1Y2M3DT4H5M6S
         */
        Period: string;
        /** @description Pix payment method details */
        PixDetailsDto: {
            /**
             * @description The bank name
             * @example Banco do Brasil
             */
            bank_name?: null | string;
            /**
             * @description The bank account number
             * @example 12345-6
             */
            bank_account_number?: null | string;
            /**
             * @description The payer name
             * @example João Silva
             */
            payer_name?: null | string;
        };
        /**
         * @description Defines when prepaid cards should be blocked from use.
         * @enum {string}
         */
        PrepaidCardsBlockingTypeDto: "unspecified" | "none" | "trials" | "all_recurring";
        ProductCommandDto: {
            stage: components["schemas"]["ProductCommandStage"];
            /** @description Content of the command. */
            content: string;
            /** @description Value indicating whether the command should only execute when the player is online. */
            online_only: boolean;
            /** @description Value indicating on which game servers should the command be executed.
             *     If left empty or null, then the default behavior applies
             *     (executing on all game servers or on the selected game server is selection is enabled) */
            override_execute_on_gameserver_ids?: null | components["schemas"]["FlakeId"][];
        };
        /** @enum {string} */
        ProductCommandExecutionRuleDto: "invalid" | "once_per_item" | "once_per_order";
        /**
         * @description Defines the stages at which product commands can be executed.
         * @enum {string}
         */
        ProductCommandStage: "invalid" | "on_purchase" | "on_expire" | "on_refund" | "on_renew" | "on_chargeback" | "on_trial_start" | "on_trial_expire";
        ProductDeliverableActionsDto: {
            /** @description Value indicating whether to grant a giftcard with the product with the subtotal amount. */
            grant_giftcard: boolean;
        };
        ProductDownloadableFileDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            product_id: components["schemas"]["FlakeId"];
            is_uploaded: boolean;
            file_name?: null | string;
            file_content_type?: null | string;
            /** Format: int64 */
            file_size?: null | number;
            file_hash?: null | string;
            description?: null | string;
            /** Format: date-time */
            created_at: string;
            created_by: components["schemas"]["ActorDto"];
            /** Format: date-time */
            updated_at?: null | string;
            updated_by?: components["schemas"]["ActorDto"];
        };
        ProductDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            version_id: components["schemas"]["FlakeId"];
            /** @description The URL to the product image. */
            image_url?: null | string;
            /** @description The unique slug for the product. */
            slug: string;
            /** @description The display name of the product. */
            name: string;
            /** @description The detailed description of the product. */
            description: string;
            /** @description The display label for the product. */
            label?: null | string;
            /**
             * Format: int32
             * @description The sort order for displaying the product.
             */
            sort_order: number;
            /**
             * Format: int64
             * @description The price of the product, in the lowest denominator (e.g. cents).
             */
            price: number;
            /** @description Indicates whether the product is limited to a single game server. */
            single_game_server_only: boolean;
            /** @description Indicates whether one-time purchases are allowed. */
            allow_one_time_purchase: boolean;
            /** @description Indicates whether subscription purchases are allowed. */
            allow_subscription: boolean;
            /**
             * Format: int32
             * @description The subscription interval value.
             */
            subscription_interval_value: number;
            subscription_interval_scale: components["schemas"]["ProductSubscriptionIntervalScale"];
            trial: components["schemas"]["ProductTrialConfigurationDto"];
            /** @description Indicates whether automatic removal is enabled. */
            remove_after_enabled: boolean;
            /**
             * Format: int32
             * @description The time value for automatic removal.
             */
            remove_after_time_value: number;
            remove_after_time_scale: components["schemas"]["ProductRemoveAfterIntervalScale"];
            stock_available: components["schemas"]["ProductStockAvailableDto"];
            store_stock_limit: components["schemas"]["ProductStockLimitDto"];
            customer_stock_limit: components["schemas"]["ProductStockLimitDto"];
            /** @description Indicates whether removed items should be excluded from stock limits. */
            stock_limit_do_not_include_removed?: null | boolean;
            /** @description The tags associated with the product. */
            tags: components["schemas"]["ProductTagDto"][];
            /** @description The game servers associated with the product. */
            gameservers: components["schemas"]["ProductGameServerDto"][];
            /** @description The commands to be executed at different stages. */
            commands: components["schemas"]["ProductCommandDto"][];
            created_by?: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description The date and time when the product was created.
             */
            created_at?: null | string;
            updated_by?: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description The date and time when the product was last updated.
             */
            updated_at?: null | string;
            deliverable_actions?: components["schemas"]["ProductDeliverableActionsDto"];
            /** @description Additional metadata for the product. */
            metadata?: null | {
                [key: string]: string;
            };
            /** @description The payout splits for revenue distribution. */
            payout_splits?: null | components["schemas"]["ProductPayoutSplitDto"][];
            tax_code?: components["schemas"]["ProductTaxCode"];
            /** @description Indicates whether concurrent active items are allowed. */
            allow_concurrent_active_items?: null | boolean;
            /** @description Indicates whether the product is hidden. */
            is_hidden?: null | boolean;
            /** @description Indicates whether gifting is disabled. */
            is_gifting_disabled?: null | boolean;
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
            /** @description The IDs of products required for purchasing this product. */
            required_product_ids?: null | components["schemas"]["FlakeId"][];
            /** @description Indicates whether all required products are needed. */
            required_product_all?: null | boolean;
            /** @description The IDs of associated custom variables. */
            custom_variable_ids?: null | components["schemas"]["FlakeId"][];
            /** @description Indicates if applying gift cards should be disabled on the product. */
            is_gift_cards_disabled?: null | boolean;
            /** @description Indicates if applying coupons should be disabled on the product. */
            is_coupons_disabled?: null | boolean;
            /** @description Indicates if applying affiliate links should be disabled on the product. */
            is_affiliate_links_disabled?: null | boolean;
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
        ProductPayoutSplitDto: {
            user_id: components["schemas"]["FlakeId"];
            /**
             * Format: int64
             * @description The percentage of the payment allocated to the user, in basis points (500 = 5%).
             *     The last payout split must have this field set to `null` to receive the remaining portion.
             */
            percentage?: null | number;
            /**
             * Format: int64
             * @description The platform fee percentage your platform receives, in basis points (500 = 5%).
             */
            platform_fee: number;
        };
        ProductPricingRegionDto: {
            id: string;
            group_id: string;
            local_currency: string;
            /** Format: double */
            local_currency_fx_rate: number;
            /** Format: double */
            blended_vat_rate: number;
            name: string;
            country_codes: string[];
            enabled: boolean;
            /** Format: int64 */
            price?: null | number;
            /** Format: int64 */
            default_price_multiplier?: null | number;
            currency?: null | string;
            tax_inclusive?: null | boolean;
            /** Format: date-time */
            updated_at?: null | string;
        };
        ProductPricingRegionGroupDto: {
            id: string;
            name: string;
            description: string;
            /** Format: int64 */
            recommended_base_price_multiplier: number;
        };
        ProductPricingRegionOverrideDto: {
            /** Format: int64 */
            price?: null | number;
            enabled?: null | boolean;
            currency?: null | string;
            tax_inclusive?: null | boolean;
        };
        /** @enum {string} */
        ProductRemoveAfterIntervalScale: "invalid" | "day" | "week" | "month";
        ProductStockAvailableDto: {
            /**
             * Format: int32
             * @description Indicates how many stock is left store-wide.
             */
            store_available: number;
            /** Format: int32 */
            customer_available: number;
        };
        ProductStockLimitDto: {
            /** @description Indicates whether stock limit is enabled. */
            enabled: boolean;
            /**
             * Format: int32
             * @description The quantity limit.
             */
            quantity?: null | number;
            /**
             * Format: int32
             * @description The time value for stock limit period.
             */
            time_value?: null | number;
            time_scale: components["schemas"]["ProductStockTimeScale"];
            /** @description Indicates if trials should be included in the active stock limit calculation. */
            include_trials: boolean;
        };
        /** @enum {string} */
        ProductStockTimeScale: "invalid" | "day" | "week" | "month" | "year";
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
        /**
         * @description Determines the category of the product for taxation purposes.
         *     Contact support for help with setting the correct tax code.
         * @enum {string}
         */
        ProductTaxCode: "unknown" | "digital_goods_subscription" | "digital_goods_permanent" | "saas" | "downloaded_software" | "digital_goods_subscription_gaming" | "digital_goods_permanent_gaming";
        /** @description Represents the configuration for trials of a product */
        ProductTrialConfigurationDto: {
            /** @description Indicates if trials should be enabled for the product. */
            enabled: boolean;
            /**
             * Format: int32
             * @description The trial period value.
             */
            period_value: number;
            period_scale: components["schemas"]["ProductSubscriptionIntervalScale"];
            /** @description Indicates if the trial should be revoked immediately when canceled or at the end of the trial. */
            revoke_immediately_when_canceled: boolean;
            /** @description Restricts trials to customers who have no orders within the lookback period.
             *     When enabled, customers with recent orders will be ineligible for trials. */
            new_customers_only: boolean;
            /**
             * Format: int32
             * @description The lookback period value for determining if a customer is "new".
             *     Only used when new_customers_only is enabled.
             */
            new_customer_order_lookback_value: number;
            new_customer_order_lookback_scale: components["schemas"]["ProductSubscriptionIntervalScale"];
            /** @description Allows customers to trial again after a cooldown period following their previous trial.
             *     When disabled, customers can only trial once and never become eligible again. */
            allow_repeat_trials: boolean;
            /**
             * Format: int32
             * @description The cooldown period value before a customer becomes eligible for another trial.
             *     Only used when allow_repeat_trial is enabled.
             */
            repeat_trial_cooldown_value: number;
            repeat_trial_cooldown_scale: components["schemas"]["ProductSubscriptionIntervalScale"];
        };
        /** @description Represents a command associated with the store-level purchase follow uo configuration. */
        PurchaseFollowUpStoreConfigurationCommandDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            /** @description The command to execute. */
            command: string;
            /** @description Indicates if the command should be executed if the player is online. */
            online_only: boolean;
        };
        /** @description Represents the store-level configuration for abandoned checkout settings. */
        PurchaseFollowUpStoreConfigurationDto: {
            store_id: components["schemas"]["FlakeId"];
            /** @description A value indicating whether the abandoned checkout feature is enabled for the store. */
            enabled: boolean;
            /** @description A value indicating whether the abandoned checkout configuration for the store is invalid. */
            invalid: boolean;
            trigger_after: components["schemas"]["Period"];
            /**
             * Format: int64
             * @description The minimum order value required to trigger an abandoned checkout email.
             */
            minimum_order_value: number;
            /**
             * Format: int64
             * @description The optional maximum order value beyond which an abandoned checkout email will not be sent.
             */
            maximum_order_value?: null | number;
            /**
             * Format: int32
             * @description The optional maximum coupons limit per customer beyond which an abandoned checkout email will not be sent.
             */
            max_coupons_per_customer_amount?: null | number;
            max_coupons_per_customer_period?: components["schemas"]["Period"];
            /**
             * Format: int32
             * @description The optional maximum coupons limit store wide beyond which an abandoned checkout email will not be sent.
             */
            max_coupons_global_amount?: null | number;
            max_coupons_global_period?: components["schemas"]["Period"];
            coupon_configuration: components["schemas"]["MarketingCouponConfigurationDto"];
            /** @description The commands you want to execute when the email is sent. */
            commands: components["schemas"]["PurchaseFollowUpStoreConfigurationCommandDto"][];
            updated_by: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description The date and time when the configuration was last updated.
             */
            updated_at: string;
        };
        /** @description Represents a command associated with the store-level purchase follow uo configuration. */
        PurchaseFollowUpStoreConfigurationUpdateCommandDto: {
            /** @description The command to execute. */
            command: string;
            /** @description Indicates if the command should be executed if the player is online. */
            online_only: boolean;
        };
        /** @description Used for updating the store-level configuration for abandoned checkout settings. */
        PurchaseFollowUpStoreConfigurationUpdateDto: {
            /** @description A value indicating whether the abandoned checkout feature is enabled for the store. */
            enabled: boolean;
            trigger_after: components["schemas"]["Period"];
            /**
             * Format: int64
             * @description The minimum order value required to trigger an abandoned checkout email.
             */
            minimum_order_value: number;
            /**
             * Format: int64
             * @description The optional maximum order value beyond which an abandoned checkout email will not be sent.
             */
            maximum_order_value?: null | number;
            /**
             * Format: int32
             * @description The optional maximum coupons limit per customer beyond which an abandoned checkout email will not be sent.
             */
            max_coupons_per_customer_amount?: null | number;
            max_coupons_per_customer_period?: components["schemas"]["Period"];
            /**
             * Format: int32
             * @description The optional maximum coupons limit store wide beyond which an abandoned checkout email will not be sent.
             */
            max_coupons_global_amount?: null | number;
            max_coupons_global_period?: components["schemas"]["Period"];
            commands: components["schemas"]["PurchaseFollowUpStoreConfigurationUpdateCommandDto"][];
            coupon_configuration: components["schemas"]["MarketingCouponConfigurationDto"];
        };
        QueuedDiscordActionDto: {
            /** Format: int64 */
            id: number;
            execution_stage: components["schemas"]["DiscordActionExecutionStage"];
            status: components["schemas"]["QueuedDiscordActionStatus"];
            store_id: components["schemas"]["FlakeId"];
            order_id?: components["schemas"]["FlakeId"];
            delivery_item_id: components["schemas"]["FlakeId"];
            checkout_id?: components["schemas"]["FlakeId"];
            checkout_line_id?: components["schemas"]["FlakeId"];
            product_id: components["schemas"]["FlakeId"];
            product_version_id: components["schemas"]["FlakeId"];
            discord_server_id: components["schemas"]["FlakeId"];
            action_type: components["schemas"]["DiscordActionType"];
            discord_user_id?: components["schemas"]["FlakeId"];
            channel_id?: components["schemas"]["FlakeId"];
            role_id?: components["schemas"]["FlakeId"];
            message?: null | string;
            revocation_stages: components["schemas"]["DiscordActionRevocationStage"][];
            /** Format: date-time */
            enqueued_at: string;
            /** Format: date-time */
            finalised_at?: null | string;
            executions: components["schemas"]["QueuedDiscordActionExecutionDto"][];
        };
        QueuedDiscordActionExecutionDto: {
            /** Format: int64 */
            id: number;
            /** Format: int64 */
            queue_id: number;
            /** Format: date-time */
            executed_at: string;
            execution_status: components["schemas"]["QueuedDiscordActionExecutionStatus"];
            message?: null | string;
            trace_id?: null | string;
        };
        /** @enum {string} */
        QueuedDiscordActionExecutionStatus: "success" | "failure";
        /** @enum {string} */
        QueuedDiscordActionStatus: "active" | "complete" | "errored" | "canceled";
        QueuedWebhookDto: {
            id: components["schemas"]["FlakeId"];
            webhook_id: components["schemas"]["FlakeId"];
            /** Format: date-time */
            created_at: string;
            state: components["schemas"]["WebhookState"];
            /** Format: date-time */
            next_retry?: null | string;
            event: components["schemas"]["WebhookEventType"];
            payload: unknown;
            executions: components["schemas"]["ExecutedWebhookDto"][];
        };
        RefundDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            payment_id: components["schemas"]["FlakeId"];
            customer_id: components["schemas"]["FlakeId"];
            order_line_id?: components["schemas"]["FlakeId"];
            status: components["schemas"]["RefundStatus"];
            /** @description Reason for failure if the refund has failed */
            failure_reason?: null | string;
            /** @description Three-letter currency code of the refund */
            currency: string;
            /**
             * Format: int64
             * @description Amount of the refund in smallest currency unit (e.g., cents)
             */
            amount: number;
            /** @description String representation of the refund amount, formatted for display */
            amount_str: string;
            /**
             * Format: int64
             * @description Amount of payment processor fees in smallest currency unit
             */
            gateway_fee_amount: number;
            /** @description String representation of gateway fee amount, formatted for display */
            gateway_fee_amount_str: string;
            /**
             * Format: int64
             * @description Amount of tax being refunded in smallest currency unit
             */
            tax_amount: number;
            /** @description String representation of tax amount, formatted for display */
            tax_amount_str: string;
            /**
             * Format: int64
             * @description Amount of platform fees in smallest currency unit
             */
            platform_fee_amount: number;
            /** @description String representation of platform fee amount, formatted for display */
            platform_fee_amount_str: string;
            /**
             * Format: int64
             * @description Net amount for the store after fees in smallest currency unit
             */
            store_net_amount: number;
            /** @description String representation of store net amount, formatted for display */
            store_net_amount_str: string;
            /**
             * Format: int64
             * @description Amount of the refund to be paid by the store in smallest currency unit
             */
            store_refund_amount: number;
            /** @description String representation of store refund amount, formatted for display */
            store_refund_amount_str: string;
            /** @description Optional currency code used for presentment to the customer if different from the base currency */
            presentment_currency?: null | string;
            /**
             * Format: int64
             * @description Optional amount in presentment currency in smallest currency unit
             */
            presentment_amount?: null | number;
            /** @description Exchange rate used while refunding. Only present for payments made in non-settlement currency. */
            fx_rate?: null | string;
            /** @description Indicates whether the refund should be taken from the connected user's balance.
             *     Only relevant for platforms. */
            refund_from_connected_user_balance: boolean;
            /**
             * Format: date-time
             * @description Date and time when the refund was created
             */
            created_at: string;
            /**
             * Format: date-time
             * @description Optional date and time when the refund was approved
             */
            approved_at?: null | string;
            /**
             * Format: date-time
             * @description Optional date and time when the refund entered pending status
             */
            pending_at?: null | string;
            /**
             * Format: date-time
             * @description Optional date and time when the refund was completed
             */
            completed_at?: null | string;
            /**
             * Format: date-time
             * @description Optional date and time when the refund was canceled
             */
            canceled_at?: null | string;
            /**
             * Format: date-time
             * @description Optional date and time when the refund failed
             */
            failed_at?: null | string;
        };
        /**
         * @description Represents the current status of a refund in the system
         * @enum {string}
         */
        RefundStatus: "created" | "approved" | "processing" | "completed" | "canceled" | "failed";
        ResendCommandsForGameServerRequestDto: {
            /** Format: date-time */
            starts_at?: null | string;
            /** Format: date-time */
            ends_at?: null | string;
            inventory_item_id?: components["schemas"]["FlakeId"];
            customer_id?: components["schemas"]["FlakeId"];
            order_id?: components["schemas"]["FlakeId"];
            product_id?: components["schemas"]["FlakeId"];
            subscription_id?: components["schemas"]["FlakeId"];
        };
        ResendCommandsForGameServerResponseDto: {
            /** Format: int32 */
            enqueued_commands_count: number;
        };
        ResendWebhookDto: {
            webhook_id: components["schemas"]["FlakeId"];
        };
        /** @enum {string} */
        SaleDiscountType: "percent" | "amount";
        /** @description Represents a detailed view of a Sale, including configuration and audit information. */
        SaleDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            /** @description Indicates whether the sale is enabled. */
            enabled: boolean;
            /** @description The name of the sale. */
            name: string;
            discount_type: components["schemas"]["SaleDiscountType"];
            /**
             * Format: int32
             * @description The discount value. For percent discounts, this represents the percentage
             *     multiplied by 10 (e.g., 250 = 25%). For amount discounts, this represents
             *     the value in the smallest currency unit (e.g., cents).
             */
            discount_amount: number;
            /** @description A list of product IDs the sale applies to. */
            apply_to_product_ids: components["schemas"]["FlakeId"][];
            /** @description A list of tag IDs the sale applies to. */
            apply_to_tag_ids: components["schemas"]["FlakeId"][];
            /**
             * Format: int32
             * @description The minimum order value required to apply the sale, in the smallest currency unit (e.g., cents).
             */
            minimum_order_value: number;
            /**
             * Format: date-time
             * @description The date and time when the sale begins.
             */
            begins_at: string;
            /**
             * Format: date-time
             * @description The date and time when the sale ends.
             */
            ends_at?: null | string;
            created_by: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description The date and time when the sale was created.
             */
            created_at: string;
            updated_by?: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description The date and time when the sale was last updated.
             */
            updated_at?: null | string;
        };
        /** @description Object representing a sales tax jurisdiction and its associated taxes. */
        SalesTaxJurisdictionDto: {
            /**
             * @description The name of the tax jurisdiction.
             * @example EU OSS
             */
            name: string;
            /** @description List of taxes applied within this jurisdiction. */
            taxes: components["schemas"]["SalesTaxJurisdictionTaxDto"][];
            /** @description Explanation for why taxes are not applied, if applicable.
             *     This property is null when taxes are applied. */
            not_taxed_reason?: null | string;
        };
        /** @description Object representing a specific tax within a sales tax jurisdiction. */
        SalesTaxJurisdictionTaxDto: {
            /** @description The name of the tax. */
            tax_name: string;
            /** @description The amount subject to taxation, formatted as a string. */
            taxable_amount: string;
            /** @description The calculated tax amount, formatted as a string. */
            tax_amount: string;
            /** @description The rate at which the tax is applied, formatted as a string. */
            tax_rate: string;
        };
        SetDiscordActionDto: {
            discord_server_id: components["schemas"]["FlakeId"];
            action_type: components["schemas"]["DiscordActionType"];
            execution_stage: components["schemas"]["DiscordActionExecutionStage"];
            revocation_stages?: null | components["schemas"]["DiscordActionRevocationStage"][];
            channel_id?: components["schemas"]["FlakeId"];
            role_id?: components["schemas"]["FlakeId"];
            message?: null | string;
        };
        StartDataMigrationFromTebexRequestDto: {
            /** @description The public-facing Headless API token. */
            headless_token: string;
            /** @description An API token associated to a Tebex game server. */
            plugin_token: string;
        };
        StartDownloadableFileUploadRequestDto: {
            file_name: string;
            file_content_type: string;
            description?: null | string;
        };
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
        /** @description Steam Skins payment method details */
        SteamSkinsDetailsDto: {
            /** @description The list of Steam inventory items used for payment */
            items: components["schemas"]["SteamSkinsInventoryItemDetailsDto"][];
        };
        SteamSkinsInventoryItemDetailsDto: {
            /** @description The unique identifier of the Steam item */
            id: string;
            /**
             * Format: int32
             * @description The Steam app ID
             * @example 730
             */
            app_id: number;
            /**
             * @description The name of the item
             * @example AK-47 | Redline
             */
            name: string;
            /**
             * Format: int32
             * @description The price of the item in the smallest currency unit
             * @example 2500
             */
            price: number;
        };
        /** @description Store payment configuration settings. */
        StorePaymentSettingsDto: {
            /** @description Whether to show all available payment methods for subscription purchases. */
            show_all_payment_methods_for_subscriptions: boolean;
            /** @description Whether store pricing is tax-inclusive. */
            store_tax_inclusive_pricing: boolean;
            block_prepaid_cards: components["schemas"]["PrepaidCardsBlockingTypeDto"];
            /**
             * Format: int64
             * @description Maximum checkout amount allowed in cents.
             */
            max_checkout_amount: number;
            /** @description Whether to force 3D Secure authentication for all transactions. */
            force_3d_secure: boolean;
            chargeback_coverage: components["schemas"]["ChargebackCoverageTypeDto"];
            /**
             * Format: int64
             * @description Maximum per-transaction chargeback coverage amount in cents.
             */
            chargeback_coverage_max_amount?: null | number;
        };
        StorePricingRegionOverrideDto: {
            /** Format: int64 */
            default_price_multiplier?: null | number;
            enabled?: null | boolean;
            currency?: null | string;
            tax_inclusive?: null | boolean;
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
        /** @description Data transfer object representing a store subscription. */
        StoreSubscriptionDto: {
            id: components["schemas"]["FlakeId"];
            /** @description Human-readable identifier for the subscription. */
            pretty_id: string;
            store_id: components["schemas"]["FlakeId"];
            customer: components["schemas"]["CustomerDto"];
            payment_method_id?: components["schemas"]["FlakeId"];
            payment_method?: components["schemas"]["PaymentMethodDto"];
            status: components["schemas"]["SubscriptionStatus"];
            coupon_id?: components["schemas"]["FlakeId"];
            /**
             * Format: date-time
             * @description Date when a repeating coupon ends for this subscription.
             */
            coupon_repeating_ends_at?: null | string;
            affiliate_id?: components["schemas"]["FlakeId"];
            checkout_id?: components["schemas"]["FlakeId"];
            checkout_line_id?: components["schemas"]["FlakeId"];
            /** @description Name used for billing purposes. */
            billing_name?: null | string;
            /** @description Email used for billing purposes. */
            billing_email?: null | string;
            /** @description Country code used for billing purposes. */
            billing_country?: null | string;
            /** @description List of tax jurisdictions applicable to this subscription. */
            tax_jurisdictions: components["schemas"]["SalesTaxJurisdictionDto"][];
            /** @description IP address of the customer at the time of subscription. */
            customer_ip?: null | string;
            /** @description Indicates whether this subscription is a gift. */
            gift: boolean;
            gift_to_customer?: components["schemas"]["CustomerDto"];
            product_id: components["schemas"]["FlakeId"];
            product_version_id: components["schemas"]["FlakeId"];
            /** @description Name of the product associated with this subscription. */
            product_name: string;
            /** @description URL for the product image. */
            product_image_url?: null | string;
            /**
             * Format: int32
             * @description Numeric value of the billing interval.
             */
            interval_value: number;
            interval_scale: components["schemas"]["ProductSubscriptionIntervalScale"];
            /** @description Currency code used for billing this subscription. */
            currency: string;
            /** @description Indicates whether tax is included in the base price itself. */
            tax_inclusive: boolean;
            /**
             * Format: int64
             * @description Base price of the subscription in smallest currency units (e.g., cents).
             */
            price: number;
            /** @description Formatted string representation of the price. */
            price_str: string;
            /**
             * Format: int64
             * @description Amount of discount applied in smallest currency units.
             */
            discount_amount: number;
            /** @description Formatted string representation of the discount amount. */
            discount_amount_str: string;
            /**
             * Format: int64
             * @description Subtotal amount in smallest currency units.
             */
            subtotal_amount: number;
            /** @description Formatted string representation of the subtotal amount. */
            subtotal_amount_str: string;
            /**
             * Format: int64
             * @description Tax amount in smallest currency units.
             */
            tax_amount: number;
            /** @description Formatted string representation of the tax amount. */
            tax_amount_str: string;
            /**
             * Format: int64
             * @description Total amount in smallest currency units.
             */
            total_amount: number;
            /** @description Formatted string representation of the total amount. */
            total_amount_str: string;
            /**
             * Format: int64
             * @description Initial discount amount in smallest currency units for the first billing cycle.
             */
            initial_discount_amount: number;
            /** @description Formatted string representation of the initial discount amount. */
            initial_discount_amount_str: string;
            /**
             * Format: int64
             * @description Initial subtotal amount in smallest currency units for the first billing cycle.
             */
            initial_subtotal_amount: number;
            /** @description Formatted string representation of the initial subtotal amount. */
            initial_subtotal_amount_str: string;
            /**
             * Format: int64
             * @description Initial gift card usage amount in smallest currency units.
             */
            initial_giftcard_usage_amount: number;
            /** @description Formatted string representation of the initial gift card usage amount. */
            initial_giftcard_usage_amount_str: string;
            /**
             * Format: int64
             * @description Initial tax amount in smallest currency units for the first billing cycle.
             */
            initial_tax_amount: number;
            /** @description Formatted string representation of the initial tax amount. */
            initial_tax_amount_str: string;
            /**
             * Format: int64
             * @description Initial total amount in smallest currency units for the first billing cycle.
             */
            initial_total_amount: number;
            /** @description Formatted string representation of the initial total amount. */
            initial_total_amount_str: string;
            /** @description Identifier for the pricing region associated with this subscription. */
            pricing_region_id?: null | string;
            /**
             * Format: date-time
             * @description Start date of the current billing period.
             */
            current_period_start?: null | string;
            /**
             * Format: date-time
             * @description End date of the current billing period.
             */
            current_period_end?: null | string;
            /**
             * Format: int32
             * @description Sequence number of the current billing cycle.
             */
            billing_cycle_sequence?: null | number;
            /**
             * Format: date-time
             * @description Date and time when the next payment attempt will occur.
             */
            next_attempt_at?: null | string;
            /**
             * Format: int32
             * @description Number of payment attempts made for the current billing cycle.
             */
            attempt_count?: null | number;
            /**
             * Format: date-time
             * @description Date and time when the subscription was created.
             */
            created_at: string;
            /**
             * Format: date-time
             * @description Date and time when the subscription was last updated.
             */
            updated_at?: null | string;
            /**
             * Format: date-time
             * @description Date and time when the subscription became active.
             */
            active_at?: null | string;
            /**
             * Format: date-time
             * @description Date and time when the subscription was canceled.
             */
            canceled_at?: null | string;
            /** @description Reason provided for cancellation. */
            cancel_reason?: null | string;
        };
        /**
         * @description Represents the current state of a subscription.
         * @enum {string}
         */
        SubscriptionStatus: "created" | "active" | "canceled";
        TagDto: {
            id: components["schemas"]["FlakeId"];
            store_id: components["schemas"]["FlakeId"];
            /**
             * Format: date-time
             * @description When the tag was created
             */
            created_at: string;
            created_by: components["schemas"]["ActorDto"];
            /** @description The unique name for the tag. */
            name: string;
            /** @description The unique slug for the tag. */
            slug: string;
            /** @description The description of the tag. */
            description?: null | string;
            /** @description The Image URL associated with the tag. */
            image_url?: null | string;
            /** @description Indicates whether this tag is enabled. */
            enabled: boolean;
            /**
             * Format: date-time
             * @description When the tag was last updated.
             */
            updated_at?: null | string;
            updated_by?: components["schemas"]["ActorDto"];
        };
        ToggleStorePaymentMethodTypeRequestDto: {
            enabled: boolean;
        };
        TrialDto: {
            id: components["schemas"]["FlakeId"];
            /** @description The human-readable formatted version of the trial identifier. */
            readonly pretty_id: string;
            store_id: components["schemas"]["FlakeId"];
            checkout_id?: components["schemas"]["FlakeId"];
            checkout_line_id?: components["schemas"]["FlakeId"];
            customer_id: components["schemas"]["FlakeId"];
            customer: components["schemas"]["CustomerDto"];
            product_id: components["schemas"]["FlakeId"];
            product_version_id: components["schemas"]["FlakeId"];
            /** @description The name of the product being trialed. */
            product_name: string;
            /** @description The URL of the product image, if available. */
            product_image_url?: null | string;
            /**
             * Format: int32
             * @description The duration value of the trial period.
             */
            period_value: number;
            /** @description The timescale unit for the trial period (e.g., "days", "weeks", "months"). */
            period_scale: string;
            /**
             * Format: date-time
             * @description The date and time when the trial period starts, if applicable.
             */
            starts_at?: null | string;
            /**
             * Format: date-time
             * @description The date and time when the trial period ends, if applicable.
             */
            ends_at?: null | string;
            status: components["schemas"]["TrialStatusDto"];
            /**
             * Format: date-time
             * @description The date and time when the trial was created.
             */
            created_at: string;
            /**
             * Format: date-time
             * @description The date and time when the trial was canceled, if applicable.
             */
            canceled_at?: null | string;
            canceled_by?: components["schemas"]["ActorDto"];
        };
        TrialEligibilityOverrideDto: {
            id: components["schemas"]["FlakeId"];
            /** @description The human-readable formatted version of the override identifier. */
            readonly pretty_id: string;
            store_id: components["schemas"]["FlakeId"];
            customer_id: components["schemas"]["FlakeId"];
            product_id: components["schemas"]["FlakeId"];
            /** @description The name of the product associated with this override. */
            product_name: string;
            /** @description The URL of the product image, if available. */
            product_image_url?: null | string;
            /**
             * Format: date-time
             * @description The date and time when this override was created.
             */
            created_at: string;
            created_by: components["schemas"]["ActorDto"];
            /**
             * Format: date-time
             * @description The date and time when this override expires and is no longer valid.
             */
            expires_at: string;
            /**
             * Format: date-time
             * @description The date and time when this override was used to start a trial, if applicable.
             */
            used_at?: null | string;
            used_on_trial_id?: components["schemas"]["FlakeId"];
            /** @description An optional note or comment about this override. */
            note?: null | string;
            /**
             * Format: date-time
             * @description The date and time when this override was deleted, if applicable.
             */
            deleted_at?: null | string;
            deleted_by?: components["schemas"]["ActorDto"];
        };
        /** @enum {string} */
        TrialStatusDto: "created" | "active" | "canceled" | "completed";
        TrustStoreOnboardingDto: {
            store_id: components["schemas"]["FlakeId"];
            user_id: components["schemas"]["FlakeId"];
            status: components["schemas"]["TrustStoreOnboardingStatus"];
            payout_onboarding_completed: boolean;
            kyc_completed: boolean;
            requires_approval: boolean;
            manually_approved: boolean;
            decline_reason?: null | string;
            requires_action_text?: null | string;
            products_created: boolean;
            kyc_required: boolean;
            gameserver_linked: boolean;
            webhooks_active: boolean;
            downloadable_files_added: boolean;
        };
        /** @enum {string} */
        TrustStoreOnboardingStatus: "invalid" | "pending" | "approved" | "declined" | "requires_action" | "under_review";
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
        UnqueueCommandsRequestDto: {
            attempt_ids: components["schemas"]["FlakeId"][];
        };
        UnqueueCommandsResponseDto: {
            /** Format: int64 */
            unqueued_count: number;
        };
        UpdateAffiliateLinkDto: {
            enabled?: null | boolean;
            code?: null | string;
            referer_type?: components["schemas"]["AffiliateLinkRefererType"];
            /** Format: int32 */
            tracking_length_days?: null | number;
            apply_for_subscriptions?: null | boolean;
            discount_type?: components["schemas"]["AffiliateLinkDiscountType"];
            /** Format: int64 */
            discount_amount?: null | number;
            commission_type?: components["schemas"]["AffiliateLinkCommissionType"];
            /** Format: int64 */
            commission_amount?: null | number;
        };
        UpdateCouponDto: {
            enabled?: boolean;
            code?: string;
            note?: string;
            duration?: components["schemas"]["CouponDurationEnum"];
            /** Format: int32 */
            duration_in_months?: null | number;
            discount_type?: components["schemas"]["CouponDiscountTypeEnum"];
            /** Format: int64 */
            discount_amount?: number;
            discount_apply_individually?: boolean;
            discount_apply_before_sales?: boolean;
            apply_to_products?: components["schemas"]["FlakeId"][];
            apply_to_tags?: components["schemas"]["FlakeId"][];
            usable_by_customer_id?: components["schemas"]["FlakeId"];
            /** Format: int64 */
            minimum_order_value?: number;
            redeem_limit_store_enabled?: boolean;
            /** Format: int64 */
            redeem_limit_store_amount?: number;
            redeem_limit_customer_enabled?: boolean;
            /** Format: int64 */
            redeem_limit_customer_amount?: number;
            usable_on_one_time_purchase?: boolean;
            usable_on_subscription?: boolean;
            /** Format: date-time */
            usable_at?: null | string;
            /** Format: date-time */
            expires_at?: null | string;
        };
        UpdateDeliveryItemProductVersionRequestDto: {
            product_version_id: components["schemas"]["FlakeId"];
            product_id: components["schemas"]["FlakeId"];
        };
        UpdateGameServerDto: {
            name?: string;
            enabled?: boolean;
        };
        UpdateGiftCardDto: {
            enabled?: boolean;
            code?: string;
            note?: string;
            /** Format: int64 */
            balance?: number;
            /** Format: date-time */
            usable_at?: string;
            /** Format: date-time */
            expires_at?: null | string;
        };
        UpdateNavLinkDto: {
            tag_id?: components["schemas"]["FlakeId"];
            parent_node_id?: string;
            /** Format: int32 */
            order?: null | number;
        };
        UpdateNavLinkOrderChangeDto: {
            node_id: components["schemas"]["FlakeId"];
            /** Format: int32 */
            order: number;
        };
        UpdateProductSortOrderRequestDto: {
            /** @description An array of product IDs in the order that they should be sorted. */
            product_ids: components["schemas"]["FlakeId"][];
        };
        UpdateSaleDto: {
            enabled?: boolean;
            name?: string;
            discount_type?: components["schemas"]["SaleDiscountType"];
            /** Format: int32 */
            discount_amount?: number;
            apply_to_product_ids?: components["schemas"]["FlakeId"][];
            apply_to_tag_ids?: components["schemas"]["FlakeId"][];
            /** Format: int32 */
            minimum_order_value?: number;
            /** Format: date-time */
            begins_at?: string;
            /** Format: date-time */
            ends_at?: null | string;
        };
        UpdateStorePaymentSettingsDto: {
            show_all_payment_methods_for_subscriptions?: boolean;
            store_tax_inclusive_pricing?: boolean;
            block_prepaid_cards?: components["schemas"]["PrepaidCardsBlockingTypeDto"];
        };
        UpdateTrialEligibilityOverrideDto: {
            product_id?: components["schemas"]["FlakeId"];
            /** Format: date-time */
            expires_at?: string;
            note?: string;
        };
        UpdateWebhookDto: {
            url: string;
            reset_secret: boolean;
            subscribed_to: components["schemas"]["WebhookEventType"];
            discord_description_template?: null | string;
            discord_title?: null | string;
            discord_color?: null | string;
        };
        UpsertBanRequestDto: {
            reason?: null | string;
            identities?: null | components["schemas"]["BanIdentityDto"][];
            /** Format: date-time */
            expires_at?: null | string;
        };
        /** @description Unified request model for creating or updating custom variables.
         *     Contains all the configurable properties of a custom variable. */
        UpsertCustomVariableRequestDto: {
            /** @description Unique identifier string for programmatic reference.
             *     Must contain only letters, numbers, underscores, and hyphens. */
            identifier: string;
            /** @description Display name shown to customers. */
            name: string;
            /** @description Description explaining the purpose of this custom variable. */
            description?: null | string;
            type: components["schemas"]["CustomVariableType"];
            /** @description Optional regex pattern for validating customer input.
             *     Only applies to text and number types. Ignored for dropdown types. */
            value_regex?: null | string;
            /** @description Predefined options for dropdown-type custom variables.
             *     Required for dropdown types, ignored for text and number types.
             *     When updating, this completely replaces all existing options. */
            options: components["schemas"]["CustomVariableOptionRequestDto"][];
        };
        UpsertCustomerRequestDto: {
            steam_id?: components["schemas"]["SteamId"];
            /** @description The Minecraft UUID for the customer. */
            minecraft_uuid?: null | string;
            minecraft_platform?: components["schemas"]["CustomerMinecraftPlatform"];
            /** @description The Xbox XUID (Xbox User ID) for the customer. */
            xbox_xuid?: null | string;
            /** @description The name of the customer. */
            name?: null | string;
            /** @description Additional customer information stored as key-value pairs. */
            metadata?: null | {
                [key: string]: string;
            };
        };
        /** @description Data transfer object used for creating new global commands or updating existing ones.
         *     Supports partial updates following PATCH semantics. */
        UpsertGlobalCommandDto: {
            stage: components["schemas"]["ProductCommandStage"];
            /** @description The command content to be executed. */
            content: string;
            /** @description Indicates whether the command should only be executed when the player is online. */
            online_only: boolean;
            /** @description List of specific game server IDs where this command should be executed. */
            override_execute_on_gameserver_ids?: null | components["schemas"]["FlakeId"][];
            execution_rule: components["schemas"]["ProductCommandExecutionRuleDto"];
        };
        UpsertProductRequestDto: {
            /** @description The unique URL-safe identifier (slug) for the product. */
            slug?: null | string;
            /** @description The display name of the product. */
            name?: null | string;
            /** @description The detailed description of the product. */
            description?: null | string;
            /** @description The display label for the product. */
            label?: null | string;
            /**
             * Format: int64
             * @description The price of the product in the lowest denominator (e.g. cents).
             */
            price?: null | number;
            /** @description Indicates whether the customer is prompted to select a game server before purchasing. */
            single_game_server_only?: null | boolean;
            /** @description Indicates whether one-time purchases are allowed. */
            allow_one_time_purchase?: null | boolean;
            /** @description Indicates whether subscription purchases are allowed. */
            allow_subscription?: null | boolean;
            /**
             * Format: int32
             * @description The subscription interval value.
             */
            subscription_interval_value?: null | number;
            subscription_interval_scale?: components["schemas"]["ProductSubscriptionIntervalScale"];
            trial?: components["schemas"]["UpsertProductTrialConfigurationDto"];
            /** @description Indicates whether automatic removal is enabled. */
            remove_after_enabled?: null | boolean;
            /**
             * Format: int32
             * @description The time value for automatic removal.
             */
            remove_after_time_value?: null | number;
            remove_after_time_scale?: components["schemas"]["ProductRemoveAfterIntervalScale"];
            store_stock_limit?: components["schemas"]["ProductStockLimitDto"];
            customer_stock_limit?: components["schemas"]["ProductStockLimitDto"];
            /** @description Indicates whether removed items should be excluded from stock limits. */
            stock_limit_do_not_include_removed?: null | boolean;
            /** @description The tag IDs associated with the product. */
            tags?: null | components["schemas"]["FlakeId"][];
            /** @description The gameserver IDs associated with the product. */
            gameservers?: null | components["schemas"]["FlakeId"][];
            /** @description The commands to be executed at different stages. */
            commands?: null | components["schemas"]["ProductCommandDto"][];
            deliverable_actions?: components["schemas"]["ProductDeliverableActionsDto"];
            /** @description Additional metadata for the product. */
            metadata?: null | {
                [key: string]: string;
            };
            /** @description The payout splits for revenue distribution.
             *     Requires special approval. */
            payout_splits?: null | components["schemas"]["ProductPayoutSplitDto"][];
            tax_code?: components["schemas"]["ProductTaxCode"];
            /** @description Indicates whether concurrent active items are allowed. */
            allow_concurrent_active_items?: null | boolean;
            /** @description Indicates whether the product is hidden. */
            is_hidden?: null | boolean;
            /** @description Indicates whether gifting is disabled. */
            is_gifting_disabled?: null | boolean;
            /**
             * Format: date-time
             * @description The date and time when the product becomes enabled.
             *     Set to `null` to keep enabled.
             */
            enabled_at?: null | string;
            /**
             * Format: date-time
             * @description The date and time until which the product remains enabled.
             *     Set to `null` to keep enabled.
             */
            enabled_until?: null | string;
            /** @description The IDs of products required for purchasing this product. */
            required_product_ids?: null | components["schemas"]["FlakeId"][];
            /** @description Indicates whether all required products are needed. */
            required_product_all?: null | boolean;
            /** @description The IDs of associated custom variables. */
            custom_variable_ids?: null | components["schemas"]["FlakeId"][];
            /** @description Indicates if applying gift cards should be disabled on the product. */
            is_gift_cards_disabled?: null | boolean;
            /** @description Indicates if applying coupons should be disabled on the product. */
            is_coupons_disabled?: null | boolean;
            /** @description Indicates if applying affiliate links should be disabled on the product. */
            is_affiliate_links_disabled?: null | boolean;
        };
        /** @description Represents the configuration for trials of a product */
        UpsertProductTrialConfigurationDto: {
            /** @description Indicates if trials should be enabled for the product. */
            enabled?: null | boolean;
            /**
             * Format: int32
             * @description The trial period value.
             */
            period_value?: null | number;
            period_scale?: components["schemas"]["ProductSubscriptionIntervalScale"];
            /** @description Indicates if the trial should be revoked immediately when canceled or at the end of the trial. */
            revoke_immediately_when_canceled?: null | boolean;
            /** @description Restricts trials to customers who have no orders within the lookback period.
             *     When enabled, customers with recent orders will be ineligible for trials. */
            new_customers_only?: null | boolean;
            /**
             * Format: int32
             * @description The lookback period value for determining if a customer is "new".
             *     Only used when new_customers_only is enabled.
             */
            new_customer_order_lookback_value?: null | number;
            new_customer_order_lookback_scale?: components["schemas"]["ProductSubscriptionIntervalScale"];
            /** @description Allows customers to trial again after a cooldown period following their previous trial.
             *     When disabled, customers can only trial once and never become eligible again. */
            allow_repeat_trials?: null | boolean;
            /**
             * Format: int32
             * @description The cooldown period value before a customer becomes eligible for another trial.
             *     Only used when allow_repeat_trials is enabled.
             */
            repeat_trial_cooldown_value?: null | number;
            repeat_trial_cooldown_scale?: components["schemas"]["ProductSubscriptionIntervalScale"];
        };
        UpsertTagRequestDto: {
            name?: null | string;
            slug?: null | string;
            description?: null | string;
            enabled?: null | boolean;
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
        /** @enum {string} */
        WebhookEventType: "OnIgnore" | "OnOrderCompleted" | "OnRefund" | "OnChargeback" | "OnDeliveryItemAdded" | "OnDeliveryItemActivated" | "OnDeliveryItemUsed" | "OnDeliveryItemRevoked" | "OnSubscriptionActivated" | "OnSubscriptionRenewed" | "OnSubscriptionCanceled" | "OnDiscordOrderActionsQueued" | "OnConnectedUserRegistered" | "OnConnectedUserBecamePayable" | "OnConnectedUserPayoutCreated" | "OnConnectedUserPayoutCompleted" | "OnConnectedUserTransactionInserted" | "OnConnectedUserBecameUnpayable" | "OnTrialActivated" | "OnTrialCompleted" | "OnTrialCanceled" | "OnPurchaseFollowUpAttemptEmailSent" | "OnPurchaseFollowUpAttemptSucceeded" | "OnAbandonedCheckoutRecoveryAttemptEmailSent" | "OnAbandonedCheckoutRecoveryAttemptSucceeded";
        WebhookHistoryDto: {
            /** Format: int32 */
            page: number;
            history: components["schemas"]["QueuedWebhookDto"][];
        };
        /** @enum {string} */
        WebhookState: "success" | "pending" | "failed" | "all";
        WebhookSubscriptionDto: {
            id: components["schemas"]["FlakeId"];
            url: string;
            secret: string;
            subscribed_to: components["schemas"]["WebhookEventType"];
            type: components["schemas"]["WebhookType"];
            discord_description_template?: null | string;
            discord_title?: null | string;
            discord_color?: null | string;
        };
        /** @enum {string} */
        WebhookType: "json_v1" | "discord_v1";
        WebhookVariablesDto: {
            event_type: components["schemas"]["WebhookEventType"];
            variables: string[];
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
    AffiliateLinks_GetAffiliateLinks: {
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
                    "application/json": components["schemas"]["AffiliateLinkDto"][];
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
    AffiliateLinks_CreateAffiliateLink: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateAffiliateLinkDto"];
                "text/json": components["schemas"]["CreateAffiliateLinkDto"];
                "application/*+json": components["schemas"]["CreateAffiliateLinkDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AffiliateLinkDto"];
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
    AffiliateLinks_GetAffiliateLink: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                affiliateLinkId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["AffiliateLinkDto"];
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
    AffiliateLinks_DeleteAffiliateLink: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                affiliateLinkId: components["schemas"]["FlakeId"];
            };
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
    AffiliateLinks_UpdateAffiliateLink: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                affiliateLinkId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateAffiliateLinkDto"];
                "text/json": components["schemas"]["UpdateAffiliateLinkDto"];
                "application/*+json": components["schemas"]["UpdateAffiliateLinkDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AffiliateLinkDto"];
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
    Bans_GetBans: {
        parameters: {
            query?: {
                ban_type?: components["schemas"]["BanType"];
                ban_type_value?: string;
                reason?: string;
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
                    "application/json": components["schemas"]["BanDto"][];
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
    Bans_CreateBan: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertBanRequestDto"];
                "text/json": components["schemas"]["UpsertBanRequestDto"];
                "application/*+json": components["schemas"]["UpsertBanRequestDto"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BanDto"];
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
    Bans_GetBan: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                banId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["BanDto"];
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
    Bans_DeleteBan: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                banId: components["schemas"]["FlakeId"];
            };
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
    Bans_UpdateBan: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                banId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertBanRequestDto"];
                "text/json": components["schemas"]["UpsertBanRequestDto"];
                "application/*+json": components["schemas"]["UpsertBanRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BanDto"];
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
    Bans_CheckForBanByIdentities: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CheckForBanIDByIdentitiesRequestDto"];
                "text/json": components["schemas"]["CheckForBanIDByIdentitiesRequestDto"];
                "application/*+json": components["schemas"]["CheckForBanIDByIdentitiesRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CheckForBanIDByIdentitiesResponseDto"];
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
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateCheckoutSessionManagementDto"];
                "text/json": components["schemas"]["CreateCheckoutSessionManagementDto"];
                "application/*+json": components["schemas"]["CreateCheckoutSessionManagementDto"];
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
    Coupons_GetCouponsForStore: {
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
                /** @description Filter by status */
                status?: components["schemas"]["CouponFilterStatusEnum"];
                /** @description Filter by creation type of coupons. */
                type?: components["schemas"]["CouponFilterTypeEnum"];
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
                    "application/json": components["schemas"]["CouponDto"][];
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
    Coupons_CreateCouponForStore: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateCouponDto"];
                "text/json": components["schemas"]["CreateCouponDto"];
                "application/*+json": components["schemas"]["CreateCouponDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CouponDto"];
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
    Coupons_GetCouponByIdForStore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                couponId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["CouponDto"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
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
    Coupons_DeleteCouponForStore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                couponId: components["schemas"]["FlakeId"];
            };
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
    Coupons_UpdateCouponForStore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                couponId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateCouponDto"];
                "text/json": components["schemas"]["UpdateCouponDto"];
                "application/*+json": components["schemas"]["UpdateCouponDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CouponDto"];
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
    CustomVariables_GetCustomVariablesForStore: {
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
                    "application/json": components["schemas"]["CustomVariableDto"][];
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
    CustomVariables_CreateCustomVariableForStore: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The custom variable data to create. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertCustomVariableRequestDto"];
                "text/json": components["schemas"]["UpsertCustomVariableRequestDto"];
                "application/*+json": components["schemas"]["UpsertCustomVariableRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomVariableDto"];
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
    CustomVariables_GetCustomVariableByIdForStore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the custom variable to retrieve. */
                customVariableId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["CustomVariableDto"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PayNowError"];
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
    CustomVariables_DeleteCustomVariableForStore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the custom variable to delete. */
                customVariableId: components["schemas"]["FlakeId"];
            };
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
    CustomVariables_UpdateCustomVariableForStore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the custom variable to update. */
                customVariableId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        /** @description The custom variable data to update with field mask. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertCustomVariableRequestDto"];
                "text/json": components["schemas"]["UpsertCustomVariableRequestDto"];
                "application/*+json": components["schemas"]["UpsertCustomVariableRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomVariableDto"];
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
    Customers_GetCustomers: {
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
                search?: string;
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
                    "application/json": components["schemas"]["CustomerDto"][];
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
    Customers_CreateCustomer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertCustomerRequestDto"];
                "text/json": components["schemas"]["UpsertCustomerRequestDto"];
                "application/*+json": components["schemas"]["UpsertCustomerRequestDto"];
            };
        };
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
    Customers_GetCustomerById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the customer. */
                customerId: components["schemas"]["FlakeId"];
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
    Customers_UpdateCustomer: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                customerId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertCustomerRequestDto"];
                "text/json": components["schemas"]["UpsertCustomerRequestDto"];
                "application/*+json": components["schemas"]["UpsertCustomerRequestDto"];
            };
        };
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
    Customers_CreateCustomerToken: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the customer to generate the customer token for. */
                customerId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["CustomerTokenResponseDto"];
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
    Customers_InvalidateCustomerTokens: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the customer to invalidate the customer tokens for. */
                customerId: components["schemas"]["FlakeId"];
            };
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
    Customers_LookupCustomer: {
        parameters: {
            query?: {
                /** @description Looks up customer by PayNow Customer ID. */
                id?: string;
                /** @description Looks up customer by Steam ID 64. */
                steam_id?: components["schemas"]["SteamId"];
                /** @description Looks up customer by a Minecraft UUID. */
                minecraft_uuid?: string;
                /** @description Looks up customer by an Xbox XUID. */
                xbox_xuid?: string;
                /** @description Looks up customer by Minecraft Java name. */
                minecraft_java_name?: string;
                /** @description Looks up customer by Minecraft Bedrock name. */
                minecraft_bedrock_name?: string;
                /** @description Looks up customer by a PayNow Customer Name.
                 *     Name has to be explicitly set in the Customer entity - profile names won't be matched. */
                name?: string;
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
    Customers_BulkCreateCustomers: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertCustomerRequestDto"][];
                "text/json": components["schemas"]["UpsertCustomerRequestDto"][];
                "application/*+json": components["schemas"]["UpsertCustomerRequestDto"][];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CustomerDto"][];
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
    DataMigrations_GetDataMigrations: {
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
                    "application/json": components["schemas"]["DataMigrationTaskDto"][];
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
    DataMigrations_StartDataMigrationFromTebex: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["StartDataMigrationFromTebexRequestDto"];
                "text/json": components["schemas"]["StartDataMigrationFromTebexRequestDto"];
                "application/*+json": components["schemas"]["StartDataMigrationFromTebexRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DataMigrationTaskDto"][];
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
    Delivery_GetOrderDeliveryItems: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the order to retrieve delivery items from. */
                orderId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["DeliveryItemDto"][];
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
    Delivery_AssignDeliveryItemsBulk: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["DeliveryItemAssignmentBulkDto"][];
                "text/json": components["schemas"]["DeliveryItemAssignmentBulkDto"][];
                "application/*+json": components["schemas"]["DeliveryItemAssignmentBulkDto"][];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeliveryItemDto"][];
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
    Delivery_UnqueueDeliveryCommandAttemptByAttemptIDs: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UnqueueCommandsRequestDto"];
                "text/json": components["schemas"]["UnqueueCommandsRequestDto"];
                "application/*+json": components["schemas"]["UnqueueCommandsRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnqueueCommandsResponseDto"];
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
    Delivery_UpdateDeliveryItemProductVersions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateDeliveryItemProductVersionRequestDto"];
                "text/json": components["schemas"]["UpdateDeliveryItemProductVersionRequestDto"];
                "application/*+json": components["schemas"]["UpdateDeliveryItemProductVersionRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UpdateDeliveryItemProductVersionRequestDto"];
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
    Delivery_GetDeliveryItems: {
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
            path: {
                customerId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["DeliveryItemDto"][];
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
    Delivery_AssignDeliveryItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                customerId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["DeliveryItemAssignmentDto"];
                "text/json": components["schemas"]["DeliveryItemAssignmentDto"];
                "application/*+json": components["schemas"]["DeliveryItemAssignmentDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeliveryItemDto"][];
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
    Delivery_RevokeDeliveryItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                customerId: components["schemas"]["FlakeId"];
                deliveryItemId: components["schemas"]["FlakeId"];
            };
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
    Delivery_GetCommandAttempts: {
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
            path: {
                customerId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["CommandAttemptDto"][];
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
    Delivery_ResendDeliveryCommandsForGameServer: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                gameServerId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ResendCommandsForGameServerRequestDto"];
                "text/json": components["schemas"]["ResendCommandsForGameServerRequestDto"];
                "application/*+json": components["schemas"]["ResendCommandsForGameServerRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ResendCommandsForGameServerResponseDto"];
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
    Discord_GetActions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                productVersionId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["DiscordActionDto"][];
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
    Discord_CreateAction: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                productVersionId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SetDiscordActionDto"][];
                "text/json": components["schemas"]["SetDiscordActionDto"][];
                "application/*+json": components["schemas"]["SetDiscordActionDto"][];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DiscordActionDto"];
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
    Discord_GetLinkedDiscordAccounts: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                orderId: components["schemas"]["FlakeId"];
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
                    "application/json": {
                        [key: string]: components["schemas"]["DiscordProfileDto"];
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
    Discord_GetDiscordActionExecutionHistory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                orderId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["QueuedDiscordActionDto"][];
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
    Discord_GetQueuedDiscordActionForDeliveryItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                inventoryItemId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["QueuedDiscordActionDto"][];
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
    Discord_GetUserToDeliveryItemLinks: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                inventoryItemId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["DiscordProfileDto"];
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
    Discord_SetUserToDeliveryItemLink: {
        parameters: {
            query?: {
                discordUserId?: number;
            };
            header?: never;
            path: {
                inventoryItemId: components["schemas"]["FlakeId"];
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
    Discord_DeleteUserToDeliveryItemLink: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                inventoryItemId: components["schemas"]["FlakeId"];
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
    Discord_GetDiscordServerLinks: {
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
                    "application/json": components["schemas"]["DiscordServerLinkDto"][];
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
    Discord_CreateDiscordServerLink: {
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
                    "application/json": components["schemas"]["DiscordServerLinkDto"];
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
    Discord_DeleteDiscordServerLinks: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                token: string;
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
                    "application/json": components["schemas"]["DiscordServerLinkDto"][];
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
    Discord_GetDiscordServerRoles: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                discordServerId: number;
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
                    "application/json": components["schemas"]["DiscordServerRoleDto"][];
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
    Discord_GetDiscordServerTextChannels: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                discordServerId: number;
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
                    "application/json": components["schemas"]["DiscordServerChannelDto"][];
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
    DownloadableFiles_GetDownloadableFiles: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                productId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["ProductDownloadableFileDto"][];
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
    DownloadableFiles_StartDownloadableFileUpload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                productId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["StartDownloadableFileUploadRequestDto"];
                "text/json": components["schemas"]["StartDownloadableFileUploadRequestDto"];
                "application/*+json": components["schemas"]["StartDownloadableFileUploadRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
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
    DownloadableFiles_FinishDownloadableFileUpload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                productId: components["schemas"]["FlakeId"];
                downloadableFileId: components["schemas"]["FlakeId"];
            };
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
    DownloadableFiles_CreateDownloadUrl: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                productId: components["schemas"]["FlakeId"];
                downloadableFileId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["CreateDownloadableFileDownloadUrlResponseDto"];
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
    DownloadableFiles_DeleteDownloadableFile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                productId: components["schemas"]["FlakeId"];
                downloadableFileId: components["schemas"]["FlakeId"];
            };
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
    GameServers_GetGameServers: {
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
                    "application/json": components["schemas"]["GameServerDto"][];
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
    GameServers_CreateGameServer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateGameServerDto"];
                "text/json": components["schemas"]["CreateGameServerDto"];
                "application/*+json": components["schemas"]["CreateGameServerDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GameServerDto"];
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
    GameServers_GetGameServer: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                gameServerId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["GameServerDto"][];
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
    GameServers_DeleteGameServer: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                gameServerId: components["schemas"]["FlakeId"];
            };
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
    GameServers_UpdateGameServer: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                gameServerId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateGameServerDto"];
                "text/json": components["schemas"]["UpdateGameServerDto"];
                "application/*+json": components["schemas"]["UpdateGameServerDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GameServerDto"];
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
    GameServers_ResetGameServerToken: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                gameServerId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["GameServerDto"];
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
    Giftcards_GetGiftCards: {
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
                /** @description A gift card code to filter by. */
                code?: string;
                /** @description Should canceled gift cards be included in the response? */
                include_canceled?: boolean;
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
                    "application/json": components["schemas"]["GiftCardDto"][];
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
    Giftcards_CreateGiftCard: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateGiftCardDto"];
                "text/json": components["schemas"]["CreateGiftCardDto"];
                "application/*+json": components["schemas"]["CreateGiftCardDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GiftCardDto"];
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
    Giftcards_GetGiftCard: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                giftCardId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["GiftCardDto"];
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
    Giftcards_DeleteGiftCard: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                giftCardId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["GiftCardDto"];
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
    Giftcards_UpdateGiftCard: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                giftCardId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateGiftCardDto"];
                "text/json": components["schemas"]["UpdateGiftCardDto"];
                "application/*+json": components["schemas"]["UpdateGiftCardDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GiftCardDto"];
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
    GlobalCommands_GetGlobalCommands: {
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
                    "application/json": components["schemas"]["GlobalCommandDto"][];
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
    GlobalCommands_CreateGlobalCommand: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertGlobalCommandDto"];
                "text/json": components["schemas"]["UpsertGlobalCommandDto"];
                "application/*+json": components["schemas"]["UpsertGlobalCommandDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GlobalCommandDto"];
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
    GlobalCommands_DeleteGlobalCommand: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the command to delete. */
                globalCommandId: components["schemas"]["FlakeId"];
            };
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
    GlobalCommands_UpdateGlobalCommand: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                globalCommandId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertGlobalCommandDto"];
                "text/json": components["schemas"]["UpsertGlobalCommandDto"];
                "application/*+json": components["schemas"]["UpsertGlobalCommandDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GlobalCommandDto"];
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
    Marketing_GetStoreAbandonedCheckoutConfigurationOptions: {
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
                    "application/json": components["schemas"]["AbandonedCheckoutStoreConfigurationDto"];
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
    Marketing_SetStoreAbandonedCheckoutConfigurationOptions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AbandonedCheckoutStoreConfigurationUpdateDto"];
                "text/json": components["schemas"]["AbandonedCheckoutStoreConfigurationUpdateDto"];
                "application/*+json": components["schemas"]["AbandonedCheckoutStoreConfigurationUpdateDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AbandonedCheckoutStoreConfigurationDto"];
                };
            };
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
    Marketing_GetStorePurchaseFollowUpConfigurationOptions: {
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
                    "application/json": components["schemas"]["PurchaseFollowUpStoreConfigurationDto"];
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
    Marketing_SetStorePurchaseFollowUpConfigurationOptions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PurchaseFollowUpStoreConfigurationUpdateDto"];
                "text/json": components["schemas"]["PurchaseFollowUpStoreConfigurationUpdateDto"];
                "application/*+json": components["schemas"]["PurchaseFollowUpStoreConfigurationUpdateDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PurchaseFollowUpStoreConfigurationDto"];
                };
            };
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
    Navlinks_GetNavLinks: {
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
                    "application/json": components["schemas"]["NavLinkDto"][];
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
    Navlinks_CreateNavLink: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateNavLinkDto"];
                "text/json": components["schemas"]["CreateNavLinkDto"];
                "application/*+json": components["schemas"]["CreateNavLinkDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NavLinkDto"];
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
    Navlinks_GetNavLink: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                navLinkId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["NavLinkDto"];
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
    Navlinks_DeleteNavLink: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                navLinkId: components["schemas"]["FlakeId"];
            };
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
    Navlinks_UpdateNavLink: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                navLinkId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateNavLinkDto"];
                "text/json": components["schemas"]["UpdateNavLinkDto"];
                "application/*+json": components["schemas"]["UpdateNavLinkDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NavLinkDto"];
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
    Navlinks_UpdateNavLinkOrder: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateNavLinkOrderChangeDto"][];
                "text/json": components["schemas"]["UpdateNavLinkOrderChangeDto"][];
                "application/*+json": components["schemas"]["UpdateNavLinkOrderChangeDto"][];
            };
        };
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
    Orders_GetOrders: {
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
                /** @description List of order statuses to filter by */
                status?: components["schemas"]["OrderStatus"][];
                /** @description Order ID */
                order_id?: components["schemas"]["FlakeId"];
                /** @description Customer ID */
                customer_id?: components["schemas"]["FlakeId"];
                /** @description Billing Email */
                billing_email?: string;
                /** @description Customer IP */
                customer_ip?: string;
                /** @description Subscription ID */
                subscription_id?: components["schemas"]["FlakeId"];
                /** @description Checkout ID */
                checkout_id?: components["schemas"]["FlakeId"];
                /** @description Flag indicating if the order is a subscription */
                is_subscription?: boolean;
                /** @description Affiliate ID */
                affiliate_id?: components["schemas"]["FlakeId"];
                /** @description Coupon ID */
                coupon_id?: components["schemas"]["FlakeId"];
                /** @description Gift card ID */
                giftcard_id?: components["schemas"]["FlakeId"];
                /** @description Product ID */
                product_id?: components["schemas"]["FlakeId"];
                /** @description Sale ID */
                sale_id?: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["OrderDto"][];
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
    Orders_GetOrderById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the order. */
                orderId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["OrderDto"];
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
    Orders_RefundOrder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the order. */
                orderId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateRefundRequestDto"];
                "text/json": components["schemas"]["CreateRefundRequestDto"];
                "application/*+json": components["schemas"]["CreateRefundRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RefundDto"];
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
    PaymentMethodTypes_GetStorePaymentMethodTypes: {
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
                    "application/json": components["schemas"]["PaymentMethodTypeDto"][];
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
    PaymentMethodTypes_ToggleStorePaymentMethodType: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                paymentMethodTypeId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ToggleStorePaymentMethodTypeRequestDto"];
                "text/json": components["schemas"]["ToggleStorePaymentMethodTypeRequestDto"];
                "application/*+json": components["schemas"]["ToggleStorePaymentMethodTypeRequestDto"];
            };
        };
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
    PaymentSettings_GetStorePaymentSettings: {
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
                    "application/json": components["schemas"]["StorePaymentSettingsDto"];
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
    PaymentSettings_UpdateStorePaymentSettings: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateStorePaymentSettingsDto"];
                "text/json": components["schemas"]["UpdateStorePaymentSettingsDto"];
                "application/*+json": components["schemas"]["UpdateStorePaymentSettingsDto"];
            };
        };
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
    Payments_GetPayments: {
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
                /** @description Filter by payment statuses */
                status?: components["schemas"]["PaymentStatusDto"][];
                /** @description Filter by order ID */
                order_id?: components["schemas"]["FlakeId"];
                /** @description Filter by customer ID */
                customer_id?: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["PaymentDto"][];
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
    Payments_GetPaymentById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                paymentId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["PaymentDto"];
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
    Products_GetProducts: {
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
                    "application/json": components["schemas"]["ProductDto"][];
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
    Products_CreateProduct: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertProductRequestDto"];
                "text/json": components["schemas"]["UpsertProductRequestDto"];
                "application/*+json": components["schemas"]["UpsertProductRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProductDto"];
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
    Products_GetProduct: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the product to retrieve. */
                productId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["ProductDto"];
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
    Products_DeleteProduct: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the product to delete. */
                productId: components["schemas"]["FlakeId"];
            };
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
    Products_UpdateProduct: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the product to update. */
                productId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertProductRequestDto"];
                "text/json": components["schemas"]["UpsertProductRequestDto"];
                "application/*+json": components["schemas"]["UpsertProductRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProductDto"];
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
    Products_UpdateProductSortOrder: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateProductSortOrderRequestDto"];
                "text/json": components["schemas"]["UpdateProductSortOrderRequestDto"];
                "application/*+json": components["schemas"]["UpdateProductSortOrderRequestDto"];
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProductDto"];
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
    RegionalPricing_GetProductPricingRegions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                productId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["ProductPricingRegionDto"][];
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
    RegionalPricing_SetProductPricingRegionOverride: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                productId: components["schemas"]["FlakeId"];
                regionId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ProductPricingRegionOverrideDto"];
                "text/json": components["schemas"]["ProductPricingRegionOverrideDto"];
                "application/*+json": components["schemas"]["ProductPricingRegionOverrideDto"];
            };
        };
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
    RegionalPricing_GetStorePricingRegions: {
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
                    "application/json": components["schemas"]["ProductPricingRegionDto"][];
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
    RegionalPricing_SetStorePricingRegionOverride: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                regionId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["StorePricingRegionOverrideDto"];
                "text/json": components["schemas"]["StorePricingRegionOverrideDto"];
                "application/*+json": components["schemas"]["StorePricingRegionOverrideDto"];
            };
        };
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
    RegionalPricing_GetStorePricingRegionGroups: {
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
                    "application/json": components["schemas"]["ProductPricingRegionGroupDto"][];
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
    Sales_GetSales: {
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
                    "application/json": components["schemas"]["SaleDto"][];
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
    Sales_CreateSale: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateSaleDto"];
                "text/json": components["schemas"]["CreateSaleDto"];
                "application/*+json": components["schemas"]["CreateSaleDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SaleDto"];
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
    Sales_GetSale: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                saleId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["SaleDto"];
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
    Sales_DeleteSaleById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                saleId: components["schemas"]["FlakeId"];
            };
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
    Sales_UpdateSale: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                saleId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateSaleDto"];
                "text/json": components["schemas"]["UpdateSaleDto"];
                "application/*+json": components["schemas"]["UpdateSaleDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SaleDto"];
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
    Subscriptions_GetSubscriptions: {
        parameters: {
            query?: {
                customer_id?: components["schemas"]["FlakeId"];
                subscription_id?: components["schemas"]["FlakeId"];
                billing_email?: string;
                payment_method_id?: components["schemas"]["FlakeId"];
                checkout_id?: components["schemas"]["FlakeId"];
                trial_id?: components["schemas"]["FlakeId"];
                status?: components["schemas"]["SubscriptionStatus"][];
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
                    "application/json": components["schemas"]["StoreSubscriptionDto"][];
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
    Subscriptions_GetSubscriptionById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the subscription. */
                subscriptionId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["StoreSubscriptionDto"];
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
    Subscriptions_CancelSubscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the subscription. */
                subscriptionId: components["schemas"]["FlakeId"];
            };
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
    Tags_GetTags: {
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
                    "application/json": components["schemas"]["TagDto"][];
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
    Tags_CreateTag: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertTagRequestDto"];
                "text/json": components["schemas"]["UpsertTagRequestDto"];
                "application/*+json": components["schemas"]["UpsertTagRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TagDto"];
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
    Tags_GetTag: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tagId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["TagDto"];
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
    Tags_DeleteTag: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tagId: components["schemas"]["FlakeId"];
            };
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
    Tags_UpdateTag: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tagId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpsertTagRequestDto"];
                "text/json": components["schemas"]["UpsertTagRequestDto"];
                "application/*+json": components["schemas"]["UpsertTagRequestDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TagDto"];
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
    Tags_GetTagImageUploadUrl: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tagId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["GetTagImageUploadUrlResponseDto"];
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
    Tags_FinishTagImageUpload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tagId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["FinishTagImageUploadUrlRequestDto"];
                "text/json": components["schemas"]["FinishTagImageUploadUrlRequestDto"];
                "application/*+json": components["schemas"]["FinishTagImageUploadUrlRequestDto"];
            };
        };
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
    Tags_DeleteTagImage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tagId: components["schemas"]["FlakeId"];
            };
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
    Trials_GetTrials: {
        parameters: {
            query?: {
                /** @description Filters trials by their status. Multiple statuses can be specified. */
                status?: components["schemas"]["TrialStatusDto"][];
                /** @description Filters trials by the customer identifier. */
                customer_id?: components["schemas"]["FlakeId"];
                /** @description Filters trials by the associated subscription identifier. */
                subscription_id?: components["schemas"]["FlakeId"];
                /** @description Filters trials by the checkout session identifier that initiated them. */
                checkout_id?: components["schemas"]["FlakeId"];
                /** @description Filters to a specific trial by its identifier. */
                trial_id?: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["TrialDto"][];
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
    Trials_GetTrial: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                trialId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["TrialDto"];
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
    Trials_GetEligibilityOverridesForCustomer: {
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
            path: {
                /** @description The ID of the customer to retrieve trial eligibility overrides for. */
                customerId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["TrialEligibilityOverrideDto"][];
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
    Trials_CreateEligibilityOverrideForCustomer: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the customer to create the trial eligibility override for. */
                customerId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        /** @description The trial eligibility override data. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateTrialEligibilityOverrideDto"];
                "text/json": components["schemas"]["CreateTrialEligibilityOverrideDto"];
                "application/*+json": components["schemas"]["CreateTrialEligibilityOverrideDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TrialEligibilityOverrideDto"];
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
    Trials_DeleteEligibilityOverrideForCustomer: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the trial eligibility override to delete. */
                trialEligibilityOverrideId: components["schemas"]["FlakeId"];
                customerId: string;
            };
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
    Webhooks_GetSubscriptions: {
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
                    "application/json": components["schemas"]["WebhookSubscriptionDto"][];
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
    Webhooks_CreateSubscription: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateWebhookDto"];
                "text/json": components["schemas"]["CreateWebhookDto"];
                "application/*+json": components["schemas"]["CreateWebhookDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookSubscriptionDto"];
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
    Webhooks_GetVariables: {
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
                    "application/json": components["schemas"]["WebhookVariablesDto"][];
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
    Webhooks_DeleteSubscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhookId: components["schemas"]["FlakeId"];
            };
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
    Webhooks_UpdateSubscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhookId: components["schemas"]["FlakeId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateWebhookDto"];
                "text/json": components["schemas"]["UpdateWebhookDto"];
                "application/*+json": components["schemas"]["UpdateWebhookDto"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebhookSubscriptionDto"];
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
    Webhooks_Resend: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ResendWebhookDto"];
                "text/json": components["schemas"]["ResendWebhookDto"];
                "application/*+json": components["schemas"]["ResendWebhookDto"];
            };
        };
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
    Webhooks_GetHistory: {
        parameters: {
            query?: {
                page?: number;
                state?: string;
            };
            header?: never;
            path: {
                webhookId: components["schemas"]["FlakeId"];
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
                    "application/json": components["schemas"]["WebhookHistoryDto"];
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
  "AffiliateLinks_GetAffiliateLinks": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/affiliate-links"
  },
  "AffiliateLinks_CreateAffiliateLink": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/affiliate-links"
  },
  "AffiliateLinks_GetAffiliateLink": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/affiliate-links/{affiliateLinkId}"
  },
  "AffiliateLinks_UpdateAffiliateLink": {
    "method": "PATCH",
    "path": "/v1/stores/{storeId}/affiliate-links/{affiliateLinkId}"
  },
  "AffiliateLinks_DeleteAffiliateLink": {
    "method": "DELETE",
    "path": "/v1/stores/{storeId}/affiliate-links/{affiliateLinkId}"
  },
  "Bans_GetBans": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/bans"
  },
  "Bans_CreateBan": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/bans"
  },
  "Bans_GetBan": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/bans/{banId}"
  },
  "Bans_UpdateBan": {
    "method": "PATCH",
    "path": "/v1/stores/{storeId}/bans/{banId}"
  },
  "Bans_DeleteBan": {
    "method": "DELETE",
    "path": "/v1/stores/{storeId}/bans/{banId}"
  },
  "Bans_CheckForBanByIdentities": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/bans/check"
  },
  "Checkout_CreateCheckoutSession": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/checkouts"
  },
  "Coupons_CreateCouponForStore": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/coupons"
  },
  "Coupons_GetCouponsForStore": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/coupons"
  },
  "Coupons_GetCouponByIdForStore": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/coupons/{couponId}"
  },
  "Coupons_UpdateCouponForStore": {
    "method": "PATCH",
    "path": "/v1/stores/{storeId}/coupons/{couponId}"
  },
  "Coupons_DeleteCouponForStore": {
    "method": "DELETE",
    "path": "/v1/stores/{storeId}/coupons/{couponId}"
  },
  "CustomVariables_CreateCustomVariableForStore": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/custom-variables"
  },
  "CustomVariables_GetCustomVariablesForStore": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/custom-variables"
  },
  "CustomVariables_GetCustomVariableByIdForStore": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/custom-variables/{customVariableId}"
  },
  "CustomVariables_UpdateCustomVariableForStore": {
    "method": "PATCH",
    "path": "/v1/stores/{storeId}/custom-variables/{customVariableId}"
  },
  "CustomVariables_DeleteCustomVariableForStore": {
    "method": "DELETE",
    "path": "/v1/stores/{storeId}/custom-variables/{customVariableId}"
  },
  "Customers_GetCustomers": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/customers"
  },
  "Customers_CreateCustomer": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/customers"
  },
  "Customers_GetCustomerById": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/customers/{customerId}"
  },
  "Customers_UpdateCustomer": {
    "method": "PATCH",
    "path": "/v1/stores/{storeId}/customers/{customerId}"
  },
  "Customers_CreateCustomerToken": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/customers/{customerId}/tokens"
  },
  "Customers_InvalidateCustomerTokens": {
    "method": "DELETE",
    "path": "/v1/stores/{storeId}/customers/{customerId}/tokens"
  },
  "Customers_LookupCustomer": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/customers/lookup"
  },
  "Customers_BulkCreateCustomers": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/customers/bulk"
  },
  "DataMigrations_GetDataMigrations": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/data-migrations"
  },
  "DataMigrations_StartDataMigrationFromTebex": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/data-migrations/tebex"
  },
  "Delivery_GetOrderDeliveryItems": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/orders/{orderId}/delivery/items"
  },
  "Delivery_AssignDeliveryItemsBulk": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/delivery/items"
  },
  "Delivery_UnqueueDeliveryCommandAttemptByAttemptIDs": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/delivery/commands/unqueue"
  },
  "Delivery_UpdateDeliveryItemProductVersions": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/delivery/items/update-product-versions"
  },
  "Delivery_GetDeliveryItems": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/customers/{customerId}/delivery/items"
  },
  "Delivery_AssignDeliveryItem": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/customers/{customerId}/delivery/items"
  },
  "Delivery_RevokeDeliveryItem": {
    "method": "DELETE",
    "path": "/v1/stores/{storeId}/customers/{customerId}/delivery/items/{deliveryItemId}"
  },
  "Delivery_GetCommandAttempts": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/customers/{customerId}/delivery/commands"
  },
  "Delivery_ResendDeliveryCommandsForGameServer": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/gameservers/{gameServerId}/delivery/commands/resend"
  },
  "Discord_GetActions": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/product_versions/{productVersionId}/discord_actions"
  },
  "Discord_CreateAction": {
    "method": "PUT",
    "path": "/v1/stores/{storeId}/product_versions/{productVersionId}/discord_actions"
  },
  "Discord_GetLinkedDiscordAccounts": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/orders/{orderId}/discord"
  },
  "Discord_GetDiscordActionExecutionHistory": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/orders/{orderId}/discord/queued"
  },
  "Discord_GetQueuedDiscordActionForDeliveryItem": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/inventory/{inventoryItemId}/discord/queued"
  },
  "Discord_GetUserToDeliveryItemLinks": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/inventory/{inventoryItemId}/discord/link"
  },
  "Discord_SetUserToDeliveryItemLink": {
    "method": "PUT",
    "path": "/v1/stores/{storeId}/inventory/{inventoryItemId}/discord/link"
  },
  "Discord_DeleteUserToDeliveryItemLink": {
    "method": "DELETE",
    "path": "/v1/stores/{storeId}/inventory/{inventoryItemId}/discord/link"
  },
  "Discord_CreateDiscordServerLink": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/discord/links"
  },
  "Discord_GetDiscordServerLinks": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/discord/links"
  },
  "Discord_DeleteDiscordServerLinks": {
    "method": "DELETE",
    "path": "/v1/stores/{storeId}/discord/links/{token}"
  },
  "Discord_GetDiscordServerRoles": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/discord/{discordServerId}/roles"
  },
  "Discord_GetDiscordServerTextChannels": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/discord/{discordServerId}/discord/text_channels"
  },
  "DownloadableFiles_GetDownloadableFiles": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/products/{productId}/downloadable-files"
  },
  "DownloadableFiles_StartDownloadableFileUpload": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/products/{productId}/downloadable-files"
  },
  "DownloadableFiles_FinishDownloadableFileUpload": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/products/{productId}/downloadable-files/{downloadableFileId}/finish"
  },
  "DownloadableFiles_CreateDownloadUrl": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/products/{productId}/downloadable-files/{downloadableFileId}/download-url"
  },
  "DownloadableFiles_DeleteDownloadableFile": {
    "method": "DELETE",
    "path": "/v1/stores/{storeId}/products/{productId}/downloadable-files/{downloadableFileId}"
  },
  "GameServers_GetGameServers": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/gameservers"
  },
  "GameServers_CreateGameServer": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/gameservers"
  },
  "GameServers_GetGameServer": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/gameservers/{gameServerId}"
  },
  "GameServers_UpdateGameServer": {
    "method": "PATCH",
    "path": "/v1/stores/{storeId}/gameservers/{gameServerId}"
  },
  "GameServers_DeleteGameServer": {
    "method": "DELETE",
    "path": "/v1/stores/{storeId}/gameservers/{gameServerId}"
  },
  "GameServers_ResetGameServerToken": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/gameservers/{gameServerId}/reset-token"
  },
  "Giftcards_GetGiftCards": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/giftcards"
  },
  "Giftcards_CreateGiftCard": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/giftcards"
  },
  "Giftcards_GetGiftCard": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/giftcards/{giftCardId}"
  },
  "Giftcards_DeleteGiftCard": {
    "method": "DELETE",
    "path": "/v1/stores/{storeId}/giftcards/{giftCardId}"
  },
  "Giftcards_UpdateGiftCard": {
    "method": "PATCH",
    "path": "/v1/stores/{storeId}/giftcards/{giftCardId}"
  },
  "GlobalCommands_GetGlobalCommands": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/global-commands"
  },
  "GlobalCommands_CreateGlobalCommand": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/global-commands"
  },
  "GlobalCommands_UpdateGlobalCommand": {
    "method": "PATCH",
    "path": "/v1/stores/{storeId}/global-commands/{globalCommandId}"
  },
  "GlobalCommands_DeleteGlobalCommand": {
    "method": "DELETE",
    "path": "/v1/stores/{storeId}/global-commands/{globalCommandId}"
  },
  "Marketing_GetStoreAbandonedCheckoutConfigurationOptions": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/marketing/abandoned-checkouts/configuration"
  },
  "Marketing_SetStoreAbandonedCheckoutConfigurationOptions": {
    "method": "PUT",
    "path": "/v1/stores/{storeId}/marketing/abandoned-checkouts/configuration"
  },
  "Marketing_GetStorePurchaseFollowUpConfigurationOptions": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/marketing/purchase-follow-ups/configuration"
  },
  "Marketing_SetStorePurchaseFollowUpConfigurationOptions": {
    "method": "PUT",
    "path": "/v1/stores/{storeId}/marketing/purchase-follow-ups/configuration"
  },
  "Navlinks_GetNavLinks": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/navlinks"
  },
  "Navlinks_CreateNavLink": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/navlinks"
  },
  "Navlinks_GetNavLink": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/navlinks/{navLinkId}"
  },
  "Navlinks_DeleteNavLink": {
    "method": "DELETE",
    "path": "/v1/stores/{storeId}/navlinks/{navLinkId}"
  },
  "Navlinks_UpdateNavLink": {
    "method": "PATCH",
    "path": "/v1/stores/{storeId}/navlinks/{navLinkId}"
  },
  "Navlinks_UpdateNavLinkOrder": {
    "method": "PATCH",
    "path": "/v1/stores/{storeId}/navlinks/sort-orders"
  },
  "Orders_GetOrders": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/orders"
  },
  "Orders_GetOrderById": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/orders/{orderId}"
  },
  "Orders_RefundOrder": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/orders/{orderId}/refund"
  },
  "PaymentMethodTypes_GetStorePaymentMethodTypes": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/payment-method-types"
  },
  "PaymentMethodTypes_ToggleStorePaymentMethodType": {
    "method": "PATCH",
    "path": "/v1/stores/{storeId}/payment-method-types/{paymentMethodTypeId}/toggle"
  },
  "PaymentSettings_GetStorePaymentSettings": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/payment-settings"
  },
  "PaymentSettings_UpdateStorePaymentSettings": {
    "method": "PATCH",
    "path": "/v1/stores/{storeId}/payment-settings"
  },
  "Payments_GetPayments": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/payments"
  },
  "Payments_GetPaymentById": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/payments/{paymentId}"
  },
  "Products_GetProducts": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/products"
  },
  "Products_CreateProduct": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/products"
  },
  "Products_GetProduct": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/products/{productId}"
  },
  "Products_UpdateProduct": {
    "method": "PATCH",
    "path": "/v1/stores/{storeId}/products/{productId}"
  },
  "Products_DeleteProduct": {
    "method": "DELETE",
    "path": "/v1/stores/{storeId}/products/{productId}"
  },
  "Products_UpdateProductSortOrder": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/products/sort-order"
  },
  "RegionalPricing_GetProductPricingRegions": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/products/{productId}/pricing/regions"
  },
  "RegionalPricing_SetProductPricingRegionOverride": {
    "method": "PATCH",
    "path": "/v1/stores/{storeId}/products/{productId}/pricing/regions/{regionId}"
  },
  "RegionalPricing_GetStorePricingRegions": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/products/pricing/regions"
  },
  "RegionalPricing_SetStorePricingRegionOverride": {
    "method": "PATCH",
    "path": "/v1/stores/{storeId}/products/pricing/regions/{regionId}"
  },
  "RegionalPricing_GetStorePricingRegionGroups": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/products/pricing/region-groups"
  },
  "Sales_GetSales": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/sales"
  },
  "Sales_CreateSale": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/sales"
  },
  "Sales_GetSale": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/sales/{saleId}"
  },
  "Sales_DeleteSaleById": {
    "method": "DELETE",
    "path": "/v1/stores/{storeId}/sales/{saleId}"
  },
  "Sales_UpdateSale": {
    "method": "PATCH",
    "path": "/v1/stores/{storeId}/sales/{saleId}"
  },
  "Subscriptions_GetSubscriptions": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/subscriptions"
  },
  "Subscriptions_GetSubscriptionById": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/subscriptions/{subscriptionId}"
  },
  "Subscriptions_CancelSubscription": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/subscriptions/{subscriptionId}/cancel"
  },
  "Tags_GetTags": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/tags"
  },
  "Tags_CreateTag": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/tags"
  },
  "Tags_GetTag": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/tags/{tagId}"
  },
  "Tags_UpdateTag": {
    "method": "PATCH",
    "path": "/v1/stores/{storeId}/tags/{tagId}"
  },
  "Tags_DeleteTag": {
    "method": "DELETE",
    "path": "/v1/stores/{storeId}/tags/{tagId}"
  },
  "Tags_GetTagImageUploadUrl": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/tags/{tagId}/image-upload-url"
  },
  "Tags_FinishTagImageUpload": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/tags/{tagId}/image-upload-finish"
  },
  "Tags_DeleteTagImage": {
    "method": "DELETE",
    "path": "/v1/stores/{storeId}/tags/{tagId}/image"
  },
  "Trials_GetTrials": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/trials"
  },
  "Trials_GetTrial": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/trials/{trialId}"
  },
  "Trials_GetEligibilityOverridesForCustomer": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/customers/{customerId}/trials/eligibility/overrides"
  },
  "Trials_CreateEligibilityOverrideForCustomer": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/customers/{customerId}/trials/eligibility/overrides"
  },
  "Trials_DeleteEligibilityOverrideForCustomer": {
    "method": "DELETE",
    "path": "/v1/stores/{storeId}/customers/{customerId}/trials/eligibility/overrides/{trialEligibilityOverrideId}"
  },
  "Webhooks_GetSubscriptions": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/webhooks"
  },
  "Webhooks_CreateSubscription": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/webhooks"
  },
  "Webhooks_GetVariables": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/webhooks/variables"
  },
  "Webhooks_UpdateSubscription": {
    "method": "PATCH",
    "path": "/v1/stores/{storeId}/webhooks/{webhookId}"
  },
  "Webhooks_DeleteSubscription": {
    "method": "DELETE",
    "path": "/v1/stores/{storeId}/webhooks/{webhookId}"
  },
  "Webhooks_Resend": {
    "method": "POST",
    "path": "/v1/stores/{storeId}/webhooks/resend"
  },
  "Webhooks_GetHistory": {
    "method": "GET",
    "path": "/v1/stores/{storeId}/webhooks/{webhookId}/history"
  }
} as const;
