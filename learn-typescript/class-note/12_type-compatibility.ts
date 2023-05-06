// Type - Compatibility(타입 호환)이란?
// 타입 호환이란 타입스크립트 코드에서 특정 타입이 다른 타입에 잘 맞는지를 의미한다.

// 구조적 타이핑

interface PS1 {
    name: string
    skill: string
}

interface PS2 {
    name: string
}

class PS3 {
    name: string
}

let d2: PS1;
let p1: PS2;
let p2 = new PS3();
// d2 = p1 // d2은 Developer2의 타입을 받기에 name과 skill을 가지지만 p1은 Person의 타입을 받기에 name밖에 없다. 그래서 둘은 호환될수없다.
// p1 = d2 // p1의 속성이 d2에는 모두 있기에 호환될수있다.
// p2 = d2 // 이것도 위와같이 p2의 속성이 d2에 모두 있고 타입도 만족하기에 호환될수있다.

interface Avengers {
    name: string;
    // name: number 만일 name이 number타입이라면 아래와 같은 코드들은 호환될수없고 오류를 발생시킨다.
  }
  
let hero: Avengers;
// 타입스크립트가 추론한 y의 타입은 { name: string; location: string; } 입니다.
let capt = { name: "Captain", location: "Pangyo" };
hero = capt; // capt은 hero의 속성을 모두 만족하기에 호환가능

function assemble(a: Avengers) {
console.log("어벤져스 모여라", a.name);
}
assemble(capt); // assemble의 매개변수는 Avengers의 타입을 받고 capt은 Avengers의 모든 속성을 만족하기에 들어갈수있다.

// 결국 TS는 뭐가됐든 속성값과 해당 타입을 만족한다면 서로 호환이 가능한것이다!


// 클래스의 타입 호환
class Hulk1 {
    handSize: number;
    constructor(name: string, numHand: number) { }
}
  
class Captain2 {
handSize: number;
constructor(numHand: number) { }
}
  
let aa = new Hulk1('hulk',1000);
let ss = new Captain2(1)

aa = ss;  // OK
ss = aa;  // OK
// 스태틱 멤버(static member)와 생성자(constructor)를 제외하고 속성만 비교한다.
// 위의 두개의 class는 handsize라는 같은 속성만 가지고 있기에 양방향 호환이 가능하다.

// 이넘의 타입 호환
enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };

let status1 = Status.Ready;
// status1 = Color.Green; 이넘 타입끼리는 호환될수없다.


// 제네릭의 타입 호환
interface Empty<T> {
}
let x: Empty<number> = 0;
let y: Empty<string> = 's';

x = y; // Empty인터페이스는 타입을 받지만 받은 타입을 사용하지 않기에 어떤 타입을 넣어도 호환이 가능한것이다.
y = x;

interface NotEmpty<T> {
    data: T;
  }
let x1: NotEmpty<number> = {data:10};
let y1: NotEmpty<string> = {data:'a'};

// x1 = y1 //위와 다르게 NotEmpty은 받은 타입을 사용하기에 같은 속성이라도 타입이 달라 호환되지 않는다.
// y1 = x1

