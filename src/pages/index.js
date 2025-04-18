// src/pages/index.js
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroBackgroundPattern}></div>
      <div className={styles.heroBackgroundBlur}></div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleAccent}>{siteConfig.title}</span>
              <br />
              Build Discord Bots That Shine.
            </h1>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <div className={styles.heroButtons}>
              <Link
                className={`button button--primary button--lg ${styles.primaryButton}`}
                to="/docs/intro">
                Get Started
              </Link>
              <Link
                className={`button button--secondary button--lg ${styles.secondaryButton}`}
                to="/docs/first-bot">
                View Example
              </Link>
            </div>
          </div>
          <div className={styles.heroGraphic}>
            <div className={styles.codeSnippetWrapper}>
              <div className={styles.codeSnippet}>
                <div className={styles.codeHeader}>
                  <span className={styles.filename}>bot.js</span>
                  <div className={styles.windowButtons}>
                    <div className={styles.windowButton} style={{ backgroundColor: '#ff5f56' }}></div>
                    <div className={styles.windowButton} style={{ backgroundColor: '#ffbd2e' }}></div>
                    <div className={styles.windowButton} style={{ backgroundColor: '#27c93f' }}></div>
                  </div>
                </div>
                <pre className={styles.codeContent}>
                  <code>{`const { SolaraClient } = require('@getsolara/solara.js');
const path = require('path');

const bot = new SolaraClient({
    intents: [ "Guilds", "GuildMessages", "MessageContent", "GuildMembers" ],
    partials: ["Channel", "Message"],
    SolaraOptions: {
        prefix: "!",
        token: "YOUR_TOKEN_HERE"
    }
});

const commandsPath = path.join(__dirname, 'commands');
bot.loadCommands(commandsPath);

const functionsPath = path.join(__dirname, 'functions');
bot.loadFunctions(functionsPath);

bot.on('ready', () => {
    console.log(\`\\${bot.user.tag} is online and ready to go!\`); // <-- ENSURE THIS LINE IS CORRECT
});

bot.login();`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const pageTitle = `Home | ${siteConfig.title}`;
  const pageDescription = `Documentation for ${siteConfig.title}. ${siteConfig.tagline}`;

  return (
    <Layout
      title={pageTitle}
      description={pageDescription}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
