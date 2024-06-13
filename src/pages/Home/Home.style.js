import styled from "styled-components";
import CategorySelector from "../../components/CategorySelector/CategorySelector";

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeHeader = styled.header``;

export const HomeMain = styled.main`
  padding: 3rem;
`;

export const HomeCategorySelector = styled(CategorySelector)`
  margin-bottom: 3rem;
`;

export const EmptyMessage = styled.p`
  font-size: 2rem;
  text-align: center;
  color: #000000;
`;
