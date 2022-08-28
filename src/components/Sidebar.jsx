import React from 'react'
import { FaMoon, FaHome, FaFileCode, FaSun } from 'react-icons/fa'
import { MdCastForEducation } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'

function Sidebar({ changer, setChanger }) {
    return (
        <div className={`${changer ? 'Sidebar_conatiner Sidebar_dark' : 'Sidebar_conatiner Sidebar_light'}`}>
            <button className='changer_btn' onClick={() => setChanger(!changer)}>
                {changer ? <FaMoon /> : <FaSun />}
            </button>
            <div className='sidebar_icons'>
                <i onClick={() => {
                    window.scrollTo(0, 0);
                }}><FaHome /></i>
                <i onClick={() => {
                    window.scrollTo(0, 620);
                }}><FaFileCode /></i>
                <i onClick={() => {
                    window.scrollTo(0, 1210);
                }}><MdCastForEducation /></i>
                <i onClick={() => {
                    window.scrollTo(0, 1810);
                }}><BsFillPersonFill /></i>
            </div>
        </div>
    )
}

export default Sidebar