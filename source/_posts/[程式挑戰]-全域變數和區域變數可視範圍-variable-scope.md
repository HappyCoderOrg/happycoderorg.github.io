---
title: 程式挑戰：全域變數和區域變數可視範圍 Variable Scope
date: 2019-12-27 20:23:23
author: HappyCoder 自學程式設計學院
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

![](https://static.coderbridge.com/img/happycoder/86c40ca5235c4cddb2adf4130ebcf1b3.png)

# 題目

給定 C 語言程式如下，其中 `s` 被宣告為全域變數，給定值為 `1`。請問最後程式執行後輸出為何？

```
#include <stdio.h>


int s = 1; // 全域變數

void add(int a) {
    int s = 6;
    for (; a >= 0; a = a - 1) {
        printf("%d, ", s);
        s++;
        printf("%d, ", s);
    }
}

int main() {
    printf("%d, ", s);
    add(s);
    printf("%d, ", s);
    s = 9;
    printf("%d", s);
    return 0;
}
```

(A) 1, 6, 7, 7, 8, 8, 9
(B) 1, 6, 7, 7, 8, 1, 9
(C) 1, 6, 7, 8, 9, 9, 9
(D) 1, 6, 7, 7, 8, 9, 9

# 參考解答

答案為 (B) 1, 6, 7, 7, 8, 1, 9

![](https://static.coderbridge.com/img/happycoder/071229f029444647a994a26d86151e26.jpg)

本程式挑戰主要在測試同學對於「全域變數」（Global variable）、「區域變數」（Local variable）的生命週期和變數可視範圍（Scope）的理解。若是函數內沒有宣告變數卻使用該變數，則會往外看是否有同名變數，若有則使用該變數。在主程式外的宣告的變數為全域變數，程式內的跨函式都可以存取、修改該變數，若是在函式內宣告的變數或參數變數則為區域變數，區域變數存取修改權僅限於該函式內，函式結束即消失。

```
#include <stdio.h>

// 全域變數
int s = 1;

void add(int a) {
    // 區域變數 s
    int s = 6;
    // 區域變數 a，值為 1
    for (; a >= 0; a = a - 1) {
        // 迴圈兩次，第一次印出 6，第二次印出 7
        printf("%d, ", s);
        // s = s + 1
        s++;
        // 迴圈兩次，第一次印出 7，第二次印出 8
        printf("%d, ", s);
    }
}

int main() {
    // s 在主程式中找不到，所以為全域變數 s，值為 1
    printf("%d, ", s);
    // 複製傳入參數值為 1
    add(s);
    // 全域變數 s，值為 1
    printf("%d, ", s);
    // 更改全域變數 s，值為 9
    s = 9;
    printf("%d", s);
    return 0;
}
```

我們可以透過觀察程式執行的過程來判斷（在 C 語言我們以主程式 `main()` 為執行區塊，由上往下執行）：例如在 `main()` 函式內部 `s = 9;` 這行之前的 `s` 使用的是全域變數 `1`。因此傳入 `add()` 函式的 `a` 參數為 `1`。因此 `for` 迴圈會進行兩次後結束，印出 `6, 7, 7, 8`（`add` 函式內的 `s` 為自己內部宣告的區域變數非外部的全域變數 `1`，所以不影響到全域變數 `s`）

最後`main()` 函式內部使用到的 `s` 全域變數（前面沒有設定變數型別），被改成 `9`：

```
s = 9
```

所以結果為：`1, 6, 7, 7, 8, 1, 9`

另外還有區塊變數（Block variable）是指宣告在某個陳述句區塊之中的變數，例如 while 迴圈或是 for 迴圈區塊內使用，區塊結束即消逝。

```
#include <stdio.h>

int main() {
    int i = 101;

    for (int i = 0; i < 10; i++)  {
        // 不受外面的 i 影響
        printf("%d", i);
    }
    // 印出的是 101
    printf("%d", i);
}
```

其結果為：`0123456789101`

# 參考文件

1. [Wiki C 語言](https://zh.wikipedia.org/zh-tw/C%E8%AF%AD%E8%A8%80)
2. [csie ntnu](https://apcs.csie.ntnu.edu.tw/)
