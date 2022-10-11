import styled from 'styled-components';

export const FrendItem = styled.li`
  display: flex;
  width: 250px;
  align-items: center;
  margin: auto;
  padding: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
`;

export const FrendStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;

  background-color: ${p => {
    return p.isOnline ? p.theme.colors.green : p.theme.colors.red;
  }};
`;

export const FriendAvatar = styled.img`
background-color: lightgray;
border-radius: 5px;
margin-right: 10px;
`;

export const FrienName = styled.p`
font-size: 20px;
font-weight: bold;
`;


