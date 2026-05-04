import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const featureList: FeatureItem[] = [
  {
    title: 'Role-based guidance',
    description:
      'Help different teams find the right workflow quickly, from reception and doctors to billing and administrators.',
  },
  {
    title: 'Day-to-day operations',
    description:
      'Cover appointments, patient records, consultations, stock handling, and billing in one organized help center.',
  },
  {
    title: 'Support-ready content',
    description:
      'Give clinic teams clear step-by-step instructions they can use during live operations, training, and troubleshooting.',
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureColumn)}>
      <div className={styles.card}>
        <div className={styles.badge}>Guide</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <p className={styles.sectionLabel}>What this site covers</p>
          <Heading as="h2">A help center built around real clinic workflows</Heading>
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
