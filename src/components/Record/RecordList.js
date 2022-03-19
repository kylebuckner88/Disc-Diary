import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecordCard } from './RecordCard';
import { getAllRecordsIHave, getAllRecordsIWant, deleteRecord } from '../../modules/RecordManager';

export const RecordList = () => {
  
  const [records, setRecords] = useState([]);

  const navigate = useNavigate();

  const getRecords = () => {
   
    return getAllRecordsIHave().then(recordsFromAPI => {
      setRecords(recordsFromAPI)
    });

  };

  
  useEffect(() => {
    getRecords();
  }, []);

  const handleDeleteRecord = id => {
    deleteRecord(id)
    .then(() => getAllRecordsIHave().then(setRecords));
  };

 
  return(
    <>
      <div className="container-cards">
        {records.map(record =>
          <RecordCard 
          key={record.id} 
          record={record}
          handleDeleteRecord={handleDeleteRecord} />
        )}
      </div>
    </>
  );
};