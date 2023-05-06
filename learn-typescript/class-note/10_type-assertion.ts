// Type - Assertion(타입 단언)이란?
// TS에서는 판단하지 못하지만 인간(개발자)가 직관적으로 알때 직접 타입을 넣어주는 느낌쓰?
// DOM API에서 많이 사용한다.

let z // 초기화만 했기에 any타입을 갖는다.
let z1 = z // z가 any타입이기에 z1도 any타입으로 추론된다.
z = 10
z = 'z'
let z2 = z // 이렇게 되버리면 우리는 z가 string인걸 알지만 TS입장에서는 z는 any로 인식한다.
let z3 = z as string // 그렇기에 타입 단언(as 타입)을 이용하여 해당 변수는 무슨 타입이다라고 단언해주는것이 타입 단언이다.
// z는 any타입이지만 z3는 string으로 단언했기에 z3는 string타입을 갖는다.


// 타입 단언 예시 (DOM API)
// <div id='app'> hi </div> 이런 태그가 있다고 하자.
let div = document.querySelector("#app") // 이렇게 가져오게 되면 div는 element | null타입을 가지게 된다.
// querySelector할때 해당 값이 없을수도 있기에 TS는 div가 null일수도 있다고 판단하는것이다.
// 하지만 개발자가 이 코드가 실행될때는 무조건 있을거야 라고 해서 타입을 단언하여 사용하고자 하는 타입을 넣어준다.
let div2 = document.querySelector('#app') as HTMLDivElement
