import React, { useContext, useEffect } from 'react'
import NoteContext from "../context/notes/NoteContex"

const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
 useEffect(() => {
  console.log("10 console ",note.title, note.description)
 }, [])
  
  return (
    
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
          </div>
          <p className="card-text">{note.description}</p>
          <i className="far fa-trash-alt mx-2" onClick={() => { deleteNote(note._id); props.showAlert("Deleted Successfully", "success") }}></i>
          <i className="far fa-edit mx-2" onClick={() => { updateNote(note) }}></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
