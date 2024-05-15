import { LightningElement } from "lwc";

export default class ParentToChildDemo extends LightningElement {
  messageFromParent = "";

  handleNameChange(event) {
    this.messageFromParent = event.target.value;
  }
}
