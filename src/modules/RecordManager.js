const remoteURL = "http://localhost:8088"

// export const getArticleById = (articleId) => {
//   //be sure articles have good data and related to a location and customer
//   return fetch(`${remoteURL}/articles/${articleId}?_expand=user`)
//   .then(res => res.json())
// }

export const getAllRecords = () => {
  return fetch(`${remoteURL}/records?_expand=user`)
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