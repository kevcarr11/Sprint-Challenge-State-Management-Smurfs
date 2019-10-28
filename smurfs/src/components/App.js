import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchSmurf } from "../actions"
import "./App.css";


function App(props) {
  useEffect(() => {
    props.fetchSmurf();

  }, []);
  console.log(props.smurf)
  return (
    <div className="App">
      {props.smurfError && <p>Error: {props.smurfError}</p>}
      {props.isSmurfLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <h1>Smurf Data</h1>
          {props.smurf.map((item) => {
            return <div key={item.id} >
              <h2>{item.name}</h2>
              <h3>Age: {item.age} years old</h3>
              <h3>Height: {item.height} </h3>
            </div>
          })}
        </div>
      )}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isSmurfLoading: state.smurf.isLoading,
    smurf: state.smurf.smurf,
    smurfError: state.smurf.error
  };
}

const mapDispatchToProps = {
  fetchSmurf
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
