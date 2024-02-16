import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const ContactModal = ({ show, handleClose, openA, openB, data }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal C</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: "200px", overflowY: "scroll" }}>
        <p>ID: {data?.id}</p>
        <p>Phone: {data?.phone}</p>
        <p>Country: {data?.country?.name}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            handleClose();
            openA();
          }}
        >
          Modal A
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleClose();
            openB();
          }}
        >
          Modal B
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
