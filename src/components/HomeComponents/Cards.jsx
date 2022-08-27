import React from 'react'
import { FaGithub } from 'react-icons/fa'

function Cards({ data, changer }) {
    console.log(document.body.clientWidth);
    return (
        <div className='cards_container'>
            {data.map(({ id, name, type, url }) => {
                return (
                    <a href={url} className={`${changer ? 'Card card_dark' : 'Card card_light'}`} key={id}>
                        <h3>{name}</h3>
                        <p>{type}</p>
                        <i><FaGithub /></i>
                    </a>
                )
            })}
        </div>
    )
}

export default Cards