import * as S from "./Other.style";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import { ENDPOINTS } from "../../api/endpoints";

const Other = () => {
  const navigate = useNavigate();
  const {
    data: topLanguages,
    loading: topLanguagesLoading,
    error: topLanguagesError,
  } = useFetch(ENDPOINTS.TOP_LANGUAGES, { isMocked: true, method: "get" });
  const {
    data: others,
    loading: othersLoading,
    error: othersError,
  } = useFetch(ENDPOINTS.OTHERS, { isMocked: false, method: "get" });

  if (topLanguagesLoading || othersLoading) return <Loading />;
  if (topLanguagesError || othersError) alert("에러가 발생했습니다.");

  // 포토존 이미지 클릭시 상세 페이지로 이동
  const navigateOtherCurriculums = (userId, index) => {
    navigate(`/other/${userId}`, {
      state: {
        other: others.studentList[index],
      },
    });
  };
  return (
    <S.OtherLayout>
      <S.OtherHeader>
        <Navbar topLanguages={topLanguages} />
      </S.OtherHeader>
      <S.OtherMain>
        <S.OtherTitle>다른 커리큘럼</S.OtherTitle>
        <S.OtherUserList>
          {others.studentList.length === 0 ? (
            <S.EmptyMessage>다른 사용자가 없습니다.</S.EmptyMessage>
          ) : (
            others.studentList.map((other, index) => (
              <S.OtherUserItem
                key={other.udemyUserId}
                user={other}
                onClick={() =>
                  navigateOtherCurriculums(other.udemyUserId, index)
                }
              />
            ))
          )}
        </S.OtherUserList>
      </S.OtherMain>
    </S.OtherLayout>
  );
};

export default Other;
