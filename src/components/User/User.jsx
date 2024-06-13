import * as S from "./User.style";

const User = ({ user }) => {
  return (
    <S.UserContainer>
      <S.UserType>{user.name} 수강생</S.UserType>
      <S.UserKeywordList>
        {user.topword1 && (
          <S.UserKeywordItem>{user.topword1}</S.UserKeywordItem>
        )}
        {user.topword2 && (
          <S.UserKeywordItem>{user.topword2}</S.UserKeywordItem>
        )}
        {user.topword3 && (
          <S.UserKeywordItem>{user.topword3}</S.UserKeywordItem>
        )}
        {user.topword4 && (
          <S.UserKeywordItem>{user.topword4}</S.UserKeywordItem>
        )}
        {user.topword5 && (
          <S.UserKeywordItem>{user.topword5}</S.UserKeywordItem>
        )}
      </S.UserKeywordList>
    </S.UserContainer>
  );
};

export default User;
