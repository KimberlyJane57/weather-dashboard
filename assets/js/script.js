


function getApi() {   
    let requestUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={7d42be71401c1c754071f1f99b1fa230}';
  
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


  