import { makeObservable, observable, action, computed } from "mobx";
import { CountryInfo } from "types";

class store {
    value: string = "";

    constructor() {
        makeObservable(this, {
            value: observable,
            changeValue: action,
            getValue: computed,
            alertInput: action,
            alertNumber: action,
        });
    }

    changeValue(value: string) {
        this.value = value;
    }

    alertInput() {
        if (this.value) {
            alert(this.value);
        }
    }

    alertNumber() {
        if (this.value && !isNaN(+this.value)) {
            alert(+this.value);
        }
    }

    get getValue() {
        return this.value;
    }
}

class autoCompleteStore {
    value: string = "";
    autocomplete: CountryInfo[] = [];

    constructor() {
        makeObservable(this, {
            value: observable,
            autocomplete: observable,
            changeValue: action,
            changeAutocomplete: action,
        });
    }

    changeValue(value: string) {
        this.value = value;
    }

    changeAutocomplete(value: CountryInfo[]) {
        this.autocomplete = value;
    }
}

const storeInstance = new store();
const autoCompleteInstance = new autoCompleteStore();
export { autoCompleteInstance, storeInstance };
