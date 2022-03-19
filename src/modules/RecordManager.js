const remoteURL = "http://localhost:8088"

export const getRecordById = (RecordId) => {
  //be sure articles have good data and related to a location and customer
  return fetch(`${remoteURL}/records/${RecordId}?_expand=user`)
  .then(res => res.json())
}

export const getAllRecords = () => {
  return fetch(`${remoteURL}/records?_expand=user&_expand=shop`)
  .then(res => res.json())
}

export const getAllRecordsIHave = () => {
    return fetch(`${remoteURL}/records?_expand=user&_expand=shop&HaveRecord=true`)
  .then(res => res.json())
}

export const getAllRecordsIWant = () => {
    return fetch(`${remoteURL}/records?_expand=user&_expand=shop&WantRecord=true`)
  .then(res => res.json())
}

export const deleteRecord = (id) => {
  return fetch(`${remoteURL}/records/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const addRecord = (newRecord) => {
  return fetch(`${remoteURL}/records`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newRecord)
  }).then(response => response.json())
}


export const updateRecord = (editedRecord) => {
    return fetch(`${remoteURL}/records/${editedRecord.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedRecord)
    }).then(data => data.json());
  }