import * as S from "./Home.style.js";
import Loading from "../Loading/Loading.jsx";
import Navbar from "../../componenets/Navbar/Navbar.jsx";
import LectureList from "../../componenets/LectureList/LectureList.jsx";
import useLectures from "../../hooks/useLectures.js";

const Home = () => {
  const { lectures, loading, error } = useLectures();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    alert("에러가 발생했습니다.");
  }
  return (
    <S.HomeLayout>
      <S.HomeHeader>
        <Navbar />
      </S.HomeHeader>
      <S.HomeMain>
        <LectureList lectures={lectures} />
      </S.HomeMain>
    </S.HomeLayout>
  );
};

export default Home;
