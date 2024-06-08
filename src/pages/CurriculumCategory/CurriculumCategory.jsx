import * as S from "./CurriculumCategory.style";

const CurriculumCategory = () => {
  const categories = [
    {
      id: 1,
      name: "프로그래밍 언어",
    },
    {
      id: 2,
      name: "웹 개발",
    },
    {
      id: 3,
      name: "게임 개발",
    },
    {
      id: 4,
      name: "모바일 앱 개발",
    },
    {
      id: 5,
      name: "인공지능",
    },
  ];
  return (
    <S.CurriculumCategoryLayout>
      <S.CurriculumTitleText>
        어떤 분야를 공부하고 싶은가요?
      </S.CurriculumTitleText>
      <S.CurriculumCategoryList categories={categories} />
    </S.CurriculumCategoryLayout>
  );
};

export default CurriculumCategory;
