import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App() {

  const [data, setData] = useState(null);
  const [requestParam, setRequestParam] = useState({ url: 'https://pokeapi.co/api/v2/pokemon', method: 'GET', data: {} });

  useEffect(() => {
    callApi(requestParam);
  }, [requestParam]);

  const callApi = async (requestParam) => {
    try {
      const request = await axios(requestParam);
      setData({
        headers: request.headers,
        body: request.body,
        status: request.status,
        data: request.data,
      })
    } catch(e) {
      setData(e);
    }
  }

  const getParams = (requestParam) => {
    setRequestParam(requestParam);
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParam.method}</div>
      <div>URL: {requestParam.url}</div>
      <Form getParams={getParams}/>
      <Results data={data} />
      <Footer year='2023' />
    </React.Fragment>
  );
}

export default App;
