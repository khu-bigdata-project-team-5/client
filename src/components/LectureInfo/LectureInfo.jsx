import * as S from "./Lectureinfo.style";

const LectureInfo = ({ lecture, keywords, className }) => {
  return (
    <S.LectureInfoContainer className={className}>
      <S.LectureImage src={lecture.thumbnail} />
      <S.LectureInfoColumn>
        <S.LectureCategory>Udemy / 웹개발</S.LectureCategory>
        <S.LectureTitle>{lecture.title}</S.LectureTitle>
        <S.LectureAuthorRatingRow>
          <S.LectureAuthor>{lecture.instructor}</S.LectureAuthor>
          <S.LectureRatingIcon src={require("../../assets/icons/rating.png")} />
          <S.LectureRatingText>{lecture.rating}</S.LectureRatingText>
          <S.LecturePrice>{lecture.price.toLocaleString()}$</S.LecturePrice>
        </S.LectureAuthorRatingRow>
        <S.LectureKeywordRow>
          {keywords.map((keyword) => (
            <S.LectureKeyword key={keyword}>{keyword}</S.LectureKeyword>
          ))}
        </S.LectureKeywordRow>
      </S.LectureInfoColumn>
    </S.LectureInfoContainer>
  );
};

export default LectureInfo;
