import * as S from "./LectureList.style.js";
import { Link } from "react-router-dom";

const LectureList = ({ lectures }) => {
  return (
    <S.LectureListContainer>
      <S.TitleRow>
        <S.Title>추천 강의</S.Title>
        <S.More>더보기</S.More>
      </S.TitleRow>
      <S.LecturesContainer>
        {lectures.map((lecture) => (
          <Link
            to={`/lecture/${lecture.id}`}
            style={{ textDecoration: "none" }}
            key={lecture.id}
          >
            <S.LectureItem lecture={lecture} />
          </Link>
        ))}
      </S.LecturesContainer>
    </S.LectureListContainer>
  );
};

export default LectureList;
