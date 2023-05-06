// 타입 추론(Type - Inference)란?
// TS에서 타입스크립트가 코드를 해석해 나가는 동작을 의미한다.


// 타입 추론 기본 1
let a1 = 10 // a1의 타입은 지정하지 않아도 number로 추론된다.
let a2 = 'abc' // string

const getB = (b) => { // 함수의 매개변수에 타입 지정해주지 않으면 any로 추론하게 된다.
    return b
}

const getB1 = (b = 10) => { // b의 디폴트값을 10으로 설정해주면 매개변수의 타입을 디폴트로는 number로 인식된다.
    return b // 리턴값도 추론할수있다면 스스로 정의된다.
}


// 타입 추론 기본 2
interface Dropdown2<T> {
    value: T
    title: string
}

// DetailedDropdown 인터페이스에 Dropdown2를 확장시킨다.
// DetailedDropdown 제네릭에 들어온 타입을 Dropdown2에도 적용시킨다.
interface DetailedDropdown<K> extends Dropdown2<K>{
    description: string
    tag: K
    // 실제 DetailedDropdown인터페이스는 확장 받았기에 아래처럼 존재하는것이다.
    // value : K
    // title: string
}

let shopitems: Dropdown2<string> = {
    value : 'abc', // 인터페이스를 타입으로 정의할때 제네릭에 string을 넣어주었기에 value의 타입은 string으로 추론되어 나온다.
    title : 'title'
}

let detaileditem: DetailedDropdown<string> = {
    title: 'title',
    description: "a",
    // 제네릭으러 string을 넘겼기에 아래두개는 string으로 타입이 추론된다.
    value: 'abc',
    tag: "tag",
}
// let detaileditem: DetailedDropdown<number> = { // 만일 제네릭으로 number타입을 넘겨주면 value와 tag에도 number타입이 들어가기에 오류를 발생
//     title: 'title',
//     description: "a",
//     value: 'abc',
//     tag: "tag",
// }


// Best Common Type(가장 적절한 타입)
let arr4  = [1,2,3,4] // number[]로 추론한다.
let arr5 = [1,2,true] // (number | boolean)[]으로 추론하게 된다. 유니온 타입으로 추론하게된다.



// 타입스크립트의 타입 체킹
// 타입 체킹에 있어서 타입스크립트의 지향점은 타입 체크는 값의 형태에 기반하여 이루어져야 한다는 점입니다. 
// 이걸 Duck Typing 또는 Structural Subtyping 이라고 합니다.
// Duck Typing : 객체의 변수 및 메서드의 집합이 객체의 타입을 결정하는 것을 의미. 
// 동적 타이핑의 한 종류 Structural Subtyping : 객체의 실제 구조나 정의에 따라 타입을 결정하는 것을 의미


// TS의 Language Server
// node_modules에 TS 서버의 파일이 있다.
// 코드의 인텔리전스등을 이용하기 위해서는 내부적으로 서버가 돌고있어야한다.
// TS관련되 여러 작업을 하기위해서 서버가 돌고있다.