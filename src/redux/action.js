var Action = {
    // 里面是 函数
    size(text) {
        // 函数的参数为  接受的数据
        return {
            type: "SIZE_naem",
            text: text
        }
    }
}
export default Action