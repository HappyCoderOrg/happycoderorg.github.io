---
title: 新手村系列：Markdown 和 HTML 基礎語法教學
slug: markdown-html-basic-syntax-tutorial
date: 2019-12-11 20:23:23
authors: happycoder
tags:
  - coding
  - code
  - 程式設計
  - 自學程式設計
  - CS
  - Computer
  - Computer Science
  - 自學程式
  - 程式語言
  - 程式
  - programming
---

![](https://static.coderbridge.com/img/happycoder/6d032b80cb1145b5bf42f49f29b62ea3.png)

# 前言

[Markdown](https://zh.wikipedia.org/zh-tw/Markdown) 是一種輕量級的標記語言，最初為 John Gruber 所設計。Markdown 特色在於允許人們「使用易讀易寫的純文字格式編寫文件，然後轉換成有效的 HTML 文件」。簡而言之，Markdown 就是一種簡潔易懂的語法，讓我們可以專注在內容上，不用花時間思考外觀樣式，在透過轉換變成可以呈現在網頁上的 HTML 語法。目前在許多知名技術/開發者論壇或是開發者工具（例如：[Github](https://github.com/)）、技術部落格工具都有支援 Markdown 語法。

# 什麼是 HTML？

在開始學習 Markdown 之前我們先來認識一下 [HTML](https://zh.wikipedia.org/zh-tw/HTML)，畢竟 Markdown 最終還是要轉換成 HTML 這個網頁上內容結構的標準語法。HTML 中文稱作超文本標記語言（英文全名為 HyperText Markup Language，簡稱 HTML），是一種用於建立網頁的標準標記語言。

這樣講起來有點抽象，事實上我們每天在觀看瀏覽的網頁就是由一個個 HTML 所組成。所以我們可以透過瀏覽器的檢視原始碼功能去一窺目前網頁的 HTML 樣貌。

這邊我們使用 Google Chrome 瀏覽器當作範例，可以在畫面中點選右鍵 > 檢視原始碼（View Page Source）：

![](https://static.coderbridge.com/img/happycoder/b8a1aff7038f4e67bb6e6e67b997aeb1.png)

就可以看到該網頁的 HTML 內容：

![](https://static.coderbridge.com/img/happycoder/ea282d380de848769c6039035dab1ac3.png)

網頁來源：[Wikipedia HTML 頁面](https://zh.wikipedia.org/zh-tw/HTML)

由於這個網頁已經有點複雜，因為它已經包含了 CSS 外觀樣式語法和 JavaScript 互動邏輯程式的部分，對於初學者來說比較難一眼理解。所以我們用一下範例來介紹 HTML 最基礎的部分：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>我是標題</h1>
    <p>我是段落</p>
    <a href="https://zh.wikipedia.org/zh-tw/Markdown">我是超連結</a>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/HTML.svg/200px-HTML.svg.png" alt="">
</body>
</html>
```

若是使用瀏覽器打開這個 HTML 網頁會呈現：

![](https://static.coderbridge.com/img/happycoder/355f2c0a2b2047e1bcdd2938aa60c009.png)

HTML 標籤語法每個標籤皆有其意義且大部分成對出現，標籤元素內可以設定屬性值。網頁元素主要放置於 `<body></body>` 中，`<head></head>` 內主要放置 meta data 設定檔案和放置引入的外觀樣式檔案、程式邏輯等。元素內可以透過設定屬性值（attribute）來宣告元素功能，以下 `href="https://zh.wikipedia.org/zh-tw/Markdown"` 代表點擊該連結會到該 wikipedia 網址。

```
<!-- href 是屬性，決定連結點擊後目的地 -->
<a href="https://zh.wikipedia.org/zh-tw/Markdown">我是超連結</a>

<!-- src 是屬性，決定載入圖片位置-->
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/HTML.svg/200px-HTML.svg.png">
```

元素包裹內容在內，代表標題元素：

```
<h1>我是標題</h1>
```

# Markdown 常見語法教學

一般 Markdwon 段落以空白行分隔。若是序列則內容需要內縮（一個 tab）。

## 標題

```
是一级標題
=======

# 一級標題
## 二级標題
```

其 HTML 元素為：

```
<h1>是一级標題</h1>
<h1>一級標題</h1>
<h2>二级標題</h2>
```

效果如下：

# 是一级標題

# 一級標題

## 二级標題

## 文字

```
_斜體_
**粗體**
`等寬字型Monospace`
```

其 HTML 元素為：

```
<em>斜體</em>
<strong>粗體</strong>
<code>等寬字型Monospace</code>
```

效果如下：

_斜體_
**粗體**
`等寬字型Monospace`

## 多行程式碼

![](https://static.coderbridge.com/img/happycoder/5e381c25c2674912a76cf31f1f241573.png)

其 HTML 元素為：

```
<pre>
    <code>
        <span>print('hello world')</span>
    </code>
</pre>
```

效果如下：

```
print('hello world code :)')
```

## 水平線

```
---
```

其 HTML 元素為：

```
<hr>
```

效果如下：

---

## 無序列表

```
* 張三
* 李四
* 王二
```

其 HTML 元素為：

```
<ul>
    <li>張三</li>
    <li>李四</li>
    <li>王二</li>
</ul>
```

效果如下：

- 張三
- 李四
- 王二

## 有序列表

```
1. 不論
2. 三七
3. 二十一
```

有序列表，其 HTML 元素為：

```
<ol>
    <li>不論</li>
    <li>三七</li>
    <li>二十一</li>
</ol>
```

效果如下：

1. 不論
2. 三七
3. 二十一

## 巢狀有序列表

```
1. 不論
    - 第一
    - 第二
    - 第三
2. 三七
    1. 第一
    2. 第二
    3. 第三
3. 二十一
```

有序列表，其 HTML 元素為：

```
<ol>
    <li>不論
        <ul>
            <li>第一</li>
            <li>第二</li>
            <li>第三</li>
        </ul>
    </li>
    <li>三七
        <ol>
            <li>第一</li>
            <li>第二</li>
            <li>第三</li>
        </ol>
    </li>
    <li>二十一</li>
</ol>
```

效果如下：

1. 不論
   - 第一
   - 第二
   - 第三
2. 三七
   1. 第一
   2. 第二
   3. 第三
3. 二十一

## 超連結

```
[連結文字](連結網址)
```

其 HTML 元素為：

```
<a href="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/HTML.svg/200px-HTML.svg.png">連結文字</a>
```

效果如下：

[連結文字](https://www.happycoder.org)

## 圖片

```
![文字屬性](Icon-pictures.png "文字標題")
```

其 HTML 元素為（少數沒有成對出現的元素標籤）：

```
<img src="連結網址" alt="文字屬性" title="文字標題" />
```

效果如下：

![圖片文字](https://www.python.org/static/opengraph-icon-200x200.png "圖片標題")

## 注釋引用

```
> Markdown使用電郵用字元「>」來引用。
```

其 HTML 元素為：

```
<a href="連結網址">連結文字</a>
```

效果如下：

> Markdown 使用電郵用字元「>」來引用。

## 表格

```
| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Text     | Text     | Text     |
```

其 HTML 元素為：

```
<table>
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
         </tr>
     </thead>
     <tbody>
         <tr>
             <td>Text</td>
             <td>Text</td>
             <td>Text</td>
         </tr>
     </tbody>
</table>
```

效果如下：

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Text     | Text     | Text     |

# 總結

以上簡單介紹了：

1. 什麼是 HTML？
2. Markdown 常見語法教學

以上介紹了 HTML 和 Markdown 基礎語法的教學，透過 Markdown 這一種簡潔易懂的語法，我們可以更專注在內容創作上。對於一個自學程式設計新手而言，培養撰寫文章的習慣（例如：建立自己的技術部落格）是很重要的環節，不但可以累計自己經歷也可以強化記憶並幫助到需要的人。若是需要完整語法介紹可以參考[markdown.tw](https://markdown.tw/)，當然，只要多加練習就可以慢慢掌握 Markdown 語法的訣竅，進而喜歡這種簡潔的書寫方式。

# 參考文件

1. [Github Basic writing and formatting syntax](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax)
2. [markdown.tw](https://markdown.tw/)
3. [markdown wiki](https://zh.wikipedia.org/wiki/Markdown)
