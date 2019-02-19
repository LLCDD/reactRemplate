var Action = {
    // 里面是 函数
    add(text) {
        // 函数的参数为  接受的数据
        return {
            type: "ADD",
            text: text
        }
    }
}