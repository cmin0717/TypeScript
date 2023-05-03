var sum = (a:number, b:number):number =>{
    return a + b
}

console.log(sum(10,20))


// npm i typescript -g 를 이용하여 설치한다.
// tsc 파일명을 사용하여 ts파일을 컴파일하여 js파일로 변환한다.
// ts는 컴파일과정이 필요하다. 컴파일하여 ts를 js파일로 바꾸어 실행해주어야 하기 때문에
// tsconfig.json 파일을 이용하여 여러 옵션을 추가하여 컴파일 할수있다.

// ts 공식문서의 playground를 사용하여  ts로 작성된 코드를 바로바로 js로 변환하여 보여주는 기능도 있다.
// 비슷한 사이트로는 바벨이 있다.
// https://www.typescriptlang.org/play/
// https://babeljs.io/