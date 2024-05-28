import { ReactElement } from "react";
import "./style.scss";
import { observer } from "mobx-react-lite";
import { store } from "types";

export const Button = observer(({
    store,
    name,
    callback
}: {
    store: store,
    name: string;
    callback: (value: string) => void;
}): ReactElement => {
    return <button onClick={() => callback(store.value)} className="button">{name}</button>;
})
