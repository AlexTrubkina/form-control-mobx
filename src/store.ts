import { makeObservable, observable, action, computed } from "mobx";
import { CountryInfo } from "types";

class store {
    value: string = "";
    autocomplete : CountryInfo[] = [];

    constructor() {
        makeObservable(this, {
            value: observable,
            autocomplete: observable,
            changeValue: action,
            changeAutocomplete: action,
            getValue: computed, 
            alertInput: action,
            alertNumber: action
        })
    }

    changeValue(value: string) {
        this.value = value;
    }

    changeAutocomplete(value: CountryInfo[]) {
        this.autocomplete = value;
    }
    alertInput () {
        if (this.value) {
            alert(this.value);
        }
        
    }

    alertNumber () {
        if (this.value && !isNaN(+this.value)) {
            alert(+this.value);
        }
        
    }

    get getValue() {
        return this.value;
    }
}

const storeInstance = new store();
export default storeInstance