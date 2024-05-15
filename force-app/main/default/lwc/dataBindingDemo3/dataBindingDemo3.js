import { LightningElement } from "lwc";

export default class DataBindingDemo3 extends LightningElement {
  firstName = "Mehdi";
  lastName = "Hasan";

  get fullName() {
    const name = `${this.firstName} ${this.lastName}`;
    return name.trim().toUpperCase();
  }
}
