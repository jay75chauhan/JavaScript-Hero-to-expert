let jj = {
  firstName: "John",
  lastName: "jay",
};

let getName = function (home, state) {
  console.log(`${this.firstName} , ${this.lastName}  ,${home}and s:-${state}`);
};

//function borowwing

getName.call(jj, "kutch", "gujrat");

getName.apply(jj, ["kutch", "gujrat"]);

let hh = getName.bind(jj, "kutch", "gujrat");
hh();
