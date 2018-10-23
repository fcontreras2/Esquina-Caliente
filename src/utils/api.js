const API_URL = "https://shopping-cart-data.herokuapp.com/";
//const API_URL = "http://localhost:4000/";

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

export const confirmationOrderToHistory = (data) => (
  fetch(API_URL + 'history/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())
)

export const deleteOrder = async (id) => {
  await fetch(API_URL + `orders/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(resp => resp.json())
}

export const getOrders = async () => {

  const orders  = await fetch(API_URL + 'orders/')
    .then(resp => resp.json())

  const history = await fetch(API_URL + 'history/')
    .then(resp => resp.json());

  return { orders, history }
}
