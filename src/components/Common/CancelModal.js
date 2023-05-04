import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { MdDeleteOutline } from 'react-icons/md';
const CancelModal = (props) => {

  const { title, type } = props
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {type ? <button type="button" className="btn btn-outline-secondary" onClick={handleShow}>
        <MdDeleteOutline size="18" />  Cancel</button>
        :
        <Button variant="btn text-danger p-0 cancel-danger-btn fw-bold" onClick={handleShow}>
          {title}
        </Button>
      }

      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton className='modal-custom'>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className='mx-5'>
          <h5>Are you sure you want to cancel?</h5>
          <p>If you cancel, because you are less than a month out you will only receive a 50% refund. </p>
          <form id="cancelForm">
            <div class="mb-3">
              <label for="reason-dropdown" class="form-label">Reason for cancellation</label>
              <select class="form-select" aria-label="Default select example" id="reason-dropdown">
                <option selected>Other</option>
                <option value="1">The couple canceled</option>
                <option value="2">Had to move to a later date</option>
                <option value="3">Other</option>
              </select>
            </div>
            <div>
              <label for="cancel-reason" class="form-label">Reason</label>
              <input type="text" class="form-control" id="cancel-reason" placeholder="The wedding is off" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className='modal-custom mx-5 cance-modal-footer'>
          <Button variant="btn btn-outline-secondary" form="cancelForm" onClick={handleClose}>
            Don’t cancel
          </Button>
          <Button variant="btn btn-danger" type="submit" form="cancelForm">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CancelModal