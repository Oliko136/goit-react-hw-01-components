import styled from '@emotion/styled';
import { generateRandomColor } from 'utils/generateColor';

const setFlexBasis = props => {
    return `calc(100% / ${props.quantity})`
}
    

export const StatSection = styled.section`
    outline: 1px solid tomato;
    padding-top: 20px;
`
export const Title = styled.h2`
    margin-bottom: 20px;
    text-transform: uppercase;
    text-align: center;
    color: #6e6e6e;
`

export const StatList = styled.ul`
    display: flex;
`
export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    flex-basis: ${setFlexBasis};
    padding: 20px 0;
    text-align: center;

    background-color: ${generateRandomColor};
`

export const StatLabel = styled.span`
    margin-bottom: 5px;    
    color: #ffffff;
`

export const StatPercentage = styled.span`
    font-size: 25px;
    color: #ffffff;
`

