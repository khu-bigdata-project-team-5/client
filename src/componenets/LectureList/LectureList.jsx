import * as S from "./LectureList.style.js";

const LectureList = ({ lectures }) => {
  return (
    <S.LectureListContainer>
      <S.TitleRow>
        <S.Title>추천 강의</S.Title>
        <S.More>더보기</S.More>
      </S.TitleRow>
      <S.LecturesContainer>
        {lectures.map((lecture) => (
          <S.LectureWrapper key={lecture.id}>
            <S.LectureImage src={lecture.thumbnail} />
            <S.LectureTitle>{lecture.title}</S.LectureTitle>
            <S.LectureTagRow>
              {lecture.tag.map((tag) => (
                <S.LectureTag key={tag}>{tag}</S.LectureTag>
              ))}
            </S.LectureTagRow>
            <S.LectureMoreRow>
              <S.LectureRatingRow>
                <S.LectureRatingIcon
                  src={require("../../assets/icons/rating.png")}
                />
                <S.LectureRatingText>{lecture.rating}</S.LectureRatingText>
              </S.LectureRatingRow>
              <S.LecturePrice>
                {lecture.price.toLocaleString()}원
              </S.LecturePrice>
            </S.LectureMoreRow>
          </S.LectureWrapper>
        ))}
      </S.LecturesContainer>
    </S.LectureListContainer>
  );
};

export default LectureList;
