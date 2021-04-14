---
permalink: /nodes/n8n-nodes-base.paddle
description: Learn how to use the Paddle node in n8n
---

# Paddle

[Paddle](https://www.paddle.com/) is an all-in-one SaaS Commerce platform for software and SaaS companies to run and grow their business.

::: tip 🔑 Credentials
You can find authentication information for this node [here](../../../credentials/Paddle/README.md).
:::

## Basic Operations

::: details Coupon
- Create a coupon
- Get all coupons
- Update a coupon
:::

::: details Payment
- Get all payments
- Reschedule payment
:::

::: details Plan
- Get a plan
- Get all plans
:::

::: details Product
- Get all products
:::

::: details User
- Get all users
:::


## Example Usage

This workflow allows you to create a coupon on Paddle. You can also find the [workflow](https://n8n.io/workflows/659) on n8n.io. This example usage workflow would use the following nodes.
- [Start](../../core-nodes/Start/README.md)
- [Paddle]()

The final workflow should look like the following image.

![A workflow with the Paddle node](./workflow.png)

### 1. Start node

The start node exists by default when you create a new workflow.


### 2. Paddle node (create: coupon)

1. First of all, you'll have to enter credentials for the Paddle node. You can find out how to do that [here](../../../credentials/Paddle/README.md).
2. Enter the discount amount in the ***Discount Amount*** field.
3. Click on the ***Add Field*** button and select 'Coupon Code' from the dropdown list.
4. Enter the coupon code in the ***Coupon Code*** field.
5. Click on ***Execute Node*** to run the node.

![Using the Paddle node to create a coupon](./Paddle_node.png)