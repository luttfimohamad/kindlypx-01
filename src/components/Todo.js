import React from 'react';

export default function Todo(props) {
  function deleteHandler() {
    console.log('Delete handler');
  }

  return (
    <div className="card">
      <h1>{props.title}</h1>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}
