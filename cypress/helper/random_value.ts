import { faker } from "@faker-js/faker";

export class RandomValue {
  selectRandomValueFromArray(array: any[]) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  generateStringWithLength(length: number) {
    return faker.string.alphanumeric(length);
  }
}
