import { ENDPOINTS } from "../api/endpoints";
import { faker } from "@faker-js/faker";

export const mockData = {
  [ENDPOINTS.LECTURES]: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    thumbnail: faker.image.urlPicsumPhotos(),
    title: faker.lorem.sentence(),
    tag: faker.helpers.arrayElements(
      [
        "Javascript",
        "React",
        "Node.js",
        "CSS",
        "HTML",
        "Python",
        "Java",
        "Spring",
        "Django",
        "Flask",
      ],
      { min: 1, max: 4 },
    ),
    rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
    price: faker.number.int({ min: 10000, max: 100000, precision: 1000 }),
  })),
};
