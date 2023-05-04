const logMessage = (value:string):void => {
    console.log(value)
}
logMessage('hi')
// logMessage(100) // 해당함수는 매개변수를 스트링으로 받기에 숫자형인 100을 넣으면 오류를 일으킨다.


// Union type ( | ) : OR연산자라고 생각하면 된다. // 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는 과정(필터링)
const logMessage1 = (value: string | number):void => { // value라는 매개변수에 타입을 string OR number로 받겠다라는 의미이다.
    // 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는 과정(필터링)
    if (typeof value === 'string'){
        value.concat() // 해당 타입의 매서드를 사용할수있다.(원래도 사용할수있는데 직관적으로 보여주기에 사용하기 더 편리한것이다.)
    }
    if (typeof value === 'number'){ // if문을 통과한다면 자동으로 value에 number타입이 들어가 넘버의 매서드를 사용할수있다.
        value.toLocaleString()
    }
}
logMessage1('hi') // 타입을 두개중 하나만 받아도 되기에 둘다 오류를 발생시키지 않는다.
logMessage1(100)
let seho1: string | number | boolean // 여러개의 타입을 받을수도 있다.


// 유니온 타입의 특징
interface Dl {
    name:string,
    skill:string
}
interface Ps {
    name:string,
    age:number
}
const askSomeone = (someone : Dl | Ps) => { // 여러개 구조체의 인터페이스를 주었을경우 유니온타입은 공통된 타입만 줄수있다.
    someone.name // 공통된 부분만 접근할수있다.
    // someone.age // 만일 DL로 들어왔는데 Ps의 요소를 찾으면 오류가 날수있기에 공통부분만 확실하게 줄수있다.
    // someone.skill // 공통부분말고도 접근하려면 위에 처럼 타입가드를 사용하여 특정 타입임을 증명해주어야 한다.
}


// 인터섹션 타입 ( & ) : AND연사자라고 생각하면 된다.
let seho2: string & number & boolean // seho2의 타입은 never라고 나오는데 문자이면서 숫자이고 그리고 불린인 값은 없기때문이다.

const askSomeone2 = (someone : Dl & Ps) => {
    someone.name
    someone.age
    someone.skill // &이기 때문에 dl과 ps인터페이스의 값을 모두 접근할수있다.
}


// 유니온과 인터섹션의 차이점 - 매개변수를 넘겨줄때 다르게 넘겨주어야한다.
askSomeone({name:'Capt', skill:'방패 날리기'}) // 유니온으로 타입을 정한경우 타입의 선택지중 하나만 만족하면된다.
askSomeone({name:'Capt', age:100})
// askSomeone2({name:'Capt', skill:"방패날리기"}) // 인터섹션으로 타입을 정의한경우는 해당 타입을 모두 만족하는 매개변수를 넘겨야한다.
askSomeone2({name:'Capt', skill:'방패 날리기', age: 100})