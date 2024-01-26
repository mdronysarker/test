import { Modal, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";

const Problem2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://contact.mediusware.com/api/contacts/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await res.json();
        // console.log(result.results);
        setData(result.results);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={handleShow}
          >
            All Contacts
          </button>
          <button className="btn btn-lg btn-outline-warning" type="button">
            US Contacts
          </button>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose} className="my-atuo">
        <Modal.Header closeButton>
          <Modal.Title>Modal A</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {data.map((contact, i) => (
            <div key={i}>
              <p>Phone:{contact.phone}</p>
              <p>Country: {contact.country.name}</p>
              {/* <p>Country:{contact.country}</p> */}
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Problem2;
