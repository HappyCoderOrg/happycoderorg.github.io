import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

type StatItem = {
  number: string;
  label: string;
  icon: string;
};

const stats: StatItem[] = [
  { number: "3,000+", label: "學員人數", icon: "🎓" },
  { number: "100+", label: "學習文章", icon: "📚" },
  { number: "30+", label: "AI 工具介紹", icon: "🤖" },
  { number: "8,000+", label: "社群成員", icon: "💬" },
];

export default function HomepageStats(): ReactNode {
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
      { threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={styles.statItem}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <span className={styles.statIcon}>{stat.icon}</span>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
