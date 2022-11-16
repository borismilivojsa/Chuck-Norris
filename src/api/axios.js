import axios from 'axios'

export default axios.create({
    method: 'GET',
    baseURL: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes',
    headers: {
        accept: 'application/json',
        'X-RapidAPI-Key': '318ab712cbmsh0461ef11414b501p1d02dejsnfcebc4753e98',
        'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
    },
})