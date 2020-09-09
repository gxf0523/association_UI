export default {
    /**
     * 返回顶部
     */
    backTop: function () {
        setTimeout(function () {
            window.scrollTo({
                top: 0,
                behavior: 'auto',//smooth 匀速；auto 默认
            })

        }, 100);
    },
    /**
     * 文本溢出隐藏
     */
    lineOverflow: function (num) {
        console.log(num)
        var obj = {
            "overflow": "hidden",
            "textOverflow": "ellipsis",
            "display": "-webkit-box",
            "WebkitLineClamp": num,
            "WebkitBoxOrient": "vertical",
        }
        return obj;
    },
    add0: function (m) { return m < 10 ? '0' + m : m },
    /**
     * 时间戳转化成时间格式
     */
    gettimeFormat(timestamp) {
        console.log(timestamp);
        var time = new Date(timestamp);
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var date = time.getDate();
        return year + '年' + this.add0(month) + '月' + this.add0(date) + '日';
    },
}