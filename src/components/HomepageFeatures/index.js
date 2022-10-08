import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy To Use',
    Svg: require('@site/static/img/undraw_dev_focus.svg').default,
    description: (
      <>
        Rapid uses Blockly by Google to provide an easier interface to create extensions using code blocks.
      </>
    ),
  },
  {
    title: 'Develop Rapidly',
    Svg: require('@site/static/img/undraw_in_no_time.svg').default,
    description: (
      <>
        Rapid provides you with a fast interface and instant compilations that helps you develop extensions more effectively.
      </>
    ),
  },
  {
    title: 'Always Online',
    Svg: require('@site/static/img/undraw_online_page.svg').default,
    description: (
      <>
        Rapid is an online website! You don't have to install any special softwares to get started.
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
