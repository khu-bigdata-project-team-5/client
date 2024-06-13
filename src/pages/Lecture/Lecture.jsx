import * as S from "./Lecture.style";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import Error from "../Error/Error.jsx";
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
  if (topLanguagesError || lectureError) return <Error />;
  return <LectureComponent topLanguages={topLanguages} lecture={lecture} />;
};

const LectureComponent = ({ topLanguages, lecture }) => {
  const {
    data: nextLectures,
    loading: nextLecturesLoading,
    error: nextLecturesError,
  } = useFetch(`${ENDPOINTS.CURRICULUM}`, {
    isMocked: false,
    method: "get",
    params: { keyword: lecture.topword1 },
  });
  if (nextLecturesLoading) return <Loading />;
  if (nextLecturesError) return <Error />;
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
          data={{
            level: lecture.level,
            rating: lecture.rating,
            practice: lecture.practice,
            reference: lecture.reference,
            teaching_quality: lecture.teaching_quality,
            bad: lecture.bad,
            good: lecture.good,
          }}
        />
        <S.LectureTitle>다음 추천 강의</S.LectureTitle>
        <S.LectureReccomendationDetailContainer>
          {nextLectures.lectureList.length === 0 ? (
            <S.EmptyMessage>추천 강의가 없습니다.</S.EmptyMessage>
          ) : (
            nextLectures.lectureList.map((recommendation) => (
              <Link
                to={`/lecture/${recommendation.lectureId}`}
                style={{ textDecoration: "none" }}
                key={recommendation.lectureId}
              >
                <S.LectureReccomendationDetailItem lecture={recommendation} />
              </Link>
            ))
          )}
        </S.LectureReccomendationDetailContainer>
      </S.LectureMain>
    </S.LectureLayout>
  );
};

export default Lecture;
