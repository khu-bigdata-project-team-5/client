import { ENDPOINTS } from "../api/endpoints";
import { faker } from "@faker-js/faker";

const createMockLectures = (tags) =>
  Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    thumbnail: faker.image.urlPicsumPhotos(),
    title: faker.lorem.sentence(),
    tag: faker.helpers.arrayElements(tags, { min: 1, max: 4 }),
    rating: faker.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
    price: faker.number.int({ min: 10000, max: 100000 }),
  }));

export const mockData = {
  [`${ENDPOINTS.LECTURES}?category=0`]: createMockLectures([
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
  ]),
  [`${ENDPOINTS.LECTURES}?category=1`]: createMockLectures([
    "Web Development",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "Vue.js",
  ]),
  [`${ENDPOINTS.LECTURES}?category=2`]: createMockLectures([
    "Game Development",
    "Unity",
    "Unreal Engine",
    "C#",
    "C++",
  ]),
  [`${ENDPOINTS.LECTURES}?category=3`]: createMockLectures([
    "Mobile App Development",
    "Swift",
    "Kotlin",
    "React Native",
    "Flutter",
  ]),
  [`${ENDPOINTS.LECTURES}?category=4`]: createMockLectures([
    "Data Science",
    "Python",
    "R",
    "SQL",
    "Pandas",
  ]),
  [`${ENDPOINTS.LECTURES}?category=5`]: createMockLectures([
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
  ]),
  [ENDPOINTS.KEYWORDS]: Array.from({ length: 10 }, (_, i) => ({
    rank: i + 1,
    keyword: faker.helpers.arrayElements(
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
        "TypeScript",
        "Vue.js",
        "Angular",
        "Express",
      ],
      1,
    ),
  })),
};
