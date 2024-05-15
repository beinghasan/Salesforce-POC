import { LightningElement, wire, track, api } from "lwc";
import Id from "@salesforce/user/Id";
import getCurrentUser from "@salesforce/apex/AccountLocationController.getCurrentUser";
import { NavigationMixin } from "lightning/navigation";
import { getRecord } from "lightning/uiRecordApi";

const fieldsArray = [
  "Account.Name",
  "Account.BillingStreet",
  "Account.BillingCity",
  "Account.BillingState",
  "Account.BillingPostalCode",
  "Account.BillingCountry"
];

export default class AccountMap extends NavigationMixin(LightningElement) {
  userLocation;
  accountLocation;
  accountAddressFound = false;
  userId = Id;
  zoomLevel = 16;
  billingStreet;
  billingCity;
  billingPostalCode;
  billingState;
  accountName;
  @track center;
  @api recordId;
  @track mapMarkers = [];
  @wire(getRecord, { recordId: "$recordId", fields: fieldsArray })
  wiredAccount({ error, data }) {
    if (data) {
      this.billingStreet = data.fields.BillingStreet.value;
      this.billingCity = data.fields.BillingCity.value;
      this.billingPostalCode = data.fields.BillingPostalCode.value;
      this.billingState = data.fields.BillingState.value;
      this.accountName = data.fields.Name.value;

      if (
        this.billingStreet ||
        this.billingCity ||
        this.billingPostalCode ||
        this.billingState
      ) {
        this.accountAddressFound = true;
      }

      //account information is stored here
      this.accountLocation = {
        location: {
          Street: this.billingStreet !== null ? this.billingStreet : "",
          City: this.billingCity !== null ? this.billingCity : "",
          PostalCode:
            this.billingPostalCod !== null ? this.billingPostalCod : "",
          State: this.billingState !== null ? this.billingState : "",
          Country: this.billingCountry !== null ? this.billingCountry : ""
        },
        title: this.accountName !== null ? this.accountName : ""
      };

      this.mapMarkers = [this.accountLocation];

      this.center = {
        location: {
          Street: this.billingStreet !== null ? this.billingStreet : "",
          PostalCode:
            this.billingPostalCod !== null ? this.billingPostalCod : ""
        }
      };
      this.error = undefined;
    } else if (error) {
      this.error = error;
      this.mapMarkers = undefined;
      console.error("ERROR => ", error);
    }
  }

  @wire(getCurrentUser, { userId: "$userId" }) currentUserDetail({
    data,
    error
  }) {
    if (data) {
      const mapMarkerLocation = {
        location: {
          Street: data.Street,
          City: data.City,
          PostalCode: data.PostalCode,
          State: data.State,
          Country: data.Country
        },
        title: data.Name,
        description: data.Name
      };

      //user location assigning
      this.userLocation = mapMarkerLocation;
      this.error = undefined;
    } else if (error) {
      this.error = error;
      this.mapMarkers = undefined;
      console.error("ERROR => ", error);
    }
  }

  navigateToMap(event) {
    event.stopPropagation();
    let routeMapUrl;
    const userLocationSet = new Set();
    const accountLocationSet = new Set();

    if (this.userLocation && this.userLocation.location) {
      try {
        if (this.userLocation.location.Street) {
          userLocationSet.add(this.userLocation.location.Street);
        }

        if (this.userLocation.location.City) {
          userLocationSet.add(this.userLocation.location.City);
        }

        if (this.userLocation.location.PostalCode) {
          userLocationSet.add(this.userLocation.location.PostalCode);
        }

        if (this.userLocation.location.State) {
          userLocationSet.add(this.userLocation.location.State);
        }

        if (this.userLocation.location.Country) {
          userLocationSet.add(this.userLocation.location.Country);
        }

        //Add account Location into Set
        if (this.accountLocation && this.accountLocation.location) {
          if (this.accountLocation.location.Street) {
            accountLocationSet.add(this.accountLocation.location.Street);
          }

          if (this.accountLocation.location.City) {
            accountLocationSet.add(this.accountLocation.location.City);
          }

          if (this.accountLocation.location.PostalCode) {
            accountLocationSet.add(this.accountLocation.location.PostalCode);
          }

          if (this.accountLocation.location.State) {
            accountLocationSet.add(this.accountLocation.location.State);
          }

          if (this.accountLocation.location.Country) {
            accountLocationSet.add(this.accountLocation.location.Country);
          }
        }
      } catch (e) {
        console.log("ERRR==>", e);
      }
    }

    if (
      userLocationSet &&
      userLocationSet.size > 0 &&
      accountLocationSet &&
      accountLocationSet.size > 0
    ) {
      routeMapUrl =
        "https://www.google.com/maps/dir/" +
        Array.from(userLocationSet).join("+") +
        "/" +
        Array.from(accountLocationSet).join("+");
    } else {
      //Error Toast to be shown
      routeMapUrl = "https://www.google.com/maps";
    }

    this[NavigationMixin.Navigate]({
      type: "standard__webPage",
      attributes: {
        url: routeMapUrl
      }
    });
  }

  get drivingDirectionsLabel() {
    let buttonLabel = "";
    if (this.accountAddressFound) {
      buttonLabel = "Driving Directions";
    } else {
      buttonLabel = "No Account Address Found";
      this.center = null;
    }
    return buttonLabel;
  }

  get centerLocation() {
    return this.center;
  }

  get isAddressFound() {
    return this.accountAddressFound === "Driving Directions" ? true : false;
  }

  get isButtonDisabled() {
    return !this.accountAddressFound;
  }
}
