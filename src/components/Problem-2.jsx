import React from "react";
import { useState } from "react";
import { AllContactModal } from "./AllContactModal";
import { UsContactModal } from "./UsContactModal";
import { ContactModal } from "./ContactModal";

const Problem2 = () => {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [showC, setShowC] = useState(false);
  const [contact, setContact] = useState({});

  const closeA = () => setShowA(false);
  const openA = () => setShowA(true);

  const closeB = () => setShowB(false);
  const openB = () => setShowB(true);

  const closeC = () => setShowC(false);
  const openC = (data) => {
    setContact(data);
    setShowC(true);
    closeA();
    closeB();
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={openA}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={openB}
          >
            US Contacts
          </button>
        </div>
      </div>

      {showA && (
        <AllContactModal
          show={showA}
          handleClose={closeA}
          openA={openA}
          openB={openB}
          openC={openC}
        />
      )}
      {showB && (
        <UsContactModal
          show={showB}
          handleClose={closeB}
          openA={openA}
          openB={openB}
          openC={openC}
        />
      )}

      {showC && (
        <ContactModal
          show={showC}
          handleClose={closeC}
          openA={openA}
          openB={openB}
          data={contact}
        />
      )}
    </div>
  );
};

export default Problem2;
