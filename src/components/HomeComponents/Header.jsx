import React from 'react'

function Header({ changer }) {
    return (
        <div className={`${changer ? 'home_dark' : 'home_light'}`}>
            <div className='home_header'>
                <div className='header_text'>
                    <h1>Hi! my name is</h1>
                    <h1 className='name'>Ulug'bek Boboqulov</h1>
                    <p>I'm front-end developer</p>
                    <p>this is my portfolio website</p>
                </div>
                <img src='me.jpg' alt='author' />
            </div>
        </div>
    )
}

export default Header