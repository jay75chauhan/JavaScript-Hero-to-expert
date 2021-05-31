function counter() {
  var count = 0;
  return function increment() {
    count++;
    console.log(count);
  };
}

counter1 = counter();
counter1();
counter2 = counter(); //new counter
