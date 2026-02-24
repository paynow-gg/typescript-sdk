export type paths = Record<string, never>;
export interface webhooks {
    ON_SUBSCRIPTION_RENEWED: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Triggered when a subscription is renewed
         * @description Webhook for ON_SUBSCRIPTION_RENEWED
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * @description The type of webhook event
                         * @example ON_SUBSCRIPTION_RENEWED
                         */
                        event_type: components["schemas"]["WebhookEventType"];
                        /**
                         * Format: flake-id
                         * @description The ID of the Webhook Event
                         * @example 411486491630370816
                         */
                        event_id: string;
                        body: {
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Subscription
                             * @example 411486491630370816
                             */
                            id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Store associated with the Subscription
                             * @example 411486491630370816
                             */
                            store_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Customer associated with the Subscription
                             * @example 411486491630370816
                             */
                            customer_id: string;
                            customer: components["schemas"]["CustomerDTO"];
                            checkout: components["schemas"]["CheckoutDTO"];
                            /**
                             * @description The current billing cycle number
                             * @example 2
                             */
                            billing_cycle_sequence: number;
                            /**
                             * @description The billing email address of the customer associated with the Subscription
                             * @example john@doe.com
                             */
                            billing_email: string;
                            /**
                             * @description The subtotal amount of the Subscription represented in cents
                             * @example 8999
                             */
                            subtotal_amount: number;
                            /**
                             * @description The tax amount of the Subscription represented in cents
                             * @example 1350
                             */
                            tax_amount: number;
                            /**
                             * @description The discount amount applied to the Subscription represented in cents
                             * @example 0
                             */
                            discount_amount: number;
                            /**
                             * @description The total amount of the Subscription represented in cents
                             * @example 10349
                             */
                            total_amount: number;
                            /**
                             * @description The currency code of the Subscription
                             * @example USD
                             */
                            currency: string;
                            /**
                             * @description The interval value of the billing cycle
                             * @example 1
                             */
                            interval_value: number;
                            /**
                             * @description The interval scale of the billing cycle
                             * @example month
                             */
                            interval_scale: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Product associated with the Subscription
                             * @example 411486491630370816
                             */
                            product_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Product Version associated with the Subscription
                             * @example 411486491630370816
                             */
                            product_version_id: string;
                            /**
                             * @description The name of the Product associated with the Subscription
                             * @example Example Product
                             */
                            product_name: string;
                            /**
                             * @description The image URL of the Product associated with the Subscription
                             * @example https://example.com/biz.jpg
                             */
                            product_image_url?: null | string;
                            product: components["schemas"]["ProductDTO"];
                            /**
                             * @description The ISO-3166 country code of customer associated with the Subscription
                             * @example US
                             */
                            billing_country: string;
                            /**
                             * @description The initial subtotal amount of the Subscription represented in cents
                             * @example 8999
                             */
                            initial_subtotal_amount: number;
                            /**
                             * @description The initial tax amount of the Subscription represented in cents
                             * @example 1350
                             */
                            initial_tax_amount: number;
                            /**
                             * @description The initial discount amount applied to the Subscription represented in cents
                             * @example 1500
                             */
                            initial_discount_amount: number;
                            /**
                             * @description The initial gift card usage amount applied to the Subscription represented in cents
                             * @example 0
                             */
                            initial_giftcard_usage_amount: number;
                            /**
                             * @description The initial total amount of the Subscription represented in cents
                             * @example 8849
                             */
                            initial_total_amount: number;
                            /**
                             * @description The IP address of the Customer
                             * @example 127.0.0.1/24
                             */
                            customer_ip: string;
                            /**
                             * Format: date-time
                             * @description The start date of the current billing period
                             * @example 2024-03-01T00:00:00Z
                             */
                            current_period_start?: null | string;
                            /**
                             * Format: date-time
                             * @description The end date of the current billing period
                             * @example 2024-06-01T00:00:00Z
                             */
                            current_period_end?: null | string;
                            /**
                             * Format: date-time
                             * @description The date and time when the Subscription was created
                             * @example 2024-03-01T11:00:00Z
                             */
                            created_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the subscription was active
                             * @example 2024-03-01T11:05:00Z
                             */
                            active_at?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout associated with the Subscription
                             * @example 411486491630370816
                             */
                            checkout_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout Line associated with the Subscription
                             * @example 411486491630370816
                             */
                            checkout_line_id: string;
                            /**
                             * @description The current status of the Subscription.  Possible options: created, active, canceled
                             * @example created
                             */
                            status: string;
                        };
                    };
                };
            };
            responses: {
                /** @description Webhook processed successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    ON_CHARGEBACK: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Triggered when a chargeback is created
         * @description Webhook for ON_CHARGEBACK
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * @description The type of webhook event
                         * @example ON_CHARGEBACK
                         */
                        event_type: components["schemas"]["WebhookEventType"];
                        /**
                         * Format: flake-id
                         * @description The ID of the Webhook Event
                         * @example 411486491630370816
                         */
                        event_id: string;
                        body: {
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Payment associated with the Payment
                             * @example 411486491630370816
                             */
                            id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Store associated with the Payment
                             * @example 411486491630370816
                             */
                            store_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Order associated with Payment
                             * @example 411486491630370816
                             */
                            order_id: string;
                            customer?: components["schemas"]["CustomerDTO"] | null;
                            /**
                             * @description The Payment Gateway of the Payment
                             * @example stripe
                             */
                            gateway: string;
                            /**
                             * @description The ISO-4217 Currency Code of the Payment
                             * @example USD
                             */
                            currency: string;
                            /**
                             * @description Indicates if the payment was Tax Inclusive
                             * @example true
                             */
                            tax_inclusive: boolean;
                            /**
                             * @description The payment amount, represented in cents
                             * @example 7500
                             */
                            amount: number;
                            /**
                             * @description The gateway fee  amount, represented in cents
                             * @example 200
                             */
                            gateway_fee_amount: number;
                            /**
                             * @description The tax amount, represented in cents
                             * @example 1200
                             */
                            tax_amount: number;
                            /**
                             * @description The platform fee amount, represented in cents
                             * @example 375
                             */
                            platform_fee_amount: number;
                            /**
                             * @description The net amount recieved by the associated store, represented in cents
                             * @example 5925
                             */
                            store_net_amount: number;
                            /** @description The status of the payment */
                            status: string;
                            /** @description The chargeback outcome */
                            chargeback_status: string;
                            /**
                             * Format: date-time
                             * @description Indicated when a chargeback was opened for the payment
                             * @example 2024-01-25T14:45:00Z
                             */
                            chargeback_at: string;
                        };
                    };
                };
            };
            responses: {
                /** @description Webhook processed successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    ON_CHARGEBACK_CLOSED: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Triggered when a chargeback is resolved
         * @description Webhook for ON_CHARGEBACK_CLOSED
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * @description The type of webhook event
                         * @example ON_CHARGEBACK_CLOSED
                         */
                        event_type: components["schemas"]["WebhookEventType"];
                        /**
                         * Format: flake-id
                         * @description The ID of the Webhook Event
                         * @example 411486491630370816
                         */
                        event_id: string;
                        body: {
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Payment associated with the Payment
                             * @example 411486491630370816
                             */
                            id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Store associated with the Payment
                             * @example 411486491630370816
                             */
                            store_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Order associated with Payment
                             * @example 411486491630370816
                             */
                            order_id: string;
                            customer?: components["schemas"]["CustomerDTO"] | null;
                            /**
                             * @description The Payment Gateway of the Payment
                             * @example stripe
                             */
                            gateway: string;
                            /**
                             * @description The ISO-4217 Currency Code of the Payment
                             * @example USD
                             */
                            currency: string;
                            /**
                             * @description Indicates if the payment was Tax Inclusive
                             * @example true
                             */
                            tax_inclusive: boolean;
                            /**
                             * @description The payment amount, represented in cents
                             * @example 7500
                             */
                            amount: number;
                            /**
                             * @description The gateway fee  amount, represented in cents
                             * @example 200
                             */
                            gateway_fee_amount: number;
                            /**
                             * @description The tax amount, represented in cents
                             * @example 1200
                             */
                            tax_amount: number;
                            /**
                             * @description The platform fee amount, represented in cents
                             * @example 375
                             */
                            platform_fee_amount: number;
                            /**
                             * @description The net amount recieved by the associated store, represented in cents
                             * @example 5925
                             */
                            store_net_amount: number;
                            /** @description The status of the payment */
                            status: string;
                            /** @description The chargeback outcome */
                            chargeback_status: string;
                            /**
                             * Format: date-time
                             * @description Indicated when a chargeback was opened for the payment
                             * @example 2024-01-25T14:45:00Z
                             */
                            chargeback_at: string;
                        };
                    };
                };
            };
            responses: {
                /** @description Webhook processed successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    ON_DISCORD_ACCOUNT_LINKED_TO_CHECKOUT: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Triggered when a Discord account is successfully linked to a checkout.
         * @description Webhook for ON_DISCORD_ACCOUNT_LINKED_TO_CHECKOUT
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * @description The type of webhook event
                         * @example ON_DISCORD_ACCOUNT_LINKED_TO_CHECKOUT
                         */
                        event_type: components["schemas"]["WebhookEventType"];
                        /**
                         * Format: flake-id
                         * @description The ID of the Webhook Event
                         * @example 411486491630370816
                         */
                        event_id: string;
                        body: {
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Store associated with the Checkout
                             * @example 411486491630370816
                             */
                            store_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Customer associated with the Checkout
                             * @example 411486491630370816
                             */
                            customer_id: string;
                            customer: components["schemas"]["CustomerDTO"];
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout
                             * @example 411486491630370816
                             */
                            checkout_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout Line
                             * @example 411486491630370816
                             */
                            checkout_line_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Order associated with the Checkout
                             * @example 411486491630370816
                             */
                            order_id: string;
                            order: components["schemas"]["OrderDTO"];
                            /**
                             * @description The Discord User ID of the linked account
                             * @example 123456789012345678
                             */
                            discord_user_id: string;
                            /**
                             * @description The Discord username of the linked account
                             * @example john_doe
                             */
                            discord_user_name: string;
                            /**
                             * @description The Discord avatar hash of the linked account
                             * @example a1b2c3d4e5f6g7h8i9j0
                             */
                            discord_user_avatar_hash: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Product associated with the Checkout
                             * @example 411486491630370816
                             */
                            product_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Product Version associated with the Checkout
                             * @example 411486491630370816
                             */
                            product_version_id: string;
                            product: components["schemas"]["ProductDTO"];
                            /**
                             * Format: date-time
                             * @description Indicates when the Discord account link was enqueued
                             * @example 2024-01-15T10:30:00Z
                             */
                            enqueued_at?: null | string;
                        };
                    };
                };
            };
            responses: {
                /** @description Webhook processed successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    ON_DELIVERY_ITEM_ADDED: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Triggered when a delivery item is added to the customers inventory
         * @description Webhook for ON_DELIVERY_ITEM_ADDED
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * @description The type of webhook event
                         * @example ON_DELIVERY_ITEM_ADDED
                         */
                        event_type: components["schemas"]["WebhookEventType"];
                        /**
                         * Format: flake-id
                         * @description The ID of the Webhook Event
                         * @example 411486491630370816
                         */
                        event_id: string;
                        body: {
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Delivery Item
                             * @example 411486491630370816
                             */
                            id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Store associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            store_id: string;
                            customer?: components["schemas"]["CustomerDTO"] | null;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the customer who ordered the delivery item - which may differ to the customer because of gifting
                             * @example 411486491630370816
                             */
                            order_customer_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            checkout_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Order ID associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            order_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake Id of the Order Line ID associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            order_line_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Subscription associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            subscription_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Game Server the Delivery Item is associated with
                             * @example 411486491630370816
                             */
                            execute_on_gameserver_id?: null | string;
                            execute_on_gameserver?: components["schemas"]["GameServerDTO"] | null;
                            /**
                             * Format: flake-id
                             * @description The associated Product ID of the Delivery Item
                             * @example 411486491630370816
                             */
                            product_id: string;
                            /**
                             * Format: flake-id
                             * @description The associated Product Version ID of the Delivery Item
                             * @example 411486491630370816
                             */
                            product_version_id: string;
                            product: components["schemas"]["ProductDTO"];
                            /**
                             * @description The state of the Delivery Item.  Possible options: usable, active, used, revoked, renewed
                             * @example usable
                             */
                            state: string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item was added to the customers inventory
                             * @example 2024-01-10T08:00:00Z
                             */
                            added_at: string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item become active
                             * @example 2024-01-10T09:00:00Z
                             */
                            active_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item expires
                             * @example 2024-12-31T23:59:59Z
                             */
                            expires_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item was removed from the customers inventory
                             * @example 2024-02-01T10:00:00Z
                             */
                            removed_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item was revoked from the customers inventory
                             * @example 2024-02-05T14:30:00Z
                             */
                            revoked_at?: null | string;
                            /** @description Indicates the reason the delivery item was revoked from the customers inventory */
                            revoke_reason?: null | string;
                        };
                    };
                };
            };
            responses: {
                /** @description Webhook processed successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    ON_DELIVERY_ITEM_ACTIVATED: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Triggered when a delivery item in the customers inventory activates
         * @description Webhook for ON_DELIVERY_ITEM_ACTIVATED
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * @description The type of webhook event
                         * @example ON_DELIVERY_ITEM_ACTIVATED
                         */
                        event_type: components["schemas"]["WebhookEventType"];
                        /**
                         * Format: flake-id
                         * @description The ID of the Webhook Event
                         * @example 411486491630370816
                         */
                        event_id: string;
                        body: {
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Delivery Item
                             * @example 411486491630370816
                             */
                            id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Store associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            store_id: string;
                            customer?: components["schemas"]["CustomerDTO"] | null;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the customer who ordered the delivery item - which may differ to the customer because of gifting
                             * @example 411486491630370816
                             */
                            order_customer_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            checkout_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Order ID associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            order_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake Id of the Order Line ID associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            order_line_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Subscription associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            subscription_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Game Server the Delivery Item is associated with
                             * @example 411486491630370816
                             */
                            execute_on_gameserver_id?: null | string;
                            execute_on_gameserver?: components["schemas"]["GameServerDTO"] | null;
                            /**
                             * Format: flake-id
                             * @description The associated Product ID of the Delivery Item
                             * @example 411486491630370816
                             */
                            product_id: string;
                            /**
                             * Format: flake-id
                             * @description The associated Product Version ID of the Delivery Item
                             * @example 411486491630370816
                             */
                            product_version_id: string;
                            product: components["schemas"]["ProductDTO"];
                            /**
                             * @description The state of the Delivery Item.  Possible options: usable, active, used, revoked, renewed
                             * @example usable
                             */
                            state: string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item was added to the customers inventory
                             * @example 2024-01-10T08:00:00Z
                             */
                            added_at: string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item become active
                             * @example 2024-01-10T09:00:00Z
                             */
                            active_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item expires
                             * @example 2024-12-31T23:59:59Z
                             */
                            expires_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item was removed from the customers inventory
                             * @example 2024-02-01T10:00:00Z
                             */
                            removed_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item was revoked from the customers inventory
                             * @example 2024-02-05T14:30:00Z
                             */
                            revoked_at?: null | string;
                            /** @description Indicates the reason the delivery item was revoked from the customers inventory */
                            revoke_reason?: null | string;
                        };
                    };
                };
            };
            responses: {
                /** @description Webhook processed successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    ON_DELIVERY_ITEM_USED: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Triggered when a delivery item in the customers inventory becomes used
         * @deprecated
         * @description Webhook for ON_DELIVERY_ITEM_USED
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * @description The type of webhook event
                         * @example ON_DELIVERY_ITEM_USED
                         */
                        event_type: components["schemas"]["WebhookEventType"];
                        /**
                         * Format: flake-id
                         * @description The ID of the Webhook Event
                         * @example 411486491630370816
                         */
                        event_id: string;
                        body: {
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Delivery Item
                             * @example 411486491630370816
                             */
                            id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Store associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            store_id: string;
                            customer?: components["schemas"]["CustomerDTO"] | null;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the customer who ordered the delivery item - which may differ to the customer because of gifting
                             * @example 411486491630370816
                             */
                            order_customer_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            checkout_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Order ID associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            order_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake Id of the Order Line ID associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            order_line_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Subscription associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            subscription_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Game Server the Delivery Item is associated with
                             * @example 411486491630370816
                             */
                            execute_on_gameserver_id?: null | string;
                            execute_on_gameserver?: components["schemas"]["GameServerDTO"] | null;
                            /**
                             * Format: flake-id
                             * @description The associated Product ID of the Delivery Item
                             * @example 411486491630370816
                             */
                            product_id: string;
                            /**
                             * Format: flake-id
                             * @description The associated Product Version ID of the Delivery Item
                             * @example 411486491630370816
                             */
                            product_version_id: string;
                            product: components["schemas"]["ProductDTO"];
                            /**
                             * @description The state of the Delivery Item.  Possible options: usable, active, used, revoked, renewed
                             * @example usable
                             */
                            state: string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item was added to the customers inventory
                             * @example 2024-01-10T08:00:00Z
                             */
                            added_at: string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item become active
                             * @example 2024-01-10T09:00:00Z
                             */
                            active_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item expires
                             * @example 2024-12-31T23:59:59Z
                             */
                            expires_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item was removed from the customers inventory
                             * @example 2024-02-01T10:00:00Z
                             */
                            removed_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item was revoked from the customers inventory
                             * @example 2024-02-05T14:30:00Z
                             */
                            revoked_at?: null | string;
                            /** @description Indicates the reason the delivery item was revoked from the customers inventory */
                            revoke_reason?: null | string;
                        };
                    };
                };
            };
            responses: {
                /** @description Webhook processed successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    ON_DELIVERY_ITEM_RENEWED: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Triggered when a delivery item in the customers inventory is renewed
         * @description Webhook for ON_DELIVERY_ITEM_RENEWED
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * @description The type of webhook event
                         * @example ON_DELIVERY_ITEM_RENEWED
                         */
                        event_type: components["schemas"]["WebhookEventType"];
                        /**
                         * Format: flake-id
                         * @description The ID of the Webhook Event
                         * @example 411486491630370816
                         */
                        event_id: string;
                        body: {
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Delivery Item
                             * @example 411486491630370816
                             */
                            id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Store associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            store_id: string;
                            customer?: components["schemas"]["CustomerDTO"] | null;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the customer who ordered the delivery item - which may differ to the customer because of gifting
                             * @example 411486491630370816
                             */
                            order_customer_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            checkout_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Order ID associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            order_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake Id of the Order Line ID associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            order_line_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Subscription associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            subscription_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Game Server the Delivery Item is associated with
                             * @example 411486491630370816
                             */
                            execute_on_gameserver_id?: null | string;
                            execute_on_gameserver?: components["schemas"]["GameServerDTO"] | null;
                            /**
                             * Format: flake-id
                             * @description The associated Product ID of the Delivery Item
                             * @example 411486491630370816
                             */
                            product_id: string;
                            /**
                             * Format: flake-id
                             * @description The associated Product Version ID of the Delivery Item
                             * @example 411486491630370816
                             */
                            product_version_id: string;
                            product: components["schemas"]["ProductDTO"];
                            /**
                             * @description The state of the Delivery Item.  Possible options: usable, active, used, revoked, renewed
                             * @example usable
                             */
                            state: string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item was added to the customers inventory
                             * @example 2024-01-10T08:00:00Z
                             */
                            added_at: string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item become active
                             * @example 2024-01-10T09:00:00Z
                             */
                            active_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item expires
                             * @example 2024-12-31T23:59:59Z
                             */
                            expires_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item was removed from the customers inventory
                             * @example 2024-02-01T10:00:00Z
                             */
                            removed_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item was revoked from the customers inventory
                             * @example 2024-02-05T14:30:00Z
                             */
                            revoked_at?: null | string;
                            /** @description Indicates the reason the delivery item was revoked from the customers inventory */
                            revoke_reason?: null | string;
                        };
                    };
                };
            };
            responses: {
                /** @description Webhook processed successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    ON_DELIVERY_ITEM_EXPIRED: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Triggered when a delivery item in the customers inventory expires
         * @description Webhook for ON_DELIVERY_ITEM_EXPIRED
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * @description The type of webhook event
                         * @example ON_DELIVERY_ITEM_EXPIRED
                         */
                        event_type: components["schemas"]["WebhookEventType"];
                        /**
                         * Format: flake-id
                         * @description The ID of the Webhook Event
                         * @example 411486491630370816
                         */
                        event_id: string;
                        body: {
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Delivery Item
                             * @example 411486491630370816
                             */
                            id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Store associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            store_id: string;
                            customer?: components["schemas"]["CustomerDTO"] | null;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the customer who ordered the delivery item - which may differ to the customer because of gifting
                             * @example 411486491630370816
                             */
                            order_customer_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            checkout_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Order ID associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            order_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake Id of the Order Line ID associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            order_line_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Subscription associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            subscription_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Game Server the Delivery Item is associated with
                             * @example 411486491630370816
                             */
                            execute_on_gameserver_id?: null | string;
                            execute_on_gameserver?: components["schemas"]["GameServerDTO"] | null;
                            /**
                             * Format: flake-id
                             * @description The associated Product ID of the Delivery Item
                             * @example 411486491630370816
                             */
                            product_id: string;
                            /**
                             * Format: flake-id
                             * @description The associated Product Version ID of the Delivery Item
                             * @example 411486491630370816
                             */
                            product_version_id: string;
                            product: components["schemas"]["ProductDTO"];
                            /**
                             * @description The state of the Delivery Item.  Possible options: usable, active, used, revoked, renewed
                             * @example usable
                             */
                            state: string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item was added to the customers inventory
                             * @example 2024-01-10T08:00:00Z
                             */
                            added_at: string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item become active
                             * @example 2024-01-10T09:00:00Z
                             */
                            active_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item expires
                             * @example 2024-12-31T23:59:59Z
                             */
                            expires_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item was removed from the customers inventory
                             * @example 2024-02-01T10:00:00Z
                             */
                            removed_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item was revoked from the customers inventory
                             * @example 2024-02-05T14:30:00Z
                             */
                            revoked_at?: null | string;
                            /** @description Indicates the reason the delivery item was revoked from the customers inventory */
                            revoke_reason?: null | string;
                        };
                    };
                };
            };
            responses: {
                /** @description Webhook processed successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    ON_DELIVERY_ITEM_REVOKED: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Triggered when a delivery item is revoked from the customers inventory
         * @description Webhook for ON_DELIVERY_ITEM_REVOKED
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * @description The type of webhook event
                         * @example ON_DELIVERY_ITEM_REVOKED
                         */
                        event_type: components["schemas"]["WebhookEventType"];
                        /**
                         * Format: flake-id
                         * @description The ID of the Webhook Event
                         * @example 411486491630370816
                         */
                        event_id: string;
                        body: {
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Delivery Item
                             * @example 411486491630370816
                             */
                            id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Store associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            store_id: string;
                            customer?: components["schemas"]["CustomerDTO"] | null;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the customer who ordered the delivery item - which may differ to the customer because of gifting
                             * @example 411486491630370816
                             */
                            order_customer_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            checkout_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Order ID associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            order_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake Id of the Order Line ID associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            order_line_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Subscription associated with the Delivery Item
                             * @example 411486491630370816
                             */
                            subscription_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Game Server the Delivery Item is associated with
                             * @example 411486491630370816
                             */
                            execute_on_gameserver_id?: null | string;
                            execute_on_gameserver?: components["schemas"]["GameServerDTO"] | null;
                            /**
                             * Format: flake-id
                             * @description The associated Product ID of the Delivery Item
                             * @example 411486491630370816
                             */
                            product_id: string;
                            /**
                             * Format: flake-id
                             * @description The associated Product Version ID of the Delivery Item
                             * @example 411486491630370816
                             */
                            product_version_id: string;
                            product: components["schemas"]["ProductDTO"];
                            /**
                             * @description The state of the Delivery Item.  Possible options: usable, active, used, revoked, renewed
                             * @example usable
                             */
                            state: string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item was added to the customers inventory
                             * @example 2024-01-10T08:00:00Z
                             */
                            added_at: string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item become active
                             * @example 2024-01-10T09:00:00Z
                             */
                            active_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item expires
                             * @example 2024-12-31T23:59:59Z
                             */
                            expires_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item was removed from the customers inventory
                             * @example 2024-02-01T10:00:00Z
                             */
                            removed_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Delivery Item was revoked from the customers inventory
                             * @example 2024-02-05T14:30:00Z
                             */
                            revoked_at?: null | string;
                            /** @description Indicates the reason the delivery item was revoked from the customers inventory */
                            revoke_reason?: null | string;
                        };
                    };
                };
            };
            responses: {
                /** @description Webhook processed successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    ON_ORDER_COMPLETED: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Triggered when an order is completed
         * @description Webhook for ON_ORDER_COMPLETED
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * @description The type of webhook event
                         * @example ON_ORDER_COMPLETED
                         */
                        event_type: components["schemas"]["WebhookEventType"];
                        /**
                         * Format: flake-id
                         * @description The ID of the Webhook Event
                         * @example 411486491630370816
                         */
                        event_id: string;
                        body: {
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Order
                             * @example 411486491630370816
                             */
                            id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the store associated with the order
                             * @example 411486491630370816
                             */
                            store_id: string;
                            customer: components["schemas"]["CustomerDTO"];
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout associated with the order
                             * @example 411486491630370816
                             */
                            checkout_id: string;
                            checkout: components["schemas"]["CheckoutDTO"];
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Subscription associated with the order
                             * @example 411486491630370816
                             */
                            subscription_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Coupon associated with the order
                             * @example 411486491630370816
                             */
                            coupon_id?: null | string;
                            /**
                             * @description The ISO-4217 Currency Code of the order
                             * @example USD
                             */
                            currency: string;
                            /**
                             * @description Indicates if the order value was inclusive of tax
                             * @example true
                             */
                            tax_inclusive: boolean;
                            /**
                             * @description The tax amount, represented as cents
                             * @example 1500
                             */
                            tax_amount: number;
                            /**
                             * @description The discount amount, represented as cents
                             * @example 500
                             */
                            discount_amount: number;
                            /**
                             * @description The subtotal amount, represented as cents
                             * @example 10000
                             */
                            subtotal_amount: number;
                            /**
                             * @description The total amount, represented as cents
                             * @example 11000
                             */
                            total_amount: number;
                            /**
                             * Format: date-time
                             * @description Indicates when the order was created
                             * @example 2024-01-15T10:30:00Z
                             */
                            created_at: string;
                            /**
                             * Format: date-time
                             * @description Indicates when the order was completed
                             * @example 2024-01-15T10:35:00Z
                             */
                            completed_at: string;
                            /**
                             * @description The billing name of the customer associated with the order
                             * @example John Doe
                             */
                            billing_name: string;
                            /**
                             * @description The billing email address of the customer associated with the order
                             * @example john@doe.com
                             */
                            billing_email: string;
                            /**
                             * @description The ISO-3316 Country Code of the customer associated with the order
                             * @example US
                             */
                            billing_address_country: string;
                            /**
                             * @description The IPv4 or IPv6 Address of the associated customer when creating the order
                             * @example 127.0.0.1/24
                             */
                            customer_ip: string;
                            /**
                             * @description The total amount of giftcard usage associated with the order, represented in cents
                             * @example 0
                             */
                            giftcard_usage_amount: number;
                            /** @description The order lines associated with the order */
                            lines: components["schemas"]["OrderLineDTO"][];
                            /**
                             * @description A comma-seperated string of the names of the product associated with the order
                             * @example Product A, Product B
                             */
                            product_names: string;
                            /**
                             * @description A comma-seperated string of the tags of the products associated with the order
                             * @example ranks, perks
                             */
                            product_tags: string;
                            /**
                             * @description A comma-seperated string of the gameservers of the product associated with the order
                             * @example game server one, game server two
                             */
                            product_gameservers: string;
                            /**
                             * @description The status of the Order.  Possbile options: created, completed, canceled
                             * @example created
                             */
                            status: string;
                        };
                    };
                };
            };
            responses: {
                /** @description Webhook processed successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    ON_REFUND: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Triggered when a refund is completed
         * @description Webhook for ON_REFUND
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * @description The type of webhook event
                         * @example ON_REFUND
                         */
                        event_type: components["schemas"]["WebhookEventType"];
                        /**
                         * Format: flake-id
                         * @description The ID of the Webhook Event
                         * @example 411486491630370816
                         */
                        event_id: string;
                        body: {
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Refund
                             * @example 411486491630370816
                             */
                            id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the store associated with the Refund
                             * @example 411486491630370816
                             */
                            store_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of Order associated with the refund
                             * @example 411486491630370816
                             */
                            order_id: string;
                            customer?: components["schemas"]["CustomerDTO"] | null;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Payment associated with the refund
                             * @example 411486491630370816
                             */
                            payment_id: string;
                            /** @description The Payment Gateway associated with the refund */
                            gateway: string;
                            /**
                             * @description The ISO-4217 Currency Code of the Payment
                             * @example USD
                             */
                            currency: string;
                            /**
                             * @description Indicates if taxes were inclusive in the associated payment
                             * @example false
                             */
                            tax_inclusive: boolean;
                            /**
                             * @description The initial payment amount, represented in cents
                             * @example 5000
                             */
                            amount: number;
                            /**
                             * @description The initial gateway fee amount, represented in cents
                             * @example 150
                             */
                            gateway_fee_amount: number;
                            /**
                             * @description The initial tax amount, represented in cents
                             * @example 800
                             */
                            tax_amount: number;
                            /**
                             * @description The initial platform fee amount, represented in cents
                             * @example 250
                             */
                            platform_fee_amount: number;
                            /**
                             * @description The initial store net amount, represented in cents
                             * @example 3800
                             */
                            store_net_amount: number;
                            /**
                             * @description The amount refunded to the store, represented in cents
                             * @example 5000
                             */
                            store_refund_amount: number;
                            /**
                             * Format: date-time
                             * @description Indicates when the refund was created
                             * @example 2024-01-20T12:00:00Z
                             */
                            created_at: string;
                            /**
                             * Format: date-time
                             * @description Indicates when the refund was approved
                             * @example 2024-01-20T12:30:00Z
                             */
                            approved_at: string;
                            /**
                             * Format: date-time
                             * @description Indicates when the refund was pending
                             * @example 2024-01-20T12:15:00Z
                             */
                            pending_at: string;
                            /**
                             * Format: date-time
                             * @description Indicates when the refund was completed
                             * @example 2024-01-20T13:00:00Z
                             */
                            completed_at: string;
                            /**
                             * @description The email address of the intial payment customer
                             * @example john@doe.com
                             */
                            billing_email: string;
                            /**
                             * @description The status of the refund.  Possible options: created, approved, processing, completed, canceled, failed
                             * @example created
                             */
                            status: string;
                        };
                    };
                };
            };
            responses: {
                /** @description Webhook processed successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    ON_SUBSCRIPTION_ACTIVATED: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Triggered when a subscription is activated
         * @description Webhook for ON_SUBSCRIPTION_ACTIVATED
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * @description The type of webhook event
                         * @example ON_SUBSCRIPTION_ACTIVATED
                         */
                        event_type: components["schemas"]["WebhookEventType"];
                        /**
                         * Format: flake-id
                         * @description The ID of the Webhook Event
                         * @example 411486491630370816
                         */
                        event_id: string;
                        body: {
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Subscription
                             * @example 411486491630370816
                             */
                            id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Store associated with the Subscription
                             * @example 411486491630370816
                             */
                            store_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Customer associated with the Subscription
                             * @example 411486491630370816
                             */
                            customer_id: string;
                            customer: components["schemas"]["CustomerDTO"];
                            checkout: components["schemas"]["CheckoutDTO"];
                            /**
                             * @description The current billing cycle number
                             * @example 1
                             */
                            billing_cycle_sequence: number;
                            /**
                             * @description The billing email address of the customer associated with the Subscription
                             * @example john@doe.com
                             */
                            billing_email: string;
                            /**
                             * @description The subtotal amount of the Subscription represented in cents
                             * @example 9999
                             */
                            subtotal_amount: number;
                            /**
                             * @description The tax amount of the Subscription represented in cents
                             * @example 1500
                             */
                            tax_amount: number;
                            /**
                             * @description The discount amount applied to the Subscription represented in cents
                             * @example 1000
                             */
                            discount_amount: number;
                            /**
                             * @description The total amount of the Subscription represented in cents
                             * @example 10499
                             */
                            total_amount: number;
                            /**
                             * @description The currency code of the Subscription
                             * @example USD
                             */
                            currency: string;
                            /**
                             * @description The interval value of the billing cycle
                             * @example 1
                             */
                            interval_value: number;
                            /**
                             * @description The interval scale of the billing cycle
                             * @example month
                             */
                            interval_scale: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Product associated with the Subscription
                             * @example 411486491630370816
                             */
                            product_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Product Version associated with the Subscription
                             * @example 411486491630370816
                             */
                            product_version_id: string;
                            /**
                             * @description The name of the Product associated with the Subscription
                             * @example Example Product
                             */
                            product_name: string;
                            /**
                             * @description The image URL of the Product associated with the Subscription
                             * @example https://example.com/image.jpg
                             */
                            product_image_url?: null | string;
                            product: components["schemas"]["ProductDTO"];
                            /**
                             * @description The ISO-3166 Country Code of customer associated with the Subscription
                             * @example US
                             */
                            billing_country: string;
                            /**
                             * @description The initial subtotal amount of the Subscription represented in cents
                             * @example 9999
                             */
                            initial_subtotal_amount: number;
                            /**
                             * @description The initial tax amount of the Subscription represented in cents
                             * @example 1500
                             */
                            initial_tax_amount: number;
                            /**
                             * @description The initial discount amount applied to the Subscription represented in cents
                             * @example 2000
                             */
                            initial_discount_amount: number;
                            /**
                             * @description The initial gift card usage amount applied to the Subscription represented in cents
                             * @example 0
                             */
                            initial_giftcard_usage_amount: number;
                            /**
                             * @description The initial total amount of the Subscription represented in cents
                             * @example 9499
                             */
                            initial_total_amount: number;
                            /**
                             * @description The IP address of the Customer
                             * @example 127.0.0.1/24
                             */
                            customer_ip: string;
                            /**
                             * Format: date-time
                             * @description The start date of the current billing period
                             * @example 2024-02-01T00:00:00Z
                             */
                            current_period_start?: null | string;
                            /**
                             * Format: date-time
                             * @description The end date of the current billing period
                             * @example 2024-03-01T00:00:00Z
                             */
                            current_period_end?: null | string;
                            /**
                             * Format: date-time
                             * @description The date and time when the Subscription was created
                             * @example 2024-02-01T10:15:00Z
                             */
                            created_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the subscription was active
                             * @example 2024-02-01T10:20:00Z
                             */
                            active_at?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout associated with the Subscription
                             * @example 411486491630370816
                             */
                            checkout_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout Line associated with the Subscription
                             * @example 411486491630370816
                             */
                            checkout_line_id: string;
                            /**
                             * @description The current status of the Subscription.  Possible options: created, active, canceled
                             * @example created
                             */
                            status: string;
                        };
                    };
                };
            };
            responses: {
                /** @description Webhook processed successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    ON_SUBSCRIPTION_CANCELED: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Triggered when a subscription is canceled
         * @description Webhook for ON_SUBSCRIPTION_CANCELED
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * @description The type of webhook event
                         * @example ON_SUBSCRIPTION_CANCELED
                         */
                        event_type: components["schemas"]["WebhookEventType"];
                        /**
                         * Format: flake-id
                         * @description The ID of the Webhook Event
                         * @example 411486491630370816
                         */
                        event_id: string;
                        body: {
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Subscription
                             * @example 411486491630370816
                             */
                            id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Store associated with the Subscription
                             * @example 411486491630370816
                             */
                            store_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Customer associated with the Subscription
                             * @example 411486491630370816
                             */
                            customer_id: string;
                            customer: components["schemas"]["CustomerDTO"];
                            checkout: components["schemas"]["CheckoutDTO"];
                            /**
                             * @description The current billing cycle number
                             * @example 1
                             */
                            billing_cycle_sequence: number;
                            /**
                             * @description The billing email address of the customer associated with the Subscription
                             * @example cancel@example.com
                             */
                            billing_email: string;
                            /**
                             * @description The subtotal amount of the Subscription represented in cents
                             * @example 4999
                             */
                            subtotal_amount: number;
                            /**
                             * @description The tax amount of the Subscription represented in cents
                             * @example 750
                             */
                            tax_amount: number;
                            /**
                             * @description The discount amount applied to the Subscription represented in cents
                             * @example 0
                             */
                            discount_amount: number;
                            /**
                             * @description The total amount of the Subscription represented in cents
                             * @example 5749
                             */
                            total_amount: number;
                            /**
                             * @description The currency code of the Subscription
                             * @example USD
                             */
                            currency: string;
                            /**
                             * @description The interval value of the billing cycle
                             * @example 1
                             */
                            interval_value: number;
                            /**
                             * @description The interval scale of the billing cycle
                             * @example annually
                             */
                            interval_scale: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Product associated with the Subscription
                             * @example 411486491630370816
                             */
                            product_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Product Version associated with the Subscription
                             * @example 411486491630370816
                             */
                            product_version_id: string;
                            /**
                             * @description The name of the Product associated with the Subscription
                             * @example Starter Plan
                             */
                            product_name: string;
                            /**
                             * @description The image URL of the Product associated with the Subscription
                             * @example https://example.com/starter.jpg
                             */
                            product_image_url?: null | string;
                            product: components["schemas"]["ProductDTO"];
                            /**
                             * @description The ISO-3166 country code of customer associated with the Subscription
                             * @example US
                             */
                            billing_country: string;
                            /**
                             * @description The initial subtotal amount of the Subscription represented in cents
                             * @example 4999
                             */
                            initial_subtotal_amount: number;
                            /**
                             * @description The initial tax amount of the Subscription represented in cents
                             * @example 750
                             */
                            initial_tax_amount: number;
                            /**
                             * @description The initial discount amount applied to the Subscription represented in cents
                             * @example 500
                             */
                            initial_discount_amount: number;
                            /**
                             * @description The initial gift card usage amount applied to the Subscription represented in cents
                             * @example 0
                             */
                            initial_giftcard_usage_amount: number;
                            /**
                             * @description The initial total amount of the Subscription represented in cents
                             * @example 5249
                             */
                            initial_total_amount: number;
                            /**
                             * @description The IP address of the Customer
                             * @example 127.0.0.1/24
                             */
                            customer_ip: string;
                            /**
                             * Format: date-time
                             * @description The start date of the current billing period
                             * @example 2024-04-01T00:00:00Z
                             */
                            current_period_start?: null | string;
                            /**
                             * Format: date-time
                             * @description The end date of the current billing period
                             * @example 2025-04-01T00:00:00Z
                             */
                            current_period_end?: null | string;
                            /**
                             * Format: date-time
                             * @description The date and time when the Subscription was created
                             * @example 2024-04-01T09:30:00Z
                             */
                            created_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the subscription was active
                             * @example 2024-04-01T09:35:00Z
                             */
                            active_at?: null | string;
                            /**
                             * Format: date-time
                             * @description Indicates when the subscription was canceled
                             * @example 2024-05-15T14:20:00Z
                             */
                            canceled_at?: null | string;
                            /**
                             * @description The reason for the subscription cancellation
                             * @example customer_request
                             */
                            cancel_reason?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout associated with the Subscription
                             * @example 411486491630370816
                             */
                            checkout_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout Line associated with the Subscription
                             * @example 411486491630370816
                             */
                            checkout_line_id: string;
                            /**
                             * @description The current status of the Subscription.  Possible options: created, active, canceled
                             * @example created
                             */
                            status: string;
                        };
                    };
                };
            };
            responses: {
                /** @description Webhook processed successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    ON_TRIAL_ACTIVATED: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Triggered when a trial is activated
         * @description Webhook for ON_TRIAL_ACTIVATED
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * @description The type of webhook event
                         * @example ON_TRIAL_ACTIVATED
                         */
                        event_type: components["schemas"]["WebhookEventType"];
                        /**
                         * Format: flake-id
                         * @description The ID of the Webhook Event
                         * @example 411486491630370816
                         */
                        event_id: string;
                        body: {
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Trial
                             * @example 411486491630370816
                             */
                            id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Store associated with the Trial
                             * @example 411486491630370816
                             */
                            store_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Customer associated with the Trial
                             * @example 411486491630370816
                             */
                            customer_id: string;
                            customer: components["schemas"]["CustomerDTO"];
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout associated with the Trial
                             * @example 411486491630370816
                             */
                            checkout_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout Line associated with the Trial
                             * @example 411486491630370816
                             */
                            checkout_line_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Product associated with the Trial
                             * @example 411486491630370816
                             */
                            product_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Product Version associated with the Trial
                             * @example 411486491630370816
                             */
                            product_version_id: string;
                            /**
                             * @description The name of the Product associated with the Trial
                             * @example Example Product
                             */
                            product_name: string;
                            /**
                             * @description The image URL of the Product associated with the Trial
                             * @example https://example.com/image.jpg
                             */
                            product_image_url?: null | string;
                            /**
                             * @description The period value of the Trial
                             * @example 1
                             */
                            period_value: number;
                            /**
                             * @description The period scale of the Trial
                             * @example month
                             */
                            period_scale: string;
                            /**
                             * Format: date-time
                             * @description The start date of the Trial
                             * @example 2024-06-10T00:00:00Z
                             */
                            starts_at?: null | string;
                            /**
                             * Format: date-time
                             * @description The end date of the Trial
                             * @example 2024-06-17T23:59:59Z
                             */
                            ends_at?: null | string;
                            /**
                             * @description The current status of the Trial.  Possible options: created, active, canceled, completed
                             * @example created
                             */
                            status: string;
                            /**
                             * Format: date-time
                             * @description The date and time when the Trial was created
                             * @example 2024-06-10T08:30:00Z
                             */
                            created_at: string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Trial was canceled
                             * @example 2024-06-15T10:15:00Z
                             */
                            canceled_at?: null | string;
                        };
                    };
                };
            };
            responses: {
                /** @description Webhook processed successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    ON_TRIAL_COMPLETED: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Triggered when a trial is completed
         * @description Webhook for ON_TRIAL_COMPLETED
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * @description The type of webhook event
                         * @example ON_TRIAL_COMPLETED
                         */
                        event_type: components["schemas"]["WebhookEventType"];
                        /**
                         * Format: flake-id
                         * @description The ID of the Webhook Event
                         * @example 411486491630370816
                         */
                        event_id: string;
                        body: {
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Trial
                             * @example 411486491630370816
                             */
                            id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Store associated with the Trial
                             * @example 411486491630370816
                             */
                            store_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Customer associated with the Trial
                             * @example 411486491630370816
                             */
                            customer_id: string;
                            customer: components["schemas"]["CustomerDTO"];
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout associated with the Trial
                             * @example 411486491630370816
                             */
                            checkout_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout Line associated with the Trial
                             * @example 411486491630370816
                             */
                            checkout_line_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Product associated with the Trial
                             * @example 411486491630370816
                             */
                            product_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Product Version associated with the Trial
                             * @example 411486491630370816
                             */
                            product_version_id: string;
                            /**
                             * @description The name of the Product associated with the Trial
                             * @example Example Product
                             */
                            product_name: string;
                            /**
                             * @description The image URL of the Product associated with the Trial
                             * @example https://example.com/image.jpg
                             */
                            product_image_url?: null | string;
                            /**
                             * @description The period value of the Trial
                             * @example 1
                             */
                            period_value: number;
                            /**
                             * @description The period scale of the Trial
                             * @example month
                             */
                            period_scale: string;
                            /**
                             * Format: date-time
                             * @description The start date of the Trial
                             * @example 2024-06-10T00:00:00Z
                             */
                            starts_at?: null | string;
                            /**
                             * Format: date-time
                             * @description The end date of the Trial
                             * @example 2024-06-17T23:59:59Z
                             */
                            ends_at?: null | string;
                            /**
                             * @description The current status of the Trial.  Possible options: created, active, canceled, completed
                             * @example created
                             */
                            status: string;
                            /**
                             * Format: date-time
                             * @description The date and time when the Trial was created
                             * @example 2024-06-10T08:30:00Z
                             */
                            created_at: string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Trial was canceled
                             * @example 2024-06-15T10:15:00Z
                             */
                            canceled_at?: null | string;
                        };
                    };
                };
            };
            responses: {
                /** @description Webhook processed successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    ON_TRIAL_CANCELED: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Triggered when a trial is canceled
         * @description Webhook for ON_TRIAL_CANCELED
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": {
                        /**
                         * @description The type of webhook event
                         * @example ON_TRIAL_CANCELED
                         */
                        event_type: components["schemas"]["WebhookEventType"];
                        /**
                         * Format: flake-id
                         * @description The ID of the Webhook Event
                         * @example 411486491630370816
                         */
                        event_id: string;
                        body: {
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Trial
                             * @example 411486491630370816
                             */
                            id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Store associated with the Trial
                             * @example 411486491630370816
                             */
                            store_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Customer associated with the Trial
                             * @example 411486491630370816
                             */
                            customer_id: string;
                            customer: components["schemas"]["CustomerDTO"];
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout associated with the Trial
                             * @example 411486491630370816
                             */
                            checkout_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Checkout Line associated with the Trial
                             * @example 411486491630370816
                             */
                            checkout_line_id?: null | string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Product associated with the Trial
                             * @example 411486491630370816
                             */
                            product_id: string;
                            /**
                             * Format: flake-id
                             * @description The Flake ID of the Product Version associated with the Trial
                             * @example 411486491630370816
                             */
                            product_version_id: string;
                            /**
                             * @description The name of the Product associated with the Trial
                             * @example Example Product
                             */
                            product_name: string;
                            /**
                             * @description The image URL of the Product associated with the Trial
                             * @example https://example.com/image.jpg
                             */
                            product_image_url?: null | string;
                            /**
                             * @description The period value of the Trial
                             * @example 1
                             */
                            period_value: number;
                            /**
                             * @description The period scale of the Trial
                             * @example month
                             */
                            period_scale: string;
                            /**
                             * Format: date-time
                             * @description The start date of the Trial
                             * @example 2024-06-10T00:00:00Z
                             */
                            starts_at?: null | string;
                            /**
                             * Format: date-time
                             * @description The end date of the Trial
                             * @example 2024-06-17T23:59:59Z
                             */
                            ends_at?: null | string;
                            /**
                             * @description The current status of the Trial.  Possible options: created, active, canceled, completed
                             * @example created
                             */
                            status: string;
                            /**
                             * Format: date-time
                             * @description The date and time when the Trial was created
                             * @example 2024-06-10T08:30:00Z
                             */
                            created_at: string;
                            /**
                             * Format: date-time
                             * @description Indicates when the Trial was canceled
                             * @example 2024-06-15T10:15:00Z
                             */
                            canceled_at?: null | string;
                        };
                    };
                };
            };
            responses: {
                /** @description Webhook processed successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Internal server error */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export interface components {
    schemas: {
        CheckoutDTO: {
            /**
             * Format: flake-id
             * @description The Flake ID of the Checkout
             * @example 411486491630370816
             */
            id: string;
            /** @description Metadata associated with the checkout */
            metadata: {
                [key: string]: string;
            };
            /** @description The lines of the Checkout */
            lines: components["schemas"]["CheckoutLineDTO"][];
        };
        CheckoutLineDTO: {
            /**
             * Format: flake-id
             * @description The ID of the Checkout line
             * @example 411486491630370816
             */
            id: string;
            /**
             * Format: flake-id
             * @description The Product Flake ID of the Checkout Line
             * @example 411486491630370816
             */
            product_id: string;
            /**
             * Format: flake-id
             * @description The Product Version Flake ID of the Checkout Line
             * @example 411486491630370816
             */
            product_version_id: string;
            /** @description Metadata associated with the Checkout Line */
            metadata: {
                [key: string]: string;
            };
        };
        CustomerDTO: {
            /**
             * Format: flake-id
             * @description The Flake ID of the Customer
             * @example 411486491630370816
             */
            id: string;
            /** @example John */
            name?: null | string;
            steam: components["schemas"]["SteamCustomerDTO"];
            minecraft: components["schemas"]["MinecraftCustomerDTO"];
            profile: components["schemas"]["GenericProfileDTO"];
        };
        GameServerDTO: {
            /**
             * Format: flake-id
             * @description The Flake ID of the Game Server
             * @example 411486491630370816
             */
            id: string;
            /**
             * @description The name of the Game Server
             * @example John
             */
            name: string;
            /** @description Indicates if the Game Server is enabled */
            enabled: boolean;
        };
        GenericProfileDTO: {
            id: string;
            platform: string;
            /** @example John */
            name: string;
            avatar_url: string;
        };
        MinecraftCustomerDTO: {
            id: string;
            /** @example Notch */
            name: string;
            avatar_url: string;
        };
        OrderDTO: {
            /**
             * Format: flake-id
             * @description The Flake ID of the Order
             * @example 411486491630370816
             */
            id: string;
            /**
             * Format: flake-id
             * @description The Flake ID of the store associated with the order
             * @example 411486491630370816
             */
            store_id: string;
            customer: components["schemas"]["CustomerDTO"];
            /**
             * Format: flake-id
             * @description The Flake ID of the Checkout associated with the order
             * @example 411486491630370816
             */
            checkout_id: string;
            checkout: components["schemas"]["CheckoutDTO"];
            /**
             * Format: flake-id
             * @description The Flake ID of the Subscription associated with the order
             * @example 411486491630370816
             */
            subscription_id?: null | string;
            /**
             * Format: flake-id
             * @description The Flake ID of the Coupon associated with the order
             * @example 411486491630370816
             */
            coupon_id?: null | string;
            /**
             * @description The ISO-4217 Currency Code of the order
             * @example USD
             */
            currency: string;
            /**
             * @description Indicates if the order value was inclusive of tax
             * @example true
             */
            tax_inclusive: boolean;
            /**
             * @description The tax amount, represented as cents
             * @example 1500
             */
            tax_amount: number;
            /**
             * @description The discount amount, represented as cents
             * @example 500
             */
            discount_amount: number;
            /**
             * @description The subtotal amount, represented as cents
             * @example 10000
             */
            subtotal_amount: number;
            /**
             * @description The total amount, represented as cents
             * @example 11000
             */
            total_amount: number;
            /**
             * Format: date-time
             * @description Indicates when the order was created
             * @example 2024-01-15T10:30:00Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @description Indicates when the order was completed
             * @example 2024-01-15T10:35:00Z
             */
            completed_at: string;
            /**
             * @description The billing name of the customer associated with the order
             * @example John Doe
             */
            billing_name: string;
            /**
             * @description The billing email address of the customer associated with the order
             * @example john@doe.com
             */
            billing_email: string;
            /**
             * @description The ISO-3316 Country Code of the customer associated with the order
             * @example US
             */
            billing_address_country: string;
            /**
             * @description The IPv4 or IPv6 Address of the associated customer when creating the order
             * @example 127.0.0.1/24
             */
            customer_ip: string;
            /**
             * @description The total amount of giftcard usage associated with the order, represented in cents
             * @example 0
             */
            giftcard_usage_amount: number;
            /** @description The order lines associated with the order */
            lines: components["schemas"]["OrderLineDTO"][];
            /**
             * @description A comma-seperated string of the names of the product associated with the order
             * @example Product A, Product B
             */
            product_names: string;
            /**
             * @description A comma-seperated string of the tags of the products associated with the order
             * @example ranks, perks
             */
            product_tags: string;
            /**
             * @description A comma-seperated string of the gameservers of the product associated with the order
             * @example game server one, game server two
             */
            product_gameservers: string;
            /**
             * @description The status of the Order.  Possbile options: created, completed, canceled
             * @example created
             */
            status: string;
        };
        OrderLineDTO: {
            /**
             * Format: flake-id
             * @description The Flake ID of the Order Line
             * @example 411486491630370816
             */
            id: string;
            /**
             * Format: flake-id
             * @description The Flake ID of the Checkout Line associated with this Order Line
             * @example 411486491630370816
             */
            checkout_line_id: string;
            /**
             * Format: flake-id
             * @description The Flake ID of the Product ID associated with this Order Line
             * @example 411486491630370816
             */
            product_id: string;
            /**
             * Format: flake-id
             * @description The Flake ID of the Product Version ID associated with this Order Line
             * @example 411486491630370816
             */
            product_version_id: string;
            product: components["schemas"]["ProductDTO"];
            /** @description The name of the product associated with this Order Line */
            product_name: string;
            /** @description The Image URL of the Product associated with this Order Line */
            product_image_url?: null | string;
            /**
             * Format: flake-id
             * @description The Flake ID of the Subscription associated with this Order Line
             * @example 411486491630370816
             */
            subscription_id?: null | string;
            /**
             * @description The value of the interval in which the subscription associated with this Order Line renews at
             * @example 1
             */
            subscription_interval_value?: null | number;
            /**
             * @description The value of the scale in which the subscription associated with this Order Line renews at
             * @example month
             */
            subscription_interval_scale?: null | string;
            /**
             * Format: flake-id
             * @description The Flake ID of the Trial associated with this Order Line
             * @example 411486491630370816
             */
            trial_id?: null | string;
            gift_to_customer?: components["schemas"]["CustomerDTO"] | null;
            /**
             * @description The price of the Order Line
             * @example 1000
             */
            price: number;
            /**
             * @description The quantity of the Order Line
             * @example 1
             */
            quantity: number;
            /**
             * @description The discount amount of the order line, represented in cents
             * @example 0
             */
            discount_amount: number;
            /**
             * @description The subtotal amount of the order line, represented in cents
             * @example 1000
             */
            subtotal_amount: number;
            /**
             * @description The tax amount of the order line, represented in cents
             * @example 100
             */
            tax_amount: number;
            /**
             * @description The total amount of the order line, represented in cents
             * @example 1100
             */
            total_amount: number;
            /**
             * Format: flake-id
             * @description The Flake ID of which was the selected Game Server ID for the Order Line
             * @example 411486491630370816
             */
            selected_gameserver_id?: null | string;
        };
        ProductCommandDTO: {
            /**
             * @description The stage of which the Product Command should be executed.  Possible options: on_purchase, on_expire, on_refund, on_renew, on_chargeback, on_trial_start, on_trial_expire
             * @example on_purchase
             */
            stage: string;
            /** @description The command to execute */
            content: string;
            /** @description Indicated if the command should be executed only when the customer is online */
            online_only: boolean;
        };
        ProductDTO: {
            /**
             * Format: flake-id
             * @description The Flake ID of the Product
             * @example 411486491630370816
             */
            id: string;
            /**
             * Format: flake-id
             * @description The Flake ID of the Store
             * @example 411486491630370816
             */
            store_id: string;
            /**
             * Format: flake-id
             * @description The Flake ID of the Version of the Product
             * @example 411486491630370816
             */
            version_id: string;
            /** @description The Image URL of the product */
            image_url?: null | string;
            /** @description The URL-Friendly Slug of the Product */
            slug: string;
            /** @description The name of the Product */
            name: string;
            /** @description The description of the product */
            description: string;
            /** @description Indicates if the product is enabled. */
            enabled: boolean;
            /** @description The label of the product */
            label?: null | string;
            /** @description The sort order of the product */
            sort_order: number;
            /** @description The price of the product, represented in cents. */
            price: number;
            /** @description Indicates if the customer must select a single game server when purchasing the product */
            single_game_server_only: boolean;
            /** @description Indicates if one-time purchases are supported on the product */
            allow_one_time_purchase: boolean;
            /** @description Indicates if subscriptions are supported on the product */
            allow_subscription: boolean;
            /**
             * @description The value of the interval in which the product subscription renews at
             * @example 1
             */
            subscription_interval_value?: null | number;
            /**
             * @description The value of the interval in which the product subscription renews at
             * @example month
             */
            subscription_interval_scale?: null | string;
            /** @description Indicates whether automatic removal is enabled */
            remove_after_enabled: boolean;
            /**
             * @description The value of the time in which this product should be removed
             * @example 1
             */
            remove_after_time_value?: null | number;
            /**
             * @description The scale of the time in which this product should be removed
             * @example month
             */
            remove_after_time_scale?: null | string;
            /** @description The tags associated with the product */
            tags: components["schemas"]["ProductTagDTO"][];
            /** @description A comma-seperated string of all the tags associated with the product */
            tag_names: string;
            /** @description The game servers associated with the product */
            gameservers: components["schemas"]["ProductGameServerDTO"][];
            /** @description A comma-seperated string of all the game servers associated with the product */
            gameserver_names: string;
            /** @description The commands associated with the product */
            commands: components["schemas"]["ProductCommandDTO"][];
            /**
             * Format: date-time
             * @description When the product was created
             */
            created_at?: null | string;
            /**
             * Format: date-time
             * @description When the product was last updated
             */
            updated_at?: null | string;
            /** @description The metadata of the product */
            metadata: {
                [key: string]: string;
            };
        };
        ProductGameServerDTO: {
            /**
             * Format: flake-id
             * @description The ID of the Game Server
             * @example 411486491630370816
             */
            id: string;
            /** @description The name of the Game Server */
            name: string;
            /** @description Indicates if the Game Server is enabled */
            enabled: boolean;
        };
        ProductTagDTO: {
            /**
             * Format: flake-id
             * @description The Flake ID of the Product Tag
             * @example 411486491630370816
             */
            id: string;
            /** @description The URL-Friendly slug of the Product Tag */
            slug: string;
            /** @description The name of the Product Tag */
            name: string;
        };
        SteamCustomerDTO: {
            /**
             * @description SteamID64
             * @example 76561197960287930
             */
            id: string;
            /**
             * @description The name on the Steam Profile
             * @example John
             */
            name: string;
            /** @description The Steam Avatar URL */
            avatar_url: string;
        };
        /**
         * @description The type of webhook event
         * @enum {string}
         */
        WebhookEventType: "ON_ORDER_COMPLETED" | "ON_REFUND" | "ON_CHARGEBACK" | "ON_DELIVERY_ITEM_ADDED" | "ON_DELIVERY_ITEM_ACTIVATED" | "ON_DELIVERY_ITEM_USED" | "ON_DELIVERY_ITEM_REVOKED" | "ON_SUBSCRIPTION_ACTIVATED" | "ON_SUBSCRIPTION_RENEWED" | "ON_SUBSCRIPTION_CANCELED" | "ON_DISCORD_ACCOUNT_LINKED_TO_CHECKOUT" | "ON_CONNECTED_USER_REGISTERED" | "ON_CONNECTED_USER_BECAME_PAYABLE" | "ON_CONNECTED_USER_PAYOUT_CREATED" | "ON_CONNECTED_USER_PAYOUT_COMPLETED" | "ON_CONNECTED_USER_TRANSACTION_INSERTED" | "ON_CONNECTED_USER_BECAME_UNPAYABLE" | "ON_TRIAL_ACTIVATED" | "ON_TRIAL_COMPLETED" | "ON_TRIAL_CANCELED" | "ON_PURCHASE_FOLLOW_UP_ATTEMPT_EMAIL_SENT" | "ON_PURCHASE_FOLLOW_UP_ATTEMPT_SUCCEEDED" | "ON_ABANDONED_CHECKOUT_RECOVERY_ATTEMPT_EMAIL_SENT" | "ON_ABANDONED_CHECKOUT_RECOVERY_ATTEMPT_SUCCEEDED" | "ON_CHARGEBACK_CLOSED" | "ON_DELIVERY_ITEM_EXPIRED" | "ON_DELIVERY_ITEM_RENEWED";
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;


export const operationMappings = {} as const;
