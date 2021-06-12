//function statement ask function declaration
a();

function a() {
  console.log("hii");
}

//function expression

var b = function () {
  console.log("hiiiii");
};
b();

//anonymous function

// function(){

// }

//named function expression
var c = function xyz() {
  console.log("hiiiii");
};

//different between parameters & arguments ?
// function a(params, label) {
//   console.log("hii");
// }
// a(arguments);

//first class function -- ability to be like values
//ask  first class citizens

var b = function (p) {
  console.log(p);
};

b(function () {});

var n = function (p) {
  return function bb() {};
};

console.log(n());
