
import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_RATING_FIELD from '@salesforce/schema/Account.Rating'

export default class GetPicklistValuesLwc extends LightningElement {
    pickListValuesInfo;
    errors;
    value;

    @wire(getObjectInfo, {
        objectApiName: ACCOUNT_OBJECT
    }) accountInfo;

    @wire(getPicklistValues, {
        recordTypeId: '$accountInfo.data.defaultRecordTypeId',
        fieldApiName: ACCOUNT_RATING_FIELD
    }) ratingPickList;

    handleChange(event){
        this.value = event.target.value;
    }
}