import styled from '@emotion/styled';


export const StatsList = styled.ul`
list-style: none;
padding-left:0;
display: flex;
justify-content: center;
`
;

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 21px;
    background-color:${props=>(props.randomColor)};

   


    `
    // background-color: ${props => props.backgroundColor};