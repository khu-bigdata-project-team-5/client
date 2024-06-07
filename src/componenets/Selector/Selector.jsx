import * as S from "./Selector.style";

const Selector = ({ children, selected }) => {
  return (
    <S.SelectorContainer>
      <S.SelectorText selected={selected}>{children}</S.SelectorText>
    </S.SelectorContainer>
  );
};

export default Selector;
