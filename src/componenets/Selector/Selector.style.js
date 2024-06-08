import styled from "styled-components";

export const SelectorContainer = styled.div`
  cursor: pointer;
  padding: 1rem 2rem;
  background-color: ${(props) => (props.selected ? "#FFFFFF" : "#4B3BFF")};
  border: ${(props) =>
    props.selected ? "0.375rem solid transparent" : "0.375rem solid #FFFFFF"};
  border-radius: 0.625rem;
`;

export const SelectorText = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: ${(props) => (props.selected ? "#4B3BFF" : "#FFFFFF")};
`;
