// Enum 이란? 이넘은 특정 값들의 집합을 의미하는 자료형입니다.
// 이넘은 객체에 키-벨류, 벨류-키 형태로 만든것과 같은 느낌이다.
// 또한 이넘에는 중복 키값이 들어갈수없다.

// 숫자형 이넘
enum Direction {
    up, // 0  특별한 숫자형을 넣어주지 않는다면 0부터 시작하여 +1씩 커진다.
    down, // 1
    left, // 2
    right // 3
}
enum Direction2 {
    up = 10, // 10 // 숫자형을 넣어주면 해당 위치는 넣어준 숫자가 되고 아래로 +1씩 올라간 숫자가 들어간다.
    down, // 11
    left = 20, // 20
    right // 21
}

let way = Direction.up
console.log(way) // 0
console.log(Direction[way]) // 'up'이 나온다. // 리버스 매핑의 예
// enum을 선언할때 특정 값을 넣지않고 이름만 넣어준다면 해당 위치의 숫자값을 반환한다.
// 이것을 숫자형 이넘이라고 한다.
// 그렇게 얻은 숫자값을 활용하여 해당 값을 가져올수도있다. (리버스 매핑이라고 한다.)


// 문자형 이넘
enum Shoes {
    Nike = '나이키', // 이넘을 선언시 해당 키값에 벨류값을 넣어주면 숫자형으로 나오는게 아닌 넣어준 벨류값이 나온다.
    Adidas = '아디다스',
    polo = 10, // 숫자형이라도 입력해주어야 들어갈수있다.
    Puma // 문자형 이넘안에 벨류값을 선어하지 않는 키값은 들어갈수없다.
}

let shoes = Shoes.Nike
console.log(shoes) // '나이키'를 출력한다.


// 이넘의 활용 예시
enum Answer {
    Yes = 'Y',
    No = 'N'
}

// 이넘을 사용하지 않는 함수일 경우
const askQuestion = (answer : string) => {
    if (answer === 'Yes'){
        console.log('정답 입니다여~')
    }
    if (answer === 'No'){
        console.log('오답 입니다여~')
    }
}
askQuestion('Y')  // 들어오는 매개변수가 같은 yes이지만 여러 방면으로 들어올수있다.
askQuestion('yes')  // 그렇게 들어오는것을 하나하나 if문 처리 할수 없기에 enum으로 처리한다면 깔끔하게 정리할수있다.
askQuestion('예스')

const askQuestion1 = (answer: Answer) => {
    if (answer === Answer.Yes){ // 비교를 이넘으로 하게된다면 위와같은 예외처리는 발생하지 않는다.
        console.log('정답 입니다여~')
    }
    if (answer === Answer.No){
        console.log('오답 입니다여~')
    }
}
askQuestion1(Answer.Yes) // 매개변수를 이넘형태로 잡았기에 이넘 형태만 들어갈수있따.
// askQuestion1('yes') // 매개변수가 Answer이넘 형태로 주어져야 하기에 오류를 발생 

