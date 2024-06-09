import styled from "styled-components";
import User from "../../components/User/User";
import Lecture from "../../components/Lecture/Lecture";

export const OtherCurriculumLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OtherCurriculumHeader = styled.header``;

export const OtherCurriculumMain = styled.main`
  padding: 3rem;
`;

export const OtherCurriculumTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3rem;
`;

export const OtherCurriculumUser = styled(User)``;

export const OtherCurriculumTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #000000;
  margin-left: 2.5rem;
`;

export const OtherCurriculumLectureList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

export const OtherCurriculumLectureItem = styled(Lecture)``;
