const API_URL = "http://localhost:4000/";

export const getMenu = () => (
  fetch(API_URL + 'menu/')
    .then(resp => resp.json())
)

export const confirmationOrder = (data) => (
  fetch(API_URL + 'orders/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())
)


export const getOrders = () => (
  fetch(API_URL + 'orders-list/')
    .then(resp => resp.json())
)
