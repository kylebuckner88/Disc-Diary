import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecordIWantCard } from './RecordIWantCard';
import { getAllRecordsIWant, getAllRecordsIHave, addNewRecord } from '../../modules/RecordManager';

export const RecordsIWantList = () => {
  
  const [records, setRecords] = useState([]);

  const navigate = useNavigate();

  const getRecordsIWant = () => {
   
    return getAllRecordsIWant().then(recordsFromAPI => {
      setRecords(recordsFromAPI)
    });


  };

  
  useEffect(() => {
    getRecordsIWant();
  }, []);
  

  
  function addToCollection(id) {
    addNewRecord(id)
        .then(() => getAllRecordsIWant().then(setRecords));
}


  

 
  return(
    <>
      <div className="container-cards">
        {records.map(record =>
          <RecordIWantCard 
          key={record.id} 
          record={record}
          addToCollection={addToCollection}/>
        )}
      </div>
    </>
  );
};