---
sidebar_label: "Product Import Workflow"
title: "Product Import Workflow Guide for Petaladdin"
description: "Learn how inventory teams import products into Petaladdin, prepare files, validate item data, and update the product catalog efficiently."
keywords:
  - "product import"
  - "bulk import"
  - "inventory upload"
---


# Product Import Workflow

The `Import Inventory Catalog` workflow is used to create or update products and services in bulk for the active clinic.

## Important distinction

This import does **not** change stock on hand. It updates catalog data only.

## Main workflow

1. Open `Import Inventory Catalog`.
2. Upload a CSV, XLSX, or XLS file.
3. Preview the import.
4. Review row-level changes and any errors.
5. Confirm the import if the preview is correct.

## What the preview shows

The preview can show:

- processed rows
- create count
- update count
- failed rows
- skipped rows
- preview rows
- created categories
- tax guidance notes

## Matching rules

Rows are matched by:

1. `id`
2. then clinic-scoped `sku`

## Related pages

- [Inventory](./product-catalog-management.md)
- [Stock Adjustment Import Workflow](./stock-adjustment-import-workflow.md)
