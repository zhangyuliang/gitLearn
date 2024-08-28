var a = 1;
var b = 3;
console.log(b);
console.log(typeof (a));
var sss1 = '1111';
var sss2 = 1111;
// 使用这个类型来定义函数参数
function greet(user) {
    console.log("Hello, ".concat(user.name, "!"));
}
var bob = {
    name: 'Bob',
    age: 30,
    email: 'bob@example.com',
};
greet(bob);
var anna = {
    name: 'Anna',
    age: 18
};
var ccc;
/**
 * type interface class
 * boolean number string tuple (x=[10,'hello']) number[] Array<number>  enum any null undefined never
 * extends in keyof typeof readonly
 * let var const
 * 联合 |  交叉 &
 * type IsRed = 'blue' extends 'red' ? true : false // false
 * ?.
 * ?: name?:string  可选属性
 * ??
 * !.
 *
 *
 * 参考网站
 * https://juejin.cn/post/7132490947320872974
 *  */
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
