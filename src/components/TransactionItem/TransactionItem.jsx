import PropTypes from 'prop-types';
import { Item } from './TransactionItem.styled';

export const TransactionItem = ({type, amount, currency}) => {
    return <tr>
       <Item>{type}</Item>
       <Item>{amount}</Item>
       <Item>{currency}</Item>
    </tr>
}

TransactionItem.propType = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
}