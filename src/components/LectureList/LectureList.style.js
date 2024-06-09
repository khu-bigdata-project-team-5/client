import styled from "styled-components";
import Lecture from "../Lecture/Lecture";

export const LectureListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #000000;
`;

export const More = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4b3bff;
`;

export const LecturesContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const LectureItem = styled(Lecture)``;
