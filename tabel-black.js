import React, { useState } from 'react';


const App = () => {
  // State to control which div is currently active
  const [state, setState] = useState("option 1");
  const [select, setSeletcted] = useState("option 2");



  return (
    <div>

      <div>
        <input type="radio" value="option3" checked={state === "option 3"} onChange={() => setState("option 3")} />
        <lable >Yes</lable>
        <input type="radio" value="option4" checked={state === "option 4"} onChange={() => setState("option 4")} />
        <lable >NO</lable>

      </div>
      <div>
        {state === "option 4" ?
          <div>
            <p>Do you select option</p>
          </div>
          : <p>jkkss</p>
        }
      </div>


      {state === "option 3" && (
        <div>
          <div>
            <input type="radio" name="asia" value="option 1" checked={select === "option 1"}
              onChange={() => setSeletcted("option 1")} />
            <lable>in</lable>

            <input type="radio" name="asia" value="option 2" checked={select === "option 2"}
              onChange={() => setSeletcted("option 2")} />
            <lable>out</lable>
          </div>

          <div class="row">
            <div>
              <lable>name</lable>
              <input />
            </div>
            <div>
              <lable>address</lable>
              <input />
            </div>
          </div>
          <div class="row">

            {select === "option 2" && (

              <div>
                <lable>state</lable>
                <input />
              </div>
            )}
            {select === "option 1" && (
              <div>
                <lable>state</lable>
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>

            )}

          </div>

          <div class="row">

            {select === "option 2" && (
              <div>
                <lable>country</lable>
                <input />
              </div>
            )}

            <div>
              <lable>phone</lable>
              <input />
            </div>
          </div>
        </div>

      )}



    </div>
  );
}

export default App;
