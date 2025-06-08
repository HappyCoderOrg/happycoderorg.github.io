---
title: 自學程式設計與電腦科學入門實戰：Git 常見指令入門教學
date: 2017-11-20 10:23:23
author: HappyCoder 自學程式設計學院
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
---

![自學程式設計與電腦科學入門實戰：Git 與 Github 版本控制基本指令與操作入門教學](/images/cs101/git.png)

# 前言
要成為一個真正的軟體工程師（Software Engineer）除了掌握基礎開發能力外，更重要的是和其他工程師和開發者團隊合作的能力，所以若你能培養出掌握 Git 等版本控制操作和 Git server 架設的能力，你會更容易參與開放原始碼（open source）的社群和提昇自己在職場上的價值。關於相關工具安裝可以參考 [如何在 Windows 打造 Python 開發環境設定基礎入門教學](/2017/11/17/how-to-setup-python-development-environment-in-windows/) 這篇教學文章。好，那我們就準備開始吧！

# 什麼是版本控制系統（Version Control System）？
版本控制系統是一種軟體工程的開發技巧，可以透過這個系統讓每位成員的軟體版本可以方便同步和維護管理（不然要用 email 或是其他工具傳送和管理十分麻煩，尤其程式又常常會有不同版本修改的問題）。在沒有版本控制系統時，我們常會在編輯檔案前複製一個備份，或是在更新檔案後產生許多重複檔案，非常不便且難以維護。

![自學程式設計與電腦科學入門實戰：Git 與 Github 版本控制基本指令與操作入門教學](/images/cs101/files.png)

一般在軟體開發中又分為中央式系統（例如：[Subversion](https://zh.wikipedia.org/wiki/Subversion)、[CVS](https://zh.wikipedia.org/wiki/%E5%8D%94%E4%BD%9C%E7%89%88%E6%9C%AC%E7%B3%BB%E7%B5%B1)）與分散式系統（例如：[Git](https://git-scm.com/)、[BitKeeper](BitKeeper)、[mercurial](https://zh.wikipedia.org/zh-tw/Mercurial) 等），中央式版本控制系統的工作主要在一個伺服器進行，由中央管理存取權限「鎖上」檔案庫中的檔案，一次只能讓一個開發者進行工作。而分散式系統讓不同開發者直接在各自的本地檔案庫工作，並容許多個開發者同時更動同一個檔案，而每個檔案庫有另外一個合併各個改變的功能。這個方式讓開發者能在沒有網路的情況下也能繼續工作，也讓開發者有充分的版本控制能力，而不需經中央管理者的許可。此外，分散式系統仍然可以有檔案上鎖功能。

![自學程式設計與電腦科學入門實戰：Git 與 Github 版本控制基本指令與操作入門教學](/images/cs101/github.png)

# 什麼是 Git？什麼是 Github？
[Git](https://zh.wikipedia.org/wiki/Git) 是一個分散式版本控制軟體，最初由 Linus Torvalds 創作（也是作業系統 Linux 系統的開發者），其最初目的是為更好地管理 Linux kernel 開發而設計，其具備優秀的 merge tracing 合併程式碼的能力。

[Github](https://github.com) 則是一個支援 git 程式碼存取和托管的服務，有許多的開放原始碼的專案都是使用 Github 進行程式碼的管理。若是讀者未來有志於從事程式設計相關工作的話，建議可以熟悉掌握 Git 和 Github 的使用，並建立自己的 Github 作品集。

# Git 基本觀念與常見指令
## 環境安裝
Linux/Mac 一般都有內建 git 軟體，若是 windows 可以下載安裝 [cmder](http://cmder.net/) 這個模擬 Linux terminal 終端機時選擇完整版本就會順便安裝或是到 [Git 官網安裝](https://git-scm.com/)。當然在市面上有許多免費 [GUI 圖形化的 Git 操作軟體](https://git-scm.com/download/gui/linux)，若是初學者則建議先熟悉整個 git 工作模式和指令，再去使用圖形化工具會比較好。

```
// 在終端機輸入以下指令，若成功顯示版本，代表安裝成功
$ git --version
```

## 基本觀念

![自學程式設計與電腦科學入門實戰：Git 與 Github 版本控制基本指令與操作入門教學](/images/cs101/git-workflow.png)

Git 可以分為 Local（本地）和 Remote（遠端）兩個環境，由於 Git 屬於分散式的版本控制系統，所以開發者可以在離線 local 環境下開發，等到有網路時再將自己的程式推到 Remote 環境和 pull 下其他開發者程式碼進行整合。在 Local 中我們又分為 working directory（工作資料夾）、staging area（暫存區）和 repositories（檔案庫）。當自己開發時會在工作資料夾工作，當要進入檔案庫之前會先將檔案加入暫存區，確認沒問題則 commit 到檔案庫中，最後 push 上去 remote 環境。在 Git 中若是有和其他開發者一起合作，則會需要處理不同 branch 之間 conflict 和 merge 的問題。

## 常見指令

1. 設定使用者的資訊
``` 
$ git config
```

2. 將刪除修改的紀錄放入 stage，等 commit 後就可以真正修改
```
$ git add -A
```

3. 將沒有 track 的資料加入追蹤
```
$ git add .
```

4.
```
$ git add -u
```

5. 
```
$ git commit -m
```

6. 
```
$ git push
```

7. 
```
$ git rebase
```

8. 
```
$ git reset
```

9. 
```
$ git revert
```

10. 
```
$ git reflog
```

11. 
```
$ gitk
```

# 總結


# 參考文件
1. [30 天精通 Git 版本控管](https://github.com/doggy8088/Learn-Git-in-30-days/blob/master/zh-tw/README.md)
2. [Git 官方網站](https://git-scm.com/)
3. [Try Git](https://www.codeschool.com/courses/try-git)
4. [Git-it](http://jlord.us/git-it/index-zhtw.html)
5. [GitHub Guides](https://guides.github.com)

（image via [git-scm](https://git-scm.com/images/logos/downloads/Git-Logo-1788C.png)、[qbox](https://dn-sdkcnssl.qbox.me/article/fyuBUISCkmddVNC0t2Iu.png)、[quoracdn](https://qph.ec.quoracdn.net/main-qimg-3aa29f29ede6a8245b6964f663c60339)、[ytimg](https://i.ytimg.com/vi/DPIPC25xzUM/maxresdefault.jpg)、[linux](https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2014/linux.jpg)、[imgur](https://i.stack.imgur.com/RUIIq.png)）
