export interface CountryInfo {
    name: string;
    fullName: string;
    flag: string;
}

export type store = {
    value: string;
    changeValue: (value: string) => void;
    changeAutocomplete: (value: CountryInfo[]) => void;
    autocomplete: CountryInfo[]
}

export type button = {callback: (value: string) => void, name: string, position: "left" | "right"}