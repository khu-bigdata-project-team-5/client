import styled from "styled-components";

export const LectureListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
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

export const LectureWrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LectureImage = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  background-color: #999999;
`;

export const LectureTitle = styled.h2`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 1.25rem;
  font-weight: bold;
  color: #000000;
  padding: 0rem 0.5rem;
  margin: 0.5rem 0;
`;

export const LectureTagRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
  padding: 0 0.5rem;
  margin-bottom: 1rem;
`;

export const LectureTag = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #ffffff;
  padding: 0.25rem 0.5rem;
  background-color: #4b3bff;
`;

export const LectureMoreRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
`;

export const LectureRatingRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
`;

export const LecturePrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: #000000;
`;
