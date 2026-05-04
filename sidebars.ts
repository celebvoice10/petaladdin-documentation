import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    'dashboard/dashboard-overview',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/accessing-petaladdin',
        'getting-started/clinic-setup',
        'getting-started/user-roles-overview',
      ],
    },
    {
      type: 'category',
      label: 'Front Desk',
      items: [
        'pet-parents/managing-pet-parents',
        'pets/managing-pets',
        'appointments/managing-appointments',
        'appointments/check-in-check-out',
        'workflows/front-desk-workflow',
      ],
    },
    {
      type: 'category',
      label: 'Clinical Workflow',
      items: [
        'patient-records/patient-profiles',
        'patient-records/pet-profile-workspace',
        'clinical/consultations-treatment-notes',
        'clinical/doctor-profiles',
        'clinical/vaccination-schedule-management',
        'clinical/deworming-schedule-management',
        'clinical/certificate-workspace',
      ],
    },
    {
      type: 'category',
      label: 'Billing and Inventory',
      items: [
        'billing/pos-checkout-workflow',
        'billing/invoices-payments',
        'billing/invoice-management',
        'billing/quotation-management',
        'billing/coupon-management',
        'billing/membership-plan-management',
        'inventory/managing-medicines-stock',
        'inventory/supplier-management',
        'inventory/product-category-management',
        'inventory/product-catalog-management',
        'inventory/purchase-management',
        'inventory/stock-adjustment-management',
        'inventory/product-import-workflow',
        'inventory/stock-adjustment-import-workflow',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'admin/users-roles',
        'admin/my-account',
        'admin/staff-user-management',
        'admin/permission-roles',
        'admin/access-audit',
        'admin/clinic-management',
        'admin/clinic-settings',
        'admin/communication-logs',
        'admin/subscription-management',
        'reports/reports-overview',
        'reports/daily-financial-reports',
        'reports/finance-report',
        'reports/promotions-report',
        'reports/doctor-performance-report',
        'reports/appointments-report',
        'reports/clinical-report',
        'reports/inventory-report',
      ],
    },
    {
      type: 'category',
      label: 'Help',
      items: [
        'troubleshooting/common-issues',
        'troubleshooting/passwords-browser-support',
      ],
    },
  ],
};

export default sidebars;
