import { getCountryByName } from "api/apiService";
import { ChangeEvent, ReactElement } from "react";
import { observer } from "mobx-react-lite";
import { store } from "types";
import { AutoCompleteItem } from "./AutoCompleteItem";
import './style.scss';

export const AutoComplete = observer(({store}: {store: store}) : ReactElement => {

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        store.changeValue(e.currentTarget.value);
        if (e.currentTarget.value) {
            const result = await getCountryByName(e.currentTarget.value);
            store.changeAutocomplete(result);
        } 
        else store.changeAutocomplete([]);
    }

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