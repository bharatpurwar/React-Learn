/* eslint-disable no-console */
/* eslint-disable no-undef */

  function getTimers(success) {
    return fetch('http://localhost:3001/api/timers', {
      headers: {
        Accept: 'application/json',
       // mode: 'no-cors',
      },
    }).then(checkStatus)
      .then(parseJSON)
      .then(
        success
      );
  }

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    }
  }

  function parseJSON(response) {
    return response.json();
  }

  function createTimer(data) {
    let url = 'http://localhost:3001/api/timers';
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((data) => {
      console.log("b" + data);
      return checkStatus;
    });
  }

  function updateTimer(data) {
    let url = 'http://localhost:3001/api/timers';
    return fetch(url, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus);
  }

  function deleteTimer(data) {
    let url = 'http://localhost:3001/api/timers';
    return fetch(url, {
      method: 'delete',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(checkStatus)
      .then((data)=>{
        console.log(data);
        return data;
      });
  }

  function startTimer(data) {
    return fetch('/api/timers/start', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus);
  }

  function stopTimer(data) {
    return fetch('/api/timers/stop', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus);
  }
export default getTimers;
export { getTimers, createTimer, updateTimer, deleteTimer};




