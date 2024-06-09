import * as S from "./OtherCurriculum.style";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import { ENDPOINTS } from "../../api/endpoints";

const OtherCurriculum = () => {
  const { id } = useParams();
  const {
    data: topLanguages,
    loading: topLanguagesLoading,
    error: topLanguagesError,
  } = useFetch(ENDPOINTS.TOP_LANGUAGES, { method: "get" });

  const {
    data: other,
    loading: otherLoading,
    error: otherError,
  } = useFetch(`${ENDPOINTS.OTHERS}/${id}`, { method: "get" });

  if (topLanguagesLoading || otherLoading) return <Loading />;
  if (topLanguagesError || otherError) alert("에러가 발생했습니다.");
  return (
    <S.OtherCurriculumLayout>
      <S.OtherCurriculumHeader>
        <Navbar topLanguages={topLanguages} />
      </S.OtherCurriculumHeader>
      <S.OtherCurriculumMain>
        <S.OtherCurriculumTitleRow>
          <S.OtherCurriculumUser user={other.user} />
          <S.OtherCurriculumTitle>님이 들은 강의</S.OtherCurriculumTitle>
        </S.OtherCurriculumTitleRow>
        <S.OtherCurriculumLectureList>
          {other.lectures.map((lecture) => (
            <Link
              to={`/lecture/${lecture.id}`}
              key={lecture.id}
              style={{ textDecoration: "none" }}
            >
              <S.OtherCurriculumLectureItem lecture={lecture} />
            </Link>
          ))}
        </S.OtherCurriculumLectureList>
      </S.OtherCurriculumMain>
    </S.OtherCurriculumLayout>
  );
};

export default OtherCurriculum;
