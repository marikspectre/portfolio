import React from 'react'
import { FaTelegramPlane, FaInstagram, FaYoutube, FaGithub, FaFacebook } from 'react-icons/fa'

function Info({ changer }) {
    return (
        <div className={`${changer ? 'info_container info_container_dark' : 'info_container info_container_light'}`}>
            <img className='personIMG' src='../me.jpg' alt='person' />
            <h3 className='author'>Ulug'bek Boboqulov</h3>
            <p className='author job'>Front-end Developer</p>
            <div className='social_icons'>
                <a href='https://github.com/marikspectre'><FaTelegramPlane /></a>
                <a href='https://www.instagram.com/marikspectre/'><FaInstagram /></a>
                <a href='https://github.com/marikspectre'><FaYoutube /></a>
                <a href='https://github.com/marikspectre'><FaGithub /></a>
                <a href='https://www.facebook.com/ulugbek.boboqulov.967/'><FaFacebook /></a>
            </div>
            <div className='form'>
                <div className='form_item'>
                    <h4>Age</h4>
                    <p>20</p>
                </div>
                <div className='form_item'>
                    <h4>Education</h4>
                    <p>TUITKF</p>
                </div>
                <div className='form_item'>
                    <h4>Address</h4>
                    <p>Uzbekistan, Qarshi</p>
                </div>
            </div>
            <div className='skills'>
                <div className='skill_container'>
                    <div className='skill_item'>
                        <h4>HTML</h4>
                        <p>90%</p>
                    </div>
                    <div className='procient'></div>
                </div>
                <div className='skill_container'>
                    <div className='skill_item'>
                        <h4>CSS</h4>
                        <p>85%</p>
                    </div>
                </div>
                <div className='skill_container'>
                    <div className='skill_item'>
                        <h4>JS</h4>
                        <p>70%</p>
                    </div>
                </div>
                <div className='skill_container'>
                    <div className='skill_item'>
                        <h4>ReactJS</h4>
                        <p>70%</p>
                    </div>
                </div>
                <div className='skill_container'>
                    <div className='skill_item'>
                        <h4>VueJS</h4>
                        <p>70%</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Info