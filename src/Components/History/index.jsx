import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/acai.css';
import { useState } from 'react';

function History(data) {

  const [activeIndex, setActiveIndex] = useState(null);

  function onClickItem(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <section className='history'>
      <h3>History</h3>
      <ol className="accordion">
        {data.history.map((item, idx) => {
          return (
            <li key={idx}>
              <button
                className={`accordion-header ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => onClickItem(idx)}
              >
                {item.requestParam.url}
              </button>
              {activeIndex === idx && (
                <div className="accordion-content">
                  <div>
                    Request Parameters
                    {<JSONPretty data={item.requestParam} ></JSONPretty>}
                  </div>
                  <div>
                    Data:
                    {<JSONPretty data={item.data.data} ></JSONPretty>}
                  </div>
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}

export default History;