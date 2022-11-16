import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import '../index.css'

const Home = () => {
    const[random, setRandom] = useState('')

    useEffect(() => {
        generateNewJoke()
    },[])

    const generateNewJoke = async () => {
        const response = await axios.get('/random')

        setRandom(response.data.value)
    }

    return (
        <div>
            <div className='flex justify-center items-center'>
                <div>
                    { random }
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button
                    className="btn-primary"
                    onClick={ generateNewJoke }
                >
                    Random joke
                </button>
            </div>
        </div>
    )
}

export default Home