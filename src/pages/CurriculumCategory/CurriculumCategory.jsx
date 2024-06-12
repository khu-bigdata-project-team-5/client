import * as S from "./CurriculumCategory.style";
import categoryKeywords from "../../data/categoryKeywords";

const CurriculumCategory = () => {
  return (
    <S.CurriculumCategoryLayout>
      <S.CurriculumTitleText>
        어떤 분야를 공부하고 싶은가요?
      </S.CurriculumTitleText>
      <S.CurriculumCategoryList categories={categoryKeywords} />
    </S.CurriculumCategoryLayout>
  );
};

export default CurriculumCategory;
