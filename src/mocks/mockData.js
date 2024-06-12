import { ENDPOINTS } from "../api/endpoints";
import { fakerKO } from "@faker-js/faker";
import categoryKeywords from "../data/categoryKeywords";

const tags = categoryKeywords.map((category) => category.keywords).flat();

const createMockLectures = (length, tags) =>
  Array.from({ length: length }, (_, i) => ({
    lectureId: i + 1,
    thumbnail: fakerKO.image.urlPicsumPhotos(),
    title: fakerKO.lorem.sentence(),
    instructorName: fakerKO.person.fullName(),
    avgRating: fakerKO.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
    price: fakerKO.number.int({ min: 10000, max: 100000 }),
    topword1: fakerKO.helpers.arrayElement(tags),
    topword2: fakerKO.helpers.arrayElement(tags),
  }));

const createMockLecture = (id, tags) => ({
  lectureId: id,
  title: fakerKO.lorem.sentence(),
  instructorName: fakerKO.person.fullName(),
  thumbnail: fakerKO.image.urlPicsumPhotos(),
  price: fakerKO.number.int({ min: 10000, max: 100000 }),
  avgRating: fakerKO.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
  tags: fakerKO.helpers.arrayElements(tags, { min: 1, max: 4 }),
  good: fakerKO.number.int({ min: 1000, max: 10000 }),
  bad: fakerKO.number.int({ min: 100, max: 1000 }),
  level: fakerKO.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
  practice: fakerKO.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
  reference: fakerKO.number.float({
    min: 1,
    max: 5,
    multipleOf: 0.1,
  }),
  rating: fakerKO.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
  teaching_quality: fakerKO.number.float({ min: 1, max: 5, multipleOf: 0.1 }),

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
  [`${ENDPOINTS.OTHERS}`]: Array.from({ length: 22 }, (_, i) => ({
    urseId: i + 1,
    type: fakerKO.helpers.arrayElement(["Udemy", "Inflearn"]),
    tags: fakerKO.helpers.arrayElements(tags, 3),
  })),
};

for (let i = 1; i <= 22; i++) {
  mockData[`${ENDPOINTS.OTHERS}/${i}`] = {
    userId: i,
    type: fakerKO.helpers.arrayElement(["Udemy", "Inflearn"]),
    topWord1: fakerKO.helpers.arrayElement(tags),
    topWord2: fakerKO.helpers.arrayElement(tags),
    topWord3: fakerKO.helpers.arrayElement(tags),
    lectures: createMockLectures(20, tags),
  };
}

// 카테고리별 강의 데이터를 동적으로 생성합니다.
categoryKeywords.forEach((categoryKeyword) => {
  mockData[`${ENDPOINTS.LECTURES}?category=${categoryKeyword.eng_category}`] = {
    lectureList: createMockLectures(10, categoryKeyword.keywords),
  };
});

// 모든 id에 대해 동적으로 mock lecture 데이터를 생성하는 핸들러를 추가합니다.
for (let i = 1; i <= 100; i++) {
  mockData[`${ENDPOINTS.LECTURE}/${i}`] = createMockLecture(i, tags);
}

categoryKeywords.forEach((categoryKeyword) => {
  categoryKeyword.keywords.forEach((keyword) => {
    mockData[`${ENDPOINTS.CURRICULUM}?keyword=${keyword}`] = {
      lectureList: createMockLectures(10, [keyword]),
    };
  });
});

export { mockData };
