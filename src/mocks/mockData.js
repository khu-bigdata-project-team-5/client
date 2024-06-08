import { ENDPOINTS } from "../api/endpoints";
import { fakerKO } from "@faker-js/faker";

const tags = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "Ruby",
  "PHP",
  "Swift",
  "Kotlin",
  "TypeScript",
];

const categories = {
  0: tags,
  1: [
    "Web Development",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "Vue.js",
  ],
  2: ["Game Development", "Unity", "Unreal Engine", "C#", "C++"],
  3: ["Mobile App Development", "Swift", "Kotlin", "React Native", "Flutter"],
  4: ["Data Science", "Python", "R", "SQL", "Pandas"],
  5: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
  ],
};

const createMockLecture = (id, tags) => ({
  id: id,
  title: fakerKO.lorem.sentence(),
  instructor: fakerKO.person.fullName(),
  thumbnail: fakerKO.image.urlPicsumPhotos(),
  price: fakerKO.number.int({ min: 10000, max: 100000 }),
  rating: fakerKO.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
  tags: fakerKO.helpers.arrayElements(tags, { min: 1, max: 4 }),
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
  next_lectures: createMockLectures(4, tags),
});

const createMockLectures = (length, tags) =>
  Array.from({ length: length }, (_, i) => ({
    id: i + 1,
    thumbnail: fakerKO.image.urlPicsumPhotos(),
    title: fakerKO.lorem.sentence(),
    tags: fakerKO.helpers.arrayElements(tags, { min: 1, max: 4 }),
    rating: fakerKO.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
    price: fakerKO.number.int({ min: 10000, max: 100000 }),
  }));

// 기본 모의 데이터를 생성합니다.
const mockData = {
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
  [`${ENDPOINTS.CURRICULUM}?keyword=anything`]: createMockLectures(6, tags),
};

// 카테고리별 강의 데이터를 동적으로 생성합니다.
Object.keys(categories).forEach((category) => {
  mockData[`${ENDPOINTS.LECTURES}?category=${category}`] = createMockLectures(
    10,
    categories[category],
  );
});

// 모든 id에 대해 동적으로 mock lecture 데이터를 생성하는 핸들러를 추가합니다.
for (let i = 1; i <= 100; i++) {
  mockData[`${ENDPOINTS.LECTURE}/${i}`] = createMockLecture(i, tags);
}

export { mockData };
