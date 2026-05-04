import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = process.env.GITHUB_OWNER ?? 'your-github-org';
const projectName = process.env.GITHUB_REPO ?? 'petaladdin-documentation';
const useCustomDomain = process.env.DOCS_USE_CUSTOM_DOMAIN === 'true';

const config: Config = {
  title: 'Petaladdin Docs',
  tagline: 'User guides for veterinary clinics and hospitals using Petaladdin.',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url:
    process.env.DOCS_URL ??
    (useCustomDomain
      ? 'https://docs.petaladdin.com'
      : `https://${organizationName}.github.io`),
  baseUrl:
    process.env.DOCS_BASE_URL ??
    (useCustomDomain ? '/' : `/${projectName}/`),
  organizationName,
  projectName,
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Petaladdin Docs',
      logo: {
        alt: 'Petaladdin',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Help Center',
        },
        {
          to: '/docs/intro',
          label: 'Getting Started',
          position: 'left',
        },
        {
          href: `https://github.com/${organizationName}/${projectName}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Appointments',
              to: '/docs/appointments/managing-appointments',
            },
          ],
        },
        {
          title: 'Operations',
          items: [
            {
              label: 'Billing and Payments',
              to: '/docs/billing/invoices-payments',
            },
            {
              label: 'Reports',
              to: '/docs/reports/reports-overview',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Troubleshooting',
              to: '/docs/troubleshooting/common-issues',
            },
            {
              label: 'GitHub Repository',
              href: `https://github.com/${organizationName}/${projectName}`,
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Petaladdin. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
