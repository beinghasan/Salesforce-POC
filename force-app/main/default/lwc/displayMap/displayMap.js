import { LightningElement, api, track, wire } from "lwc";
import getLocation from "@salesforce/apex/DisplayMapController.getLocation";

export default class DisplayMap extends LightningElement {
  @track record;
  //Google Maps API supports zoom levels from 1 to 22 in desktop browsers, and from 1 to 20 on mobile.
  @track zoomLevel = 15;
  @track listView = "visible";

  @track mapMarkers = [];

  @api recordId;

  @wire(getLocation, { recordId: "$recordId" })
  wiredRecordLocation({ error, data }) {
    if (data) {
      this.record = data;
      console.log("Map Data => ", JSON.stringify(this.record));

      //data.map(dataItem => {
      this.mapMarkers = this.record.map((item) => {
        //[
        return {
          location: {
            City: item.BillingCity,
            Country: item.BillingCountry,
            PostalCode: item.BillingPostalCode,
            State: item.BillingState,
            Street: item.BillingStreet
          },

          icon: "standard:account",
          title: item.Name
        };
        //];
      });
      //});
      this.error = undefined;
    } else if (error) {
      this.error = error;
      this.mapMarkers = undefined;
    }
  }
}
