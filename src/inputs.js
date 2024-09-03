import React from 'react';

export default function Inputs(props) {
    const [newText, setNewText] = React.useState(props.text);

    function handleSubmit(e){
        e.preventDefault();
        props.saveText(props.id, newText);
    }

  return (
    <div>
      {props.isEditing ? (
        <form id = "form" onSubmit={handleSubmit}>
          <input 
            id = "form-input"
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
          />
          <button id = "save-btn" type="submit">SAVE</button>
        </form>
      ) : (
        <div className="input">
          <p>{props.text}</p>
          <div id="actions">
            <button className = "actions" onClick={() => props.editText(props.id)}>EDIT</button>
            <button className = "actions" onClick={() => props.deleteItem(props.id)}>DELETE</button>
          </div>
        </div>
      )}
    </div>
  );
}