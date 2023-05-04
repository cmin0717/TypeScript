// js 문자열 선언 방식
let str = 'hello'

// ts 문자열 선언 방식
let str1: string = 'hello' // 이 변수는 스트링이 담겨있는 변수다 라는 의미이다.

// ts 숫자형 선언
let num:number = 10

// ts 배열 선언
let arr: Array<number> = [1,2,3] // arr라는 변수는 배열이면서 배열의 구성은 number로 하겠다 라는 의미이다.
let arr1: number[] = [4,5,6]  // 이렇게도 선언할수 있다.
let str_arr: string[] = ['Capt', 'Thor', 'Hulk'] // 문자형 배열도 선언가능
// let str_arr1: Array<string> = ['Capt', 'Thor', 'Hulk', 10] // 선언은 문자형 배열로 했는데 숫자형을 넣으면 오류를 발생시킨다.
let arr2: any[] = [1, 'hi', true] // 각종 타입이 들어가는 배열이라면 특정 타입 말고 any를 넣어준다.
// any라는 타입은 모든 타입이 들어갈수있다

// ts 튜플 선언 / 튜플 : 튜플은 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식을 의미합니다.
let address: [string, number] = ['Cpat', 100] // 지정되 배열에 무슨무슨 타입이 들어가나 정의해준다.

// ts 객체 선언
let obj: object = { // obj라는 변수가 객체타입이다 라는걸 의미한다.
    name:'Cpat',
    age : 100
}
let info: {name:string, age:number} = { // info라는 변수는 객체이면서 name이라는 문자형과 age라는 숫자형 데이터를 갖는다
    name:'Cpat',
    age:100
}
// let info: {name:string, age:number} = {} // 만일 이렇게 선언만 한다면 name,age라는 프로퍼티가 있다고 받았는데 막상 없으니 오류를 발생시킨다.

// ts 불린 값
let show: boolean = true

