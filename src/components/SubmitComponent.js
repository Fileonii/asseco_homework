import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
function SubmitComponent({ submitValues }) {
  let today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = `${yyyy}${mm}${dd}`;

  return (
    <div className="d-flex justify-content-center">
      <Button
        href={`data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(submitValues)
        )}`}
        download={`jsonFile${today}.json`}
      >
        SUBMIT FORM!
      </Button>
    </div>
  );
}

export default SubmitComponent;
