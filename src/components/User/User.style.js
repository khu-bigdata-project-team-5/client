import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ecebf8;
  padding: 1rem 2rem;
  border-radius: 1.125rem;
`;

export const UserType = styled.h2`
  text-size: 1.25rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 1rem;
`;

export const UserKeywordList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

export const UserKeywordItem = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #ffffff;
  padding: 0.25rem 0.5rem;
  background-color: #4b3bff;
`;
