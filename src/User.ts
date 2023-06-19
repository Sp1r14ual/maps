import * as faker from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.faker.person.firstName();
    this.location = {
      lat: Number(faker.faker.location.latitude()),
      lng: Number(faker.faker.location.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
