import React from "react"
import { Link } from "react-router-dom";
// import "./Record.css"

export const RecordIWantCard = ({ record, addToCollection }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h1><span className="card-recordtitle">
          {record.title}
        </span></h1>
        <h2> {record.artist}</h2>
        <p>Notes: {record.notes}</p>
        <button type="button" onClick={() => addToCollection(record.id)}>I found it!</button>
      </div>
    </div>
  );
}