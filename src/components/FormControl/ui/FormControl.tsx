import { ReactElement } from "react";
import { Button } from "components/Button";
import "./style.scss";
import { observer } from "mobx-react-lite";
import { store, button } from "types";


export const FormControl = observer(({ store, buttons } : {store: store, buttons: button[]}): ReactElement => {
    return (
        <div className="form-control">    
            {
                buttons?.map(x => 
                    x.position === "left" && <Button store={store} name={x.name} key={x.name} callback={x.callback}/> 
                )
            }                                      
            <input placeholder="Введите что-нибудь..." type="text" className="form-control__input" value={store.value} onChange={(e) => store.changeValue(e.target.value)}/>
            {
                buttons?.map(x => 
                    x.position === "right" && <Button store={store} name={x.name} key={x.name} callback={x.callback}/> 
                )
            }
        </div>
    );
})                                        