interface Developer1 {
    name: string
    skill: string
}
interface Person {
    name: string
    age: number
}

const introduce = (): Developer1 | Person => {
    return {name: 'Tony', age: 33, skill: "IronMan"}
}
let tony = introduce()
console.log(tony.name)
// console.log(tony.skill) // 직관적으로는 skill을 리턴했기에 출력이 가능해보이지만 타입을 유니온으로 주었기에 공통된 속성만 접근가능하다.

if ((tony as Developer1).skill){
    let skill = (tony as Developer1).skill
    console.log(skill)
}
else if ((tony as Person).age){
    let age = (tony as Person).age
    console.log(age)
}
// 이런식으로 타입 단언을 이용하여 해당 속성이 있다면 가져오는 방법도 있다.


// 타입 가드 정의 - is해당타입 이라는 명으로 함수를 만드는것이 대부분이다.
const isDeveloper = (target: Developer1 | Person): target is Developer1 => { // 반환값을 target is Developer1으로써 참이면 target의 타입을 Developer1로 인식
    return (target as Developer1).skill !== undefined // target이 Developer1인지 아닌지 참거짓으로 구별
}

if (isDeveloper(tony)){
    // 해당 함수가 참이면 tony의 타입을 바로 Developer1로 인식한다.
    console.log(tony.skill)
}else{
    // 아니라면 현재 두개의 타입을 유니온했기에 나머지 Person으로 인식한다.
    console.log(tony.age)
}