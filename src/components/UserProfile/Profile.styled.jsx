import styled from '@emotion/styled';


export const UserProfile = styled.div`
margin: 0 auto;
background-color: #D3D3D3;
width: 300px;
text-align: center;
border-radius: 10px;
padding-top: 20px;
box-shadow: rgb(0 0 0 / 16%) 0px 3px 1px -2px,
            rgb(0 0 0 /14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px`;


export const Description = styled.div`
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 20px;
line-height:1.14;
letter-spacing: 0.07rem;
display: flex;
flex-direction: column;
align-items: center;
`;

export const Avatar = styled.img`
width: 200px;
border-radius: 50%;
background-color: #fff;`;

export const Name = styled.p`
font-weight: 700;
font-size: 22px;`;

export const Tag = styled.p`
color:white;
font-weight: 600;`;

export const Location = styled.p`
color:white;
font-weight: 600;`;

export const Stats = styled.ul`
    list-style: none;
    background-color: whitesmoke;
    text-align: center;
    padding: 30px;
    letter-spacing: 0.05rem;
    display: flex;
    margin-top: 17px;`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: calc(100% / 3);
    padding: 5px;
    border-bottom: none;`;

export const Label = styled.span`
    font-size: 20px;
    margin-bottom: 8px;`;

export const Quantity = styled.span`
    font-size: 18px;
    font-weight: 700;`;


