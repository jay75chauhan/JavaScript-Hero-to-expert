// synchronous

// console.log("efeded");
// console.log("efeded");

// function test() {
//   console.log("hii");
//   console.log("byy");
// }
// console.log("efeded");
// test();

// Asynchronous
console.log("efeded");
setTimeout(() => {
  console.log("time out");
}, 1000);
console.log("out");

console.log("start");

function login(email, password, callback) {
  setTimeout(() => {
    console.log("now hiss here");
    callback({ userEmail: email });
  }, 2000);
}
function name(email, callback) {
  setTimeout(() => {
    console.log(" here");
    callback({ userEmail: email });
  }, 1000);
}

const user = login("jay@gmail", "12334", (usero) => {
  console.log(usero);
});

console.log("end");

const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log("yo");
    resolve({ videos: [1, 2, 3, 4] });
  });
}, 2000);

const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log("fb");
    resolve({ user: "name" });
  });
}, 3000);

Promise.all([yt, fb]).then((result) => console.log(result));
