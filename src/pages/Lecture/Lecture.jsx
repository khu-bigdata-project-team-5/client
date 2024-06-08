import * as S from "./Lecture.style";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import Navbar from "../../componenets/Navbar/Navbar.jsx";
import useFetch from "../../hooks/useFetch.js";
import { ENDPOINTS } from "../../api/endpoints.js";

const Lecture = () => {
  const { lectureId } = useParams();
  const {
    data: topLanguages,
    loading: topLanguagesLoading,
    error: topLanguagesError,
  } = useFetch(ENDPOINTS.TOP_LANGUAGES, { method: "get" });
  const {
    data: lecture,
    loading: lectureLoading,
    error: lectureError,
  } = useFetch(`${ENDPOINTS.LECTURE}/${lectureId}`, { method: "get" });

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
        {/* <S.LectureTitle>강의 분석</S.LectureTitle>
        <S.LectureAnalysisDetail />
        <S.LectureTitle>다음 추천 강의</S.LectureTitle>
        <S.LectureReccomendationDetail /> */}
      </S.LectureMain>
    </S.LectureLayout>
  );
};

export default Lecture;
