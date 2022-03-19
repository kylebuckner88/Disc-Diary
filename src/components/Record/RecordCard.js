import React from "react"
import { Link } from "react-router-dom";
// import "./Record.css"

export const RecordCard = ({ record, handleDeleteRecord }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h1><span className="card-recordtitle">
          {record.title}
        </span></h1>
        <h2> {record.artist}</h2>
        <p>Genre: {record.genre}</p>
        <p>Purchased at {record.shop?.name} in {record.shop?.city} on {record.date}</p>
        <p>Notes: {record.notes}</p>
        <button type="button" onClick={() => handleDeleteRecord(record.id)}>Remove From Collection</button>
        <Link to={`/records/${record.id}/edit`}>
            <button>Edit</button>
        </Link>
      </div>
    </div>
  );
}