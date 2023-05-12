import React from 'react';
import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'

function Results(props) {
  return (
    <section className='results'>
      <h3>Results</h3>
      <div>
        Header:
        {props.data && <JsonView src={props.data.headers} ></JsonView>}
      </div>
      <div>
        Data:
        {props.data && <JsonView src={props.data.data} ></JsonView>}
      </div>
    </section>
  )
}

export default Results;