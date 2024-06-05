import * as S from "./Home.style.js";
import Navbar from "../../componenets/Navbar/Navbar";
import LectureList from "../../componenets/LectureList/LectureList.jsx";

const Home = () => {
  return (
    <S.HomeLayout>
      <S.HomeHeader>
        <Navbar />
      </S.HomeHeader>
      <S.HomeMain>
        <LectureList />
      </S.HomeMain>
    </S.HomeLayout>
  );
};

export default Home;
