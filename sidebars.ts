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
      ],
    },
    {
      type: 'category',
      label: 'Daily Operations',
      items: [
        'appointments/managing-appointments',
        'patient-records/patient-profiles',
        'billing/invoices-payments',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: ['admin/users-roles', 'reports/reports-overview'],
    },
    {
      type: 'category',
      label: 'Help',
      items: ['troubleshooting/common-issues'],
    },
  ],
};

export default sidebars;
