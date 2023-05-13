// const sum = (a,b) => {
//     return a + b
// }
// 여기서 같은 이름인 sum을 사용하면 같은 폴더에서 ts파일로 sum이라는 함수명으로 작성시 영향을 받는다. 그래서 일단 주석처리
// sum('10' + 20) -> 자바스크립트 특성상 문자형 + 숫자형 문자형의 더하기로 된다. 그렇기에 1020출력


/**
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

// @ts-check // @ts-check를 사용하면 ts처럼 자바스크립트에서도 형을 지정하여 오류방지를 할수있다.
const add4= (a,b) => {
    return a + b
}
// var r = add(10,'20') // jsdoc에서 정해주어도 ts처럼 잡아주진 못한다.

// 자바스크립트에서도 jsdoc를 사용하여 형을 지정해줄수있다.