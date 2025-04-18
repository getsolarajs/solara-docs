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
                to="/docs/first-bot"> {/* Consider updating this link if needed */}
                View Example
              </Link>
            </div>
          </div>
          <div className={styles.heroGraphic}>
            <div className={styles.codeSnippet}>
              <div className={styles.codeHeader}>
                <span className={styles.filename}>bot.js</span>
                <div className={styles.windowButtons}>
                  <span></span>
                  <span></span>
                  <span></span>
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
    console.log(\`\${bot.user.tag} is online and ready to go!\`);
});

bot.login();`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroBackground}></div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={`Documentation for ${siteConfig.title}. ${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
