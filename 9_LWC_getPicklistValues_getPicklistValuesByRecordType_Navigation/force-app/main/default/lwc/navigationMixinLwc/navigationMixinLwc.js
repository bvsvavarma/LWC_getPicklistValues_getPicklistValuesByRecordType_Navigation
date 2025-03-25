import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigationMixinLwc extends NavigationMixin(LightningElement) {
    
    navHomeClickHandler(){
        let pageReference = {
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            }
        };
        this[NavigationMixin.Navigate](pageReference);
    }

    navAccountHomeClickHandler(){
        let pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        }
        this[NavigationMixin.Navigate](pageReference);
    }
    navNewAccountClickHandler(){
        let PageRef = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            }
        };
        this[NavigationMixin.Navigate](PageRef);
    }
}