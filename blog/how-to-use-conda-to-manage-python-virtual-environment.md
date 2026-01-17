---
title: 如何在終端機下使用 conda 指令管理虛擬環境
date: 2020-04-23 20:23:23
authors: [happycoder]
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

# 前言

Python 虛擬環境本質上是一個資料夾，讓我們可以根據不同專案去管理所需要的環境，安裝不同版本的套件避免衝突（例如：某專案需要套件的版本不同）。除了在 Anaconda 圖形化介面環境設定虛擬環境外，我們也可以使用 conda 指令管理虛擬環境。

# 指令操作

首先，打開 Terminal 終端機 / Anaconda Prompt，我們可以使用 conda 進行指令碼的操作，包括原本使用 GUI 圖形化操作的建立虛擬環境資料夾（工作環境）和安裝套件等操作，進而讓我們的專案獨立使用自己的空間（當然也可以不使用，直接共用 base 工作環境，這邊先記住可以因為不同專案開設不同的虛擬環境來隔離不同的套件安裝）。目前暫時不會用到，可以先記得有相關指令可以管理虛擬環境就好。

檢視目前 conda 的版本：

```
conda --version
```

查看 conda 指令的說明文件：

```
conda --help
```

建立新的工作環境且安裝自行指定的 Python 版本（ENVIRONMENT 為自行命名環境名稱，ex. `demo_project`）：

```
conda create --name ENVIRONMENT python=3.6
```

切換至指定虛擬工作環境（ENVIRONMENT 為自行命名環境名稱。ex. `demo_project`）：

```
conda activate ENVIRONMENT
```

離開虛擬工作環境回到 base 基礎工作環境：

```
conda deactivate
```

移除指定虛擬工作環境：

```
conda remove --name ENVIRONMENT --all
```
