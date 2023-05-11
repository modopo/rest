import React from "react";
import { useState } from "react";

import "./Form.scss";

function Form({ getParams }) {

  const [method, setMethod] = useState("get");
  const [url, setUrl] = useState("");
  const [requestBody, setRequestBody] = useState({});

  const handelSubmit = e => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      body: requestBody,
    }
    getParams(formData);
  }

  const handleRequestBody = (e) => {
    setRequestBody(e.target.value);
  }

  return (
    <>
      <form onSubmit={handelSubmit}>
        <label>
          <span>URL: </span>
          <input
            name="url"
            type="text"
            data-testid='url-test'
            onChange={e => setUrl(e.target.value)} />
          <button type="submit">GO!</button>
        </label>
        <label
          className="methods"
          data-testid='method-test'
          onClick={e => setMethod(e.target.id)}
        >
          <span id="get" style={{ background: method === "get" ? "#a8dadc" : "#e63946" }}>GET</span>
          <span id="post" style={{ background: method === "post" ? "#a8dadc" : "#e63946" }}>POST</span>
          <span id="put" style={{ background: method === "put" ? "#a8dadc" : "#e63946" }}>PUT</span>
          <span id="delete" style={{ background: method === "delete" ? "#a8dadc" : "#e63946" }}>DELETE</span>
        </label>

        {(method === "post" || method === "put") &&
          <textarea
            name="input"
            id="user-input"
            onChange={handleRequestBody}
          >
            Enter text here...
          </textarea>
        }
      </form>
    </>
  )
}

export default Form;