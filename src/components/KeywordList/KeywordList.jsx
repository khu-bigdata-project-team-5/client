import * as S from "./KeywordList.style";

const KeywordList = ({
  keywords,
  selectedKeywords,
  onSelectedKeyword,
  className,
}) => {
  return (
    <S.KeywordListContainer className={className}>
      {keywords.map((keyword) => (
        <S.KeywordListItem
          key={keyword}
          selected={selectedKeywords.includes(keyword)}
          onClick={() => onSelectedKeyword(keyword)}
        >
          {keyword}
        </S.KeywordListItem>
      ))}
    </S.KeywordListContainer>
  );
};

export default KeywordList;
