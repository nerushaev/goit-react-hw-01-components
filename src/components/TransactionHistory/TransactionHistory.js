import TransactionItem from "./TransactionItem";
import './TransactionHistory.css';

export default function TransactionHistory({items}) {
  return (
    <table className="transaction-history">
    <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
          <TransactionItem
          type={item.type}
          amount={item.amount}
          currency={item.currency}
        />
        </tr>
        ))}
      </tbody>
</table>
  )
}