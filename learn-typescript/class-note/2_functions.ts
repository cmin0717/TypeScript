// 함수의 파라미터에 타입을 정의하는 방식
function sum(a:number, b:number){ // 함수식으로 표현
    return a+b
}
const sum1 = (a:number, b:number) => { //화살표 함수로 표현
    return a+b // number+number을 반환함으로 자동으로 반환 타입이 number로 지정된다.
}
sum1(10,20)


// 함수의 반환값에 타입을 정의하는 방식
function add1():number{
    return 10
}
const add = ():number => { // ()뒤에 :타입을 선언하여 해당 타입을 반환하겠다 라는 의미이다.
    return 10              // 만일 반환 타입을 설정하고 다른 타입이 반환될시 오류가 발생한다.
}
add()


// 함수의 파라미터와 반환값에 타입 지정
const tt = (a:string, b:number[]):string => { // a는 문자형, b는 숫자가 들어있는 배열을 받겠다 그리고 문자형으로 리턴하겠다라는 의미이다.
    return a + b
}


// 함수의 옵셔널 파라미터(선택적 파리미터)(?)
const log = (a:string, b?:string) => { // a,b라는 파라미터를 받는데 a는 필수로 받아야하지만 ?가 있는 b는 있으면 받고 없으면 안받는다.
    return a+b
}
log('Hulk') // 이렇게 되면 a는 들어갔지만 b는 들어가지 않았기에 b에는 undefine이 들어가게되어서 결과적으로 HulkUndefine이 출력된다.
log('Cpat', 'Thor')


// 함수의 REST 문법이 적용된 매개변수
const sum3 = (a:number, ...b:number[]):number => { // a변수는 하나를 받고 b변수는 a를 제외한 파라미터를 숫자형 배열에 담아 변수 b에 넣어준다.
    let cnt:number = 0
    cnt += a
    for(let i of b){
        cnt += i
    }
    return cnt
}
sum3(1,2,3,4,5) // 1은 a변수에 [2,3,4,5] 는 b변수에 담긴다.