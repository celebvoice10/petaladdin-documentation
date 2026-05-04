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
    title: 'Quick onboarding',
    description:
      'Guide reception teams, doctors, and administrators through first login, clinic setup, and staff access.',
  },
  {
    title: 'Daily workflow help',
    description:
      'Document appointment handling, patient records, billing, and common front-desk tasks in one place.',
  },
  {
    title: 'Easy publishing',
    description:
      'Build the docs as a static site and publish them to GitHub Pages without running the Laravel app.',
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
          <Heading as="h2">Documentation built for clinic teams</Heading>
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
