import React from 'react'
import Link from './Link'
import Input from './Input'

const Header = () => {
    return (
        <div className='space-x-3'>
            <Link href='/' className='font-sans	md:font-serif text-lg font-extrabold text-justify'>
                Home
            </Link>
            <Link href='/categories' className='font-sans	md:font-serif text-lg font-extrabold text-justify'>
                Categories
            </Link>
            <Input />

        </div>

    )
}

export default Header