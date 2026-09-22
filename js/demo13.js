console.log("数组静态方法");
console.log("Array.isArray()");
// 返回一个布尔值，表示参数是否为数组，可以弥补typeof运算符的不足
var arr = [1,true,'xiaoming']
console.log(typeof arr);//object,不是数组关键字array
console.log(Array.isArray(arr));//true
//不是数组就是false
console.log(Array.isArray(1));//false

console.log('push()/pop()方法')
// 栈
// push在数组末端添加一个或多个元素，并返回添加新元素后的数组长度，改变原数组
var arr1 = ['hello'];
console.log(arr);
console.log(arr.push('world'));//4
// pop删除数组的最后一个元素并返回该元素，改变原数组
var arr2 = [1,2,3,'xiao']
console.log(arr2);
console.log(arr2.pop());

console.log("shift()/unshift()")
// shift删除数组的第一个元素，并返回该元素，改变原数组
var arr3 = [1,2,3];
console.log(arr3);
console.log(arr3.shift());
// 对空数组删除是undefined
var arr4 = [];
console.log(arr4.shift());
// 遍历清空数组
var arr5 = [1,3,5];
var item;
while(item = arr5.shift()){//都删完后返回undefined，为false
    console.log(item);
}
console.log(arr5);//整个数组都删完了
// unshift在数组的第一个位置添加元素，并返回添加后的数组长度
var arr6 = [2,3];
console.log(arr6);
console.log(arr6.unshift('1'));
// 可接受多个参数

console.log("join()方法")
// join按照指定参数作为分隔符，将所有数组成员连接为一个字符串返回，若不提供默认用逗号分割
var arr7 = [1,2,3]
console.log(arr7.join(''))//1 2 3
// join配合split可以实现数组与字符串之间的互换
var arr8 = ['a','b','c'];
var myarr = arr8.join(' ');//数组变字符串
console.log(myarr);
console.log(myarr.split(' '));//字符串变数组

console.log("concat方法")
// 用于多个数组合并，即将新添加到原后部，并返回新数组，原数组不变
var arr9 = ['11','22'];
var arr10 = ['33','44'];
console.log(arr9.concat(arr10));//合并为同一个数组
// 数组合并不可使用加号，因为会转变为字符串
console.log(arr9 + arr10);
// 除了数组作为参数，也接收其他类型值作为参数，添加到目标数组尾部
console.log(arr9.concat(33,44,55));//上拉加载，合并数据

console.log("reverse方法")
// 颠倒排列数组元素，返回改变后的数组，改变原数组
var arr11 = [1,2,3]
console.log(arr11.reverse());
// 将字符串反转(通过数组的方法)
var str = 'helloworrld';
var arr12 = str.split('');
console.log(arr12);
arr12.reverse();
var str2 = arr12.join('')
console.log(str2);

console.log("indexOf()方法")
// 返回给定元素在数组中第一次出现的位置，如果没有返回-1
var arr13 = [1,2,3,5,5,6];
console.log(arr13.indexOf(5));
// 第2个参数(后边的参数)表示搜索开始的位置
console.log(arr13.indexOf(3,4));




