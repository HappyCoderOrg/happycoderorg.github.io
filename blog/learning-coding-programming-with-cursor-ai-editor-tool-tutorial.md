---
title: 使用 Cursor AI Editor 自學程式設計教學指南
date: 2025-01-27 00:23:23
authors: happycoder
tags:
  - ChatGPT
  - AI 工具
  - 自學程式
  - 自學程式設計
  - 程式設計
  - 線上自學
  - coding
  - coder
  - programming
  - cursor
  - vibe coding
  - vibe
  - AI 輔助程式設計
  - AI 直覺式程式設計
  - computer
  - computer science
  - code
  - 電腦科學
  - 學寫程式
  - 學程式
  - software
  - software enginnering
  - web
cover: https://www.happycoder.org/img/posts/learning-coding-programming-with-cursor-ai-editor-tool-tutorial-1.jpg

---

![](/img/posts/learning-coding-programming-with-cursor-ai-editor-tool-tutorial-1.jpg)

## 前言

在過去，自學程式設計往往需要依靠書籍、線上課程與不斷查詢文件。但隨著 AI 工具的發展，學習編程的方式有了根本性的改變。其中，**Cursor AI Editor** 作為一款內建 AI 協作的程式開發工具，正在迅速改變開發與學習的流程。

**Cursor** 是一款基於 Visual Studio Code（VSCode）打造的 AI 編輯器，結合了大型語言模型（如 GPT-4）的強大能力，提供自然語言詢問、程式碼補全、錯誤解釋、重構建議、即時除錯等功能。它不只是編輯器，更是學習者的私人助教。

本篇教學筆記將介紹 Cursor 的特色、安裝方式、學習策略與實際操作案例，幫助讀者高效且系統性地使用 Cursor 進行自學。

![](/img/posts/learning-coding-programming-with-cursor-ai-editor-tool-tutorial-2.jpg)

---

## 重點摘要

- **什麼是 Cursor？**

  - 基於 VSCode 打造的 AI 編輯器，內建 OpenAI 的 GPT 模型。
  - 主打「AI 內嵌互動」，能即時解釋、補全、建議與生成程式碼。

- **為什麼用 Cursor 來自學程式？**

  - 可以「邊寫邊問」：例如不懂 for 迴圈可以直接用自然語言提問。
  - 不需要來回切換 ChatGPT 網頁與 IDE。
  - 適合快速原型設計、除錯與重構練習。
  - 學習者可專注在理解邏輯與實作，不被語法阻礙。

- **適合學習的語言**

  - Python（入門首選）
  - JavaScript、TypeScript（網頁開發）
  - Go、Rust（系統程式）
  - HTML、CSS、React（前端設計）

- **常見使用場景**

  - 問語法與錯誤訊息
  - 撰寫函式與模組
  - 重構既有程式碼
  - 撰寫註解與單元測試
  - 撰寫教學與技術說明文件

---

## 安裝與啟用教學

### Step 1：下載 Cursor

- 前往官網：[https://www.cursor.sh](https://www.cursor.sh)
- 支援 macOS、Windows、Linux
- 安裝後即為一個 VSCode-like 的獨立應用程式

### Step 2：登入與模型設定

- 使用 Google 或 GitHub 帳號登入
- 免費帳號可使用 GPT-3.5
- 若訂閱 Plus，可使用 GPT-4 Turbo，提升準確率與理解能力

### Step 3：開啟專案或建立新檔案

- 可直接開啟資料夾或單一檔案進行練習
- 支援多種語言高亮與執行（視安裝套件而定）

---

## 實際學習範例

### 範例一：學習 Python 的 for 迴圈

**操作步驟：**

1. 建立一個檔案 `loop_example.py`
2. 輸入註解：

```python
# 用 for 迴圈列出 1 到 10 的平方
```

3. Cursor AI 自動補齊：

```python
for i in range(1, 11):
    print(i ** 2)
```

4. 若不懂 `range(1, 11)`，可選取並右鍵點選「Ask AI」，輸入：「這段 range 是什麼意思？」

5. AI 回覆：

> `range(1, 11)` 代表從 1 到 10（不含 11）的整數序列。

---

### 範例二：重構程式碼並學習函式封裝

**原始碼：**

```python
print("Hello, Alice")
print("Hello, Bob")
print("Hello, Charlie")
```

**操作：**

- 選取三行程式，點擊「Ask AI」→ Prompt：「將這段重構成一個函式並使用參數」

**AI 回覆：**

```python
def greet(name):
    print(f"Hello, {name}")

greet("Alice")
greet("Bob")
greet("Charlie")
```

你可以反向問 AI：「為什麼這樣寫比較好？」來進行設計思維學習。

---

### 範例三：查錯與除錯練習

**錯誤程式碼：**

```python
for i in range(5)
    print(i)
```

**操作：**

- AI 會即時標出語法錯誤
- 你可以點選錯誤紅線，詢問 AI「為什麼錯？」

**AI 解釋：**

> 缺少冒號，應改為 `for i in range(5):`

這能幫助初學者從錯誤中快速學習語法規則。

---

### 範例四：使用自然語言寫出完整函式

**Prompt：**

> 寫一個函式，輸入生日字串 "1990-05-20"，回傳目前年齡（以今天為準）

**AI 產生：**

```python
from datetime import datetime

def calculate_age(birthday_str):
    birthday = datetime.strptime(birthday_str, "%Y-%m-%d")
    today = datetime.today()
    age = today.year - birthday.year - ((today.month, today.day) < (birthday.month, birthday.day))
    return age

print(calculate_age("1990-05-20"))
```

你可以繼續問 AI：「請幫我加上類型註解與 docstring」。

---

## 自學策略建議

- **從小功能練習開始**：例如撰寫簡單計算器、字串反轉等
- **每日一題 / 一功能**：寫完後請 AI 幫忙檢查、重構
- **主動問問題**：任何看不懂的語法、邏輯、錯誤訊息都可以問 AI
- **反覆重構與測試**：藉由練習重構與單元測試培養良好工程習慣
- **閱讀 AI 解釋**：不要只複製貼上，理解 AI 為何這樣寫

---

## 總結

Cursor AI Editor 提供了一個嶄新的學習編程體驗，不需要離開編輯器、查 Stack Overflow 或切到 ChatGPT 頁面，就能獲得即時的回饋與教學。它讓程式碼本身成為教材，讓錯誤成為學習的入口，也讓初學者擁有如同一對一家教般的指導資源。

無論你是程式設計初學者、職涯轉職者，或是希望精進特定語言技巧的開發者，使用 Cursor 都能有效提升學習效率與成效。建議搭配一個實際專案（如 Todo App、API Server）作為學習主軸，在實作中成長，在 AI 引導下理解設計背後的邏輯。

## 參考文件

1. [直覺式程式開發是什麼？](https://cloud.google.com/discover/what-is-vibe-coding?hl=zh-TW)
