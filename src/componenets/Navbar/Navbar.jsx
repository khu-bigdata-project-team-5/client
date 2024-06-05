import * as S from "./Navbar.style";

const Navbar = () => {
  return (
    <S.NavbarConatiner>
      <S.NavbarIcon
        src={require("../../assets/icons/logo_nav.png")}
        alt="logo"
      />
      <S.NavbarRank>
        실시간 키워드
        <br />
        1. Spring Boot
      </S.NavbarRank>
      <S.NavbarItemWrapper>
        <S.NavbarItem>다른 커리큘럼</S.NavbarItem>
        <S.NavbarItem>나의 커리큘럼</S.NavbarItem>
      </S.NavbarItemWrapper>
    </S.NavbarConatiner>
  );
};

export default Navbar;
