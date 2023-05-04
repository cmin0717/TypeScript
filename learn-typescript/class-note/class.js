// es6 부터 사용할수있게 되었다.

// 기본 형태
class Person {
    // constructor는 class의 초기화 로직이다. 처음 클래스를 생성하면 실행하는 함수이다.
    constructor(name, age){
        console.log('생성 되었습니다.')
        // 클래스의 인스턴스 생성
        this.name = name
        this.age = age
    }
}

// es6전의 생성자 함수 : es6의 클래스는 사실 원래 자바스크립트에 있는 생성자 함수를 보기편하게 사용할수있게 해주는것이다.
// 그러니깐 쉽게 말하면 자스의 클래스는 프로토타입 기반의 함수를 이용하여 만든것? 이라고 생각하면될듯하다.
function person(name,age){
    this.name = name
    this.age = age
}
var hulk = new person('hulk', 40)

let seko = new Person('세코', 30) // 클래스를 생성하면 클래스 선언시 constructor에 있는 코드가 실행된다. (생성되었습니다 출력) 
// seko라는 변수에는 person이라는 class가 담기는데 person.name에는 세코가 person.age에는 30이 들어가게된다.
// person이 생성되면 construction안에 코드가 실행되고 거기서 person클래스의 인스턴스를 주어진 매개변수로 생성하게된다.

// JS 프로토타입 - 실제 여러 매소드 등등이 프로토타입으로 전달되어 우리가 사용할수있게 되는거다.
let user = {name:'Cpat',age:20}
let admin = {} // admin를 객체로 선언하는 순간 객체의 여러 매소드들이 admin에 상속되게 된다. 그렇기에 여러 객체 매소드를 사용할수있게되는것이다.

admin.__proto__ = user  // {name: 'Cpat', age: 20} // admin이라는 객체에 user객체를 상속시킨다(prototype)
admin // {} 실제 admin의 객체에는 아무것도 안들어가있지만
admin.age //20 상속받은 user값에 가져올수있다.
admin.name //'Cpat'
admin.role = 'admin' // user가 상속하지 않는 값을 넣었을경우에는
admin // {role: 'admin'} // 실제 admin에 값을 넣는다.
admin.age = 30 // user에게 상속받은 값에 새로운 값을 넣을때는
admin // {role: 'admin', age: 30} // user값이 바뀌는것이 아닌 admin에 그냥 새로운 값을 넣는방식이다.
admin.age //30