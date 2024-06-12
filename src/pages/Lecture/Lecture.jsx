import * as S from "./Lecture.style";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import useFetch from "../../hooks/useFetch.js";
import { ENDPOINTS } from "../../api/endpoints.js";

const Lecture = () => {
  const { lectureId } = useParams();
  const {
    data: topLanguages,
    loading: topLanguagesLoading,
    error: topLanguagesError,
  } = useFetch(ENDPOINTS.TOP_LANGUAGES, { isMocked: true, method: "get" });
  const {
    data: lecture,
    loading: lectureLoading,
    error: lectureError,
  } = useFetch(`${ENDPOINTS.LECTURE}/${lectureId}`, {
    isMocked: false,
    method: "get",
  });

  if (topLanguagesLoading || lectureLoading) return <Loading />;
  if (topLanguagesError || lectureError) alert("에러가 발생했습니다.");
  return (
    <S.LectureLayout>
      <S.LectureHeader>
        <Navbar topLanguages={topLanguages} />
      </S.LectureHeader>
      <S.LectureMain>
        <S.LectureTitle>강의 정보</S.LectureTitle>
        <S.LectureInfoDetail lecture={lecture} />
        <S.LectureTitle>강의 분석</S.LectureTitle>
        <S.LectureAnalysisDetail
          data={{ ...lecture.classification, ...lecture.details }}
        />
        <S.LectureTitle>다음 추천 강의</S.LectureTitle>
        <S.LectureReccomendationDetailContainer>
          {lecture.next_lectures.map((recommendation) => (
            <Link
              to={`/lecture/${recommendation.id}`}
              style={{ textDecoration: "none" }}
              key={recommendation.id}
            >
              <S.LectureReccomendationDetailItem lecture={recommendation} />
            </Link>
          ))}
        </S.LectureReccomendationDetailContainer>
      </S.LectureMain>
    </S.LectureLayout>
  );
};

export default Lecture;
