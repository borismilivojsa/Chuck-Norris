import React from 'react'
import './index.css'
import Home from './components/Home'
import Categories from './components/Categories'
import Search from './components/Search'
import Route from './components/Route'
import Header from './components/Header'

const App = () => {

    return (
        <div>
            <div className='flex justify-center items-center mt-8'>
                <Header />
            </div>
            <div className='flex justify-center items-center mt-8'>
                <div>
                    <Route path='/'>
                        <Home />
                    </Route>
                    <Route path='/categories'>
                        <Categories />
                    </Route>
                    <Route path='/search'>
                        <Search />
                    </Route>
                </div>
            </div>
        </div>
    )
}

export default App

