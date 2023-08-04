import { Country } from "./country.model";

export interface League {
    Id: string;
    Name: string;
    Country?: Country;
}

export interface LeagueCreated {
    Id?: string;
    Name: string;
    Country?: Country;
}