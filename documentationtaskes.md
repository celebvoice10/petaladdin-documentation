# Petaladdin Documentation Tasks

This tracker is based on the current Petaladdin Laravel app in `C:\codex projects\petaladdin\laravel-app`, including:

- application routes in [web.php](</C:/codex projects/petaladdin/laravel-app/routes/web.php>)
- user-facing navigation in [sidebar-nav.blade.php](</C:/codex projects/petaladdin/laravel-app/resources/views/layouts/sidebar-nav.blade.php>)
- dashboard focus areas in [dashboard.blade.php](</C:/codex projects/petaladdin/laravel-app/resources/views/dashboard.blade.php>)

The goal is to build user documentation for clinic and hospital teams, not developer docs.

This documentation is for tenant-side clinic and hospital users only. Super Admin features are out of scope and should not be documented in this help center.

Primary audience:

- reception and front-desk staff
- doctors and nurses
- billing and inventory staff
- clinic administrators

Secondary audience:

- pet parents, only if we decide to keep a small separate portal-help section later

## Recommended Documentation Approach

Write in this order:

1. workflow guides
2. role-based guides
3. screen-by-screen reference pages
4. troubleshooting and FAQs

Why this order:

- clinic teams usually think in tasks, not screen names
- workflow docs reduce support load fastest
- screen reference pages are easier to write after workflow structure is clear

## Current Documentation Status

### Completed

- [x] Docusaurus site setup and GitHub Pages publishing
- [x] Custom domain setup for `docs.petaladdin.com`
- [x] Homepage and basic help-center structure
- [x] Intro page
- [x] Accessing Petaladdin
- [x] Clinic Setup
- [x] User Roles Overview
- [x] Managing Appointments
- [x] Patient Check-In and Check-Out
- [x] Front Desk Workflow
- [x] Patient Profiles
- [x] Dashboard Overview
- [x] Managing Pet Parents
- [x] Managing Pets
- [x] Pet Profile Workspace
- [x] Consultations and Treatment Notes
- [x] Invoices and Payments
- [x] POS Checkout Workflow
- [x] Invoice Management
- [x] Managing Medicines and Stock
- [x] Doctor Profiles
- [x] Certificate Workspace
- [x] Product Catalog Management
- [x] Purchase Management
- [x] Stock Adjustment Management
- [x] Supplier Management
- [x] Product Category Management
- [x] Product Import Workflow
- [x] Stock Adjustment Import Workflow
- [x] Quotation Management
- [x] Coupon Management
- [x] Membership Plan Management
- [x] Users and Roles
- [x] Reports Overview
- [x] Daily Financial Reports
- [x] Vaccination Schedule Management
- [x] Deworming Schedule Management
- [x] Common Issues
- [x] Passwords and Browser Support

### In Progress

- [ ] Align docs more closely with real screen names, field labels, and buttons from each module
- [x] Add screenshots and annotations for key workflows
- [x] Add role-based task maps for receptionist, doctor, billing staff, and admin

### Not Started

- [x] My Account documentation
- [ ] Full certificates reference
- [ ] Full Inventory documentation
- [ ] Full Billing documentation
- [x] Reports by report type
- [x] Communication module documentation
- [x] Settings documentation
- [x] Subscription documentation for clinic admins

## Module-Based Documentation Plan

## Priority 1: Core Daily Use

These should be completed first because they match the main clinic flow.

- [x] Appointments workflow
- [x] Front desk workflow
- [x] Doctor workflow
- [x] Billing workflow
- [x] Clinic admin workflow
- [x] Consultation notes workflow
- [x] Billing and payments basics
- [x] Inventory stock basics
- [x] Dashboard overview and quick actions
- [x] Pet parent registration
- [x] Pet registration
- [x] Pet profile and medical history
- [x] Vaccination schedule workflow
- [x] Deworming schedule workflow
- [x] POS checkout workflow
- [x] Invoice creation workflow
- [x] Refund workflow

## Priority 2: Important Operational Modules

- [x] Clinics module
- [x] Users module
- [x] Permission Roles module
- [x] Access Audit module
- [x] Doctors module
- [x] Certificates module
- [x] Quotations module
- [x] Membership Plans module
- [x] Coupons module
- [x] Suppliers module
- [x] Product Categories module
- [x] Products module
- [x] Purchases module
- [x] Stock Adjustments module
- [x] Product Import workflow
- [x] Stock Adjustment Import workflow
- [x] Communication Logs module
- [x] Clinic Settings module

