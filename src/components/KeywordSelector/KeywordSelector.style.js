import styled from "styled-components";

export const KeywordSelectorContainer = styled.div`
  cursor: pointer;
  padding: 1rem 0;
  margin: 0 3rem;
  margin-bottom: 2rem;
  background-color: ${(props) => (props.selected ? "#4B3BFF" : "#FFFFFF")};
  border: 0.375rem solid #4b3bff;
  border-radius: 0.625rem;
`;

export const KeywordSelectorText = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: ${(props) => (props.selected ? "#FFFFFF" : "#4B3BFF")};
`;
