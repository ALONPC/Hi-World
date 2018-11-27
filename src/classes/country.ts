import { Region } from './region';

export class Country {

    name: string;
    capital: string;
    languages: any; 
    currency: string;
    // nationalDay: string;
    nationalDay: any;
    territoryKm: number;
    regions: Array<Region>;
    code: string;

}