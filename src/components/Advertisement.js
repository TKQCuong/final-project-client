import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory} from "react-router-dom";

export default function Advertisement(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let history = useHistory()
  
    useEffect(() => {
        setTimeout(() => {handleShow()},4000)
    }, [])

  return (
    <>
      <Modal show={show} id="modal-content-ad" onHide={handleClose}>
        <Modal.Header id="modal-header-ad">
          <Modal.Title>
            <img
              alt="promotion"
              src="https://t4.ftcdn.net/jpg/02/62/03/53/240_F_262035364_gGi8uJsPl9uljis8C6oxI0w6AM7MKDLq.jpg"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="modal-body-ad">
          <h1>SPECIAL GIFT FOR YOU !!</h1>
          <p>
            Just only 25s for registration to receive Voucher discount{" "}
            <strong id="discount">15</strong> <i class="fas fa-percentage"></i>{" "}
            when ordering services. Don't miss out!{" "}
          </p>
          {!props.currentUser ? (
            <Button variant="secondary" className="btn-ad" onClick={() => history.push("/servicecheck")}>Register your account</Button>
          ) :
          (<Button variant="secondary" className="btn-ad" onClick={() => history.push("/schedule-service")}>Schedule Service</Button>)}
          
        </Modal.Body>
      </Modal>
    </>
  );
}
