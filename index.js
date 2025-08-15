// Testing "Astronomy Picture of the Day"
fetch (`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=2025-01-01`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));


// Testing "Near Earth Object Web Service"
fetch (`https://api.nasa.gov/neo/rest/v1/feed?start_date=2025-01-01&end_date=2025-01-01&api_key=${api_key}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));


// Testing "Space Weather Database Of Notifications, Knowledge, Information (DONKI)"\
fetch (`https://api.nasa.gov/DONKI/FLR?startDate=2025-01-01&endDate=2025-01-01&api_key=${api_key}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
