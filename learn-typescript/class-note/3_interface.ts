// 인터페이스 선언 // User라는 인터페이스는 객체이면서 age,name를 각각 number, string으로 가지고있는다.
interface User {
    age: number,
    name: string
}

// 변수에 인터페이스 적용 // seho라는 변수는 User라는 인터페이스 형태를따른다.
let seho: User = {
    name: 'seho',
    age:33
}

// 함수에 인터페이스 적용
const getuser = (user: User):User => {
    return user
}
//getuser('1') // 해당 인터페이스로 매개변수를 받으면 그 인터페이스가 아닌 다른값은 넣지못한다. 
getuser({age: 30, name:'seho'}) // 해당 인터페이스 구조와 같은 형태로 넣어준다면 상관없다.
getuser(seho)


// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a:number, b:number):number // () 괄호 안에는 매개변수의 타입을 정의 후 :뒤에 반환값을 정의
}
let sum2: SumFunction // 만들함수를 미리 인터페이스로 정의
sum2 = (a:number, b:number):number => a+b // 해당 인터페이스에 맞게 함수 제작
//sum2 = (a:number, b:string):number => a+b // 이와같이 인터페이스에 벗어난 구조는 에러를 발생시킨다.


// 인덱싱 방식을 정의하는 인터페이스
interface StringArray {
    [i:number]:string // 각 인덱스에 해당하는 값이 스티링형태인 인터페이스 // []는 인덱싱을 의미하는 것이다. []안에는 하나의 매개변수만 넣을수있따.
                                                                        // string, number, symbol형태의 타입만 인덱스에 넣을수있다.
}
const arr3:StringArray = ['a','b','c']
arr3[2] = 'f'


// 딕셔너리 인터페이스
interface StringRegexDic {
    [key:string]:RegExp // 해당 인터페이스는 키값은 스트링이면서 벨류값은 RegExp(정규표현식)인 형태를 유지해야한다.
}
const dic: StringRegexDic = {
    // cssfile: 'qwe', // 키값은 스트링이나 벨류값이 정규표현식이 아니기에 오류발생
    jsfile: /\.js$/,
    cssfiel: /\.css$/
}
// dic['dsfsdf'] = 'a'  해당 객체의 인터페이스에 어긋난 명령은 오류를 발생
Object.keys(dic).forEach(v => v) // 인터페이스로 정의한 객체를 사용하면 TS에서 알아서 타입을 판단하여 알려준다.


// 인터페이스의 확장(상속)
interface Person {
    name:string,
    age:number
}
interface Developer extends Person{ // Developer 인터페이스에 Person인터페이스를 상속 시킨다.(extends 사용)
    language:string
} // developer의 구성은 Person에 있는 name,age와 developer에 있는 language로 총 3개가 된다.

let Hulk: Developer = {
    name:'Hulk',
    age:40,
    language:'Ts'
}