import stl from './transaction.module.css';
export const HistoryPay = ({ pays }) => (
  <table className={stl.table}>
    <thead className={stl.main}>
      <tr>
        <th className={stl.title}>Type</th>
        <th className={stl.title}>Amount</th>
        <th className={stl.title}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {pays.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
