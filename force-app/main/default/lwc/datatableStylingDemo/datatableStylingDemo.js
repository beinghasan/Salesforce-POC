import { LightningElement, wire } from 'lwc';
import getAccountsData from '@salesforce/apex/DatatableStylingDemo.getAccountsData';
const COLUMNS = [
    {label:'Name', fieldName:'recordLink', type:'url', 
    typeAttributes:{label:{fieldName:'Name'}, target:'_blank'}, 
    cellAttributes:{class:{fieldName:'accountColor'}}
    },
    {label:'Annual Revenue', fieldName:'AnnualRevenue', type:'currency', cellAttributes:{
        class:{fieldName:'amountColor'},
        iconName:{fieldName:'iconName'}, iconPosition:'right'
    }},
    {label:'Industry', fieldName:'Industry', type:'text', cellAttributes:{
        class:{fieldName:'industryColor'}
    }},
    {label:'Phone', fieldName:'Phone', type:'phone'},
]
export default class DatatableStylingDemo extends LightningElement {

    tableData
    columns = COLUMNS
    error

    @wire(getAccountsData)
    accountsHandler({data, error}){
        if(data){
            let tempRecs = [];
            data.forEach( ( record ) => {
                let tempRec = Object.assign( {}, record );  
                tempRec.recordLink = '/' + tempRec.Id;
                tempRecs.push( tempRec );            
            });
            this.tableData = tempRecs.map(item=>{
                let amountColor = item.AnnualRevenue < 200000000 ? "slds-text-color_error":"slds-text-color_success"
                let iconName = item.AnnualRevenue <200000000 ? "utility:down":"utility:up"
                return {...item, 
                    "amountColor":amountColor, 
                    "iconName":iconName, 
                    "industryColor":"slds-icon-custom-custom10 slds-text-color_default",
                    "accountColor":"slds-icon-custom-custom4 slds-text-color_default"}
            });
            console.log(data);
        }
        if(error){
            this.error = error
            console.error(error);
        }
    }
}