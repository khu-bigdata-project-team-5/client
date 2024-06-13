import * as S from "./OtherCurriculum.style";
import { Link, useLocation } from "react-router-dom";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import { ENDPOINTS } from "../../api/endpoints";

const OtherCurriculum = () => {
  const location = useLocation();
  const { other } = location.state;
  console.log(other.topword1);
  //TODO: 키워드 순위 추후 구현
  // const {
  //   data: topLanguages,
  //   loading: topLanguagesLoading,
  //   error: topLanguagesError,
  // } = useFetch(ENDPOINTS.TOP_LANGUAGES, { method: "get" });
  const {
    data: lectures,
    loading: lecturesLoading,
    error: lecturesError,
  } = useFetch(ENDPOINTS.CURRICULUM, {
    isMocked: false,
    method: "get",
    params: { keyword: other.topword1 },
  });
  if (lecturesLoading) return <Loading />;
  if (lecturesError) return <Error />;
  return (
    <S.OtherCurriculumLayout>
      <S.OtherCurriculumHeader>
        <Navbar />
      </S.OtherCurriculumHeader>
      <S.OtherCurriculumMain>
        <S.OtherCurriculumTitleRow>
          <S.OtherCurriculumUser
            user={{
              name: other.name,
              topword1: other.topword1,
              topword2: other.topword2,
              topword3: other.topword3,
              topword4: other.topword4,
              topword5: other.topword5,
            }}
          />
          <S.OtherCurriculumTitle>님이 들은 강의</S.OtherCurriculumTitle>
        </S.OtherCurriculumTitleRow>
        <S.OtherCurriculumLectureList>
          {lectures.lectureList.length === 0 ? (
            <S.EmptyLecture>해당 강의가 없습니다.</S.EmptyLecture>
          ) : (
            lectures.lectureList.map((lecture) => (
              <Link
                key={lecture.lectureId}
                to={`/lecture/${lecture.lectureId}`}
                style={{ textDecoration: "none" }}
              >
                <S.OtherCurriculumLectureItem lecture={lecture} />
              </Link>
            ))
          )}
        </S.OtherCurriculumLectureList>
      </S.OtherCurriculumMain>
    </S.OtherCurriculumLayout>
  );
};

export default OtherCurriculum;
