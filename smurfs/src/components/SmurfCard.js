import React from 'react'
import { Toast, ToastBody, ToastHeader } from "reactstrap";

function SmurfCard(props) {
  console.log(props)
  return (
    <div className="grid-view p-3 my-2 rounded bg-docs-transparent-grid" >
      <Toast key={props.item.id}>
        <ToastHeader>{props.item.name}</ToastHeader>
          <ToastBody>
          <p><strong><em>Age:</em></strong> {props.item.age} years old</p>
          <p><strong><em>Height:</em></strong> {props.item.height} </p>
          </ToastBody>
      </Toast>
    </div>
  )
}

export default SmurfCard
