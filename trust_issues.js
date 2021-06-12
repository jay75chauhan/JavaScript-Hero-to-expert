console.log("start");

setTimeout(function ab() {
  console.log("hii i am waiting");
}, 5000);

console.log("end");

//maini line off code

let start = new Date().getTime();
let end = start;

while (end < start + 1000) {
  end = new Date().getTime();
}
console.log("end date");
