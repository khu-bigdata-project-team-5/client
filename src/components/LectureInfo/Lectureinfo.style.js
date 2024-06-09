import styled from "styled-components";

export const LectureInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LectureImage = styled.img`
  width: 40%;
  aspect-ratio: 16/9;
  margin-right: 1.25rem;
`;

export const LectureInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LectureCategory = styled.p`
  font-size: 1.25rem;
  color: #000000;
  margin-bottom: 1rem;
`;

export const LectureTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 1rem;

  /* 2줄까지만 표시*/
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const LectureAuthorRatingRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
`;

export const LectureAuthor = styled.p`
  font-size: 1.5rem;
  color: #000000;
  margin-right: 2rem;
`;

export const LectureRatingIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
`;

export const LectureRatingText = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: #000000;
  margin-right: 2rem;
`;

export const LecturePrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: #000000;
`;

export const LectureKeywordRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
`;

export const LectureKeyword = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #ffffff;
  padding: 0.25rem 0.5rem;
  background-color: #4b3bff;
`;
