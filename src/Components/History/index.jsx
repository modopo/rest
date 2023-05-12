import React from 'react';
import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'
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
                    {<JsonView src={item.requestParam} ></JsonView>}
                  </div>
                  <div>
                    Data:
                    {<JsonView src={item.data.data} ></JsonView>}
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