import * as S from "./KeywordSelector.style";

const KeywordSelector = ({ children, selected, onClick }) => {
  return (
    <S.KeywordSelectorContainer selected={selected}>
      <S.KeywordSelectorText selected={selected} onClick={onClick}>
        {children}
      </S.KeywordSelectorText>
    </S.KeywordSelectorContainer>
  );
};

export default KeywordSelector;
