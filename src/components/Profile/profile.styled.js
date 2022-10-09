import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 5px;
  width: 250px;
  text-align: center;
  margin: 30px auto;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  background-color: #4caf50;
  border-radius: 50%;
  margin-bottom: 20px;
  
`

export const Name = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.19;
`;

export const Tag = styled.p`
  font-size: 16px;
  line-height: 1.19;
  text-align: center;
  color: grey;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  margin-bottom: 20px;
  color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  border: 1px solid #f5f4fa;
  background-color: #f5f4fa;
  
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  text-align: center;
  width: calc(100% / 3);
  border-top: 1px solid gray;
  &:not(:last-child) {
    border-right: 1px solid gray;
  }
`;

export const StatsLabel = styled.span`
font-size: 14px;
  color: grey;
  margin-bottom: 5px;
`;

export const StatsQuantity = styled.span`
font-weight: bold;
`

