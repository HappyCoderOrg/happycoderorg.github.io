import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Png?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "熱門 AI 工具介紹",
    Png: require("@site/static/img/ai-tools-icon.png").default,
    description: (
      <>
        精選熱門 AI 工具推薦，包含 ChatGPT、Claude、Gemini、GitHub
        Copilot、Cursor 等。 從對話式 AI
        到程式開發助手，從創作工具到研究平台，為您推薦最適合的 AI
        工作夥伴，提升工作生產力
      </>
    ),
  },
  {
    title: "實用 AI 提示詞和工作流分享",
    Png: require("@site/static/img/ai-prompt-icon.png").default,
    description: (
      <>
        收錄各職業領域最實用的 AI
        指令模板，涵蓋行政、人資、行銷企劃、社群經營、財務會計等。
        提供可直接複製使用的 Prompt/Skills 和 Workflow，讓 AI
        成為您工作上的得力助手，大幅提升日常工作效率
      </>
    ),
  },
  {
    title: "Vibe Coding 實戰教學",
    Png: require("@site/static/img/vibe-coding-icon.png").default,
    description: (
      <>
        探索 AI 時代的氛圍程式開發方法，整合 Cursor、Loveable、Replit
        等創新工具。
        從零程式基礎到專業開發者的完整學習路徑，讓您體驗快速原型開發與 AI
        協作創作和寫程式的樂趣
      </>
    ),
  },
];

function Feature({
  title,
  Png,
  description,
  index,
}: FeatureItem & { index: number }) {
  return (
    <div className={clsx("col col--4", styles.featureCol)}>
      <div
        className={styles.featureCard}
        style={{ animationDelay: `${index * 0.15}s` }}
      >
        <div className={styles.iconWrapper}>
          <img src={Png} className={styles.featurePng} role="img" alt={title} />
        </div>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDesc}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add(styles.visible);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>✨ 核心功能</span>
          <Heading as="h2" className={styles.sectionTitle}>
            一站式 AI 學習與工具平台
          </Heading>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} index={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
