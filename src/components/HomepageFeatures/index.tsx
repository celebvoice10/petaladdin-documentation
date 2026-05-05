import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  label: string;
  href: string;
  description: ReactNode;
};

const featureList: FeatureItem[] = [
  {
    title: 'Front desk',
    label: 'Start reception workflow',
    href: '/docs/workflows/front-desk-workflow',
    description:
      'Register pet parents, create pet records, schedule appointments, and manage check-in and check-out.',
  },
  {
    title: 'Doctors and nurses',
    label: 'Open clinical workflow',
    href: '/docs/workflows/doctor-workflow',
    description:
      'Review patient history, write consultation notes, manage prescriptions, and track vaccinations or deworming.',
  },
  {
    title: 'Billing and inventory',
    label: 'View billing workflow',
    href: '/docs/workflows/billing-workflow',
    description:
      'Create invoices, receive payments, run POS checkout, manage products, purchases, and stock adjustments.',
  },
  {
    title: 'Clinic administration',
    label: 'Open admin workflow',
    href: '/docs/workflows/clinic-admin-workflow',
    description:
      'Manage users, roles, clinic settings, subscriptions, reports, access audits, and communication logs.',
  },
];

function Feature({title, label, href, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3', styles.featureColumn)}>
      <div className={styles.card}>
        <div className={styles.badge}>Role guide</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className={styles.cardLink} to={href}>
          {label}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <p className={styles.sectionLabel}>Start by team</p>
          <Heading as="h2">Find the workflow your clinic team needs first</Heading>
        </div>
        <div className="row">
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
