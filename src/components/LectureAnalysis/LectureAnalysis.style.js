import styled from "styled-components";
import { Radar, Pie } from "react-chartjs-2";
import "chart.js/auto";

export const LectureAnalysisContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LectureSpiderChartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LectureSpiderChartConatiner = styled.div`
  width: 40vw;
  height: 40vw;
  margin-right: 2rem;
`;

export const LectureSpiderChart = styled(Radar)``;

export const LecturePieChartContainer = styled.div`
  width: 50vw;
  height: 50vw;
`;

export const LecturePieChart = styled(Pie)``;

export const LectureAnalysisColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LectureAnalysisText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000000;
`;
