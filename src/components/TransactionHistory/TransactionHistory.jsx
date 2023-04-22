import PropTypes from 'prop-types';
import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import { HeadItem } from './TransactionHistory.styled';

export const TransactionHistory = ({transactions}) => {
    return <table>
        <thead>
          <tr>
            <HeadItem>Type</HeadItem>
            <HeadItem>Amount</HeadItem>
            <HeadItem>Currency</HeadItem>
          </tr>
        </thead>
  
        <tbody>
            {transactions.map(transaction => (
                <TransactionItem key={transaction.id} type={transaction.type} amount={transaction.amount} currency={transaction.currency} />
            ))}
        </tbody>
    </table>
}

TransactionHistory.propTypes = {
    transactions: PropTypes.array
}