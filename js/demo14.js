function add(){
    console.log('结果');
}
add();

function result(x,y){
    return x+y;
}

var result = result(10,11);
console.log(result);

console.log(Math.abs(-100));

console.log(Math.max(-10,8,99,32));
console.log(Math.min(-10,8,99,32));

console.log(Math.random());
// 任意范围生成随机数
function getRandomArbitrary(min,max){
    return Math.random() * (max - min) +min;
}
console.log(getRandomArbitrary(10,20));
var result1 = getRandomArbitrary(10,20);
console.log(result1);
console.log(Math.floor(result1));

console.log(Date.now());
console.log(Date());

var d = new Date('Septembe 9,2026');
console.log(d.getDate());
console.log(d.getFullYear());
// 获取本年度剩余天数
function leftDays(){
    var today = new Date();
    var endYeat = new Date(today.getFullYear(),12,31,23,59,59,999);
    var msPerDay =24*60*60*1000;
    return Math.floor((endYeat.getTime()-today.getTime())/msPerDay);
}
console.log(leftDays());

let divmy = document.getElementsByTagName("div");
divmy.innerHTML = "hello world";
var text = document.getElementsByClassName("text");
console.log(text);