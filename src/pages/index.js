// src/pages/index.js
import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { FiArrowRight, FiCode, FiBookOpen } from 'react-icons/fi';
import Typed from 'typed.js';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const typedRef = useRef(null);
  const codeBlockRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  // Typing animation for hero title
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Build.', 'Create.', 'Deploy.', 'Scale.'],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 500,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  // Animation when code snippet comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    
    if (codeBlockRef.current) {
      observer.observe(codeBlockRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.heroBanner}>
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.particle}></div>
        ))}
      </div>
      
      <div className={styles.gradientOverlay}></div>
      
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.heroTagline}>
              <span className={styles.badge}>NEW</span> Version 3.0 Released
            </div>
            
            <h1 className={styles.heroTitle}>
              <span className={styles.titleMain}>{siteConfig.title}</span>
              <div className={styles.titleSecondary}>
                <span ref={typedRef} className={styles.titleTyped}></span>
                <span className={styles.cursor}></span>
                <span className={styles.titleFixed}>Discord Bots</span>
              </div>
            </h1>
            
            <p className={styles.heroSubtitle}>
              A modern, powerful framework that makes Discord bot development faster,
              more intuitive, and more fun. Built with performance and developer experience in mind.
            </p>
            
            <div className={styles.statsBar}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15k+</span>
                <span className={styles.statLabel}>Downloads</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>99%</span>
                <span className={styles.statLabel}>Uptime</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.9/5</span>
                <span className={styles.statLabel}>Rating</span>
              </div>
            </div>
            
            <div className={styles.heroButtons}>
              <Link
                className={styles.primaryButton}
                to="/docs/intro">
                <span>Get Started</span>
                <FiArrowRight />
              </Link>
              <Link
                className={styles.secondaryButton}
                to="/docs/first-bot">
                <FiCode />
                <span>View Examples</span>
              </Link>
              <Link
                className={styles.tertiaryButton}
                to="https://github.com/getsolara/solara.js">
                <svg viewBox="0 0 24 24" className={styles.githubIcon}>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span>GitHub</span>
              </Link>
            </div>
          </div>
          
          <div className={styles.heroGraphic}>
            <div 
              ref={codeBlockRef}
              className={`${styles.codeSnippetWrapper} ${isIntersecting ? styles.animate : ''}`}
            >
              <div className={styles.codeSnippet}>
                <div className={styles.codeHeader}>
                  <div className={styles.windowButtons}>
                    <span className={`${styles.windowButton} ${styles.closeButton}`}></span>
                    <span className={`${styles.windowButton} ${styles.minimizeButton}`}></span>
                    <span className={`${styles.windowButton} ${styles.expandButton}`}></span>
                  </div>
                  <span className={styles.filename}>bot.js</span>
                  <div className={styles.headerActions}>
                    <span className={styles.copyButton}>Copy</span>
                  </div>
                </div>
                <div className={styles.codeScrollContainer}>
                  <pre className={styles.codeContent}>
                    <code>
                      <span className={styles.lineNumbers}><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span></span>
                      <span className={styles.codeLines}>
                        <span><span className={styles.keyword}>const</span> <span className={styles.braces}>{'{'}</span> <span className={styles.variable}>SolaraClient</span> <span className={styles.braces}>{'}'}</span> <span className={styles.operator}>=</span> <span className={styles.function}>require</span><span className={styles.parentheses}>{'('}</span><span className={styles.string}>'@getsolara/solara.js'</span><span className={styles.parentheses}>{')'}</span>;</span>
                        <span><span className={styles.keyword}>const</span> <span className={styles.variable}>path</span> <span className={styles.operator}>=</span> <span className={styles.function}>require</span><span className={styles.parentheses}>{'('}</span><span className={styles.string}>'path'</span><span className={styles.parentheses}>{')'}</span>;</span>
                        <span></span>
                        <span><span className={styles.keyword}>const</span> <span className={styles.variable}>bot</span> <span className={styles.operator}>=</span> <span className={styles.keyword}>new</span> <span className={styles.class}>SolaraClient</span><span className={styles.parentheses}>{'('}</span><span className={styles.braces}>{'{'}</span></span>
                        <span>  <span className={styles.property}>intents</span>: <span className={styles.brackets}>{'['}</span> <span className={styles.string}>"Guilds"</span>, <span className={styles.string}>"GuildMessages"</span>, <span className={styles.string}>"MessageContent"</span>, <span className={styles.string}>"GuildMembers"</span> <span className={styles.brackets}>{']'}</span>,</span>
                        <span>  <span className={styles.property}>partials</span>: <span className={styles.brackets}>{'['}</span><span className={styles.string}>"Channel"</span>, <span className={styles.string}>"Message"</span><span className={styles.brackets}>{']'}</span>,</span>
                        <span>  <span className={styles.property}>SolaraOptions</span>: <span className={styles.braces}>{'{'}</span></span>
                        <span>    <span className={styles.property}>prefix</span>: <span className={styles.string}>"!"</span>,</span>
                        <span>    <span className={styles.property}>token</span>: <span className={styles.string}>"YOUR_TOKEN_HERE"</span></span>
                        <span>  <span className={styles.braces}>{'}'}</span></span>
                        <span><span className={styles.braces}>{'}'}</span><span className={styles.parentheses}>{')'}</span>;</span>
                        <span></span>
                        <span><span className={styles.keyword}>const</span> <span className={styles.variable}>commandsPath</span> <span className={styles.operator}>=</span> <span className={styles.variable}>path</span>.<span className={styles.function}>join</span><span className={styles.parentheses}>{'('}</span><span className={styles.variable}>__dirname</span>, <span className={styles.string}>'commands'</span><span className={styles.parentheses}>{')'}</span>;</span>
                        <span><span className={styles.variable}>bot</span>.<span className={styles.function}>loadCommands</span><span className={styles.parentheses}>{'('}</span><span className={styles.variable}>commandsPath</span><span className={styles.parentheses}>{')'}</span>;</span>
                        <span></span>
                        <span><span className={styles.variable}>bot</span>.<span className={styles.function}>on</span><span className={styles.parentheses}>{'('}</span><span className={styles.string}>'ready'</span>, <span className={styles.parentheses}>{`() => {`}</span></span>
                        <span>  <span className={styles.variable}>console</span>.<span className={styles.function}>log</span><span className={styles.parentheses}>{'(`'}</span><span className={styles.variable}>${'${bot.user.tag}'}</span> <span className={styles.string}>is online and ready!</span><span className={styles.parentheses}>${'`)'}</span>;</span>
                        <span><span className={styles.parentheses}>{'}'}</span><span className={styles.parentheses}>{')'}</span>;</span>
                        <span></span>
                        <span><span className={styles.variable}>bot</span>.<span className={styles.function}>login</span><span className={styles.parentheses}>{'()'}</span>;</span>
                      </span>
                    </code>
                  </pre>
                </div>
                <div className={styles.terminalOutput}>
                  <span className={styles.terminalPrompt}>$</span> npm start
                  <span className={styles.terminalText}><span className={styles.success}>✓</span> SolaraBot#0000 is online and ready!</span>
                </div>
              </div>
              
              <div className={styles.codeGlow}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollArrow}></div>
        <div className={styles.scrollText}>Scroll to discover</div>
      </div>
    </header>
  );
}

