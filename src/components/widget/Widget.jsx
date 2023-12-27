export default function Widget({ status, src }) {
  return (
    <div className="widgetBox">
      <div className="d-flex flex-column">
        <p>
          <span className="status">Active</span>Subscribes
        </p>
        <h3>486</h3>
        <p>
          <span className={status}>+10%</span>
          <span className="status">from the</span>last month
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <img src={src} />
      </div>
    </div>
  );
}
