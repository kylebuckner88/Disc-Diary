const remoteURL = "http://localhost:8088"


export const getAllShops = () => {
    return fetch(`${remoteURL}/shops`)
    .then(res => res.json())
  }


export const addShop = (newShop) => {
  return fetch(`${remoteURL}/shops`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newShop)
  }).then(response => response.json())}

  export const getShopById = (ShopId) => {
    //be sure articles have good data and related to a location and customer
    return fetch(`${remoteURL}/shops/${ShopId}?_expand=user`)
    .then(res => res.json())
  }