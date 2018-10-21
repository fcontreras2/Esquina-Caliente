const API_URL = "http://localhost:4000/";

export const getMenu = () => (
  fetch(API_URL + 'menu/')
    .then(resp => resp.json())
)
