import styled from "styled-components";
import LectureInfo from "../../componenets/LectureInfo/LectureInfo";

export const LectureLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LectureHeader = styled.header``;

export const LectureMain = styled.main`
  padding: 3rem;
`;

export const LectureTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 3rem;
`;

export const LectureInfoDetail = styled(LectureInfo)`
  margin-bottom: 3rem;
`;

// export const LectureAnalysisDetail = styled()`
//   margin-bottom: 3rem;
// `;

// export const LectureReccomendationDetail = styled()``;
