import { Component, OnInit } from '@angular/core';
import { Country } from  '../../classes/country';
import { Region } from '../../classes/region';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  allCountries: any = [];
  allRegions: any = [];

  countries: any = [];
  regions: any = [];

  createCountry(name, capital, languages, currency, nationalDay, territoryKm, arrRegions, code) {
    const country =  new Country();
    country.name = name;
    country.capital = capital;
    country.languages = languages;
    country.currency = currency;
    country.nationalDay = this.formatNationalDay(nationalDay);
    country.territoryKm = territoryKm;
    country.regions = arrRegions;
    country.code = code;
    this.allCountries.push(country);
  }

  createRegion(name) {
    const region = new Region();
    region.name = name;
    return region;
  }

  buildRegionsOfCountry(arrRegions) {
    const regionsOfCountry = [];
    for (let i = 0; i < arrRegions.length; i++) {
      regionsOfCountry.push(this.createRegion(arrRegions[i]));
    }
    this.allRegions.push(regionsOfCountry);
    return regionsOfCountry;
  }

  getGetOrdinal(n) {
    const s = ['th', 'st', 'nd', 'rd'],
    v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  formatNationalDay(nationalDay) {
    let year: any;
    const date = new Date(nationalDay);
    const day = date.getDate();
    const dayOrdinal = this.getGetOrdinal(day);
    const month = date.toLocaleString('en-US', {
      month: 'long'
    });
    if (date.getFullYear() !== 2001) {
      year = date.getFullYear();
    } else {
      year = '';
    }
    const dateStr = month + ', ' + dayOrdinal + ' ' + year;
    return dateStr;
  }

  constructor() {

    const auLang = ['English'];
    const caLang = ['English', 'French'];
    const clLang = ['Chilean Flaite', 'Spanish'];
    const seLang = ['Swedish'];
    const fiLang = ['Finnish', 'Swedish'];

    const australianStates    = ['Western Australia', 'Northern Territory', 'South Australia', 'Queensland', 'New South Wales', 'Victoria'];
    const cananadianProvinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon Territory'];
    const chileanRegions      = ['Región de Arica y Parinacota', 'Región de Tarapacá', 'Región de Antofagasta', 'Región de Atacama', 'Región de Coquimbo', 'Región de Valparaíso', 'Región del Libertador General Bernardo OHiggins', 'Región del Maule', 'Región de Ñuble', 'Región del Bíobío', 'Región de la Araucanía', 'Región de los Ríos', 'Región de los Lagos', 'Región de Aysén del G. Carlos Ibañez del Campo', 'Región de Magallanes y de la Antártica Chilena', 'Región Metropolitana de Santiago'];
    const swedishCounties     = ['Stockholm', 'Västerbotten', 'Norrbotten', 'Uppsala', 'Södermanland', 'Östergötland', 'Jönköping', 'Kronoberg', 'Kalmar', 'Gotland', 'Blekinge', 'Skåne', 'Halland', 'Västra Götaland', 'Värmland', 'Örebro', 'Västmanland', 'Dalarna', 'Gävleborg', 'Västernorrland', 'Jämtland'];
    const finnishRegions      = ['Lapland', 'North Ostrobothnia', 'Kainuu', 'North Karelia', 'Pohjois-Savo', 'Etelä-Savo', 'South Ostrobothnia', 'Central Ostrobothnia', 'Ostrobothnia', 'Pirkanmaa', 'Central Finland', 'Satakunta', 'Varsinais-Suomi', 'South Karelia', 'Päijät-Häme', 'Kanta-Häme', 'Uusimaa', 'Kymenlaakso', 'Åland'];

    const allAustralianRegions  = this.buildRegionsOfCountry(australianStates);
    const allCanadianProvinces  = this.buildRegionsOfCountry(cananadianProvinces);
    const allChileanRegions     = this.buildRegionsOfCountry(chileanRegions);
    const allSwedishCounties    = this.buildRegionsOfCountry(swedishCounties);
    const allFinnishRegions     = this.buildRegionsOfCountry(finnishRegions);

    this.createCountry('Australia', 'Camberra', auLang, 'Australian Dollar', 'January-26', 7741220, allAustralianRegions, 'au');
    this.createCountry('Canada', 'Ottawa', caLang, 'Canadian Dollar', 'July-1', 9984670, allCanadianProvinces, 'ca');
    this.createCountry('Chile', 'Santiago', clLang, 'Chilean Peso', 'September-18-1810', 7561024, allChileanRegions, 'cl');
    this.createCountry('Sweden', 'Stockholm', seLang, 'Swedish Krona', 'June-6', 450295, allSwedishCounties, 'se');
    this.createCountry('Finland', 'Helsinki', fiLang, 'Euro', 'December-6', 338424, allFinnishRegions, 'fi');

    console.log(this.allRegions);
    console.log(this.allCountries);

  }

  ngOnInit() {

  }

}
