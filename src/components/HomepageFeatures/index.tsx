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
    title: "一鍵儲存 AI 指令",
    Png: require("@site/static/img/ai-tools-icon.png").default,
    description: (
      <>
        看到好用的 Prompt？ 一鍵儲存，隨時搜尋、複製並貼上，不再重打或翻聊天紀錄
      </>
    ),
  },
  {
    title: "跨職能 Prompt 知識庫",
    Png: require("@site/static/img/vibe-coding-icon.png").default,
    description: (
      <>
        內建行銷、人資、財務、行政、PM、工程等專業提示詞，直接套用，讓 AI
        產出專業級結果
      </>
    ),
  },
  {
    title: "本地儲存，免登入/支援匯出匯入",
    Png: require("@site/static/img/ai-prompt-icon.png").default,
    description: (
      <>
        資料只存在瀏覽器，不用註冊帳號，開箱即用。支援匯出匯入，隨時分享或備份，安心又快速
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
