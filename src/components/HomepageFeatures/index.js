import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Awesomeness',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        What else is there to say?
      </>
    ),
  },
  {
    title: 'Uber awesomeness',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        This is getting superlative!
      </>
    ),
  },
  {
    title: 'Someone better change this...',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Maybe we should list real features on this front page.
      </>
    ),
  },
  {
    title: 'Oh, and a fourth thing',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    //Svg: "", // Hum, this version actually requires an image for each feature,
    // the site crashes of Svg is not defined or is empty.
    description: (
      <>
        I just want to see what it looks like when I have four features
        listed and described.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
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
