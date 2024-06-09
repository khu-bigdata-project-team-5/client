import styled from "styled-components";

export const CategorySelectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
`;

export const CategoryConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CateogoryIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-bottom: 0.5rem;
`;

export const CategoryText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => (props.selected ? "#4B3BFF" : "#000000")};
`;
