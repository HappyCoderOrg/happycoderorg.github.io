---
title: Go Web 程式設計入門教學：語法基礎之函式（function）篇
date: 2017-07-01 12:23:23
author: happycoder
tags: 
  - GO
  - GO lang
  - golang
  - web
  - go web
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
---

![Go Web 程式設計入門教學](/img/golang101/logo.png)

# 前言
前面單元我們介紹了如何使用流程控制改變我們的程式執行順序，接下來的單元我們將透過 Golang Web 程式設計來學習 Go 這個程式語言。而在這個單元中我們將介紹 Go 函式的使用。程式語言唯有動手作才能學的好，你可以參考之前的文章建置開發環境或是[使用線上開發環境](https://play.golang.org/)進行學習。

# 函式簡介
有經驗的程式設計都知道程式撰寫的維護性很重要，其中模組化就是很重要的元素。當我們有一組程式出現過兩三次，那就很適合把它當做函式包裝起來。在程式語言中函式和數學上的函數有蠻多類似之處。我們可以把函式想成是一個黑盒子，透過呼叫函式可以完成我們想要做的工作，可能是傳入參數相加或是執行某段沒有回傳值的程式碼。

```go
// 有一個關鍵字 func 其後接函式命名，可以傳入參數名稱和其資料型別（也可以不傳參數），後面是帶若有回傳值時的回傳值名稱和資料型別（也可以沒有回傳值）
func funcName(input1 type1, input2 type2) (output1 type1, output2 type2) {
    // 若有回傳值
    return value1, value2
}
```

1. 基本函式
    基本款的函式就是有函式名稱，傳入參數和回傳值：
    ```go
    package main

    import "fmt"

    func add(a, b int) int { // 當只傳一個回傳值且沒有定義回傳值變數時可以簡化括號
        return a + b
    }

    func main() {
        fmt.Println(add(1, 2))
    }
    ```

2. 多回傳值

    ```go
    package main

    import "fmt"

    func addAndProduct(a, b int) (int, int) { // 多回傳值要用括號括起
        return a + b, a * b
    }

    func main() {
        fmt.Println(addAndProduct(1, 2))
    }
    ```

3. 長度不固定參數

    ```go
    func argFunc(arg ...int) {}
    ```

4. 傳值與傳指標   
    一般來說我們傳入函式的參數是複製一份傳入，改動參數不會影響原有值。若今天我們傳入的不是複製值而是記憶體位置的指標，則會更改到原有值。

    ```go
    package main

    import "fmt"

    func add(a int) int {
        return a + 10
    }

    func main() {
        a := 1
        fmt.Println(add(a)) // 11
        fmt.Println(a) // 1
    }
    ```

    換傳指標進去：

    ```go
    package main

    import "fmt"

    func add(a *int) int {
        *a = *a + 10
        return *a
    }

    func main() {
        a := 1
        fmt.Println(add(&a)) // 11
        fmt.Println(a) // 11
    }
    ```

5. defer
    採用後進先出方式在函式全部執行結束前執行，常用於開啟資源後關閉檔案：

    ```go
    func ReadFile() bool {
        file.Open("./file.txt")
        defer file.Close()
        if failureA {
            return false
        }
        if failureB {
            return false
        }
        return true
    }
    ```

6. 函式當做值和類型

    ```go
    type test func(int) (bool)

    func testIt(f test, a int) {

    }
    ```

7. Panic、Recover
    中斷程式進入 panic 狀態，用 Recover 可以恢復
        
# 模組
1. main 函式和 init 函式

    當程式很複雜時，可以拆成不同 package 和檔案，其中 package main 為必要，其於 package 可以放置其他函式，在 Go 中函式或變數開頭大寫代表公有露出可以讓其他套件使用，反之為私有。其中 main 和 init 是保留函式，init 函式可以用於所有 package，main 用於 package main。Go 語言會自動呼叫兩者，init 是可選的，程式初始化是從 main 開始，如果有匯入其他套件會在編譯時依序匯入。如果有一個套件被引入多次，只會被引入一次。

    相對路徑：

    ```go
    import "./model" // 同一目錄的 model 下
    ```

    絕對路徑：

    ```go
    import "xxx/model" // gopath/src/xxx/model
    ```

    一般引用套件用法：

    ```
    import (
        "fmt"
    )

    fmt.Println("hi")
    ```

    點用法：

    ```
    import (
       . "fmt"
    )

    Println("hi")
    ```

    別名：

    ```
    import (
       f "fmt"
    )

    f.Println("hi")

    ```

    只執行套件中 init，不使用裡面函式：

    ```
    import (
       _ "fmt"
    )
    ```

# 總結
以上就是關於 Go 程式語言的基本語法中流程控制介紹，接下來的文章我們將透過 Golang Web 程式設計來學習 Go 這個程式語言的方方面面。

# 參考文件
1. [A tour of go](https://tour.golang.org/welcome/1)
2. [Go Tutorial](https://www.tutorialspoint.com/go/)
3. [Go by Example](https://gobyexample.com/)
4. [Go Programming Language: An Introductory Tutorial](https://www.toptal.com/go/go-programming-a-step-by-step-introductory-tutorial)
5. [Go tour Exercise](https://github.com/davidhoo/go-tour)
6. [Ubuntu Go install](https://github.com/golang/go/wiki/Ubuntu)
7. [從Go看現代程式語言](http://www.ithome.com.tw/voice/99698)

（image via [cuelogic](http://www.cuelogic.com/blog/wp-content/uploads/2017/06/go_lang1.png)）
