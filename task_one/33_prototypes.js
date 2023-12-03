// Prototypes

function NewUser(course, cost) {
  this.course = course;
  this.cost = cost;
}
NewUser.prototype.increment = function () {
  this.cost++;
};

NewUser.prototype.quotation = function () {
  console.log(`Course => ${this.course}, cost => ${this.cost} `);
};

let data = new NewUser("user001", 99);
data.increment();
// data.quotation();

let myHeroes = ["thor", "spiderman"];
let superpowers = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(this.spiderman);
  },
};

// superpowers.getSpiderPower();

Object.prototype.mypower = function () {
  console.log(
    `I am watcher! I watch all the multiverse! Main avengers are: ${this}`
  );
};

myHeroes.mypower();
