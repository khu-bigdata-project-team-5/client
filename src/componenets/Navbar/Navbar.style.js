import styled from "styled-components";

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

export const NavbarRank = styled.p`
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
