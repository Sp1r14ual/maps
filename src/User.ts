import * as faker from '@faker-js/faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.faker.person.firstName();
    this.location = {
      lat: Number(faker.faker.location.latitude()),
      lng: Number(faker.faker.location.longitude()),
    };
  }
}
