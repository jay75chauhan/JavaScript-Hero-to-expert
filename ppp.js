// setTimeout(function () {
//   console.log("i am run");
// }, 5000);

// var nono = () => {
//   console.log("bobobobobob");
// };
// function x(y) {
//   console.log("hii");
//   y();
// }
// nono();
// x(function y() {
//   console.log("ooo");
// });

function nono(name, callback) {
  callback(name);
}

let hii = nono("jay", (h) => {
  console.log(h);
});
