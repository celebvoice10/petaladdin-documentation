import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
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
        'clinical/consultations-treatment-notes',
      ],
    },
    {
      type: 'category',
      label: 'Billing and Inventory',
      items: [
        'billing/invoices-payments',
        'inventory/managing-medicines-stock',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'admin/users-roles',
        'reports/reports-overview',
        'reports/daily-financial-reports',
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
