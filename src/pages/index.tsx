import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageStats from "@site/src/components/HomepageStats";
import HomepageLatestPosts from "@site/src/components/HomepageLatestPosts";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      {/* Decorative dot grid */}
      <div className={styles.heroGrid} aria-hidden="true" />

      <div className={styles.heroContent}>
        <span className={styles.heroBadge}>自學 AI 程式設計學習社群</span>

        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>

        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className={styles.primaryBtn}
            to="https://chromewebstore.google.com/detail/happycoder-ai-prompt-%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7/egecphncaagaeolknghbdgelpjfihkdj?hl=zh-tw"
          >
            下載 HappyPrompt
          </Link>
          <Link className={styles.secondaryBtn} to="/resources">
            開始學習 →
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageNewsletter() {
  return (
    <section className={styles.newsletterSection}>
      <div className="container">
        <div className={styles.newsletterWrapper}>
          <span className={styles.newsletterBadge}>📩 電子報</span>
          <h2 className={styles.newsletterTitle}>訂閱 HappyCoder 電子報</h2>
          <p className={styles.newsletterSubtitle}>
            每週精選 AI 工具、Vibe Coding 教學與程式學習資源，直接送到你的信箱
          </p>
          <iframe
            src="https://happycoder.substack.com/embed"
            width="100%"
            height="200"
            className={styles.newsletterIframe}
            frameBorder={0}
            scrolling="no"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <HomepageStats />
      <main>
        <HomepageFeatures />
        <HomepageLatestPosts />
      </main>
      <HomepageNewsletter />
    </Layout>
  );
}
