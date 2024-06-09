import { useParams, Link } from "react-router-dom";
import * as S from "./Curriculum.style";
import Loading from "../Loading/Loading.jsx";
import { useState } from "react";
import useFetch from "../../hooks/useFetch.js";
import { ENDPOINTS } from "../../api/endpoints.js";

const Curriculum = () => {
  const { keywords } = useParams();
  const keywordList = keywords.split(",");
  if (keywordList.length !== 4) {
    alert("키워드는 4개여야 합니다.");
    window.history.back();
  }
  const [selectedLectureList, setSelectedLectureList] = useState([
    null,
    null,
    null,
    null,
  ]);
  const setLecture = (index, value) => {
    const newSelectedLectureList = [...selectedLectureList];
    newSelectedLectureList[index] = value;
    setSelectedLectureList(newSelectedLectureList);
  };
  // 각각의 요청에 대한 상태를 관리하는 배열
  const {
    data: data1,
    loading: loading1,
    error: error1,
  } = useFetch(ENDPOINTS.CURRICULUM, {
    params: { keyword: keywordList[0] },
  });
  const {
    data: data2,
    loading: loading2,
    error: error2,
  } = useFetch(ENDPOINTS.CURRICULUM, {
    params: { keyword: keywordList[1] },
  });
  const {
    data: data3,
    loading: loading3,
    error: error3,
  } = useFetch(ENDPOINTS.CURRICULUM, {
    params: { keyword: keywordList[2] },
  });
  const {
    data: data4,
    loading: loading4,
    error: error4,
  } = useFetch(ENDPOINTS.CURRICULUM, {
    params: { keyword: keywordList[3] },
  });

  if (loading1 || loading2 || loading3 || loading4) {
    return <Loading />;
  }
  if (error1 || error2 || error3 || error4) {
    alert("에러가 발생했습니다. 다시 시도해주세요.");
  }
  return (
    <S.CurriculumLayout>
      <S.CurriculumHeader>
        <S.CurriculumSave enabled={false} style={{ visibility: "hidden" }}>
          저장
        </S.CurriculumSave>
        <S.CurriculumTitleText>
          원하는 커리큘럼을 선택해주세요
        </S.CurriculumTitleText>
        {selectedLectureList.every((lecture) => lecture !== null) ? (
          <Link to="/" style={{ textDecoration: "none" }}>
            <S.CurriculumSave enabled={true}>저장</S.CurriculumSave>
          </Link>
        ) : (
          <S.CurriculumSave enabled={false}>저장</S.CurriculumSave>
        )}
      </S.CurriculumHeader>
      <S.CurriCulumKeywordContainer>
        <S.CurriculumKeyword
          key={keywordList[0]}
          selected={selectedLectureList[0] !== null}
        >
          {keywordList[0]}
        </S.CurriculumKeyword>
        <S.CurriculumKeyword
          key={keywordList[1]}
          selected={selectedLectureList[1] !== null}
        >
          {keywordList[1]}
        </S.CurriculumKeyword>
        <S.CurriculumKeyword
          key={keywordList[2]}
          selected={selectedLectureList[2] !== null}
        >
          {keywordList[2]}
        </S.CurriculumKeyword>
        <S.CurriculumKeyword
          key={keywordList[3]}
          selected={selectedLectureList[3] !== null}
        >
          {keywordList[3]}
        </S.CurriculumKeyword>
      </S.CurriCulumKeywordContainer>
      <S.CurriculumContainer>
        <S.LectureList>
          {selectedLectureList[0] !== null ? (
            <S.LectureItem
              key={data1[selectedLectureList[0]].id}
              lecture={data1[selectedLectureList[0]]}
              selected={true}
              onClick={() => setLecture(0, null)}
            />
          ) : (
            data1.map((lecture, index) => (
              <S.LectureItem
                key={lecture.id}
                lecture={lecture}
                selected={false}
                onClick={() => setLecture(0, index)}
              />
            ))
          )}
        </S.LectureList>
        <S.LectureList>
          {selectedLectureList[1] !== null ? (
            <S.LectureItem
              key={data2[selectedLectureList[1]].id}
              lecture={data2[selectedLectureList[1]]}
              selected={true}
              onClick={() => setLecture(1, null)}
            />
          ) : (
            data2.map((lecture, index) => (
              <S.LectureItem
                key={lecture.id}
                lecture={lecture}
                selected={false}
                onClick={() => setLecture(1, index)}
              />
            ))
          )}
        </S.LectureList>
        <S.LectureList>
          {selectedLectureList[2] !== null ? (
            <S.LectureItem
              key={data3[selectedLectureList[2]].id}
              lecture={data3[selectedLectureList[2]]}
              selected={true}
              onClick={() => setLecture(2, null)}
            />
          ) : (
            data3.map((lecture, index) => (
              <S.LectureItem
                key={lecture.id}
                lecture={lecture}
                selected={false}
                onClick={() => setLecture(2, index)}
              />
            ))
          )}
        </S.LectureList>
        <S.LectureList>
          {selectedLectureList[3] !== null ? (
            <S.LectureItem
              key={data4[selectedLectureList[3]].id}
              lecture={data4[selectedLectureList[3]]}
              selected={true}
              onClick={() => setLecture(3, null)}
            />
          ) : (
            data4.map((lecture, index) => (
              <S.LectureItem
                key={lecture.id}
                lecture={lecture}
                selected={false}
                onClick={() => setLecture(3, index)}
              />
            ))
          )}
        </S.LectureList>
      </S.CurriculumContainer>
    </S.CurriculumLayout>
  );
};

export default Curriculum;
