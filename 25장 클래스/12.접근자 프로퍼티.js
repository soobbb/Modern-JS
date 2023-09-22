const person = {
  // 데이터 프로퍼티
  firstName: "Soobin",
  lastName: "Jeon",

  // fullname은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter 함수
  get fullname() {
    return `${this.firstName} ${this.lastName}`;
  },

  // setter 함수
  set fullname(name) {
    // 배열 디스트럭처링 할당: 36.1 참고
    [this.firstName, this.lastName] = name.split(" ");
  },
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(`${person.firstName} ${person.lastName}`);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName 값을 저장하면 setter 함수가 호출된다.
person.fullname = "Soobinn Jeonn";
console.log(person);

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName 값을 저장하면 getter 함수가 호출된다.
console.log(person.fullname);

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
console.log(Object.getOwnPropertyDescriptor(person, "fullname"));
