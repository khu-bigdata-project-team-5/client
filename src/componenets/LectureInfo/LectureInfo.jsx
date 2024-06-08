import * as S from "./Lectureinfo.style";

const LectureInfo = ({ lecture }) => {
  return (
    <S.LectureInfoContainer>
      <S.LectureImage src={lecture.thumbnail} />
      <S.LectureInfoColumn>
        <S.LectureCategory>Udemy / 웹개발</S.LectureCategory>
        <S.LectureTitle>{lecture.title}</S.LectureTitle>
        <S.LectureAuthorRatingRow>
          <S.LectureAuthor>{lecture.instructor}</S.LectureAuthor>
          <S.LectureRatingIcon src={require("../../assets/icons/rating.png")} />
          <S.LectureRatingText>{lecture.rating}</S.LectureRatingText>
          <S.LecturePrice>{lecture.price.toLocaleString()}원</S.LecturePrice>
        </S.LectureAuthorRatingRow>
        <S.LectureKeywordRow>
          {lecture.tags.map((tag) => (
            <S.LectureKeyword key={tag}>{tag}</S.LectureKeyword>
          ))}
        </S.LectureKeywordRow>
      </S.LectureInfoColumn>
    </S.LectureInfoContainer>
  );
};

export default LectureInfo;
