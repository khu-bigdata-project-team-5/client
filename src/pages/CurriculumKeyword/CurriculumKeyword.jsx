import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import * as S from "./CurriculumKeyword.style";

const CurriculumKeyword = () => {
  const { category } = useParams();
  const keywords = {
    "프로그래밍 언어": [
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "C#",
      "Ruby",
      "PHP",
      "Swift",
      "Kotlin",
      "TypeScript",
    ],
    "웹 개발": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Angular",
      "Vue",
      "Node.js",
      "Express",
      "Django",
      "Flask",
    ],
    "게임 개발": [
      "Unity",
      "Unreal Engine",
      "Cocos2d",
      "Godot",
      "GameMaker",
      "Construct",
      "RPG Maker",
      "Phaser",
      "Defold",
      "Pico-8",
    ],
    "모바일 앱 개발": [
      "Android",
      "iOS",
      "React Native",
      "Flutter",
      "Xamarin",
      "PhoneGap",
      "Ionic",
      "Cordova",
      "Corona",
      "Appcelerator",
    ],
    "데이터 사이언스": [
      "Python",
      "R",
      "SQL",
      "Scala",
      "Julia",
      "SAS",
      "Matlab",
      "Excel",
      "Tableau",
      "Power BI",
    ],
    인공지능: [
      "Python",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "Numpy",
      "OpenCV",
      "NLTK",
      "Gensim",
    ],
  };
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
        keywords={keywords[category]}
        selectedKeywords={selectedKeywords}
        onSelectedKeyword={handleSelectedKeyword}
      />
      {selectedKeywords.length === 4 ? (
        <Link
          to={`/curriculum/${selectedKeywords.join(",")}`}
          style={{ textDecoration: "none" }}
        >
          <S.CurriculumNext>다음</S.CurriculumNext>
        </Link>
      ) : null}
    </S.CurriculumKeywordLayout>
  );
};

export default CurriculumKeyword;
