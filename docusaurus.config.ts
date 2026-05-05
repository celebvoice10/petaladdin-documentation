import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = process.env.GITHUB_OWNER ?? 'celebvoice10';
const projectName = process.env.GITHUB_REPO ?? 'petaladdin-documentation';
const defaultSiteUrl = 'https://docs.petaladdin.com';
const siteUrl =
  process.env.DOCS_URL ||
  process.env.URL ||
  defaultSiteUrl;
const isCustomDomain = siteUrl.includes('docs.petaladdin.com');
const baseUrl =
  process.env.DOCS_BASE_URL ||
  process.env.BASE_URL ||
  (isCustomDomain ? '/' : `/${projectName}/`);

const config: Config = {
  title: 'Petaladdin Docs',
  tagline: 'User guides for veterinary clinics and hospitals using Petaladdin.',
  favicon: 'img/favicon.ico',
  titleDelimiter: '|',
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content:
          'Petaladdin documentation, veterinary practice management software, clinic management software, hospital management software, veterinary clinic help center, appointment scheduling, pet patient records, veterinary billing, clinic inventory',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'index, follow',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:site_name',
        content: 'Petaladdin Docs',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
  ],
  future: {
    v4: true,
  },
  url: siteUrl,
  baseUrl,
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
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
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
          label: 'Repository',
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
              label: 'Front Desk Workflow',
              to: '/docs/workflows/front-desk-workflow',
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
              label: 'Inventory',
              to: '/docs/inventory/managing-medicines-stock',
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
              label: 'Reports',
              to: '/docs/reports/daily-financial-reports',
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
