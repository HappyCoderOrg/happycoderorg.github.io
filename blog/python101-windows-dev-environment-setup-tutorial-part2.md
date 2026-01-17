---
title: 如何在 Windows 打造 Python Web 開發環境入門教學 Part2
date: 2017-12-21 10:23:23
authors: [happycoder]
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
  - Python
  - 環境設定
  - Windows
  - 環境建置
---

![如何在 Windows 打造 Python Web 開發環境](/img/python101/python-logo.png)

# 前言

所謂工欲善其事，必先利其器。我們開發程式之前我們最重要的就是要設定好開發環境，接下來我們將帶領讀者體驗如何在 Windows 打造 Python Web 開發環境。

# 撰寫第一個 Python Django 程式

1. 創建虛擬開發環境：`conda create -n <自定義虛擬環境名稱> python=3.5`
2. 觀看已建立的虛擬環境：`conda info -e`
3. 進入虛擬環境：`activate <自定義虛擬環境名稱>`
4. 安裝套件：`pip install django`
5. 觀看已安裝套件：`pip list`
6. 建立第一個 django 專案：`django-admin startproject my_first_app`
7. 啟動伺服器：`python manage.py runserver`
8. 到瀏覽器觀看成果！`http://localhost:8000` 或 `http://127.0.0.1:8000`

# 其他常用指令

1. 離開虛擬環境：`deactivate`
2. 移除虛擬環境：`conda remove <自定義虛擬環境名稱> -n --all`
3. `pip uninstall` 套件名稱

# 影片教學

<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/NCss_yvb5ZM" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</div>
