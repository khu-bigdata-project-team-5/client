import * as S from "./Home.style.js";
import Loading from "../Loading/Loading.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import LectureList from "../../components/LectureList/LectureList.jsx";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch.js";
import { ENDPOINTS } from "../../api/endpoints.js";
import categoryKeywords from "../../data/categoryKeywords.js";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const {
    data: topLanguages,
    loading: topLanguagesLoading,
    error: topLanguagesError,
  } = useFetch(ENDPOINTS.TOP_LANGUAGES, { isMocked: true, method: "GET" });
  const {
    data: lectures,
    loading: lecturesLoading,
    error: lecturesError,
    fetchData: fetchLectures,
  } = useFetch(ENDPOINTS.LECTURES, {
    isMocked: false,
    method: "get",
    params: { category: categoryKeywords[selectedCategory].eng_category },
  });
  useEffect(() => {
    fetchLectures();
  }, [selectedCategory]);
  if (lecturesLoading) return <Loading />;
  if (lecturesError) alert("에러가 발생했습니다.");
  return (
    <S.HomeLayout>
      <S.HomeHeader>
        <Navbar />
      </S.HomeHeader>
      <S.HomeMain>
        <S.HomeCategorySelector
          categories={categoryKeywords}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        {
          // 강의 목록이 없을 경우
          lectures.lectureList.length === 0 ? (
            <S.EmptyMessage>
              해당 카테고리에 등록된 강의가 없습니다.
            </S.EmptyMessage>
          ) : (
            <LectureList lectures={lectures.lectureList} />
          )
        }
      </S.HomeMain>
    </S.HomeLayout>
  );
};

export default Home;
