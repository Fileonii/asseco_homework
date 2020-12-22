import axios from "axios";
import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Form, Button, Spinner } from "react-bootstrap";

function FormComponent({ controls, value, onTestChange }) {
  const inputType = value.type.toLowerCase();
  console.log(value.defaultValue);
  function handleCheck(val) {
    if (val == "true") {
      return true;
    } else {
      return false;
    }
  }
  function handleCheckbox(e) {
    const handleObj = {
      key: `${value.key}`,
      value: e.target.checked,
    };
    onTestChange(handleObj);
  }

  function handleChange(e) {
    const handleObj = {
      key: `${value.key}`,
      value: e.target.value,
    };

    onTestChange(handleObj);
  }
  const makeComponent = () => {
    if (inputType == "checkbox") {
      return (
        <div>
          <Form.Group className="d-flex" controlId={`${value.key}`}>
            <Form.Control
              defaultChecked={handleCheck(value.defaultValue)}
              onChange={handleCheckbox}
              type={`${inputType}`}
            />
          </Form.Group>
        </div>
      );
    }
    if (inputType == "text") {
      return (
        <div>
          <Form.Group controlId={`${value.key}`}>
            <Form.Label>{value.caption}</Form.Label>
            <Form.Control
              defaultValue={value.defaultValue}
              onChange={handleChange}
              type={`${inputType}`}
            />
          </Form.Group>
        </div>
      );
    } else if (inputType == "list") {
      const selectItems = value.items;
      return (
        <div>
          <Form.Group controlId={`${value.key}`}>
            <Form.Label>{value.caption}</Form.Label>
            <Form.Control
              defaultValue={value.defaultValue}
              onChange={handleChange}
              as="select"
            >
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
