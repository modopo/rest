import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/acai.css';

function Results(props) {
  return (
    <section className='results'>
      <h3>Results</h3>
      <div>
        Header:
        {props.data && <JSONPretty data={props.data.headers} ></JSONPretty>}
      </div>
      <div>
        Data:
        {props.data && <JSONPretty data={props.data.data} ></JSONPretty>}
      </div>
    </section>
  )
}

export default Results;