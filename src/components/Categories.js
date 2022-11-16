import React, { useState, useEffect } from 'react'
import axios from '../api/axios'
import Link from './Link'

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        showCategories()
    }, [])

    const showCategories = async () => {
        const response = await axios.get('/categories')

        setCategories(response.data)
    }

    return (
        <div>
            { categories.map((category, index) => (
                <div className="space-x-3" key={ index }>
                    <Link
                        href={ `/search?query=${ category }` }
                        className="font-sans	md:font-serif text-lg font-extrabold text-justify"
                    >
                        { category }
                    </Link>
                </div>
            )) }
        </div>
    )


}

export default Categories