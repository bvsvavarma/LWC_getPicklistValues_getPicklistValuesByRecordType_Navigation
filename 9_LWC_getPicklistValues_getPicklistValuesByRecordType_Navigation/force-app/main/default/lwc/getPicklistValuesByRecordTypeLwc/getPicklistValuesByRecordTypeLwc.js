import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType } from "lightning/uiObjectInfoApi";
import CONTACT_OBJECT from '@salesforce/schema/Contact';
export default class GetPicklistValuesByRecordTypeLwc extends LightningElement {

    leadSourceValue;
    @wire(getObjectInfo, {
        objectApiName: CONTACT_OBJECT
    }) contactsData;

    @wire(getPicklistValuesByRecordType, {
        objectApiName: CONTACT_OBJECT,
        recordTypeId: '$contactsData.data.defaultRecordTypeId'
      }) contactPickListValues;
      /*contactInfoFunction({data, error}){
        if(data){
            console.log("Contact PickList", data);
        } else if(error){
            console.log("error", error);
        }
      }*/

      changeHandler(event){
        this.leadSourceValue = event.target.value;
      }
}