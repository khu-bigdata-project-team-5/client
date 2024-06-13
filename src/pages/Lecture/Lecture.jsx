import * as S from "./Lecture.style";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import Error from "../Error/Error.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import useFetch from "../../hooks/useFetch.js";
import { ENDPOINTS } from "../../api/endpoints.js";

const Lecture = () => {
  const { lectureId } = useParams();
  //TODO: 키워드 순위 추후 구현
  // const {
  //   data: topLanguages,
  //   loading: topLanguagesLoading,
  //   error: topLanguagesError,
  // } = useFetch(ENDPOINTS.TOP_LANGUAGES, { isMocked: true, method: "get" });
  const {
    data: lecture,
    loading: lectureLoading,
    error: lectureError,
  } = useFetch(`${ENDPOINTS.LECTURE}/${lectureId}`, {
    isMocked: false,
    method: "get",
  });
  const {
    data: keywords,
    loading: keywordsLoading,
    error: keywordsError,
  } = useFetch(`${ENDPOINTS.KEYWORDS}/1`, {
    // TODO: Keyword API 구현되면 연동
    isMocked: true,
    method: "get",
  });
  if (lectureLoading || keywordsLoading) return <Loading />;
  if (lectureError || keywordsError) return <Error />;
  return (
    <LectureComponent
      // topLanguages={topLanguages}
      lecture={lecture}
      keywords={keywords}
    />
  );
};

const LectureComponent = ({ /*topLanguages,*/ lecture, keywords }) => {
  console.log(lecture);
  const {
    data: nextLectures,
    loading: nextLecturesLoading,
    error: nextLecturesError,
  } = useFetch(`${ENDPOINTS.CURRICULUM}`, {
    isMocked: false,
    method: "get",
    // TODO: 해당 API가 구현다되면 연동
    params: { keyword: keywords[0] },
  });
  if (nextLecturesLoading) return <Loading />;
  if (nextLecturesError) return <Error />;
  return (
    <S.LectureLayout>
      <S.LectureHeader>
        <Navbar />
      </S.LectureHeader>
      <S.LectureMain>
        <S.LectureTitle>강의 정보</S.LectureTitle>
        <S.LectureInfoDetail lecture={lecture} keywords={keywords} />
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
