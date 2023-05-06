// 인터페이스
interface info1 {
    name:string,
    age:number
}

// 타입 별칭
type info2 = {
    name:string,
    age: number
}

const pp:info1 = { // 인터페이스로 구성한 info에 마우스를 올리면 해당값이 어떻게 구성되어있는지 나오지 않는다.
    name:'pp1',
    age: 20
}

const pp2:info2 = { // 타입 별칭으로 구성한 info1에 마우스를 올리면 해당 값이 어떻게 구성되는지 나온다.
    name:'pp2',
    age:30
}

// 타입 별칭의 특징
// 타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것과 같다.

// 그러면 타입 별칭과 인터페이스의 차이점
// 타입 별칭은 확장이 불가능하다.
// 그렇기에 확장에 용이한 인터페이스를 사용하는것이 바람직하다.