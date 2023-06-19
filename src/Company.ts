import * as faker from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.faker.company.name();
    this.catchPhrase = faker.faker.company.catchPhrase();
    this.location = {
      lat: Number(faker.faker.location.latitude()),
      lng: Number(faker.faker.location.longitude()),
    };
  }

  markerContent(): string {
    return `
    Company Name: ${this.companyName}<br>
    CatchPhrase: ${this.catchPhrase}
    </div>
    `;
  }
}
