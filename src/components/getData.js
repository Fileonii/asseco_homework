import axios from "axios";
import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function GetData() {
  const [controls, setControls] = useState(["controls1", "controls2"]);
  const [choose, setChoose] = useState(controls[0]);
  const [apiWeb, setApiWeb] = useState();
  const [onDataWait, setOnDataWait] = useState(false);
  const url = "http://localhost:5000/";

  const AddOption = controls.map((AddOption) => AddOption);
  const getErp = (choose) => {
    axios.get(`${url}${choose}`).then((response) => {
      setApiWeb(response.data.controls);
      console.log(apiWeb);
    });
  };
  const handleApiChoose = (e) => {
    console.log(controls[e.target.value]);
    setChoose(controls[e.target.value]);
  };
  const returnApiWeb = () => {
    if (apiWeb != undefined && apiWeb != null) {
      return <div>Succesful</div>;
    } else {
      return <div>unsuccessful :(</div>;
    }
  };

  useEffect(() => {
    console.log(choose);
    getErp(choose);
  }, [choose]);

  return (
    <div className="d-flex justify-content-center">
      <div className="m-5 select-web ">
        <select onChange={(e) => handleApiChoose(e)} className="form-control">
          {AddOption.map((api, key) => (
            <option value={key}>{api}</option>
          ))}
        </select>
        <h1>{returnApiWeb()}</h1>
      </div>
    </div>
  );
}

export default GetData;
