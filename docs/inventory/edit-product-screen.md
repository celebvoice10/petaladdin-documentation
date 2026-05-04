---
title: Edit Product Screen
---

# Edit Product Screen

The `Edit Product` screen updates an existing product record for the active clinic.

## What can be changed

Staff can update:

- category
- status
- name
- SKU
- barcode
- unit
- HSN
- location
- sale price
- cost price
- MRP
- tax profiles
- reorder level
- expiry date
- behavior flags

## Important difference from create

For existing products, `Current Stock` becomes read-only. Stock is derived from purchases, batches, stock adjustments, and billing instead of being edited directly here.

## Best practice

Use this screen for pricing, classification, and tax corrections. Use purchase or stock adjustment workflows for inventory quantity changes.

## Related pages

- [Create Product Screen](./create-product-screen.md)
- [Product Details Screen](./product-details-screen.md)
