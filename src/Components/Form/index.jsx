import React from 'react';
import { useState } from 'react';

import './Form.scss';

function Form({ handleApiCall }) {

  const [method, setMethod] = useState('get');
  const [url, setUrl] = useState('');
  const [requestBody, setRequestBody] = useState({});

  const handelSubmit = e => {
    e.preventDefault();

    const formData = {
      method: method,
      url: url,
      data: requestBody
    }
    handleApiCall(formData);
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
            name='url'
            type='text'
            onChange={e => setUrl(e.target.input.value)} />
          <button type="submit">GO!</button>
        </label>
        <label
          className="methods"
          onClick={e => setMethod(e.target.id)}
        >
          <span id='get'>GET</span>
          <span id='post'>POST</span>
          <span id='put'>PUT</span>
          <span id='delete'>DELETE</span>
        </label>

        {(method === 'post' || method === 'put') &&
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