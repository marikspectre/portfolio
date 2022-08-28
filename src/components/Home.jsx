import React from 'react'
import Cards from './HomeComponents/Cards'
import Header from './HomeComponents/Header'
import data from '../data'
import Tuit from './HomeComponents/Tuit'
import Hobbies from './HomeComponents/Hobbies'

function Home({ changer }) {
    return (
        <div className='home_container'>
            <Header changer={changer} />
            <Cards data={data} changer={changer} />
            <Tuit changer={changer} />
            <Hobbies changer={changer} />
            <h1 className={`${changer ? "metafra metafra_dark" : "metafra metafra_light"}`}>There is no such thing as a good or bad person, there are only people</h1>
        </div>
    )
}

export default Home