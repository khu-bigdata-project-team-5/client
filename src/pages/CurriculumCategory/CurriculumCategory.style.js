import styled from "styled-components";
import CurriculumTitle from "../../componenets/CurriculumTitle/CurriculumTitle";
import CategoryList from "../../componenets/CategoryList/CategoryList";

export const CurriculumCategoryLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #4b3bff;
`;

export const CurriculumTitleText = styled(CurriculumTitle)`
  margin-bottom: 10rem;
`;

export const CurriculumCategoryList = styled(CategoryList)``;
