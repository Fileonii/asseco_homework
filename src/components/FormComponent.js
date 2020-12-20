import axios from "axios";
import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Form, Button, Spinner } from "react-bootstrap";

function FormComponent({ controls, value, onTestChange }) {
  const inputType = value.type.toLowerCase();

  function handleChange(e) {
    // onTestChange(e.target.value);
  }
  const makeComponent = () => {
    console.log(inputType);
    if (inputType != "list") {
      return (
        <div>
          <Form.Group controlId={`${value.key}`}>
            <Form.Label>{value.caption}</Form.Label>
            <Form.Control onChange={handleChange} type={`${inputType}`} />
          </Form.Group>
        </div>
      );
    } else if (inputType == "list") {
      const selectItems = value.items;
      return (
        <div>
          <Form.Group controlId={`${value.key}`}>
            <Form.Label>{value.caption}</Form.Label>
            <Form.Control as="select">
              {selectItems.map((item, i = 0) => (
                <option key={`${i}-${controls}`} value={`${item.value}`}>
                  {item.caption}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </div>
      );
    }
  };
  useEffect(() => {
    console.log(controls);
    console.log(value.defaultValue);
  }, [controls]);
  return makeComponent();
}

export default FormComponent;
