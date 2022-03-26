import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecordIHaveCard } from './RecordIHaveCard';
import { getAllRecordsIHave, deleteRecord } from '../../modules/RecordManager';

export const RecordsIHaveList = () => {
  
  const [records, setRecords] = useState([]);

  const navigate = useNavigate();

  const getRecordsIHave = () => {
   
    return getAllRecordsIHave().then(recordsFromAPI => {
      setRecords(recordsFromAPI)
    });


  };

  
  useEffect(() => {
    getRecordsIHave();
  }, []);
  

  



  function handleDeleteRecord(id) {
        deleteRecord(id)
            .then(() => getAllRecordsIHave().then(setRecords));
    }

 
  return(
    <>
      <div className="container-cards">
        {records.map(record =>
          <RecordIHaveCard 
          key={record.id} 
          record={record}
          handleDeleteRecord={handleDeleteRecord} />
        )}
      </div>
    </>
  );
};