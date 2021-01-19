class StaticExample {
  a; //instance field; connected to an instance of StaticExample when using the 'new' keyword.
  b; //instance field; connected to an instance of StaticExample when using the 'new' keyword.
  static c = 'this is the initial value of the static field'; //static field; connected to the class, does not require an instance of StaticExample to be accessed

  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    StaticExample.c = c ? c : StaticExample.c; //C is static, so you can't refer to it with the 'this' keyword, but the class name.
    //if you use the 'this' keyword here, it'll simply create a non static field called c as well,
    //so you can have both 'this.c' (instance field) and 'StaticExample.c' (static field)
  }
}

console.log(StaticExample.a); //not a static field. requires an instance of StaticExample to be seen >>
console.log(StaticExample.b); //not a static field. requires an instance of StaticExample to be seen >>
console.log(StaticExample.c); //c is a static field from the class. we don't need to have an instance of StaticExample to access it >>



const instance1 = new StaticExample("example1 a","example1 b","this is the static field from the class");
//we log the values of the instance1. the static C value has the values passed while instantiating instance1
console.log(instance1);
console.log(instance1.c); //undefined because 'c' is not a instance field >>
console.log(StaticExample.c); //the value we passed to the static c field during the instantiation of 'instance1' >>

const instance2 = new StaticExample('example2 a', 'example2 b');
//we instantiate instance2 without providing a value for c. you can see in the constructor that if we don't provide, it'll simply keep the previous value
console.log(instance2);
console.log(StaticExample.c); // still has the same value >>

const instance3 = new StaticExample("example3 a", "example2 3", `I'm providing a new value to the static field`);
//now instance3 provides a new value to the static field c
console.log(instance3);
console.log(instance3.c); //undefined because 'c' is not a instance field >>
console.log(StaticExample.c); //the value we passed to the static c field during the instantiation of 'instance1' >>