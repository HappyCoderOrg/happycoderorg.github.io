---
title: NTU 台大 Web 網頁開發 Vibe Coding 課程學習重點筆記 01-01：Introduction to Web Programming
date: 2026-01-02 20:23:23
authors: happycoder
tags:
  - coding
  - code
  - 程式設計
  - 自學程式設計
  - CS
  - NTU Web Programming
  - Computer
  - Computer Science
  - 自學程式
  - 程式語言
  - 程式
  - programming
  - NTU
  - 台大
  - Web Development
  - Vibe Coding
  - 學習筆記
---

:::tip NTU Web Programming Vibe Coding 系列筆記
這是 **NTU 台大 Web 網頁開發 Vibe Coding 課程** 學習筆記系列：

📚 **第一階段：基礎概念**
- [00. Course Introduction](/blog/ntu-web-programming-vibe-coding-course-2025-learning-notes-00)
- **01. Introduction to Web Programming** (本文)

💡 [查看完整系列](/blog/tags/ntu-web-programming) | 🎓 [Vibe Coding 學習資源](/resources/vibe-coding)
:::

> 在軟體工程與生成式人工智慧高度整合的時代，開發者的職責已從單純的代碼編寫者轉化為系統的協作指揮官。

## 名言金句

> 「一個好的主管需要懂得與屬下溝通，而與 AI 協作的關鍵，在於精確定義需求並理解技術背後的邏輯與架構。」

## 核心論點

這部影片的核心在於展示如何利用現代 AI 工具（如 Cursor）快速構建功能完整的網路服務，並以此作為切入點，探討開發者在 AI 浪潮下應具備的素養。透過實作一個待辦事項（To-do App）的過程，教學重點不再是語法的堆砌，而是如何將心中的產品意象透過精確的指令（Prompt）轉化為可執行的軟體架構。

教學過程強調了「開發環境重現性」的重要性。一個專業的網路服務不應只存在於開發者的本機端，而必須確保團隊成員或助教能在不同的環境下快速安裝並運行。這涉及到環境設定檔（如 .env）的正確處理，不僅是為了安全性以隱藏敏感的金鑰，更是為了確保軟體在不同部署階段的靈活性與穩定性。

最後，影片探討了 AI 工具在教學與實務中的定位。雖然 AI 具備「One-shot」生成代碼的驚人能力，但這並不代表開發者可以忽視基礎。理解 HTML、CSS 與 JavaScript 的運作機制，以及文件物件模型（DOM）如何動態改變網頁內容，才是確保在 AI 產生錯誤或遇到複雜規格時，開發者具備調整與優化系統的核心競爭力。

## 重點摘要

1. 環境設定檔與安全性：在構建涉及第三方服務（如 GPT API）的服務時，應使用環境變數管理金鑰，嚴禁將敏感資訊直接寫入代碼或上傳至版本控制系統。
2. 開發環境重現性：確保服務能讓團隊新成員快速重現與安裝，是衡量軟體工程品質的重要指標，也是課程評核的重點之一。
3. Cursor 開發工具應用：詳細介紹了 Cursor 的界面功能，包含檔案瀏覽器、代碼編輯區、終端機，以及與 AI 溝通的聊天室。
4. AI 模型選型與模式：分析了不同 AI 模型（如 Claude, GPT-4）在代碼生成上的表現，並介紹了 Max Mode 如何透過自我測試與思考來解決複雜程式問題。
5. 指令工程與溝通：強調與 AI 溝通就像主管與屬下的溝通，單純的截圖或簡短指令往往不足以應對精細規格，需學會精確描述產品行為。
6. 前後端基礎概念：快速概括網頁開發的三大支柱（HTML, CSS, JavaScript）及 DOM 的動態變更原理，作為 AI 輔助開發的知識基礎。
7. 實戰練習與作業：透過個人網頁的撰寫作為初步練習，引導學生從簡單的靜態頁面過度到具備互動性的網路服務。
8. 代碼生成的不可預測性：提醒 AI 背後是統計模型，具有隨機性與樂透性質，開發者需具備檢視與修正產出內容的能力。

## 行動方案

1. 你應立即在開發環境中建立規範化的目錄架構，並配置一個範例環境檔（如 .env.example），確保所有敏感資訊皆已妥善隔離。
2. 你需熟練操作 Cursor 的各項進階功能，特別是學習如何在 Auto Mode 與 Max Mode 之間切換，以因應不同難度的開發任務。
3. 你應針對作業一的個人網頁需求，嘗試撰寫一份詳細的結構化指令，包含視覺設計要求與功能互動邏輯，並觀察 AI 產出的代碼是否符合預期。

## 問題反思

1. 如果 AI 已經能完成大部分的底層開發，你認為具備理解代碼邏輯與 DOM 原理的開發者，在除錯階段具備什麼樣的優勢？
2. 在追求開發速度的同時，你該如何平衡 AI 產出的代碼質量與系統的可維護性？

## 心得結論

本課程示範了 AI 時代下網頁開發的新常態：效率不再是手寫速度的競爭，而是溝通、架構理解與工具駕馭能力的綜合展現。透過將實務規範（如金鑰安全）與前沿工具（如 Cursor）結合，教學內容不僅傳授了技術，更傳遞了現代軟體工程師應有的職業態度。這是一場關於如何在高效率與扎實基礎之間尋找平衡點的深刻教育，也為後續深入學習網路服務架構奠定了堅實的心理與技術準備。

<iframe width="100%" height="400" src="https://www.youtube.com/embed/z7H7WC-s8B4?si=kxodAfDBlYIQpOWX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[NTU Web Programming (2025.09) -- 01. Introduction to Web Programming (Part 1)](http://www.youtube.com/watch?v=z7H7WC-s8B4)