function HomepageQuickStart() {
  return (
    <section className={styles.quickStartSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2>Quick Start Guide</h2>
          <p>Get up and running with Solara.js in minutes</p>
        </div>
        
        <div className={styles.quickStartSteps}>
          <div className={styles.quickStartStep}>
            <div className={styles.stepNumber}>1</div>
            <h3>Install the package</h3>
            <div className={styles.codeSnippetSmall}>
              <code>npm install @getsolara/solara.js</code>
              <button className={styles.copyButtonSmall}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 17.9H6c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v1.1"></path>
                  <rect x="10" y="9" width="10" height="14" rx="2"></rect>
                </svg>
              </button>
            </div>
          </div>
          
          <div className={styles.stepDivider}>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </div>
          
          <div className={styles.quickStartStep}>
            <div className={styles.stepNumber}>2</div>
            <h3>Create your bot</h3>
            <div className={styles.codeSnippetSmall}>
              <code>npx solara init my-discord-bot</code>
              <button className={styles.copyButtonSmall}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 17.9H6c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v1.1"></path>
                  <rect x="10" y="9" width="10" height="14" rx="2"></rect>
                </svg>
              </button>
            </div>
          </div>
          
          <div className={styles.stepDivider}>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </div>
          
          <div className={styles.quickStartStep}>
            <div className={styles.stepNumber}>3</div>
            <h3>Run your bot</h3>
            <div className={styles.codeSnippetSmall}>
              <code>cd my-discord-bot && npm start</code>
              <button className={styles.copyButtonSmall}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 17.9H6c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v1.1"></path>
                  <rect x="10" y="9" width="10" height="14" rx="2"></rect>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className={styles.quickStartCta}>
          <Link to="/docs/intro" className={styles.linkButton}>
            <FiBookOpen />
            <span>Read the full documentation</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title="Home"
      description={`Documentation for ${siteConfig.title}. ${siteConfig.tagline}`}>
      <HomepageHeader />
      <HomepageQuickStart />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