## Priority 3: Reporting and Admin Reference

- [x] Reports overview
- [x] Daily financial reporting
- [x] Finance report
- [x] Promotions report
- [x] Doctor performance report
- [x] Appointments report
- [x] Clinical report
- [x] Inventory report
- [x] Subscription screens

## Screen-by-Screen Writing Backlog

Write these as separate reference pages after the workflow pages are stable.

### General

- [x] Login screen
- [x] Forgot password screen
- [x] Reset password screen
- [x] Dashboard
- [x] My Account
- [x] Clinic switcher

### Front Desk and Patient Management

- [x] Pet Parents list screen
- [x] Create Pet Parent screen
- [x] Edit Pet Parent screen
- [x] Pets list screen
- [x] Create Pet screen
- [x] Edit Pet screen
- [x] Pet Profile screen
- [x] Appointments list screen
- [x] Create Appointment screen
- [x] Edit Appointment screen
- [x] Appointment details screen
- [x] Appointment setup screen

### Clinical

- [ ] Consultations list screen
- [ ] Create Consultation screen
- [ ] Edit Consultation screen
- [ ] Consultation details screen
- [x] Consultations list screen
- [x] Create Consultation screen
- [x] Edit Consultation screen
- [x] Consultation details screen
- [x] Prescription Templates screen
- [x] Vaccinations list and form screens
- [x] Deworming list and form screens
- [x] Certificates screen

### Billing

- [x] POS screen
- [x] Invoices list screen
- [ ] Create Invoice screen
- [ ] Edit Invoice screen
- [x] Invoice details screen
- [ ] Invoice print screen
- [x] Create Invoice screen
- [x] Edit Invoice screen
- [x] Invoice print screen
- [x] Invoice refund screen
- [x] Quotations list and form screens
- [x] Coupons list and form screens
- [x] Membership Plans list and form screens

### Inventory

- [x] Product Categories screens
- [x] Products list screen
- [ ] Create Product screen
- [ ] Edit Product screen
- [ ] Product details screen
- [x] Create Product screen
- [x] Edit Product screen
- [x] Product details screen
- [x] Product import screen
- [x] Suppliers screens
- [x] Purchases list screen
- [ ] Create Purchase screen
- [ ] Edit Purchase screen
- [ ] Purchase details screen
- [x] Create Purchase screen
- [x] Edit Purchase screen
- [x] Purchase details screen
- [x] Stock Adjustments list screen
- [ ] Create Stock Adjustment screen
- [ ] Stock Adjustment details screen
- [x] Create Stock Adjustment screen
- [x] Stock Adjustment details screen
- [x] Stock Adjustment import screen

### Reports and Admin

- [x] Finance report screen
- [x] Promotions report screen
- [x] Doctor performance report screen
- [x] Appointments report screen
- [x] Clinical report screen
- [x] Inventory report screen
- [x] Users screens
- [x] Permission Roles screens
- [x] Access Audit screen
- [x] Clinics screens
- [x] Settings screen
- [x] Communication Logs screen
- [x] Subscription screen

## Recommended Writing Sequence

## Phase 1: Finish the minimum help center

- [x] Dashboard overview
- [x] Pet Parents
- [x] Pets
- [x] Pet Profile
- [x] POS
- [x] Invoice workflow
- [x] Vaccinations
- [x] Deworming

## Phase 2: Complete clinic operations coverage

- [x] Products
- [x] Purchases
- [x] Stock Adjustments
- [x] Suppliers
- [x] Quotations
- [x] Coupons
- [x] Membership Plans
- [x] Certificates
- [x] Users
- [x] Permission Roles

## Phase 3: Complete admin and reporting coverage

- [x] Reports by type
- [x] Settings
- [x] Communication
- [x] Subscription
- [x] Clinics

## Documentation Standards

Each page should include:

- purpose of the screen or workflow
- who uses it
- when to use it
- step-by-step instructions
- important buttons, filters, and fields
- common mistakes
- related pages

When screenshots are added:

- [x] use one screenshot style consistently
- [x] annotate important buttons and sections
- [ ] avoid outdated screenshots after UI changes

## Live Review Notes

- [x] Reviewed the live clinic UI with Browser Use on `http://laravel-app.test`
- [x] Confirmed sidebar labels such as `Pet Profile`, `Certificates`, `Inventory`, and `Billing`
- [x] Updated documentation labels to better match the live navigation where mismatches were found
- [x] Renamed docs titles to match live module labels such as `Users`, `Subscription`, `Communication`, and `Billing Report`

