---
title: Go Web 程式設計入門教學：語法基礎之變數（variable）和資料型別（type）篇
date: 2017-07-01 10:23:23
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
前面單元我們介紹了如何建置 Go 開發環境，接下來的單元我們將透過 Golang Web 程式設計來學習 Go 這個程式語言。而在這個單元中我們將介紹 Go 的變數和常數宣告以及資料型別的使用。程式語言唯有動手作才能學的好，你可以參考之前的文章建置開發環境或是[使用線上開發環境](https://play.golang.org/)進行學習。

# 定義變數和使用
變數是程式語言中暫存資料的盒子，在 Go 中比較特別的是定義變數有多種方式（特別的是 Go 語言和 C 語言在設計上比較不同的地方是 Go 語言把變數型別宣告放在變數名稱後面），以下列出比較常見的變數使用方式：

1. 一般變數宣告

    ```
    // var 關鍵字 變數名稱 資料型別
    var varName type
    ```

    範例：

    ```
    var str string
    ```

2. 定義多個變數

    ```
    var var1Name, varName2 type
    ```

    範例：

    ```
    var str1, str2 string
    ```

3. 定義變數並初始化

    ```
    var varName type = value
    ```

4. 同時初始化多個變數

    ```
    var varName1, varName2, varName3 type = v1, v2, v3
    ```

5. 簡化宣告

    ```
    var varName1. varName2, varName3 = v1, v2, v3
    ```

    另外一種是使用 `:=` 符號取代 `var` 和 `type`，但要注意的是這樣的方式只能在函式內部使用，若是在全域使用會出現編譯錯誤，一般使用 `var` 定義全域變數。它的變數生命週期為 `block` 內。

    ```go
    package main

    import "fmt"

    var num = 10

    // 編譯錯誤
    str0 := "world"

    func main() {
        var str1 = "hello"
        str2 := "world"
        fmt.Println(num)
        fmt.Println(str1)
        fmt.Println(str2)
        if true {
            var str3 = "XD" // str3 := "XD"
            fmt.Println(num)
            fmt.Println(str1)
            fmt.Println(str2)
            fmt.Println(str3)
        }
        fmt.Println(num)
        fmt.Println(str1)
        fmt.Println(str2)
        // 變數生命週期結束 undefined 錯誤
        fmt.Println(str3)
    }
    ```

    值得注意的若是在函式內宣告但沒使用會出現編譯錯誤：

    ```
    package main

    import "fmt"

    var num = 10

    func main() {
        var str = "hello"
        fmt.Println(str)
    }
    ```

    ```
    ./main.go:10:6: str declared and not used
    ```

# 定義常數
常數和變數不同是在編譯時就確認值，在程式執行期間不可以更改值。在 Go 程式語言使用 `const` 定義常數，其語法如下：

```
const constName = value
const Pi = 3.14
const Name string = "Mark"
```

# 內建簡單資料型別
1. 布林值
    在 Go 布林值是 `true` 或 `false`，預設為 `false`。

    ```
    var isActived = true
    ```

2. 數字
    在 Go 語言中主要分為 `int` 和 `uint` 兩類型數字資料型別，個別之間還有位元可以做選擇，例如：`int32`。注意兩種數字資料型別不能互相設定或操作（例如：相加）

    ```
    var num = 12
    ```

3. 字串
    Go 語言中使用 UTF-8 字元編碼，使用 `""` 來包裹字串：

    ```
    var str string = "hello"
    str[1] // e

    ch = []byte(str)
    ch[1] = 'w'
    str2 = string(ch)
    fmt.Println(str2) // hwllo
    ```

4. 錯誤類型
    在 Go 語言中有一個 `error` 類型，在套件中也有個 `errors` 負責處理錯誤訊息：

    ```
    import errors
    err := errors.New("throw error")

    if err != nil {
        fmt.Println(err)
    }
    ```

# 複雜資料型別
1. array
    array 就是一般程式語言的陣列，基本上和其他程式語言相同：

    ```go
    // 變數名稱 [長度]類別
    var arrayName [n]type
    ```

    陣列長度宣告後不能改變，傳入函式為副本，若需要傳指標進去可以使用 `slice`。實際使用方式：

    ```go
    // 宣告長度為 10 類型為 int 的陣列
    var arr [10]int
    arr[0] = 7
    arr[1] = 13

    a := [3]int{1, 2, 3}
    b := [10]int{1, 2, 3}
    // 自動計算元素長度
    c := [...]int{1, 2, 3}
    // 二維陣列
    dArry := [2][4]{[3]{1, 2, 3}, [3]{2, 3, 4}}
    ```

2. slice
    有時候我們不會一開始就知道需要宣告多長的陣列，這時就需要使用動態陣列（是一個參考類型，總是指向底層 array）：slice，其使用方式：

    ```go
    var sliceName = []type
    ```

    實際使用：

    ```go
    slice = []byte{1, 3, 4}
    array = [3]int{1, 3, 4}
    bySlice := 
    ```

3. map
    map 和其他程式語言的 dict 和 hash map 相似，使用方式：

    ```go
    var mapName = map[keyType]valueType
    ```

    key 可以是除了 int 外其他類型，取值使用 key 取值：

    ```go
    // 第一種宣告方式
    var numbers map[string] int
    // 第二種宣告方式
    numbers := make(map[string]int)
    numbers["one"] = 1
    numbers["two"] = 7
    numbers["three"] = 13
    fmt.Println("three", numbers["three"])

    // key 數量
	m := map[string]int {"1": 1, "3": 2}
	fmt.Println(len(m))

    // map 新增、刪除、修改、查找
    numbers["three"] = 13
    value, ok := numbers["three"]
    numbers["three"] = 17
    delete(numbers["three"])
    ```

    此外 map 是無序的，也是個參考類型指到底層：

    ```
    numbers := make(map[string]int)
    
    numbers["three"] = 13
    numbers2 := numbers
    numbers2["three"] = 1 // numbers["three"] 也變成 1
    
    ```

# make、new 比較
make 一般用於內建資料型別（map、slice 和 channel）的記憶體分配，而 new 用於各種類型記憶體分配。make 回傳有初值的 T 類型，而 new 回傳指標。

# 總結
以上就是關於 Go 程式語言的基本語法中的變數和資料型別介紹，接下來的文章我們將透過 Golang Web 程式設計來學習 Go 這個程式語言的方方面面。

# 參考文件
1. [A tour of go](https://tour.golang.org/welcome/1)
2. [Go Tutorial](https://www.tutorialspoint.com/go/)
3. [Go by Example](https://gobyexample.com/)
4. [Go Programming Language: An Introductory Tutorial](https://www.toptal.com/go/go-programming-a-step-by-step-introductory-tutorial)
5. [Go tour Exercise](https://github.com/davidhoo/go-tour)
6. [Ubuntu Go install](https://github.com/golang/go/wiki/Ubuntu)
7. [從Go看現代程式語言](http://www.ithome.com.tw/voice/99698)

（image via [cuelogic](http://www.cuelogic.com/blog/wp-content/uploads/2017/06/go_lang1.png)）
