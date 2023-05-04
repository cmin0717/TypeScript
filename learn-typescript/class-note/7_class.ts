class Person2 {
    // TS에서는 class의 속성의 타입을 미리 정의해주어야한다.
    // 속성의 범위도 정해줄수있다. (디폴트값은 public)
    private name:string // private는 클래스안에서만 사용하는것이다.
    public age:number
    readonly log: string // readonly는 데이터를 변경,삭제는 못하고 읽기만 가능한 상태이다.

    constructor(name: string ,age: number){ // 받아오는 매개변수에도 당연히 타입을 지정해주어야한다.
        this.name = name
        this.age = age
    }
}