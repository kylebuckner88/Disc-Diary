const remoteURL = "http://localhost:8088"

// export const getArticleById = (articleId) => {
//   //be sure articles have good data and related to a location and customer
//   return fetch(`${remoteURL}/articles/${articleId}?_expand=user`)
//   .then(res => res.json())
// }

export const getAllShops = () => {
  return fetch(`${remoteURL}/shops?_expand=user`)
  .then(res => res.json())
}

// export const deleteRecord = (id) => {
//   return fetch(`${remoteURL}/records/${id}`, {
//     method: "DELETE"
//   }).then(result => result.json())
// }

export const addShop = (newShop) => {
  return fetch(`${remoteURL}/shops`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newShop)
  }).then(response => response.json())}