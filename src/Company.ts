import * as faker from '@faker-js/faker';

export class Company {
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
}
