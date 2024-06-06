import * as S from "./Home.style.js";
import Loading from "../Loading/Loading.jsx";
import Navbar from "../../componenets/Navbar/Navbar.jsx";
import LectureList from "../../componenets/LectureList/LectureList.jsx";
import { useState } from "react";
import useFetch from "../../hooks/useFetch.js";
import { ENDPOINTS } from "../../api/endpoints.js";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const {
    data: keywords,
    loading: keywordsLoading,
    error: keywordsError,
  } = useFetch(ENDPOINTS.KEYWORDS);
  const {
    data: lectures,
    loading: lecturesLoading,
    error: lecturesError,
  } = useFetch(ENDPOINTS.LECTURES);
  const categories = [
    {
      name: "프로그래밍 언어",
      unselectIcon: require("../../assets/icons/programming_language_unselect.png"),
      selectIcon: require("../../assets/icons/programming_language_select.png"),
    },
    {
      name: "웹 개발",
      unselectIcon: require("../../assets/icons/web_development_unselect.png"),
      selectIcon: require("../../assets/icons/web_development_select.png"),
    },
    {
      name: "게임 개발",
      unselectIcon: require("../../assets/icons/game_development_unselect.png"),
      selectIcon: require("../../assets/icons/game_development_select.png"),
    },
    {
      name: "모바일 앱 개발",
      unselectIcon: require("../../assets/icons/app_development_unselect.png"),
      selectIcon: require("../../assets/icons/app_development_select.png"),
    },
    {
      name: "데이터 사이언스",
      unselectIcon: require("../../assets/icons/data_science_unselect.png"),
      selectIcon: require("../../assets/icons/data_science_select.png"),
    },
    {
      name: "인공지능",
      unselectIcon: require("../../assets/icons/ai_unselect.png"),
      selectIcon: require("../../assets/icons/ai_select.png"),
    },
  ];
  if (keywordsLoading || lecturesLoading) return <Loading />;
  if (keywordsError || lecturesError) alert("에러가 발생했습니다.");
  return (
    <S.HomeLayout>
      <S.HomeHeader>
        <Navbar keywords={keywords} />
      </S.HomeHeader>
      <S.HomeMain>
        <S.HomeCategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <LectureList lectures={lectures} />
      </S.HomeMain>
    </S.HomeLayout>
  );
};

export default Home;
