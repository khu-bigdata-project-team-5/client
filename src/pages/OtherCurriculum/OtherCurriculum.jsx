import * as S from "./OtherCurriculum.style";
import { Link, useLocation } from "react-router-dom";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import { ENDPOINTS } from "../../api/endpoints";
import { useEffect, useState } from "react";

const OtherCurriculum = () => {
  const location = useLocation();
  const { other } = location.state;
  const [viewLectures, setViewLectures] = useState([]);
  const {
    data: topLanguages,
    loading: topLanguagesLoading,
    error: topLanguagesError,
  } = useFetch(ENDPOINTS.TOP_LANGUAGES, { isMocked: true, method: "get" });
  const {
    data: lectures,
    loading: lecturesLoading,
    error: lecturesError,
  } = useFetch(ENDPOINTS.CURRICULUM, {
    isMocked: false,
    method: "get",
    params: { keyword: other.topword1 },
  });
  useEffect(() => {
    if (lectures && lectures.lectureList) {
      const min = 4;
      const max = 10;
      const randomCount = Math.floor(Math.random() * (max - min + 1)) + min;
      const viewLectures = lectures.lectureList.slice(0, randomCount);
      setViewLectures(viewLectures);
    }
  }, [lectures]);
  if (topLanguagesLoading || lecturesLoading) return <Loading />;
  if (topLanguagesError || lecturesError) return <Error />;
  return (
    <S.OtherCurriculumLayout>
      <S.OtherCurriculumHeader>
        <Navbar topLanguages={topLanguages} />
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
          {viewLectures.length === 0 ? (
            <S.EmptyLecture>해당 강의가 없습니다.</S.EmptyLecture>
          ) : (
            viewLectures.map((lecture) => (
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
