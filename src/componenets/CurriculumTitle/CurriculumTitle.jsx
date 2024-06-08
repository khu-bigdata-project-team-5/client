import * as S from "./CurriculumTitle.style";

const CurriculumTitle = ({ children, className }) => {
  return (
    <S.CurriculumTitleText className={className}>
      {children}
    </S.CurriculumTitleText>
  );
};

export default CurriculumTitle;
