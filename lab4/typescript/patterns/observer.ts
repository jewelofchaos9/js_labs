/*
 *
 * OBSERVER
 */
interface Button {
  clickEvent() : void;
  getState() : number;
}

interface Observer {
  update(button : Button);
}

class LoginButton implements Button {
  private observers:  Observer[];
  private state : number;

  public constructor() {
    this.observers = [];
    this.state = 0;
  }

  private notify() : void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  public clickEvent() : void {
    this.state += 1;
    this.notify();
  }

  public attach(observer: Observer) {
    this.observers.push(observer);
  }

  public detach(observer: Observer) : void{
    this.observers.splice(
      this.observers.indexOf(observer),
      1
    );
  }

  public getState() {
    return this.state;
  }
}

class StateObserver implements Observer {
  public update(button: Button) {
    console.log(button.getState());
  }
}

let observer = new StateObserver();
let button = new LoginButton();
console.log("OBSERVER POC")
button.attach(observer);
button.clickEvent();
button.clickEvent();
button.clickEvent();
button.clickEvent();
button.clickEvent();
console.log("OBSERVER POC END")
