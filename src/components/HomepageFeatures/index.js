// src/components/HomepageFeatures/index.js
import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Modern Foundation',
    description: 'Leverage the latest Discord.js v14 features with a clean, TypeScript-first approach for robust and scalable bots.'
  },
  {
    title: 'Developer Focused',
    description: 'Solara.js handles the boilerplate, letting you focus on what makes your bot unique. Write less code, achieve more.'
  },
  {
    title: 'Easy to Extend',
    description: 'Integrate custom logic, middleware, or third-party services seamlessly with a flexible and straightforward architecture.'
  }
];

const Feature = ({ title, description }) => (
  <div className={`col col--4 ${styles.featureItem}`}>
    <div className={styles.featureContent}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default function HomepageFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}