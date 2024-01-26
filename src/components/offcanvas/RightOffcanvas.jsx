import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasComponent({
  showState,
  close,
  open,
  w,
  component,

  plasment,
}) {
  return (
    <div>
      <Offcanvas
        show={showState}
        onHide={close}
        placement={plasment}
        className={w}
      >
        <Offcanvas.Body>{component}</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default OffcanvasComponent;
