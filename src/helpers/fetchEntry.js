const api_dev = 'https://blog-daponte.herokuapp.com/api';

const fetchCreateEntry = (endpoint, data) => {
  const url = `${api_dev}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "x-token": token,
    },
    body: JSON.stringify(data),
  });
};

const fetchGet = (endpoint, data = "") => {
  const url = `${api_dev}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "x-token": token,
    },
  });
};

const fetchUpdateEntry = (endpoint, data) => {
  const url = `${api_dev}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "x-token": token,
    },
    body: JSON.stringify(data),
  });
};

const fetchDeletEntry = (endpoint, data) => {
  const url = `${api_dev}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "x-token": token,
    },
    body: JSON.stringify(data),
  });
};

export { 
    fetchGet, 
    fetchDeletEntry, 
    fetchUpdateEntry,
    fetchCreateEntry, 
};
