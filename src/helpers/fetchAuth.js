const api_dev = 'https://blog-daponte.herokuapp.com/api';

const fetchStartLogin = (endpoint, data = "") => {
  const url = `${api_dev}/${endpoint}`;

  return fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });
};

const fetchStartRegister = (endpoint, data = "") => {
  const url = `${api_dev}/${endpoint}`;

  return fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });
};

const fetchStartChecking = (endpoint) => {
  const url = `${api_dev}/${endpoint}`;
  const token = localStorage.getItem("token") || "";


    return fetch(url, {
      method: 'GET',
      headers: {
        "x-token": token,
      },
    });
};

const fetchStartUpdate = (endpoint, data) => {
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

export {
  fetchStartChecking,
  fetchStartLogin,
  fetchStartRegister,
  fetchStartUpdate,
};
