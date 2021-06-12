// setTimeout(function () {
//   console.log("i am run");
// }, 5000);

function x(y) {
  console.log("hii");
  y();
}
x(function y() {
  console.log("ooo");
});
