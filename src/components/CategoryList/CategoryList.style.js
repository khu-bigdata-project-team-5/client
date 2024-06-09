import styled from "styled-components";
import Selector from "../Selector/Selector";

export const CategoryListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const CategoryListItem = styled(Selector)``;
