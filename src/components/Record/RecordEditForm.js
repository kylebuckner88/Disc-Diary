import React, { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom";
import {getRecordById, updateRecord} from "../../modules/RecordManager"
// import "./RecordForm.css"

export const RecordEditForm = () => {
  const [record, setRecord] = useState({  notes: "" });
  const [isLoading, setIsLoading] = useState(false);

  const {recordId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...record };
    stateToChange[evt.target.id] = evt.target.value;
    setRecord(stateToChange);
  };

  const updateExistingRecord = evt => {
    evt.preventDefault()
    setIsLoading(true);

   
    const editedRecord = {
      id: recordId,
      notes: record.notes
    };

  updateRecord(editedRecord)
    .then(() => navigate("/records/HaveRecord")
    )
  }

  useEffect(() => {
    getRecordById(recordId)
      .then(record => {
        setRecord(record);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
          <label htmlFor="notes">Notes</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="notes"
              value={record.notes}
            />
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingRecord}
              className="btn btn-primary"
              >Update
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}