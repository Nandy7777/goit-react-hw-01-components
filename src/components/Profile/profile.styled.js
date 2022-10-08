import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px 8px 0px 8px;
  border: 3px solid grey;
  border-radius: 5px;
  width: 250px;
  text-align: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  background-color: #4caf50;
  border-radius: 50%;
  margin: 0 0 20px;
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

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  border: 1px solid #f5f4fa;
  background-color: #f5f4fa;
`;

