import { LightningElement, track } from "lwc";

export default class DataBindingDemo2 extends LightningElement {
  @track name = "Hasan";

  handleChange(event) {
    this.name = event.target.value;
  }
}
