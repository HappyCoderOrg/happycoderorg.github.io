import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type PostItem = {
  title: string;
  slug: string;
  tag: string;
  excerpt: string;
  date: string;
};

const latestPosts: PostItem[] = [
  {
    title: "NTU 台大網路服務程式設計 & AI Vibe Coding 課程學習重點筆記 01",
    slug: "ntu-web-programming-ai-vibe-coding-course-2025-learning-notes-01-01",
    tag: "Vibe Coding",
    excerpt:
      "探索台大網路服務程式設計課程中的 AI Vibe Coding 實戰內容，學習如何用 AI 工具快速構建現代 Web 應用。",
    date: "2026-01-02",
  },
  {
    title: "NTU 台大網路服務程式設計 & AI Vibe Coding 課程學習重點筆記 00",
    slug: "ntu-web-programming-ai-vibe-coding-course-2025-learning-notes-00",
    tag: "Vibe Coding",
    excerpt:
      "本系列課程筆記涵蓋 AI Vibe Coding 的核心概念與工具介紹，帶你從零開始了解 AI 輔助程式開發的完整流程。",
    date: "2025-12-28",
  },
  {
    title: "使用 Cursor AI 編輯器學習程式設計教學",
    slug: "learning-coding-programming-with-cursor-ai-editor-tool-tutorial",
    tag: "AI 工具",
    excerpt:
      "Cursor 是目前最受工程師喜愛的 AI 程式編輯器，本文帶你了解如何用 Cursor 快速學習並撰寫程式碼，大幅提升開發效率。",
    date: "2025-11-15",
  },
  {
    title: "如何用 ChatGPT 學習程式設計與 AI 工具應用教學",
    slug: "learning-coding-programming-with-chatgpt-ai-tool-tutorial",
    tag: "AI 工具",
    excerpt:
      "ChatGPT 不只是聊天機器人，更是你學習程式設計的最佳夥伴。本文系統化介紹如何善用 ChatGPT 加速程式學習旅程。",
    date: "2025-10-20",
  },
];

export default function HomepageLatestPosts(): ReactNode {
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
      { threshold: 0.08 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.latestPosts}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>📝 最新文章</span>
          <Heading as="h2" className={styles.sectionTitle}>
            精選學習資源
          </Heading>
          <p className={styles.sectionSubtitle}>
            涵蓋 AI 工具、Vibe Coding、Python 到 Web 開發的完整學習路徑
          </p>
        </div>
        <div className={styles.postGrid}>
          {latestPosts.map((post, idx) => (
            <div
              key={idx}
              className={styles.postCard}
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              <span className={styles.postTag}>{post.tag}</span>
              <Link to={`/blog/${post.slug}`} className={styles.postTitle}>
                {post.title}
              </Link>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
              <div className={styles.postFooter}>
                <span className={styles.postDate}>{post.date}</span>
                <Link to={`/blog/${post.slug}`} className={styles.readMore}>
                  閱讀更多 →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.viewAllWrapper}>
          <Link to="/blog" className={styles.viewAllBtn}>
            查看所有文章 →
          </Link>
        </div>
      </div>
    </section>
  );
}
