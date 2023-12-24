import styled from '@emotion/styled';

export const Card = styled.div`
    border: 1px solid black;
    margin: 0 auto 40px;
    width: 300px;
`

export const Avatar = styled.img`
    margin: 0 auto;
    border-radius: 50%;
`

export const Description = styled.div`
    padding: 20px;
`

export const Username = styled.p`
    margin: 20px 0 10px;
    
    font-size: 20px;
    font-weight: 700;
    text-align: center;
`

export const UserTag = styled.p`
    margin-bottom: 5px;
    
    font-size: 18px;
    text-align: center;
    color: gray;
`

export const Location = styled.p`
    font-size: 18px;
    text-align: center;
    color: gray;
`

export const Stats = styled.ul`
    display: flex;
`

export const StatItem = styled.li`
    display: inline-flex;
    flex-direction: column;
    flex-basis: calc(100% / 3);

    padding: 20px 0;
    border: 0.5px solid #959695;

    background-color: #e6e6e6;

    text-align: center;
`

export const StatLabel = styled.span`
    margin-bottom: 8px;

    font-size: 15px;
    font-weight: 600;
    color: #a4a8ab;
`

export const StatQuantity = styled.span`
    font-size: 18px;
    font-weight: 700;
`
