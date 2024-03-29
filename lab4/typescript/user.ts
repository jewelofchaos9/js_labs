interface IUser {
  username: string;
  age: number;
  hello(): void;
}

class User implements IUser {
  username: string;
  age: number;
  
  public hello() : void {
    console.log(`Hi! My name is ${this.username}. And I am ${this.age.toString()} years old.`)
  }

  public constructor(username: string, age: number) {
    this.username = username;
    this.age = age;
  }

}

type UserInstance = {
  username: string;
  age: number;
  hello(): void;
}


let basic_user: IUser = new User('asdf', 123)
let user2: UserInstance = new User('abobus', 530)

