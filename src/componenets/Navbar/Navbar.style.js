import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const NavbarConatiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  background-color: #4b3bff;
`;

export const NavbarIcon = styled.img`
  width: 100px;
  height: 100px;
`;

export const NavbarRankWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavbarRankTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #ffd700;
  margin-bottom: 0.5rem;
`;

export const NavbarSlider = styled(Slider)`
  width: 15rem;
  .slick-slide {
    height: 2.5rem;
  }
`;

export const NavbarRankKeywordItem = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #ffd700;
`;

export const NavbarItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavbarItem = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
  padding: 0 2rem;
`;
