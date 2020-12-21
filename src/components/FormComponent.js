import axios from "axios";
import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Form, Button, Spinner } from "react-bootstrap";

function FormComponent({ controls, value, onTestChange }) {
  const inputType = value.type.toLowerCase();

  function handleChange(e) {
    const handleObj = {
      key: `${value.key}`,
      value: e.target.value,
    };

    onTestChange(handleObj);
  }
  const makeComponent = () => {
    console.log(inputType);
    if (inputType == "checkbox") {
      return (
        <div>
          <Form.Group controlId={`${value.key}`}>
            <Form.Label>{value.caption}</Form.Label>
            <Form.Control onChange={handleChange} type={`${inputType}`} />
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
            <Form.Control onChange={handleChange} as="select">
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
