import { ReactElement } from "react";
import { observer } from "mobx-react-lite";
import { store } from "types";

export const AutoCompleteItem = observer(({store, name, fullName, img}: {store: store,name: string, fullName: string, img: string}): ReactElement => {

    const handleClick = () => {
        store.changeValue(`${name} - ${fullName}`);
        store.changeAutocomplete([]);
    } 

    return (
        <li className="autocomplete__item" onClick={handleClick}>
            {name} - {fullName} <img src={img} alt={name}/>
        </li>
    );
})