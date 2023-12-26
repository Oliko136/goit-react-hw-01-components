import styled from '@emotion/styled';

export const FriendCard = styled.li`
    display: flex;
    align-items: center;

    margin: 10px 0;
    padding: 10px;

    border: 1px solid #c7c7c7;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    
`

export const OnlineStatus = styled.span`
   display: block;

   margin-right: 10px;

   width: 15px;
   height: 15px;
   border-radius: 50%;
   background-color: ${props => ( props.isOnline ? 'green' : 'red')};
`

export const FriendAvatar = styled.img`
  margin-right: 10px;
`
export const FriendName = styled.p`
  font-size: 28px;
`



    

