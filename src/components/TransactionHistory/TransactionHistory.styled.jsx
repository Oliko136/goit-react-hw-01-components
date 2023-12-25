import styled from '@emotion/styled';

export const Transactions = styled.table`
    margin: 0 auto;
    border-collapse: collapse;
    width: 100%;
`

export const TableHead = styled.thead`
    background-color: #4dc4c2;
`

export const TableBody = styled.tbody`
    background-color: #ebebeb;
`
export const TableRow = styled.tr`
    border: 1px solid #c5c7c7;
    text-align: center;
`

export const TransactionsDataType = styled.th`
    padding: 8px 0;
    border: 1px solid #c5c7c7;

    color: #ffffff;

    font-weight: 700;
    text-transform: uppercase;
`

export const TransactionsData = styled.td`
    padding: 8px 0;
    border: 1px solid #c5c7c7;

    color: #838585;

    font-weight: 500;
    text-transform: capitalize;
`
