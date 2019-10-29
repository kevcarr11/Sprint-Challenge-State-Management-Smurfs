import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchSmurf } from "../actions"
import SmurfForm from "../components/SmurfForm"
import Header from "./Header"
import SmurfCard from "./SmurfCard";
import "./App.css";


function App(props) {
  useEffect(() => {
    props.fetchSmurf();

  }, []);
  console.log(props.smurf)
  return (
    <main>
      <div className="App">
        <Header />
        <SmurfForm fetchSmurf={props.fetchSmurf} />
        {props.smurfError && <p>Error: {props.smurfError}</p>}
        {props.isSmurfLoading ? (
          <h3>Loading...</h3>
        ) : (
        <div>
          <h1 className="title" >Smurf Village</h1>
          {props.smurf.map((item, index) => (
          <SmurfCard key={index} item={item} fetchSmurf={props.fetchSmurf} />
          ))}
        </div>
        )}
      </div>
    </main>
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
