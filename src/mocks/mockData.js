import { ENDPOINTS } from "../api/endpoints";
import { fakerKO } from "@faker-js/faker";
import categoryKeywords from "../data/categoryKeywords";

const categories = Object.keys(categoryKeywords);
const tags = fakerKO.helpers.objectValue(categoryKeywords);

const createMockLectures = (length, tags) =>
  Array.from({ length: length }, (_, i) => ({
    id: i + 1,
    thumbnail: fakerKO.image.urlPicsumPhotos(),
    title: fakerKO.lorem.sentence(),
    tags: fakerKO.helpers.arrayElements(tags, { min: 1, max: 4 }),
    rating: fakerKO.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
    price: fakerKO.number.int({ min: 10000, max: 100000 }),
  }));

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
  ],
  [`${ENDPOINTS.OTHERS}`]: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    type: fakerKO.helpers.arrayElement(["Udemy", "Inflearn"]),
    tags: fakerKO.helpers.arrayElements(tags, 3),
  })),
};

for (let i = 1; i <= 10; i++) {
  mockData[`${ENDPOINTS.OTHERS}/${i}`] = {
    type: fakerKO.helpers.arrayElement(["Udemy", "Inflearn"]),
    tags: fakerKO.helpers.arrayElements(tags, 3),
    lectures: createMockLectures(20, tags),
  };
}

// 카테고리별 강의 데이터를 동적으로 생성합니다.
categories.forEach((category) => {
  mockData[`${ENDPOINTS.LECTURES}?category=${encodeURIComponent(category)}`] =
    createMockLectures(10, categoryKeywords[category]);
});

// 모든 id에 대해 동적으로 mock lecture 데이터를 생성하는 핸들러를 추가합니다.
for (let i = 1; i <= 100; i++) {
  mockData[`${ENDPOINTS.LECTURE}/${i}`] = createMockLecture(i, tags);
}

categories.forEach((category) => {
  categoryKeywords[category].forEach((keyword) => {
    mockData[`${ENDPOINTS.CURRICULUM}?keyword=${encodeURIComponent(keyword)}`] =
      createMockLectures(10, [keyword]);
  });
});

export { mockData };
