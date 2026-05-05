import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Petaladdin Docs',
  url: 'https://docs.petaladdin.com/',
  description:
    'User guides and workflow documentation for veterinary clinics and hospitals using Petaladdin practice management software.',
  publisher: {
    '@type': 'Organization',
    name: 'Petaladdin',
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Veterinary clinics and hospitals',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://docs.petaladdin.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.kicker}>Veterinary Practice Management Software</div>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroMeta}>
            Practical help for reception teams, doctors, nurses, billing staff, and clinic administrators.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Open the help center
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/workflows/front-desk-workflow">
              View front desk workflow
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="Petaladdin User Guides for Veterinary Clinics"
      description="User guides and workflow documentation for veterinary clinics and hospitals using Petaladdin practice management software.">
      <Head>
        <meta property="og:title" content="Petaladdin User Guides for Veterinary Clinics" />
        <meta
          property="og:description"
          content="Learn Petaladdin workflows for front desk, doctors, billing, inventory, reports, and clinic administration."
        />
        <meta property="og:url" content="https://docs.petaladdin.com/" />
        <meta
          name="twitter:title"
          content="Petaladdin User Guides for Veterinary Clinics"
        />
        <meta
          name="twitter:description"
          content="Workflow-based help for veterinary clinics and hospitals using Petaladdin."
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
