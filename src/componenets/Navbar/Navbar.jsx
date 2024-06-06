import * as S from "./Navbar.style";

const Navbar = ({ keywords }) => {
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
      <S.NavbarIcon
        src={require("../../assets/icons/logo_nav.png")}
        alt="logo"
      />
      <S.NavbarRankWrapper>
        <S.NavbarRankTitle>실시간 키워드</S.NavbarRankTitle>
        <S.NavbarSlider {...settings}>
          {keywords.map((keyword) => (
            <S.NavbarRankKeywordItem key={keyword.rank}>
              {keyword.rank}위 {keyword.keyword}
            </S.NavbarRankKeywordItem>
          ))}
        </S.NavbarSlider>
      </S.NavbarRankWrapper>
      <S.NavbarItemWrapper>
        <S.NavbarItem>다른 커리큘럼</S.NavbarItem>
        <S.NavbarItem>나의 커리큘럼</S.NavbarItem>
      </S.NavbarItemWrapper>
    </S.NavbarConatiner>
  );
};

export default Navbar;
