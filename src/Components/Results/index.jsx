import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/acai.css';

function Results(props) {
  return (
    <section>
      <pre>
        {props.data && <JSONPretty data={props.data} ></JSONPretty>}
      </pre>
    </section>
  )
}

export default Results;