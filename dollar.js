import React, { useState } from 'react';


function App () {
 const [input,setInput]=useState();
 const[items,setItems]=useState([])
 

const addItem=()=>{
    if(!input){

    }
    else{
        setItems([...items, { text: input.trim(), checked: false }]);
        setInput('');
    }
}
const removeItem=()=>{
    setItems([''])
}
const deleteItem = (index) => {
  const updatedItems = [...items];
  updatedItems.splice(index, 1);
  setItems(updatedItems);
};

const toggleChecked = (index) => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    updatedItems[index].textDecoration = updatedItems[index].checked ? 'underline' : 'none';
    setItems(updatedItems);
  };
  return (
    <div>
      <input value={input} onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={addItem}>ADD ietms</button>


    {items.map((elm,index)=> {
        return(
            <div key={index} style={{ textDecoration: items.checked ? 'underline' : 'none' }}>

<span>{elm.text} </span>
<input
              type="checkbox"
              checked={items.checked}
              onChange={() => toggleChecked(index)}
            />
<button onClick={() => deleteItem(index)}>Delete</button>

                </div>
        )
    })}
    <button onClick={removeItem}>Remove Item</button>
    </div>
  );
};

export default App;
