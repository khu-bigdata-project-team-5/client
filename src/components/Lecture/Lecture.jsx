import * as S from "./Lecture.style";

const Lecture = ({ lecture, className, onClick }) => {
  return (
    <S.LectureWrapper
      className={className}
      onClick={onClick ? () => onClick() : undefined}
    >
      <S.LectureImage src={lecture.thumbnail} />
      <S.LectureTitle>{lecture.title}</S.LectureTitle>
      <S.LectureTagRow>
        {/* {lecture.tags.map((tag) => (
          <S.LectureTag key={tag}>{tag}</S.LectureTag>
        ))} */}
        {lecture.topword1 && <S.LectureTag>{lecture.topword1}</S.LectureTag>}
        {lecture.topword2 && <S.LectureTag>{lecture.topword2}</S.LectureTag>}
        {lecture.topword3 && <S.LectureTag>{lecture.topword3}</S.LectureTag>}
        {lecture.topword4 && <S.LectureTag>{lecture.topword4}</S.LectureTag>}
        {lecture.topword5 && <S.LectureTag>{lecture.topword5}</S.LectureTag>}
      </S.LectureTagRow>
      <S.LectureMoreRow>
        <S.LectureRatingRow>
          <S.LectureRatingIcon src={require("../../assets/icons/rating.png")} />
          <S.LectureRatingText>{lecture.avgRating}</S.LectureRatingText>
        </S.LectureRatingRow>
        <S.LecturePrice>{lecture.price.toLocaleString()}$</S.LecturePrice>
      </S.LectureMoreRow>
    </S.LectureWrapper>
  );
};

export default Lecture;
