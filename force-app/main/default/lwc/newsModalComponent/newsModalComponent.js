import { LightningElement, api } from 'lwc';

export default class NewsModalComponent extends LightningElement {

    @api isModalOpen = false;
    @api selectedNews;

    closeModal(){
        this.dispatchEvent(new CustomEvent('close'))
    }

}