function formatDate(date, fmt) {
    if (typeof date == 'string') {
        return date;
    }

    if (!fmt) fmt = "yyyy-MM-dd hh:mm:ss";

    if (!date || date == null) return null;
    var o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
    return fmt
}
var date = '10/31/2017';
var date2 = '11/31/2017'
var x = date.split('/');
var y = date2.split('/');
var date1 = new Date(x[2] + ',' + x[0] + ',' + x[1]);
var date3 = new Date(y[2] + ',' + y[0] + ',' + y[1]);
console.log(date1);
console.log(date3);
console.log(date1 - date3);
slist = this.list.filter(function (x) {
    if (x.no.search(that.searchdate) != -1 || x.data
        .search(that
            .searchdate) != -1) {
        return true;
    } else {
        return false;
    }
})
return slist;