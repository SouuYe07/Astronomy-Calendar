const api_key = `0bf6EN8WNOeqeiEo4mGyMu40BEk21nLsl5dU47o4`;

// Astronomy Picture of the Day
function apod(date){
    fetch (`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

// Asteroid Near Earth Object Web Service
function asteroid(date){
    fetch (`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${api_key}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

// Space Weather Database Of Notifications, Knowledge, Information (DONKI)
function donki(date){
    fetch (`https://api.nasa.gov/DONKI/FLR?startDate=${date}&endDate=${date}&api_key=${api_key}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}