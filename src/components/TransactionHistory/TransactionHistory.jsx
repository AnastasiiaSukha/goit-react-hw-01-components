import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (<table className={css.transactions}>
        <thead className={css.thead}>
                <tr className={css.titles}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
                </thead>
        {items.map(({ id, type, amount, currency }) => (
                    <tbody key={id}>
                    <tr className={css.row} >
                        <td className={css.data}> {type}</td>
                        <td className={css.data}>{amount}</td>
                        <td className={css.data}>{currency}</td>
                    </tr>
                </tbody>
        ))
        }
         </table>
    )
}
        

TransactionHistory.protoTypes = {
    id: PropTypes.string.isRequired,
     type : PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
       currency: PropTypes.string.isRequired,
}

