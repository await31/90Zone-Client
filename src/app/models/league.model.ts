import { Country } from "./country.model";

export interface League {
    Id: string;
    Name: string;
    Country: Country;
}