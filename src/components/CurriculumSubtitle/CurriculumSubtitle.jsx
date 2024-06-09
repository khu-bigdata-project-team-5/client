import * as S from "./CurriculumSubtitle.style";

const CurriculumSubtitle = ({ children, className }) => {
  return (
    <S.CurriculumSubTitleText className={className}>
      {children}
    </S.CurriculumSubTitleText>
  );
};

export default CurriculumSubtitle;
