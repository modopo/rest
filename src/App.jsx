import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App() {

  const [data, setData] = useState(null);
  const [requestParam, setRequestParam] = useState({ url: '', method: 'GET', data: {} });

  const callApi = async (requestParam) => {
    setRequestParam(requestParam);
    setData(await axios(requestParam));
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParam.method}</div>
      <div>URL: {requestParam.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer year='2023' />
    </React.Fragment>
  );
}

export default App;
