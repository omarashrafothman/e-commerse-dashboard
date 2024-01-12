import Image from "next/image";
export default function Widget({ status, source, forWhat, num, percentage }) {
  return (
    <div className="widgetBox">
      <div className="d-flex flex-column">
        <p>
          <span className="status">Active</span>
          {forWhat}
        </p>
        <h3>{num}</h3>
        <p>
          <span className={status}>{percentage}</span>
          <span className="status">from the</span>last month
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <Image src={source} />
      </div>
    </div>
  );
}
