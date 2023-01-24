


function getApi() {   
    let requestUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}';
  
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

fetchButton.addEventListener('click', getApi);


  