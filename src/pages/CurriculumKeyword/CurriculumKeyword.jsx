import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import categoryKeywords from "../../data/categoryKeywords.js";
import * as S from "./CurriculumKeyword.style";

const CurriculumKeyword = () => {
  const { category } = useParams();
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const handleSelectedKeyword = (keyword) => {
    setSelectedKeywords((prevSelectedKeywords) =>
      prevSelectedKeywords.includes(keyword)
        ? prevSelectedKeywords.filter((item) => item !== keyword)
        : [...prevSelectedKeywords, keyword],
    );
  };
  return (
    <S.CurriculumKeywordLayout>
      <S.CurriculumTitleText>
        관심있는 키워드를 선택해주세요
      </S.CurriculumTitleText>
      <S.CurriculumSubtitleText>분야: {category}</S.CurriculumSubtitleText>
      <S.CurriculumKeywordList
        keywords={categoryKeywords[category]}
        selectedKeywords={selectedKeywords}
        onSelectedKeyword={handleSelectedKeyword}
      />
      {selectedKeywords.length === 4 ? (
        <Link
          to={`/curriculum/${selectedKeywords.map((a) => encodeURIComponent(a)).join(",")}`}
          style={{
            textDecoration: "none",
            marginLeft: "auto",
          }}
        >
          <S.CurriculumNext isShowed={selectedKeywords.length === 4}>
            다음
          </S.CurriculumNext>
        </Link>
      ) : (
        <S.CurriculumNext isShowed={selectedKeywords.length === 4}>
          다음
        </S.CurriculumNext>
      )}
    </S.CurriculumKeywordLayout>
  );
};

export default CurriculumKeyword;
