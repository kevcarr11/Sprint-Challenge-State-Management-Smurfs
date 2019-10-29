import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios";

const ModifyForm = (props) => {
  
  const [modal, setModal] = useState(false);
  const [editSmurf, setEditedSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: Date.now()
  });

  const toggle = () => setModal(!modal);

  const handleChanges = e => {
    setEditedSmurf({
      ...editSmurf,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:3333/smurfs/${props.smurfId}`, editSmurf)
      .then(res => props.fetchSmurf())
      .catch(err => console.log(err))
    setEditedSmurf({
      name: '',
      age: "",
      height: "",
      id: Date.now()
    })
  }

  return (
    <div>
      <Button color="secondary" onClick={toggle}>Edit Smurf</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Change Something About This Smurf</ModalHeader>
        <ModalBody>
          <form>
            <input placeholder="Edit Name" type="text" name="name" value={editSmurf.name} onChange={handleChanges} />
            <br/>
            <input placeholder="Edit Age" type="text" name="age" value={editSmurf.age} onChange={handleChanges} />
            <br/>
            <input placeholder="Edit Height" type="text" name="height" value={editSmurf.height} onChange={handleChanges} />
            <br/>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleSubmit}>Submit</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModifyForm;