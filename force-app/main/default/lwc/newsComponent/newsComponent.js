import { LightningElement, track } from 'lwc';
import getNews from '@salesforce/apex/NewsController.getNews';

export default class NewsComponent extends LightningElement {
    
    @track result = [];
    @track selectedNews = {};
    @track isModalOpen = false;

    get modalClass(){
        return this.isModalOpen ? "slds-modal slds-fade-in-open" : "slds-modal"
    }

    get modalBackdropClass(){
        return this.isModalOpen ? "slds-backdrop slds-backdrop_open" : "slds-backdrop"    
    }

    connectedCallback() {
        this.fetchNews();
    }

    fetchNews(){
        getNews().then(response=>{
            console.log(response);
            this.formatNewsData(response.articles);
        }).catch(error=>{
            console.log(error);
        })
    }

    formatNewsData(res){
        this.result = res.map((item, index)=>{
            let id = `news_${index+1}`;
            let date = new Date(item.publishedAt).toDateString();
            let name = item.source.name;
            return{...item, id:id, date:date, name:name};
        })
    }

    showModal(event){
        let id = event.target.dataset.item;
        this.result.forEach(item=>{
            if(item.id === id){
                this.selectedNews = {...item}
            }
        })
        this.isModalOpen = true;
    }

    closeModal(event){
        this.isModalOpen = false;
    }

// articles:Array(20)
// 0: 
// author: "Aneesha Mathur"
// content: "Imran Khan Arrested: Islamabad police warned of action as PTI called for protests.\r\nNew Delhi: Former Pakistan Prime Minister Imran Khan was arrested today just as he was entering the Islamabad High … [+3994 chars]"
// description: "Imran Khan Arrested: Pakistan Interior Minister Rana Sanaullah tweeted that Imran Khan was arrested as he had failed to appear before the court in cases against him despite being issued several notices."
// publishedAt: "2023-05-09T09:45:00Z"
// source: {name: "NDTV News"}
// title: "Imran Khan Arrested Outside Court, Whisked Away By Paramilitary Personnel - NDTV"
// url: "https://www.ndtv.com/world-news/former-pakistan-pm-imran-khan-arrested-outside-islamabad-high-court-news-agency-ani-quoting-local-media-4018356"
// urlToImage: "https://c.ndtvimg.com/2023-05/fefqjje8_imran-khan-arrested-ndtv-650_650x400_09_May_23.jpg"

}