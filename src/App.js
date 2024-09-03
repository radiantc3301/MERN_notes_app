import './App.css';
import React from 'react';
import Input from './inputs';

export default function App() {
  const [array, setArray] = React.useState([]);

  function addItem() {
    // adds a new item to the array with a unique id
    setArray(prevState => {
      return [...prevState, { id: prevState.length }];
    });
  }

  function editText(id) {
    // sets the isEditing property of an item to true and allows the form to be displayed
    setArray(prevState => {
      return prevState.map(input => 
        input.id === id ? { ...input, isEditing: true } : input
      );
    });
  }

  function saveText(id, newText) {
    // sets the isEditing property of an item to false and hides the form
    setArray(prevState => {
      return prevState.map(input => 
        input.id === id ? { ...input, text: newText, isEditing: false } : input
      );
    });
  }

  function deleteItem(id) {
    // deletes an item from array based on the id
    setArray(prevState => {
      return prevState.filter(input => input.id !== id);
    });
  }

  const output = array.map(input => (
    // maps the array to Input components
    <Input 
      key={input.id} 
      id={input.id} 
      text = {input.text}
      isEditing={input.isEditing}
      saveText={saveText}
      editText={editText}
      deleteItem={deleteItem} 
    />
  ))

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <button onClick={addItem}>ADD ITEMS</button>
      {output}
    </div>
  );
}