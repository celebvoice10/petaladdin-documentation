---
sidebar_label: "Users"
title: "Staff User Management Guide for Petaladdin"
description: "Learn how clinic administrators add, update, disable, and manage staff user accounts in Petaladdin for daily clinic operations."
keywords:
  - "staff users"
  - "user management"
  - "clinic staff"
---


# Users

The `Users` page is where clinic administrators add staff accounts, assign them to a clinic, and control their working access.

## What users can do here

- review staff capacity and clinic allotment
- search by name, email, phone, or username
- filter by clinic, staff type, permission role, and status
- use `Add Staff`
- edit existing staff access and profile details

## What the staff list shows

Each row can include:

- staff name
- email and phone
- clinic
- assigned permission roles
- staff type
- clinic title
- account status

## Filters available

The page supports:

- `Clinic`
- `Staff Type`
- `Permission Role`
- `Status`
- sort order

Use filters when reviewing a large team or checking who has access to a specific clinic.

The page also shows:

- `Add Staff`
- `Filters`
- `Reset`

## Adding a staff member

1. Open `Users`.
2. Select `Add Staff`.
3. Enter the staff name, username, email, and phone.
4. Set a password for the first login.
5. Choose `Status`.
6. Select the clinic.
7. Choose the `Staff Type`.
8. Add the staff title if needed.
9. Assign one or more `Permission Roles`.
10. Select `Save User`.

## Doctor-specific fields

If the chosen `Staff Type` is doctor, the form also shows:

- qualification
- registration number

This helps Petaladdin connect the staff record with doctor-based clinical workflows and certificates.

## Important notes

- `Staff Type` groups the person operationally, but `Permission Roles` decide what modules they can open.
- If no permission roles exist yet, create them first from the `Permission Roles` page.
- Clinic admins may see staff slot limits based on the active subscription package.

## Common mistakes to avoid

- assigning the wrong clinic
- choosing a staff type but forgetting the permission role
- leaving inactive users active after staff leave the clinic

## Related pages

- [Permission Roles](./permission-roles.md)
- [Access Audit](./access-audit.md)
- [Doctor Profiles](../clinical/doctor-profiles.md)
