import React from 'react'

function Tuit({ changer }) {
    return (
        <div className='Tuit_container'>
            <img src='tuit.jpg' alt='Tuit KF' />
            <div className={`${changer ? 'Tuit_content Tuit_content_dark' : 'Tuit_content Tuit_content_light'}`}>
                <h1>I am a 4th-year student of Tashkent University of Information Technologies, Karshi branch</h1>
            </div>
        </div>
    )
}

export default Tuit