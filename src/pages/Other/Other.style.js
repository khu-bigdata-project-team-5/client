import styled from "styled-components";
import User from "../../components/User/User";

export const OtherLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OtherHeader = styled.header``;

export const OtherMain = styled.main`
  padding: 3rem;
`;

export const OtherTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 2rem;
`;

export const OtherUserList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
`;

export const OtherUserItem = styled(User)``;

export const EmptyMessage = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000000;
  text-align: center;
`;
