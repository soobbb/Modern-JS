// 화살표 함수는 메서드로 사용할 때 일반 함수와 달리 자신의
// this 컨텍스트를 가지지 않기 때문에, 객체 내에서 메서드로
// 화살표 함수를 정의하면 예상치 않은 결과가 발생할 수 있습니다.

const Foo1 = () => {};
// 화살표 함수는 생성자 함수로서 호출할 수 없다.
new Foo1();

const Foo2 = () => {};
// 화살표 함수는 prototype 프로퍼티가 없다.
Foo2.hasOwnProperty("prototype");
