import axios from "axios";
import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Form, Button, Spinner } from "react-bootstrap";
import FormComponent from "./FormComponent";
function GetData() {
  const [controls, setControls] = useState(["---", "controls1", "controls2"]);
  const [choose, setChoose] = useState(controls[0]);
  const [apiWeb, setApiWeb] = useState([]);
  const [loading, setLoading] = useState(false);
  const [test, setTest] = useState([]);
  const [indexOfHandle, setIndexOfHandle] = useState();

  const url = "http://localhost:5000/";

  const AddOption = controls.map((AddOption) => AddOption);
  console.log(test);

  const getErp = (choose) => {
    if (choose != "---") {
      setTest([]);
      try {
        axios.get(`${url}${choose}`).then((response) => {
          setApiWeb(response.data.controls);
        });
        setLoading(true);
      } catch (err) {
        console.error(err);
      }
    } else {
      setLoading(false);
    }
  };
  const initializeValues = () => {
    if (test.length > 0) {
      setTest([]);
    }
    const arrayValue = apiWeb.map((value) => ({
      key: `${value.key}`,
      content: `${value.defaultValue}`,
    }));
    setTest(arrayValue);
  };
  const handleApiChoose = (e) => {
    console.log(controls[e.target.value]);
    setApiWeb([]);
    setChoose(controls[e.target.value]);
    getErp(controls[e.target.value]);
  };
  const handleChange = (e) => {
    //object is here
    console.log(e.value);
    let arrayValue = test.slice();
    for (let index = 0; index < arrayValue.length; index++) {
      if (arrayValue[index].key === e.key) {
        arrayValue[index] = {
          ...arrayValue[index],
          content: `${e.value}`,
        };
      }
    }

    console.log(arrayValue);
    setTest(arrayValue);
  };

  const formPainting = () => {
    return (
      <Form className="m-5 ">
        {apiWeb.map((value) => (
          <div className="mx-3">
            <FormComponent
              onTestChange={handleChange}
              controls={choose}
              value={value}
            ></FormComponent>
          </div>
        ))}
      </Form>
    );
  };

  useEffect(() => {
    initializeValues();
  }, [apiWeb]);

  return (
    <div>
      <section className="upper-section">
        <h1 className="d-flex justify-content-center title-app">
          Demo Generic App
        </h1>
        <div className="d-flex justify-content-center">
          <div className="m-5 select-web ">
            <select
              onChange={(e) => handleApiChoose(e)}
              className="form-control"
            >
              {AddOption.map((api, key) => (
                <option key={api} value={key}>
                  {api}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
      {loading ? (
        <div>
          <div className="form-box">{apiWeb ? formPainting() : null}</div>
        </div>
      ) : (
        <div>
          <h3 className="d-flex justify-content-center mt-5">Empty!</h3>
          <h6 className="d-flex justify-content-center mt-5">
            Choose one of controls option!
          </h6>
          <div className="d-flex justify-content-center m-5">
            <Spinner animation="border"></Spinner>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetData;
