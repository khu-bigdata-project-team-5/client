import styled from "styled-components";
import CurriculumTitle from "../../componenets/CurriculumTitle/CurriculumTitle";
import CurriculumSubtitle from "../../componenets/CurriculumSubtitle/CurriculumSubtitle";
import KeywordList from "../../componenets/KeywordList/KeywordList";

export const CurriculumKeywordLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #4b3bff;
`;

export const CurriculumTitleText = styled(CurriculumTitle)``;

export const CurriculumSubtitleText = styled(CurriculumSubtitle)`
  margin-bottom: 2rem;
`;

export const CurriculumKeywordList = styled(KeywordList)`
  margin-bottom: 2rem;
`;

export const CurriculumNext = styled.p`
  margin-left: auto;
  margin-right: 4rem;
  font-size: 4rem;
  font-weight: bold;
  color: ${(props) => (props.isShowed ? "#ffffff" : "#444444")};
`;
