import * as S from "./LectureList.style.js";

const LectureList = () => {
  return (
    <S.LectureListContainer>
      <S.TitleRow>
        <S.Title>추천 강의</S.Title>
        <S.More>더보기</S.More>
      </S.TitleRow>
      <S.LecturesContainer>
        <S.LectureWrapper>
          <S.LectureImage />
          <S.LectureTitle>
            리액트 완벽 파해치기 - 기초부터 고급단계까지
            상태관리마스터리마스터리마스터
          </S.LectureTitle>
          <S.LectureTagRow>
            <S.LectureTag>Javascript</S.LectureTag>
            <S.LectureTag>React</S.LectureTag>
            <S.LectureTag>React</S.LectureTag>
            <S.LectureTag>React</S.LectureTag>
            <S.LectureTag>React</S.LectureTag>
          </S.LectureTagRow>
          <S.LectureMoreRow>
            <S.LectureRatingRow>
              <S.LectureRatingIcon
                src={require("../../assets/icons/rating.png")}
              />
              <S.LectureRatingText>4.5</S.LectureRatingText>
            </S.LectureRatingRow>
            <S.LecturePrice>33,000원</S.LecturePrice>
          </S.LectureMoreRow>
        </S.LectureWrapper>
        <S.LectureWrapper>
          <S.LectureImage />
          <S.LectureTitle>
            리액트 완벽 파해치기 - 기초부터 고급단계까지
            상태관리마스터리마스터리마스터
          </S.LectureTitle>
          <S.LectureTagRow>
            <S.LectureTag>Javascript</S.LectureTag>
            <S.LectureTag>React</S.LectureTag>
            <S.LectureTag>React</S.LectureTag>
            <S.LectureTag>React</S.LectureTag>
            <S.LectureTag>React</S.LectureTag>
          </S.LectureTagRow>
          <S.LectureMoreRow>
            <S.LectureRatingRow>
              <S.LectureRatingIcon
                src={require("../../assets/icons/rating.png")}
              />
              <S.LectureRatingText>4.5</S.LectureRatingText>
            </S.LectureRatingRow>
            <S.LecturePrice>33,000원</S.LecturePrice>
          </S.LectureMoreRow>
        </S.LectureWrapper>

        <S.LectureWrapper>
          <S.LectureImage />
          <S.LectureTitle>
            리액트 완벽 파해치기 - 기초부터 고급단계까지 상태관리마스터
          </S.LectureTitle>
          <S.LectureTagRow>
            <S.LectureTag>Javascript</S.LectureTag>
            <S.LectureTag>React</S.LectureTag>
          </S.LectureTagRow>
          <S.LectureMoreRow>
            <S.LectureRatingRow>
              <S.LectureRatingIcon
                src={require("../../assets/icons/rating.png")}
              />
              <S.LectureRatingText>4.5</S.LectureRatingText>
            </S.LectureRatingRow>
            <S.LecturePrice>33,000원</S.LecturePrice>
          </S.LectureMoreRow>
        </S.LectureWrapper>

        <S.LectureWrapper>
          <S.LectureImage />
          <S.LectureTitle>
            리액트 완벽 파해치기 - 기초부터 고급단계까지 상태관리마스터
          </S.LectureTitle>
          <S.LectureTagRow>
            <S.LectureTag>Javascript</S.LectureTag>
            <S.LectureTag>React</S.LectureTag>
          </S.LectureTagRow>
          <S.LectureMoreRow>
            <S.LectureRatingRow>
              <S.LectureRatingIcon
                src={require("../../assets/icons/rating.png")}
              />
              <S.LectureRatingText>4.5</S.LectureRatingText>
            </S.LectureRatingRow>
            <S.LecturePrice>33,000원</S.LecturePrice>
          </S.LectureMoreRow>
        </S.LectureWrapper>

        <S.LectureWrapper>
          <S.LectureImage />
          <S.LectureTitle>
            리액트 완벽 파해치기 - 기초부터 고급단계까지 상태관리마스터
          </S.LectureTitle>
          <S.LectureTagRow>
            <S.LectureTag>Javascript</S.LectureTag>
            <S.LectureTag>React</S.LectureTag>
          </S.LectureTagRow>
          <S.LectureMoreRow>
            <S.LectureRatingRow>
              <S.LectureRatingIcon
                src={require("../../assets/icons/rating.png")}
              />
              <S.LectureRatingText>4.5</S.LectureRatingText>
            </S.LectureRatingRow>
            <S.LecturePrice>33,000원</S.LecturePrice>
          </S.LectureMoreRow>
        </S.LectureWrapper>
      </S.LecturesContainer>
    </S.LectureListContainer>
  );
};

export default LectureList;
