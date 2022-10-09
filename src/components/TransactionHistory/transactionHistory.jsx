import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionTableHead,
  TransactionTableData,
  TransactionTableLine,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TransactionTableHead>Type</TransactionTableHead>
          <TransactionTableHead>Amount</TransactionTableHead>
          <TransactionTableHead>Currency</TransactionTableHead>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionTableLine key={id}>
            <TransactionTableData>{type}</TransactionTableData>
            <TransactionTableData>{amount}</TransactionTableData>
            <TransactionTableData>{currency}</TransactionTableData>
          </TransactionTableLine>
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
