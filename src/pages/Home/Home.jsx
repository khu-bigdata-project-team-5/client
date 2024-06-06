import * as S from "./Home.style.js";
import Loading from "../Loading/Loading.jsx";
import Navbar from "../../componenets/Navbar/Navbar.jsx";
import LectureList from "../../componenets/LectureList/LectureList.jsx";
import useFetch from "../../hooks/useFetch.js";
import { ENDPOINTS } from "../../api/endpoints.js";

const Home = () => {
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

  if (keywordsLoading || lecturesLoading) return <Loading />;
  if (keywordsError || lecturesError) alert("에러가 발생했습니다.");
  return (
    <S.HomeLayout>
      <S.HomeHeader>
        <Navbar keywords={keywords} />
      </S.HomeHeader>
      <S.HomeMain>
        <LectureList lectures={lectures} />
      </S.HomeMain>
    </S.HomeLayout>
  );
};

export default Home;
