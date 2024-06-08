import { ENDPOINTS } from "../api/endpoints";
import { fakerKO } from "@faker-js/faker";

const createMockLectures = (tags) =>
  Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    thumbnail: fakerKO.image.urlPicsumPhotos(),
    title: fakerKO.lorem.sentence(),
    tag: fakerKO.helpers.arrayElements(tags, { min: 1, max: 4 }),
    rating: fakerKO.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
    price: fakerKO.number.int({ min: 10000, max: 100000 }),
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
  [ENDPOINTS.TOP_LANGUAGES]: [
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
  [`${ENDPOINTS.CURRICULUM}?keyword=anything`]: createMockLectures([
    "Javascript",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "Python",
    "Java",
    "Spring",
    "Django",
    "Flas",
  ]),
  [`${ENDPOINTS.LECTURE}/1`]: {
    id: 1,
    title: fakerKO.lorem.sentence(),
    instructor: fakerKO.person.fullName(),
    thumbnail: fakerKO.image.urlPicsumPhotos(),
    price: 30000,
    rating: 4.7,
    tags: fakerKO.helpers.arrayElements(
      ["Javascript", "React", "Node.js", "CSS", "HTML"],
      { min: 1, max: 4 },
    ),
    classification: {
      good: fakerKO.number.int({ min: 1000, max: 10000 }),
      bad: fakerKO.number.int({ min: 100, max: 1000 }),
    },
    details: {
      difficulty: fakerKO.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
      practice: fakerKO.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
      material_quality: fakerKO.number.float({
        min: 1,
        max: 5,
        multipleOf: 0.1,
      }),
      rating: fakerKO.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
      level: fakerKO.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
    },
    next_lectures: Array.from({ length: 4 }, (_, idx) => ({
      id: idx + 1,
      title: fakerKO.lorem.sentence(),
      thumbnail: fakerKO.image.urlPicsumPhotos(),
      tags: fakerKO.helpers
        .shuffle(["Javascript", "React", "Node.js", "CSS", "HTML"])
        .slice(0, fakerKO.number.int({ min: 1, max: 4 })),
      rating: fakerKO.number.float({ min: 1, max: 5, precision: 0.1 }),
      price: fakerKO.number.int({ min: 10000, max: 100000 }),
    })),
  },
};
