import { getCountryByName } from "api/apiService";
import { ChangeEvent, ReactElement, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { autoCompleteStore } from "types";
import { AutoCompleteItem } from "./AutoCompleteItem";
import './style.scss';

export const AutoComplete = observer(({store}: {store: autoCompleteStore}) : ReactElement => {

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        store.changeValue(e.currentTarget.value);
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (store.value) {
                const sendRequest = async () => {
                    const result = await getCountryByName(store.value);
                    store.changeAutocomplete(result);
                }
                sendRequest();
                console.log("request sended");
                
            } 
        }, 2000)
        return () => clearTimeout(delayDebounceFn)
        }, [store.value])
    return (
        <div className="autocomplete">
            <input className="autocomplete__input" placeholder="Введие страну" type="text" onChange={handleChange} value={store.value}/>
            {
                store.autocomplete.length > 0 &&
                <ul className="autocomplete__list">
                    {
                        store.autocomplete?.map(x => 
                            <AutoCompleteItem store={store} name={x.name} fullName={x.fullName} key={x.name} img={x.flag}/>
                        )
                    }
                    
                </ul>
            }
        </div>
    )
})