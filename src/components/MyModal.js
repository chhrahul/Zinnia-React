import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const MyModal = (props) => {

  const { title } = props

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        {title}
      </Button>
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton  className='modal-custom'>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className='mx-5'> 
          <h5>Have we seen you here before?</h5>
          <div class="mb-3">
          <label for="Email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Csmith@gmail.com" />
        </div>
          <div>
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder="******" />
          </div></Modal.Body>
        <Modal.Footer className='modal-custom mx-5'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        <div class="mb-3 modal-custom mx-5">
          <a class="float-right" href="#">Don’t have an account? create one</a>
          </div>
      </Modal>
    </>
  )
}

export default MyModal