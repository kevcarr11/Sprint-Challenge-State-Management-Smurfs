import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchSmurf } from "../actions"
import "./App.css";


function App(props) {
  useEffect(() => {
    props.fetchSmurf();
  }, []);
  return (
    <div className="App">
      
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
