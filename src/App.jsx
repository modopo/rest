import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';
import { useReducer } from "react";
import { dataReducer, getParams, storeData, storeResult, initialState } from './Components/reducers';

function App() {

  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    callApi(state.requestParam);
  }, [state.requestParam]);

  const callApi = async (requestParam) => {
    try {
      const response = await axios(requestParam);

      dispatch(storeData({
        headers: response.headers,
        body: response.body,
        status: response.status,
        data: response.data,
      }))

      dispatch(storeResult());

    } catch (e) {
      dispatch(storeData(e));
    }
  }

  const handleGetParam = (param) => {
    dispatch(getParams(param));
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {state.requestParam.method}</div>
      <div>URL: {state.requestParam.url}</div>
      <Form getParams={handleGetParam} />
      <section className='outputs'>
        <Results data={state.data} />
        <History history={state.history} />
      </section>
      <Footer year='2023' />
    </React.Fragment>
  );
}

export default App;
