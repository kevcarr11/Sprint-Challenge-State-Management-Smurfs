import React from 'react'
import { Toast, ToastBody, ToastHeader, Button } from "reactstrap";
import ModifySmurf from "./ModifySmurf";
import axios from "axios";

function SmurfCard(props) {
  console.log(props)

  const handleDelete = (e) => {
    e.preventDefault();
    axios
    .delete(`http://localhost:3333/smurfs/${props.item.id}`)
    .then(res => props.fetchSmurf())
    .catch(err => console.log(err));

  }

  return (
    <div className="grid-view p-3 my-2 rounded bg-docs-transparent-grid" >
      <Toast key={props.item.id}>
        <ToastHeader>{props.item.name}</ToastHeader>
        <ToastBody>
          <p><strong><em>Age:</em></strong> {props.item.age} years old</p>
          <p><strong><em>Height:</em></strong> {props.item.height} </p>
        <ModifySmurf smurfId={props.item.id} fetchSmurf={props.fetchSmurf} />
        <Button color="link"onClick={handleDelete}>Delete</Button>
        </ToastBody>
      </Toast>
    </div>
  )
}

export default SmurfCard
