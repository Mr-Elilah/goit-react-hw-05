import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionTable}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css[type] || ""}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
