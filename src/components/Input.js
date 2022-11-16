import React, { useEffect, useState } from 'react'
import Link from './Link'

const Input = () => {
    const [term, setTerm] = useState('')
    const [debouncedTerm, setDebouncedTerm] =useState(term)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000)

        return () => {
            clearTimeout(timerId)
        }
    }, [term])

    useEffect(() => {
        window.history.pushState({}, '', `/search?query=${debouncedTerm}`)

        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)


    }, [debouncedTerm])



    return (
        <input
            type='text'
            className='font-sans	md:font-serif text-lg font-extrabold text-justify border-2 border-rose-600'
            value={term}
            onChange={e => setTerm(e.target.value)}
        />
    )
}

export default Input