import styled from "styled-components";
import Lecture from "../../componenets/Lecture/Lecture";
import KeySelector from "../../componenets/KeywordSelector/KeywordSelector";

export const CurriculumLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 6rem);
  height: calc(100vh - 6rem);
  padding: 3rem;
`;

export const CurriculumTitleText = styled.h1`
  margin-bottom: 4rem;
  font-size: 4rem;
  font-weight: bold;
  color: #000000;
  text-align: center;
`;

export const CurriCulumKeywordContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

export const CurriculumKeyword = styled(KeySelector)``;

export const CurriculumContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
  padding: 0 1rem;
  overflow: auto;
`;

export const LectureList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 2rem;
`;

export const LectureItem = styled(Lecture)``;
