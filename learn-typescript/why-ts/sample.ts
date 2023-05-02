// 함수형으로 선언
// function sum(a:number, b:number):number {
//     return a + b
// }

// 화살표 함수로 선언
var sum = (a:number, b:number):number => {
    return a + b
}

// sum(10,'30')  정의한 타입이 아닐경우 오류 표시가 뜬다.
var result = sum(10,20) // sum함수의 리턴값을 number라고 지정했기에 result는 넘버형으로 인식된다.
result.toExponential // 그렇기에 result에 .을 붙혀 여러 매소드에 바로 접근할수있다.