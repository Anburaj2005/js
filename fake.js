import React, { useState } from 'react';
import axios from "axios"

const App = () => {
  // State to control which div is currently active
  const [data, setData] = useState([]);

  async function getProducts() {
    const result = await axios.get('https://fakestoreapi.com/products')
    if (result.data) {
      setData(result?.data);
      console.log(data)
    }
  }

  return (
    <>
      <button onClick={() => getProducts()}>ggg</button>

      <div>
        {data.map((element, i) => {

          return (
            <div key={element.id}>
              <p> {element.id} </p>
              <p> {element.title} </p>
              <img src={element.image} alt={element.image} />
            </div>
          )
        })}</div>
    </>

  );
}

export default App;
