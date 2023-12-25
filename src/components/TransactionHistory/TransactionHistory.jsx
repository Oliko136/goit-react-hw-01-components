import PropTypes from 'prop-types';
import { Transactions, TableHead, TableBody, TableRow, TransactionsDataType, TransactionsData } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Transactions>
            <TableHead>
                <TableRow>
                <TransactionsDataType>Type</TransactionsDataType>
                <TransactionsDataType>Amount</TransactionsDataType>
                <TransactionsDataType>Currency</TransactionsDataType>
                </TableRow>
            </TableHead>

            <TableBody>
                {items.map(({ id, type, amount, currency }) => (
                   <TableRow key={id}>
                        <TransactionsData>{type}</TransactionsData>
                        <TransactionsData>{amount}</TransactionsData>
                        <TransactionsData>{currency}</TransactionsData>
                    </TableRow> 
                ))}
            </TableBody>
        </Transactions>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })).isRequired
}