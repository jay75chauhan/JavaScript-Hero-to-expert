function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    // anonimus function
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}
var counter1 = new Counter();
counter1.incrementCounter();
