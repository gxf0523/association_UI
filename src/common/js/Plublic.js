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
        var obj = {
            "overflow": "hidden",
            "textOverflow": "ellipsis",
            "display": "-webkit-box",
            "WebkitLineClamp": num,
            "WebkitBoxOrient": "vertical",
        }
        return obj;
    },
    timerFilter: function (m) {
        return m < 10 ? '0' + m : m
    },
    /**
     * 时间戳转化成时间格式
     */
    gettimeFormat(timestamp) {
        var time = new Date(timestamp*1);
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var date = time.getDate();
        return year + '年' + this.timerFilter(month) + '月' + this.timerFilter(date) + '日';
    },
    /**
     * 图片域名
     */
    getPrefixUrl: function () {
    var prefixUrl = 'http://47.93.35.112:8099';
        return prefixUrl;
    },
    /**
     * 获取URL参数
     */
    getUrlParam: (name) => {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        let r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) {
            return decodeURI(r[2]);
        } else {
            return null;
        }
    },
}