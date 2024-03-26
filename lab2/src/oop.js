class User {
  #age = 0
  _tel = ''
  constructor(name) {
    this.name = name
  }

  get age() {
    return this.#age
  }

  set age(value) {
    if (isNaN(value)) {
      return new Error("Age cannot be NaN")
    }
    if (1 < value  && value < 100) {
      this.#age = value
    } else {
      return new Error("Too old or young")
    }
  }

  get tel() {
    return this._tel
  }

  set tel(val) {
    if (val.at(0) != '+' || val.at(1) != '7') {
      return new Error("Number must start with +7")
    }
    if (val.length != 12) {
      return new Error("Incorrect length of number")
    }
    this._tel = val
  }

  hello() {
    return `Hi! My name is ${this.name}. And I am ${this.#age} years old.`
  }
}

function User2(name, age) {
  this.name = name
  this.age = age
  this.hello = function() {
    return `Hi! My name is ${this.name}. And I am ${this.age} years old.`
  }
}

class Student extends User {
  #knowledge = 0
  #age = 0
  constructor(name) {
    super(name)
  }

  function hello() {
    return "kek"
  }

  get age() {
    return this.#age
  }

  set age(value) {
    if (isNaN(value)) {
      return new Error("Age cannot be NaN")
    }
    if (1 < value  && value < 100) {
      this.#age = value
    } else {
      return new Error("Too old or young")
    }
  }

  learn() {
    this.#knowledge += 1
  }

  get knowledge() {
    return this.#knowledge
  }
}


function testAgeSetter() {
  user = new User('leha')
  user.age = 105
  console.log(user.hello())
  user.age = 30
  console.log(user.hello())
}

function testTelSetter() {
  user = new User('leha')
  user.tel = '+123123'
  console.log(user.tel)
  user.tel = '+79501235075'
  console.log(user.tel)
}

function testStudent() {
  student = new Student('leha')
  student.learn()
  console.log(student.knowledge)
  student.learn()
  console.log(student.knowledge)
}

Array.prototype.reverse = function() {
  this.push(...this)
  return this
}
