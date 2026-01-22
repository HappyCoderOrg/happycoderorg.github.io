import type { ReactNode } from "react";
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
    title: "實用 AI Prompt 提示詞分享",
    Png: require("@site/static/img/ai-prompt-icon.png").default,
    description: (
      <>
        收錄各職業領域最實用的 AI
        指令模板，涵蓋行政文書、人資管理、行銷企劃、社群經營、財務會計等。
        提供可直接複製使用的 Prompt，讓 AI
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

function Feature({ title, Png, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Png} className={styles.featurePng} role="img" />
      </div>
      <br />
      <div className="text--center padding-horiz--md">
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <br />
      </div>
    </section>
  );
}
