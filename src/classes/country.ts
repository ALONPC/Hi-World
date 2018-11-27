import { Region } from './region';

export class Country {

    name: string;
    capital : string;
    currency: string;
    territoryKm: number;
    regions: Array<Region>;
    code: string;

}