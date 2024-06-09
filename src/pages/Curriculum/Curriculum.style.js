import styled from "styled-components";
import Lecture from "../../components/Lecture/Lecture";
import KeySelector from "../../components/KeywordSelector/KeywordSelector";

export const CurriculumLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 6rem);
  height: calc(100vh - 6rem);
  padding: 3rem;
`;

export const CurriculumHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const CurriculumTitleText = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #000000;
  text-align: center;
`;

export const CurriculumSave = styled.button`
  cursor: ${(props) => (props.enabled ? "pointer" : "default")};
  padding: 0.5rem 1.5rem;
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  background-color: ${(props) => (props.enabled ? "#4B3BFF" : "#D3D3D3")};
  border: none;
  border-radius: 0.625rem;
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

export const LectureItem = styled(Lecture)`
  cursor: pointer;
  border: ${(props) =>
    props.selected ? "0.25rem solid #4B3BFF" : "0.25rem solid transparent"};
  box-sizing: border-box;
`;
