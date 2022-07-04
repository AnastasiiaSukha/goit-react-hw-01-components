import PropTypes from 'prop-types';
import { Transactions, Thead, Row, Data, Titles } from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
    return (<Transactions>
        <Thead>
                <Titles>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </Titles>
                </Thead>
        {items.map(({ id, type, amount, currency }) => (
                    <tbody key={id}>
                    <Row>
                        <Data> {type}</Data>
                        <Data>{amount}</Data>
                        <Data>{currency}</Data>
                    </Row>
                </tbody>
        ))
        }
         </Transactions>
    )
}
        

TransactionHistory.protoTypes = {
    id: PropTypes.string.isRequired,
     type : PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
       currency: PropTypes.string.isRequired,
}

