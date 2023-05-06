// const logText = (text) => { // 타입을 정해주지 않는 js형식에서는
//     console.log(text)
//     return text
// }
// // 각 타입들을 모두 출력할수있다
// logText(10) // 숫자 10
// logText('Hi') // 문자 Hi
// logText(true) // 불린값 트루

// 제네릭 - 타입을 함수의 매개변수처럼 받아서 같은 함수를 여러 타입으로 사용할수있게해주는것
const logText =<T> (text:T): T => { // <T>는 해당 함수에서 사용할 타입을 매개변수로 받는다.
    console.log(text)
    return text
}
logText<string>('Hi') // <T>에 string을 넘겨주고 매개변수로는 'Hi'를 넘겨준다.
logText(10) // <T>값을 따로 정의해주지 않았다면 TS에서 매개변수를 추론하여 타입을 넘겨준다.
logText<boolean>(false)


// 기존 문법과 제네릭의 차이점 : 함수 중복 선언의 단점
const logText1 = (text:string):string => {
    return text
}
const logNum = (num:number):number => {
    return num
}
// 같은 기능을 하는 함수를 타입별로 만들어야 한다는 단점이 있다.
logText('a')
logNum(10)

// 유니온과 제네릭의 차이점 : 반환타입의 타입 문제
const logUnion = (text: string | number) => {
    return text
}
// union을 사용하여 두개의 타입 모두 받아올수있다.
let a = logUnion('a')
// a.split() // 하지만 문자열을 넣었음에도 a라는 변수는 string매서드를 사용할수없다 현재 a의 타입이 string | number로 인식되기 때문에
a.toLocaleString() // a의 타입은 string | number이기에 두개의 타입에 공통으로 있는 매서드만 사용가능하게된다.
logUnion(10)

// 제네릭 예제
const logGen = <T>(text:T):T => {
    return text
}

const str2 = logGen<string>('a') // 같은 함수에 여러 타입을 넣어도 내가 원하는 타입으로 반환할수있게된다.
str2.split('')
const login = logGen<boolean>(true)


// 인터페이스에 제네릭 선언하기

// 기본적인 인터페이스 선언
interface Dropdown {
    value:string
    selected: boolean
}
const obj1: Dropdown = {value:'abc', selected:false} 

// 제네릭을 사용한 인터페이스 선언
interface Dropdown1<T> { // 제네릭을 선언하여 여러 타입을 인터페이스에 적용시킬수있다.
    value: T
    selected: boolean
}
const obj2: Dropdown1<string> = {value:'abc', selected:true}
const obj3: Dropdown1<number> = {value:1000, selected:true}


// 제네릭의 타입 제한
const TextLength = <T>(text: T):T => { // 현재 T가 어떤 타입인지 모르기에 length매서드는 사용할수없는것이다.
    // console.log(text.length)            // 그렇기에 타입을 제한해주어야한다.
    return text
}
const TextLength2 = <T>(text: T[]):T[] => { // 이렇게 하면 된다는데 사실 이해가지 않는다. 나는 string를 사용할건데 굳이 배열로 줘야할까?? 
    console.log(text.length)            
    return text
}
TextLength<string>('hi')
// TextLength2<string>('hi') // length 매서드를 사용하기 위해 변수를 배열로 주어야 하는데 의도한 코드와 다르다...
// 의도에 맞게 사용하기에는 제네릭을 사용하면 안되는건가??
// 무조건 문자열만 넣는다면 굳이 제네릭을 사용할 필요가 있겠는가??


// 제네릭의 타입 제한2 - 정의된 타입으로 타입을 제한하기
interface lengthType {
    length:number
    // length:'dsfafa' lengh에는 아무값이나 넣어도 된다. 현재 해당 interface는 length라는 이름을 사용할수있게 해주는 것뿐이기에
    // length:true     // 사용자에게 해당 제네릭은 lengh매서드가 있는 타입만 넣어줘 라는 의미로 사용하는것이다.
}
const TextLength3 = <T extends lengthType>(text: T):T => { // 해당 T에 인터페이스에서 추가한 length라는 속성이 있는 애들만 T로 받을수있게 확장한것이다.
    // <T extends {length}>(text: T): T // 이렇게 선언할수도있다 {확장명} 해당 타입에 확장명에 해당하는 속성값이 있는 애들만 들어올수있다.
    console.log(text.length)
    return text
}

TextLength3('asd') // string에는 length가 있기에 들어갈수있다.
// TextLength3({sdfsdf:230}) {}안에는 length가 없기에 들어갈수없다.
TextLength3({length:10}) // {}에는 length가 없지만 {}안에 length라는 키값이 있기에 들어갈수있는것이다. 이건 length매서드가 호출되는게 아닌 해당 벨류값이 출력된다.
TextLength3([1,3,5,2]) // []에는 length매서드가 있기에 들어갈수있다.


// 제네릭의 타입 제한3 - keyof로 타입 제한
interface ShopItems { // 타입을 제한하기위한 인터페이스이므로 키값말고는 쓰레기값이다.
    name:'sadfsdfasfd' // 아무거나 넣어도 상관없다.
    price:2197309172901
    stock:false
}

// keyof는 해당 인터페이스 키값중 하나만 들어올수있다. 위와같은 인터페이스에서는 name,price,stock만 매개변수로 주어질수있다. 
const getItemOption = <T extends keyof ShopItems> (itemoption : T) => {
    let items = {
        name:'Capt',
        price:100,
        stock:true
    }
    return items[itemoption] // 위에서 타입을 제한했기에 주어진 매개변수로 해당 객체에 접근해도 오류 예외가 발생하지 않는다.
}
// getItemOption(10) // 해당값들은 확장된애들에 없기에 들어갈수없다.
// getItemOption([])
getItemOption("name") // ctrl + space를 누르면 어떤값들만 넣을수 있는지 확인할수있따.


// Promise를 리턴할때
const fetchitems = (): Promise<string[]> => { 
    let items = ['a','b','c']
    return new Promise((resolve) => {
        resolve(items)
    })
}
// promise를 리턴할때는 promise타입으로 정의해주어야한다.
// promise타입은 기본적으로 제네릭으로 구성됨으로 어떤 타입이 promise안에 있는지 제네릭을 사용하여 반환해주어야한다.