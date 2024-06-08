import * as S from "./Lecture.style";

const Lecture = ({ lecture, className, onClick }) => {
  return (
    <S.LectureWrapper className={className} onClick={() => onClick()}>
      <S.LectureImage src={lecture.thumbnail} />
      <S.LectureTitle>{lecture.title}</S.LectureTitle>
      <S.LectureTagRow>
        {lecture.tag.map((tag) => (
          <S.LectureTag key={tag}>{tag}</S.LectureTag>
        ))}
      </S.LectureTagRow>
      <S.LectureMoreRow>
        <S.LectureRatingRow>
          <S.LectureRatingIcon src={require("../../assets/icons/rating.png")} />
          <S.LectureRatingText>{lecture.rating}</S.LectureRatingText>
        </S.LectureRatingRow>
        <S.LecturePrice>{lecture.price.toLocaleString()}원</S.LecturePrice>
      </S.LectureMoreRow>
    </S.LectureWrapper>
  );
};

export default Lecture;
