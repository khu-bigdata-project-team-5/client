import * as S from "./KeywordSelector.style";

const KeywordSelector = ({ children, selected }) => {
  return (
    <S.KeywordSelectorContainer selected={selected}>
      <S.KeywordSelectorText selected={selected}>
        {children}
      </S.KeywordSelectorText>
    </S.KeywordSelectorContainer>
  );
};

export default KeywordSelector;
