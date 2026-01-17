---
title: 如何在 Windows 打造 JavaScript Web 開發環境入門教學
date: 2017-12-19 10:23:23
authors: happycoder
tags: 
    - 自學程式
    - 自學程式設計
    - 程式設計
    - 線上自學
    - coding
    - coder
    - programming
    - computer
    - computer science
    - code
    - 電腦科學
    - 學寫程式
    - 學程式
    - linux
    - 指令
    - 命令列
    - command line
    - 軟體工程師
    - 軟體工程
    - software engineering
    - bash
    - shell
    - svn
    - version control
    - VCS
    - github
    - git
    - svn
    - cvs
    - 自學程式心得
    - JavaScript
    - 環境設定
    - Windows
    - 環境建置
---

![如何在 Windows 打造 JavaScript Web 開發環境](/img/javascript101/javascript.png)

# 前言
所謂工欲善其事，必先利其器。我們開發程式之前我們最重要的就是要設定好開發環境，接下來我們將帶領讀者體驗如何在 Windows 打造 JavaScript Web 開發環境。

# 安裝軟體步驟
1. 下載安裝 [google chrome](https://www.google.com.tw/chrome/browser/desktop/index.html) 瀏覽器
2. 下載安裝 [Visual Studio Code](https://code.visualstudio.com/) 或 [Sublime text](https://www.sublimetext.com/) 文字編輯器
3. 下載安裝 [cmder](http://cmder.net/) terminal 終端機程式 (請下載含 git 的 full 完整版本)
4. 下載安裝 [Node.JS](https://nodejs.org/en/) 選擇左邊穩定版本，按照指令安裝完成
5. 在終端機輸入 `node -v` 若成功顯示版本，代表安裝完成
6. 安裝 [http-server](https://www.npmjs.com/package/http-server) 套件：`npm install http-server -g`

# 撰寫第一個 JavaScript 程式
1. 打開 Visual Studio Code 或 Sublime text 並建立一個 index.html 檔案：

2. 在  `index.html` 輸入：

    ```html
    <!DOCTYPE html>
    <html>
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>Test</title>
        <script>
        console.log(‘hello JS!’);
        </script>
        </head>
    <body>
    </body>
    </html>
    ```

3. 儲存後在終端機移動到該檔案資料夾下，輸入 `http-server -p 7777` 啟動伺服器
4. 打開瀏覽器輸入網址：http://127.0.0.1:7777 或 http://localhost:7777
5. 打`開發者工具`，可以在 console 中看到 `hello JS!`
6. 恭喜讀者完成第一個 JavaScript 應用程式啦！

# 影片教學
<div class="video-container">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/rcjPhZitTqI" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</div>