## Notes From Current App Review

Observed major user-facing modules in the Laravel app:

- Dashboard
- My Account
- Subscription
- Clinics
- Users
- Permission Roles
- Access Audit
- Doctors
- Pet Parents
- Pets
- Pet Profile
- Certificates
- Appointments
- Consultations
- Vaccinations
- Deworming
- Inventory
- Billing
- Reports
- Communication
- Settings
- Pet Parent Portal

Observed important subflows from routes and views:

- appointment check-in
- appointment reschedule
- start consultation from appointment
- quick pet parent creation from appointment
- quick pet creation from appointment
- consultation PDF export
- product import and export
- stock adjustment import and export
- purchase receiving and status updates
- quotation printing
- invoice printing
- POS promotion preview
- invoice refunds
- communication reminder queue actions
- product tax rule import and export

## Explicitly Out of Scope

- [x] Super Admin Control documentation
- [x] Super Admin Dashboard documentation
- [x] Staff Types documentation for super admin usage
- [x] Communication Settings documentation for super admin usage
- [x] Pet Parent Portal documentation in the main clinic staff help center

## Separate Decision Later

- [ ] Decide whether Pet Parent Portal should have its own lightweight end-user guide set outside the clinic staff documentation tree

## Next Recommended Documentation Tasks

- [x] Write `Dashboard Overview`
- [x] Write `Pet Parents`
- [x] Write `Pets`
- [x] Write `Pet Profile`
- [x] Write `POS Checkout Workflow`
- [x] Write `Invoice Management`
- [x] Write `Vaccination Schedule Management`
- [x] Write `Deworming Schedule Management`
- [x] Write `Doctor Profiles`
- [x] Write `Certificate Workspace`
- [x] Write `Product Catalog Management`
- [x] Write `Purchase Management`
- [x] Write `Stock Adjustment Management`
- [x] Write `Suppliers`
- [x] Write `Product Categories`
- [x] Write `Product Import Workflow`
- [x] Write `Stock Adjustment Import Workflow`
- [x] Write `Quotations`
- [x] Write `Coupons`
- [x] Write `Membership Plans`
- [x] Write `My Account`
- [x] Write `Staff User Management`
- [x] Write `Permission Roles`
- [x] Write `Access Audit`
- [x] Write `Clinic Management`
- [x] Write `Clinic Settings`
- [x] Write `Communication Logs`
- [x] Write `Subscription Management`
- [x] Write `Finance Report`
- [x] Write `Promotions Report`
- [x] Write `Doctor Performance Report`
- [x] Write `Appointments Report`
- [x] Write `Clinical Report`
- [x] Write `Inventory Report`
- [x] Write `Login Screen`
- [x] Write `Forgot Password Screen`
- [x] Write `Reset Password Screen`
- [x] Write `Clinic Switcher`
- [x] Write `Appointments List Screen`
- [x] Write `Create Appointment Screen`
- [x] Write `Edit Appointment Screen`
- [x] Write `Appointment Details Screen`
- [x] Write `Appointment Setup Screen`
- [x] Write `Refund Workflow`
- [x] Write `Invoice Refund Record`
- [x] Write `Create Product Screen`
- [x] Write `Edit Product Screen`
- [x] Write `Product Details Screen`
- [x] Write `Create Purchase Screen`
- [x] Write `Edit Purchase Screen`
- [x] Write `Purchase Details Screen`
- [x] Write `Create Stock Adjustment Screen`
- [x] Write `Stock Adjustment Details Screen`
- [x] Write `Create Invoice Screen`
- [x] Write `Edit Invoice Screen`
- [x] Write `Invoice Print Screen`
- [x] Write `Consultations List Screen`
- [x] Write `Create Consultation Screen`
- [x] Write `Edit Consultation Screen`
- [x] Write `Consultation Details Screen`
- [x] Write `Create Pet Parent Screen`
- [x] Write `Edit Pet Parent Screen`
- [x] Write `Create Pet Screen`
- [x] Write `Edit Pet Screen`
- [x] Write `Prescription Templates Screen`
- [x] Write `Stock Adjustment Import Screen`
- [x] Write `Doctor Workflow`
- [x] Write `Billing Workflow`
- [x] Write `Clinic Admin Workflow`
