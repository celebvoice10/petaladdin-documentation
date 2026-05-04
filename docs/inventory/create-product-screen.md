---
title: Create Product Screen
---

# Create Product Screen

The `Add Product` form is used to create a new product, medicine, service, or stock item for the current clinic.

## What the form includes

- clinic context from the header
- category selector with `New` shortcut
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
- sales tax profile
- purchase tax profile
- opening stock
- reorder level
- expiry date
- behavior flags

## Behavior flags

The form supports these toggles:

- `Is sellable`
- `Is stock item`
- `Is service`
- `Is medicine`

These flags affect how the item behaves in billing and inventory workflows.

## Important form behavior

- the clinic is taken from the active header clinic
- service items hide stock-only fields
- medicine items automatically behave like stock and sellable items
- opening stock is only entered during initial creation

## When to use this screen

Use it when:

- a new medicine is introduced
- a new retail product is added
- a new clinic service must be billable

## Related pages

- [Edit Product Screen](./edit-product-screen.md)
- [Product Details Screen](./product-details-screen.md)
