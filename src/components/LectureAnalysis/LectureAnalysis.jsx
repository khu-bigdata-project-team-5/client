import * as S from "./LectureAnalysis.style";

const LectureAnalysis = ({ data }, className) => {
  const radarData = {
    labels: ["강의력", "강의자료", "실습", "평점", "난이도"],
    datasets: [
      {
        label: "강의 점수",
        backgroundColor: "rgba(75, 59, 255, 0.8)",
        data: [
          data.teaching_quality,
          data.reference,
          data.practice,
          data.rating,
          data.level,
        ],
      },
    ],
  };
  const pieData = {
    labels: ["Positive", "negative"],
    datasets: [
      {
        label: "인원",
        data: [data.good, data.bad],
        backgroundColor: ["rgb(87, 255, 59)", "rgb(255, 59, 59)"],
        hoverOffset: 4,
      },
    ],
  };

  const radarOptions = {
    elements: {
      //데이터 속성.
      line: {
        borderWidth: 2,
        backgroundColor: "rgba(75, 59, 255, 0.8)",
      },
      //데이터 꼭짓점.
      point: {
        backgroundColor: "rgba(75, 59, 255, 0.8)",
      },
    },
    scales: {
      r: {
        ticks: {
          stepSize: 1,
          display: false,
        },
        grid: {
          color: "rgba(0, 0, 0, 1)",
        },
        //라벨 속성 지정.
        pointLabels: {
          font: {
            size: 20,
            weight: "bold",
          },
          color: "rgba(0, 0, 0, 1)",
        },
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
    //위에 생기는 데이터 속성 label 타이틀을 지워줍니다.
    plugins: {
      legend: {
        display: false,
      },
    },
    //기본 값은 가운데에서 펴져나가는 애니메이션 형태입니다.
    animation: {
      duration: 0,
    },
  };

  let techingQualityComment;
  if (0 <= data.teaching_quality && data.teaching_quality < 1) {
    techingQualityComment = "이해하기 어려웠어요";
  } else if (1 <= data.teaching_quality && data.teaching_quality < 2) {
    techingQualityComment = "설명이 불명확했어요";
  } else if (2 <= data.teaching_quality && data.teaching_quality < 3) {
    techingQualityComment = "보통 수준의 설명이에요";
  } else if (3 <= data.teaching_quality && data.teaching_quality < 4) {
    techingQualityComment = "설명이 명확하고 이해하기 쉬웠어요";
  } else if (4 <= data.teaching_quality && data.teaching_quality <= 5) {
    techingQualityComment = "설명이 매우 훌륭하고 명확했어요";
  }

  let referenceComment;
  if (0 <= data.reference && data.reference < 1) {
    referenceComment = "자료가 부족하고 부실해요";
  } else if (1 <= data.reference && data.reference < 2) {
    referenceComment = "기본적인 자료만 제공돼요";
  } else if (2 <= data.reference && data.reference < 3) {
    referenceComment = "자료가 충실해요";
  } else if (3 <= data.reference && data.reference < 4) {
    referenceComment = "자료가 체계적이고 실습 중심이에요";
  } else if (4 <= data.reference && data.reference <= 5) {
    referenceComment = "자료가 매우 풍부하고 유익해요";
  }

  let practiceComment;
  if (0 <= data.practice && data.practice < 1) {
    practiceComment = "실습이 부족해요";
  } else if (1 <= data.practice && data.practice < 2) {
    practiceComment = "간단한 실습만 있어요";
  } else if (2 <= data.practice && data.practice < 3) {
    practiceComment = "보통 수준의 실습이 포함돼요";
  } else if (3 <= data.practice && data.practice < 4) {
    practiceComment = "실무 프로젝트로 확장 가능해요";
  } else if (4 <= data.practice && data.practice <= 5) {
    practiceComment = "실전 같은 복잡한 실습이 많아요";
  }

  let ratingComment;
  if (0 <= data.rating && data.rating < 1) {
    ratingComment = "시간 낭비였어요";
  } else if (1 <= data.rating && data.rating < 2) {
    ratingComment = "기대 이하였어요";
  } else if (2 <= data.rating && data.rating < 3) {
    ratingComment = "평균 수준이에요";
  } else if (3 <= data.rating && data.rating < 4) {
    ratingComment = "꽤 유익했어요";
  } else if (4 <= data.rating && data.rating <= 5) {
    ratingComment = "매우 만족스러웠어요";
  }

  let levelComment;
  if (0 <= data.level && data.level < 1) {
    levelComment = "너무 쉬워서 지루해요";
  } else if (1 <= data.level && data.level < 2) {
    levelComment = "기초부터 배우기 쉬워요";
  } else if (2 <= data.level && data.level < 3) {
    levelComment = "중급 개발자에게 적당해요";
  } else if (3 <= data.level && data.level < 4) {
    levelComment = "실무 경험자에게 도전적이에요";
  } else if (4 <= data.level && data.level <= 5) {
    levelComment = "상당히 어려워요, 고급 단계예요";
  }

  return (
    <S.LectureAnalysisContainer className={className}>
      <S.LectureSpiderChartWrapper>
        <S.LectureSpiderChartConatiner>
          <S.LectureSpiderChart data={radarData} options={radarOptions} />
        </S.LectureSpiderChartConatiner>
        <S.LectureAnalysisColumn>
          <S.LectureAnalysisText>
            강의력({data.teaching_quality}): {techingQualityComment}
          </S.LectureAnalysisText>
          <S.LectureAnalysisText>
            강의자료({data.reference}): {referenceComment}
          </S.LectureAnalysisText>
          <S.LectureAnalysisText>
            실습({data.practice}): {practiceComment}
          </S.LectureAnalysisText>
          <S.LectureAnalysisText>
            평점({data.rating}): {ratingComment}
          </S.LectureAnalysisText>
          <S.LectureAnalysisText>
            난이도({data.level}): {levelComment}
          </S.LectureAnalysisText>
        </S.LectureAnalysisColumn>
      </S.LectureSpiderChartWrapper>
      <S.LecturePieChartContainer>
        <S.LecturePieChart data={pieData} />
      </S.LecturePieChartContainer>
    </S.LectureAnalysisContainer>
  );
};

export default LectureAnalysis;
