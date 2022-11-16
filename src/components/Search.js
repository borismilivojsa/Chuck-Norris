import React, { useEffect, useState } from 'react'
import axios from '../api/axios'

const Search = () => {
    const [jokes, setJokes] = useState([])

    let urlParams = new URLSearchParams(window.location.search);
    let query = urlParams.get('query');

    useEffect(() => {
        showJokes()
    })

    const showJokes = async () => {
        if (! query) {
            return
        }

        const response = await axios.get('/search',{
            params: {
            query: query
        }
        })

        setJokes(response.data.result)
    }

    return (
        <div>
            { jokes.map((joke) => (
                <div className="space-x-3" key={joke.id}>
                    <div
                        className="font-sans md:font-serif text-lg font-extrabold text-justify"
                    >
                        {joke.value}
                    </div>
                </div>
            )) }
        </div>
    )
}

export default Search