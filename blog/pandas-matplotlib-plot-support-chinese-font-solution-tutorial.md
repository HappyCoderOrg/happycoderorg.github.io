---
title: Matplotlib / Pandas 資料分析繪圖顯示中文字體入門教學
date: 2020-08-14 20:23:23
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

# Outline

1. 前言
2. 認識圖表專有名詞
3. 解決中文字體空白方法
4. 總結

# 前言

[Matplotlib](https://matplotlib.org/) 和 [Pandas](https://pandas.pydata.org/) 是兩個在資料科學專案中時常使用的兩個套件。Pandas 主要用於資料輸入輸出及資料分析操作，而 Matplotlib 主要是用來資料視覺化，呈現圖表使用，兩者可以單獨也可以搭配使用。在使用 `Matplotlib` 繪製圖表的中文使用者最常會遇到的問題就是中文字體在預設的 Matplotlib 顯示不出中文字體。接下來我們就透過範例程式一步步手把手帶領大家如何在 `Matplotlib` 顯示圖表的中文字體標籤和說明圖示（本文假設讀者對於 Python 程式語法、Pandas 和 Matplotlib 已有基本認識）。

# 認識圖表專有名詞

Matplotlib 中有一些專有名詞，若能掌握住將對我們接下來學習如何在 `Matplotlib` 使用中文字體會很有幫助。

(1) `Figure`: 代表整個面板
(2) `Axes`: 代表整個圖表
(3) `Axis`: 代表軸
(4) `Legend`: 代表圖示說明
(5) `Label`: 代表軸標頭
(6) `Title`: 代表圖表標頭

![](https://static.coderbridge.com/img/happycoder/71b47958976540258e386ca6fc97b3da.jpg)

# 解決中文字體空白方法

解決中文字體空白或是顯示不出來的問題，主要解法有以下兩種：

1. 在程式中引入支援中文的字體並於需要顯示的地方當作參數使用
2. 透過本機端電腦參數設定和字體檔案放置到對應資料夾（可以不用每次在程式中指定字體，但第一次設定步驟較為繁瑣）

接下來本文會先透過一個範例優先介紹 **在程式中引入支援中文的字體** 這種作法。

## 範例程式

**Step 1. 規劃目標並準備資料**
目標：我們希望透過長條圖顯示桃園地區結婚對數，了解結婚分布狀況。

資料集使用政府開放資料中 [108 年度桃園地區結婚對數資料集](https://data.gov.tw/dataset/27396)，我們下載 `.csv` 檔案後更改檔案名稱為： `marriage.csv`。檔案內容如下：

```
月份區域別,一月,二月,三月,四月,五月,六月,七月,八月,九月,十月,十一月,十二月
桃園區,305,202,240,177,272,221,184,109,222,251,223,268
中壢區,271,198,215,213,222,219,188,94,240,246,215,269
大溪區,54,46,40,37,64,58,38,20,47,74,46,48
楊梅區,103,69,91,71,95,99,81,41,89,115,98,121
蘆竹區,100,72,77,80,92,87,70,38,96,95,103,86
大園區,59,38,40,37,61,53,42,15,49,57,53,50
龜山區,100,64,80,75,86,85,82,46,102,92,80,91
八德區,138,98,114,104,133,122,108,57,108,121,105,130
龍潭區,75,52,67,78,72,49,74,26,76,69,73,83
平鎮區,151,97,110,115,144,132,127,55,115,138,138,150
新屋區,37,15,14,24,21,20,24,7,26,21,23,26
觀音區,45,21,38,31,43,32,29,14,45,31,32,40
復興區,11,4,8,5,6,8,6,5,8,6,7,4
```

**Step 2. 載入資料**

```
import pandas as pd

# 讀入資料集檔案
df = pd.read_csv('married.csv')
```

接著要取出我們想要顯示圖表的資料：

```
# loc 取值方式為 [索引, [欄位]]，取 月份區域別 出來當作 index
data = df.loc[:, ['月份區域別', '一月']]
print(data)
```

印出內容：

```
   月份區域別   一月
0    桃園區  305
1    中壢區  271
2    大溪區   54
3    楊梅區  103
4    蘆竹區  100
5    大園區   59
6    龜山區  100
7    八德區  138
8    龍潭區   75
9    平鎮區  151
10   新屋區   37
11   觀音區   45
12   復興區   11
```

並設定 dataframe `index` 為 月份區域別 當作 x 軸，因為原本 預設 index 為 `0, 1, 2, ...`

```
# 原本 index 為 0, 1, 2, 3...12，改為 月份區域別，這樣 x 軸標籤就會改為 月份區域別
data = data.set_index('月份區域別')
print(data)
```

印出內容：

```
        一月
月份區域別
桃園區    305
中壢區    271
大溪區     54
楊梅區    103
蘆竹區    100
大園區     59
龜山區    100
八德區    138
龍潭區     75
平鎮區    151
新屋區     37
觀音區     45
復興區     11
```

**Step 3. 繪製圖表**
接著我們於程式最上方引入 `matplotlib` 套件並使用別名繪製長條圖：

```
import matplotlib.pyplot as plt


# kind 定義圖表類型。plot 函式會取 column 值代表 y 軸的值，index 索引代表 x 軸
axes = data.plot(kind='bar')
```

**Step 4. 中文化**
若使用自行設定字體若有中文字的地方都要給定字體才不會出現亂碼或空白（ex. `title`, `label`, `legend` 等），這邊我們使用 `NotoSansCJK-Black`（也可以自行選擇支援中文的字體）可以在 [下載連結](https://github.com/googlefonts/noto-cjk) 下載使用並放入和程式同一個專案工作資料夾下。

![](https://static.coderbridge.com/img/happycoder/20a2c9242ee540e0aca5a668986bf9bc.png)

```
# 使用 FontProperties 建立字體屬性物件
myfont = FontProperties(fname=r'./NotoSansCJK-Black.ttc')
# 設定標頭和字體
plt.title('一月份各區域結婚數',fontproperties=myfont)
# 設定 x 軸標頭和字體
plt.xlabel('區域別',fontproperties=myfont)
# 設定 y 軸標頭和字體
plt.ylabel('結婚數', fontproperties=myfont)
# 設定右上角說明圖示字體
plt.legend(prop=myfont)

# 使用 for 迴圈一一取出 x 軸標籤 label 設定字體，若 y 軸有中文字也是類似使用方式 get_yticklabels
for label in axes.get_xticklabels():
    label.set_fontproperties(myfont)
```

其中特別需要注意是 `xlabel` 需要一一取出設定字體：

```
# 使用 for 迴圈一一取出 x 軸標籤 label 設定字體，若 y 軸有中文字也是類似使用方式 get_yticklabels
for label in axes.get_xticklabels():
    label.set_fontproperties(myfont)
```

**Step 5. 呈現成果**

```
# 顯示圖表
plt.show()
```

完整程式碼：

```
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.font_manager import FontProperties

# 讀入資料集檔案
df = pd.read_csv('married.csv')

# loc 取值方式為 [索引, [欄位]]，取 月份區域別 出來當作 index
data = df.loc[:, ['月份區域別', '一月']]
print(data)
# 原本 index 為 0, 1, 2, 3...12，改為 月份區域別，這樣 x 軸標籤就會改為 月份區域別
data = data.set_index('月份區域別')
print(data)
# plot 函式會取 column 值代表 y 軸的值，index 索引代表 x 軸
axes = data.plot(kind='bar')

myfont = FontProperties(fname=r'./NotoSansCJK-Black.ttc')
# 設定標頭和字體
plt.title('一月份各區域結婚數',fontproperties=myfont)
# 設定 x 軸標頭和字體
plt.xlabel('區域別',fontproperties=myfont)
# 設定 y 軸標頭和字體
plt.ylabel('結婚數', fontproperties=myfont)
# 設定右上角說明圖示字體
plt.legend(prop=myfont)

# 使用 for 迴圈一一取出 x 軸標籤 label 設定字體，若 y 軸有中文字也是類似使用方式 get_yticklabels
for label in axes.get_xticklabels():
    label.set_fontproperties(myfont)

# 顯示圖表
plt.show()
```

執行結果：

![](https://static.coderbridge.com/img/happycoder/25424f1baf704f4bb036ad9bbd2b91d0.jpg)

# 總結

1. 前言
2. 認識圖表專有名詞
3. 解決中文字體空白方法
4. 總結

以上透過範例介紹圖表的專有名詞及講解如何設定支援中文字體的物件，並讓 matplotlib 圖表可以顯示中文字體。相信讀者跟著操作可以快速解決 matplotlib 不能顯示中文字體的惱人問題。若有討論或是問題歡迎留言和我們一起交流學習喔！
