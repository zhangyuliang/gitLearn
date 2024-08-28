const a:1 = 1;

type A = 3;

const b:A = 3;

type B = "123";

console.log(b);
console.log(typeof(a));

type Str = "hello"
type S = Str[0];
type StrLen = Str['length']

let sss1:S = '1111';
let sss2:StrLen = 1111;

// console.log(typeof(Str));

// 定义一个用户类型
type User = {
    name: string;
    age: number;
    email?: string;
};

// 使用这个类型来定义函数参数
function greet(user: User) {
    console.log(`Hello, ${user.name}!`);
}

const bob: User = {
    name: 'Bob',
    age: 30,
    email: 'bob@example.com',
};

greet(bob);

const anna: User = {
    name: 'Anna',
    age: 18
};


type C = keyof User
let ccc:C 

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

/*
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
  }
  
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);*/

  interface LabelledValue {
    label: string;
  }
  
  function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
  }
  
  let myObj = {size: 10, label: "Size 10 Object"};
  printLabel(myObj);

  interface SearchFunc {
    (source: string, subString: string): boolean;
    //(a: number, b: string): boolean;
    // (source: number, subString: string): boolean;
  }

   let mySearch: SearchFunc;
    mySearch = function(src:string, sub:string) {
        let result = src.search(sub);
        if (result == -1) {
            return false;
        }
        else {
            return true;
        }
    }


    interface StringArray {
        [index: number]: string;
      }
      
      let myArray: StringArray;
      myArray = ["Bob", "Fred"];
      
      let myStr: string = myArray[0];
      let myStr2: string = myArray[2]; //undefined   

      console.log(myStr);

// 数字索引的返回值必须是字符串索引返回值类型的子类型


    //   class Animal {
    //     name: string;
    // }
    // class Dog extends Animal {
    //     breed: string;
    // }
    
    // // Error: indexing with a 'string' will sometimes get you a Dog!
    // interface NotOkay {
    //     [x: number]: Dog;
    //     [x: string]: Animal ;
    // }


// alert("ok")

class Greeter {
    static standardGreeting = "Hello there"
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        if (this.greeting != '') {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }

     overloadedFunction(x: number): string;
     overloadedFunction(x: string): number;
     overloadedFunction(x: any): any {
        if (typeof x === 'number') {
            return '数字: ' + x;
        } else if (typeof x === 'string') {
            return x.length;
        }
    }
}

let greeter: Greeter;
greeter = new Greeter("world");
console.log(greeter.greet());
console.log(greeter.overloadedFunction(123));
console.log(greeter.overloadedFunction("assss"));

let greeter1: Greeter;
greeter1 = new Greeter("");
console.log(greeter1.greet());

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return ()=> {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);



class BeeKeeper {
    hasMask: boolean;
    constructor() {
        
    }
}

class ZooKeeper {
    nametag: string;
    constructor() {
        
    }
}

class Animal {
    numLegs: number;
    constructor() {
        
    }
}

// class Bee extends Animal {
//     keeper: BeeKeeper;
// }

// class Lion extends Animal {
//     keeper: ZooKeeper;
// }

// function findKeeper<A extends Animal, K> (a: {new(): A;
//     prototype: {keeper: K}}): K {

//     return a.prototype.keeper;
// }

// findKeeper(Lion).nametag; 