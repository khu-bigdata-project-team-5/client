import * as S from "./Selector.style";

const Selector = ({ children, selected, onClick }) => {
  return (
    <S.SelectorContainer selected={selected}>
      <S.SelectorText selected={selected} onClick={onClick}>
        {children}
      </S.SelectorText>
    </S.SelectorContainer>
  );
};

export default Selector;
