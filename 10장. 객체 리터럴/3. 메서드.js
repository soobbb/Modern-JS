var circle = {
  radius: 5, // 프로퍼티

  // 원의 지름
  getDiameter: function () {
    return 2 * this.radius; // this는 circle을 가리킴
  },
};
console.log(circle.getDiameter);
