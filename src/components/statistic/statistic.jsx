import stl from './statistic.module.css';
export const Statistic = ({ title, stats }) => (
  <section className={stl.sec}>
    {title && <h2 className={stl.mainTitle}>{title}</h2>}

    <ul className={stl.list}>
      {stats.map(({ id, label, percentage }) => (
        <li className={stl.item} key={id}>
          <span className={stl.label}>{label}</span>
          <span className={stl.textItem}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
