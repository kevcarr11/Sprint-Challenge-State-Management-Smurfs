import React, { useState } from 'react'
import axios from "axios";

function SmurfForm(props) {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChanges = e => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:3333/smurfs', newSmurf)
            .then(res=> console.log(res.data))
            .catch(err=> console.log(err))
    setNewSmurf({
      name: '',
      age: "",
      height: ""
    })
  }
  return (
    <form onSubmit={handleSubmit} >
      <input placeholder="Smurf Name" type="text" name="name" value={newSmurf.name} onChange={handleChanges} />
      <input placeholder="Smurf Age" type="text" name="age" value={newSmurf.age} onChange={handleChanges} />
      <input placeholder="Smurf Height" type="text" name="height" value={newSmurf.height} onChange={handleChanges} />
      <button>Submit</button>
    </form>
  )
}

export default SmurfForm
