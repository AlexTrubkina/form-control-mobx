import { ReactElement } from "react";
import { FormControl } from "components/FormControl";
import { Container } from "components/Container";
import  { autoCompleteInstance, storeInstance } from "store";
import { AutoComplete } from "components/AutoComplete";

export function HomePage(): ReactElement {
    return (
        <Container>
            <h1>Компонент Контрол</h1>
            <FormControl
                store={storeInstance}
                buttons={[
                    {
                        name: "Hello World",
                        position: "right",
                        callback: storeInstance.changeValue.bind(
                            storeInstance,
                            "Hello World!"
                        ),
                    },
                    {
                        name: "Очистить",
                        position: "right",
                        callback: storeInstance.changeValue.bind(
                            storeInstance,
                            ""
                        ),
                    },
                ]}
            />
            <FormControl
                store={storeInstance}
                buttons={[
                    {
                        name: "Alert",
                        position: "right",
                        callback: storeInstance.alertInput,
                    },
                    {
                        name: "Число",
                        position: "left",
                        callback: storeInstance.alertNumber,
                    },
                ]}
            />
            <AutoComplete store={autoCompleteInstance} />
        </Container>
    );
}
