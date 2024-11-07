import React, { useState } from 'react';

const App = () => {
  // State to control which div is currently active
  const [selectedOption, setSelectedOption] = useState('option1');

  return (
    <div>
      {/* Radio buttons to select the option */}
      <input
        type="radio"
        id="option1"
        name="options"
        value="option1"
        checked={selectedOption === 'option1'}
        onChange={() => setSelectedOption('option1')}
      />
      <label htmlFor="option1">Option 1</label>

      <input
        type="radio"
        id="option2"
        name="options"
        value="option2"
        checked={selectedOption === 'option2'}
        onChange={() => setSelectedOption('option2')}
      />
      <label htmlFor="option2">Option 2</label>

      {/* Div to be shown when option 1 is selected */}
      {selectedOption === 'option1' && (
        <div>
          <label>jfksdjfk</label>
          <input type="text" placeholder="Input 1" />
          <input type="text" placeholder="Input 2" />
        </div>
      )}

      {/* Div to be shown when option 2 is selected */}
      {selectedOption === 'option2' && (
        <div>
          <input type="text" placeholder="Input 3" />
          <input type="text" placeholder="Input 4" />
        </div>
      )}
    </div>
  );
};

export default App;

