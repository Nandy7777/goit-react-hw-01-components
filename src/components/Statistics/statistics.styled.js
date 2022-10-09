import styled from 'styled-components';

export const StatsSection = styled.section`
  background-color: lightgray;
  width: 300px;
  padding: 50px;
  width: max-content;
  margin: 0 auto 20px;
`;

export const StatsTitle = styled.h2`
font-size: 26px;
font-weight: 700;
text-align: center;
background-color: white;
text-transform: uppercase;
color: gray;
padding: 20px;
`;

export const StatsList = styled.ul`
display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  width: 50px;
  height: 50px;
  color: white;
`;

export const StatsLabel = styled.span`
font-size: 12px;
`;

export const StatsPercentage = styled.span`
font-size: 20px;
`;