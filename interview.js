function outer() {
  var a = 66;
  function inmer() {
    console.log(a);
  }
  return inmer;
}

var jj = outer();
jj();

//outer()()

//Are function parameters closed over?
function outer(b) {
  var a = 66;
  function inmer() {
    console.log(a, b);
  }
  return inmer;
}

var jj = outer("hii bro");
jj();
//yes

//Relation of Scope Chain and Closures

function outested() {
  var v = 60;
  function outer(b) {
    var a = 66;
    function inmer() {
      console.log(a, b, v);
    }
    return inmer;
  }
}
var jj = outested()("hii bro");
jj();
