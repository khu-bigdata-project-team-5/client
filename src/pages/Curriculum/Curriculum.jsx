import { useParams } from "react-router-dom";
import * as S from "./Curriculum.style";
import Loading from "../Loading/Loading.jsx";
import useFetch from "../../hooks/useFetch.js";
import { ENDPOINTS } from "../../api/endpoints.js";

const Curriculum = () => {
  const { keywords } = useParams();
  const keywordList = keywords.split(",");
  if (keywordList.length !== 4) {
    alert("키워드는 4개여야 합니다.");
    window.history.back();
  }
  // 각각의 요청에 대한 상태를 관리하는 배열
  const {
    data: data1,
    loading: loading1,
    error: error1,
  } = useFetch(ENDPOINTS.CURRICULUM, {
    params: { keyword: "anything" /*keywordList[0]*/ },
  });
  const {
    data: data2,
    loading: loading2,
    error: error2,
  } = useFetch(ENDPOINTS.CURRICULUM, {
    params: { keyword: "anything" /*keywordList[1]*/ },
  });
  const {
    data: data3,
    loading: loading3,
    error: error3,
  } = useFetch(ENDPOINTS.CURRICULUM, {
    params: { keyword: "anything" /*keywordList[2]*/ },
  });
  const {
    data: data4,
    loading: loading4,
    error: error4,
  } = useFetch(ENDPOINTS.CURRICULUM, {
    params: { keyword: "anything" /*keywordList[3]*/ },
  });

  if (loading1 || loading2 || loading3 || loading4) {
    return <Loading />;
  }
  if (error1 || error2 || error3 || error4) {
    alert("에러가 발생했습니다. 다시 시도해주세요.");
  }
  console.log(
    data1.thumbnail,
    data2.thumbnail,
    data3.thumbnail,
    data4.thumbnail,
  );
  return (
    <S.CurriculumLayout>
      <S.CurriculumTitleText>
        원하는 커리큘럼을 선택해주세요
      </S.CurriculumTitleText>
      <S.CurriCulumKeywordContainer>
        {keywordList.map((keyword) => (
          <S.CurriculumKeyword key={keyword}>{keyword}</S.CurriculumKeyword>
        ))}
      </S.CurriCulumKeywordContainer>
      <S.CurriculumContainer>
        <S.LectureList>
          {data1.map((lecture) => (
            <S.LectureItem key={lecture.id} lecture={lecture} />
          ))}
        </S.LectureList>
        <S.LectureList>
          {data2.map((lecture) => (
            <S.LectureItem key={lecture.id} lecture={lecture} />
          ))}
        </S.LectureList>
        <S.LectureList>
          {data3.map((lecture) => (
            <S.LectureItem key={lecture.id} lecture={lecture} />
          ))}
        </S.LectureList>
        <S.LectureList>
          {data4.map((lecture) => (
            <S.LectureItem key={lecture.id} lecture={lecture} />
          ))}
        </S.LectureList>
      </S.CurriculumContainer>
    </S.CurriculumLayout>
  );
};

export default Curriculum;
