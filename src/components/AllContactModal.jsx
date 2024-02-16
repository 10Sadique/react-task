import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const AllContactModal = ({ show, handleClose, openA, openB, openC }) => {
  const [page, setPage] = useState(1);
  const [contacts, setContacts] = useState([]);
  const getContacts = useCallback(async () => {
    const res = await fetch(
      `https://contact.mediusware.com/api/contacts/?page=${page}`
    );
    const data = await res.json();
    setContacts([...data?.results]);
  }, [page]);

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal A</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: "300px", overflowY: "scroll" }}>
        <div className="d-grid gap-3">
          {contacts?.map((contact) => (
            <div
              className="border rounded p-2"
              style={{ cursor: "pointer" }}
              key={contact?.id}
              onClick={() => openC(contact)}
            >
              <p>{contact?.phone}</p>
              <p>{contact?.country?.name}</p>
            </div>
          ))}
        </div>

        <div className="d-flex gap-2">
          <Button
            className="mt-2"
            variant="primary"
            onClick={() => setPage(page - 1)}
          >
            Prev
          </Button>
          <Button
            className="mt-2"
            variant="primary"
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </div>
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
