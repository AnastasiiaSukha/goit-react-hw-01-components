import styled from '@emotion/styled';

export const Status = styled.span`       
        width: 20px;
        height: 20px;
        margin-right: 6%;
        border-radius: 50%;
        background-color: ${props =>(props.isOnline ? 'green' : 'red')};`

        ;

export const FriendAvatar = styled.img`
   width: 50px;
    margin-right: 10px;`;

export const FriendName = styled.p`
    font-size: 20px;
    font-weight: 700;`;