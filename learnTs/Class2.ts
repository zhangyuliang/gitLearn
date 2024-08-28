class Animal {
    // Animal 类的定义
}

class BeeKeeper {
    hasMask: boolean = true;
}

class Bee extends Animal {
    // Bee 类有一个静态的 keeper 属性
    keeper: BeeKeeper = new BeeKeeper();
}

function findKeeper<A extends Animal, K> (a: {new(): A;
    prototype: {keeper: K}}): K {

    return a.prototype.keeper;
} 

// 使用 findKeeper 函数来找到 keeper
let beeKeeper = findKeeper(Bee);
// console.log(beeKeeper.hasMask);



interface Alarm2 {
    price: number
    alert(s: string): string
  }
  interface Alarm2 {
    weight: number
    alert(s: string, n: number): string
  }
  
  // 想当于
  interface Alarm2 {
    price: number
    weight: number
    // 接口中方法的合并，与函数的合并一样
    alert(s: string): string
    alert(s: string, n: number): string;
  }

  const enum Enum {
    A = 1,
    B = A * 2
}

//   declare  enum Enum {
//     A = 1,
//     B,
//     C = 2
// }

// console.log(Enum.B)


let sym1 = Symbol("123");
let sym2 = Symbol("123");

console.log(sym1)
console.log(sym2)
console.log(sym2 == sym1)



let someArray = [1,"string",null,undefined,false,new Object(),{}];

for(let e of someArray){
    //console.log(e);
}

for(let e in someArray){
    someArray[e] = 0
    // console.log(e)
    // console.log(someArray[e])
}

for(let e of someArray){
    //console.log(e);
}



type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    department?: string;
};

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
    name: "Alice",
    age: 30,
    employeeId: 1234,
    //department: "HR"
};

console.log(employee);

type NumberOrString = number | string;

function printValue(value: NumberOrString): void {
    if (typeof value === 'number') {
        console.log(`数字: ${value}`);
    } else {
        console.log(`字符串: ${value}`);
    }
}

printValue(123);    // 输出: 数字: 123
printValue("abc");  // 输出: 字符串: abc

