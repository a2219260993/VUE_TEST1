# VUE_TEST1

前端 vue 任务一

使用原生 VUE

突然理解不过来 sort 函数了

cmp 函数：
如果要得到自己想要的结果，不管是升序还是降序，就需要提供比较函数了。该函数比较两个值的大小，然后返回一个用于说明这两个值的相对顺序的数字。

比较函数应该具有两个参数 a 和 b，其返回值如下：

若 a 小于 b，即 a - b 小于零，则返回一个小于零的值，数组将按照升序排列。

若 a 等于 b，则返回 0。

若 a 大于 b, 即 a - b 大于零，则返回一个大于零的值，数组将按照降序排列

---

搜索功能：
本来是利用 showlist 计算属性 从 list 中计算出该页面显示的数据
但是添加搜索功能则利用 showlist 计算属性从 searchlist 中计算出该页面显示的数据
而 searchlist 也是一个计算属性 从 list 中计算出需要显示的数据

改进后使用filter过滤器

```
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


```

总结一下   showlist是该页面显示的数据 根据nowpage和searchlist计算出   

searchlist是 应该显示的总数据  应该显示  应该显示     由list计算出

list是总数据   固定不变的 

后续添加增加功能也是应该添加再list里面

 list更改= searchlist更改= showlist更改