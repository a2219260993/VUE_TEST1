// 使用 Mock
var Mock = require('mockjs');
var a = 0;
const { name } = require('_commander@6.2.1@commander');
var time = function () {
    let time = new Date();
    // console.log(`${time.getMonth() + 1}/${time.getDate()}/${time.getFullYear()}`);
    return `${time.getMonth() + 1}/${time.getDate()}/${time.getFullYear()}`
}
var now = function () {
    a++;
    return a.toString();
}
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-20': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'key|+1': 1,
        'show|1': true,
        'date': /(1[0-2]|0[1-9])\/[0-2][0-9]\/([1][9][5-9][0-9]|20[0-1][0-9])/,
        "no": /[0-9]{6}/,
        //利用正则表达式

        'data': '@name',
        'total|0-100.2': 1
    }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))