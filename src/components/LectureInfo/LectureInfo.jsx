import * as S from "./Lectureinfo.style";

const LectureInfo = ({ lecture, className }) => {
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
          <S.LecturePrice>{lecture.price}$</S.LecturePrice>
        </S.LectureAuthorRatingRow>
        <S.LectureKeywordRow>
          {lecture.topword1 && (
            <S.LectureKeyword>{lecture.topword1}</S.LectureKeyword>
          )}
          {lecture.topword2 && (
            <S.LectureKeyword>{lecture.topword2}</S.LectureKeyword>
          )}
          {lecture.topword3 && (
            <S.LectureKeyword>{lecture.topword3}</S.LectureKeyword>
          )}
          {lecture.topword4 && (
            <S.LectureKeyword>{lecture.topword4}</S.LectureKeyword>
          )}
          {lecture.topword5 && (
            <S.LectureKeyword>{lecture.topword5}</S.LectureKeyword>
          )}
        </S.LectureKeywordRow>
      </S.LectureInfoColumn>
    </S.LectureInfoContainer>
  );
};

export default LectureInfo;
