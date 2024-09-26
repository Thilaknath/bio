import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tech with Thilak',
    Svg: require('@site/static/img/youtube.svg').default,
    description: (
      <>
       Discover how to supercharge your DevOps workflow with AI! Our YouTube channel, Tech with Thilak, 
       offers concise, practical videos demonstrating how to leverage GPT for common DevOps tasks. 
       From automating deployments to optimizing code reviews, learn to work smarter, not harder.
      </>
    )
  },
  {
    title: 'Credly',
    Svg: require('@site/static/img/credly.svg').default,
    description: (
      <>
       View my verified digital credentials on Credly. These certifications highlight my expertise in cloud computing, DevOps, and other tech domains. Each badge represents a milestone in my professional development. Check my Credly profile for a complete list of my industry-recognized certifications.
      </>
    )
  },
  {
    title: 'Google',
    Svg: require('@site/static/img/google.svg').default,
    description: (
      <>
       Explore my Google Cloud certifications, showcasing my proficiency in cloud technologies and DevOps practices. These credentials validate my hands-on experience with Google Cloud Platform, from infrastructure management to application deployment. Visit my Google Cloud Skills Boost profile to see my progress and achievements in the ever-evolving world of cloud computing.
      </>
    )
  },
];

function Feature({Svg, title, description}) {
  // Define the URLs based on the title
  const links = {
    'Tech with Thilak': 'https://www.youtube.com/@chatGPTDevOps',
    'Credly': 'https://www.credly.com/users/thilaknath-ashok-kumar.460fbebf',
    'Google': 'https://www.cloudskillsboost.google/public_profiles/c7cfff93-8599-42a8-ad49-61eedd1f977c', // Replace with your actual Credly profile link
  };

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* Wrapping the icons in an anchor tag */}
        <a href={links[title]} target="_blank" rel="noopener noreferrer">
          <Svg className={styles.featureSvg} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row justify--center">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
