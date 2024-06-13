import * as S from "./Navbar.style";
import { Link } from "react-router-dom";

const Navbar = ({ topLanguages }) => {
  const settings = {
    arrows: false,
    draggable: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <S.NavbarConatiner>
      <Link to="/" style={{ textDecoration: "none" }}>
        <S.NavbarIcon
          src={require("../../assets/icons/logo_nav.png")}
          alt="logo"
        />
      </Link>
      <S.NavbarRankWrapper>
        <S.NavbarRankTitle>실시간 키워드</S.NavbarRankTitle>
        <S.NavbarSlider {...settings}>
          {topLanguages.map((topLanguage, index) => (
            <S.NavbarRankKeywordItem key={index}>
              {index + 1}위 {topLanguage}
            </S.NavbarRankKeywordItem>
          ))}
        </S.NavbarSlider>
      </S.NavbarRankWrapper>
      <S.NavbarItemWrapper>
        <Link to="/other" style={{ textDecoration: "none" }}>
          <S.NavbarItem>다른 커리큘럼</S.NavbarItem>
        </Link>
        <Link to="/curriculum/category" style={{ textDecoration: "none" }}>
          <S.NavbarItem>나의 커리큘럼</S.NavbarItem>
        </Link>
      </S.NavbarItemWrapper>
    </S.NavbarConatiner>
  );
};

export default Navbar;
