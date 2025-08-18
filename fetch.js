const api_key = `0bf6EN8WNOeqeiEo4mGyMu40BEk21nLsl5dU47o4`;


async function events(month){
    
    try{
        fetch (`https://ll.thespacedevs.com/2.3.0/events/?month=4&format=json&limit=100`)

        if(!response.ok){
            throw new Error("Could not fetch events resource")
        }

        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.error(error)
    }

    }

// Astronomy Picture of the Day
async function apod(date){

    try{
        const response = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`)

        if (!response.ok){
            throw new Error("Could not fetch apod resource")
        }

        const data = await response.json()
        console.log(data)
    }

    catch(error){
        console.error(error)
    }
}

// Asteroid Near Earth Object Web Service
async function asteroid(date){

    try{
        const response = await fetch (`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${api_key}`)

        if (!response.ok){
            throw new Error("Could not fetch asteroid resource")
        }

        const data = await response.json()
        console.log(data)
    }

    catch(error){
        console.error(error)
    }
}

