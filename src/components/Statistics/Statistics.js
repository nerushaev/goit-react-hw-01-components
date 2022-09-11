import './Statistics.css';

export default function Statisics({ title, stats, color }) {
  return (
    <section className="statistics">
  <h2 className="title">{title}</h2>
  <ul className="stat-list">
        <li className="item item-1">
          <span className="label">{stats[0].label}</span>
          <span className="percentage">{stats[0].percentage}</span>
    </li>
    <li className="item item-2">
      <span className="label">{stats[1].label}</span>
      <span className="percentage">{stats[1].percentage}</span>
    </li>
    <li className="item item-3">
      <span className="label">{stats[2].label}</span>
      <span className="percentage">{stats[2].percentage}</span>
    </li>
    <li className="item item-4">
      <span className="label">{stats[3].label}</span>
      <span className="percentage">{stats[3].percentage}</span>
    </li>
    </ul>
    {/* <style>{`\
        .item{\
          background-color:${color};\
        }\
    `}</style> */}
</section>
  )
}

