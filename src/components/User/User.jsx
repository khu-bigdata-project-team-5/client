import * as S from "./User.style";

const User = ({ user }) => {
  return (
    <S.UserContainer>
      <S.UserType>{user.type} 수강생</S.UserType>
      <S.UserKeywordList>
        {user.tags.map((tag, index) => (
          <S.UserKeywordItem key={index}>{tag}</S.UserKeywordItem>
        ))}
      </S.UserKeywordList>
    </S.UserContainer>
  );
};

export default User;
