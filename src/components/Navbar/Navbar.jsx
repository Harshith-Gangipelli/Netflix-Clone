import React, { useEffect, useRef } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import Profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../firebase';
const Navbar = () => {
    const navref=useRef();
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>=80){
                navref.current.classList.add('black-nav');
            }else{
                navref.current.classList.remove('black-nav');
            }
        })
    },[]);
  return (
    <div ref={navref} className='navbar'>
        <div className="navbar-left">
            <img src={logo} alt=""/>
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={search_icon} alt="" className='icons' />
            <p>Children</p>
            <img src={bell_icon} alt="" className='icons'/>
            <div className="navbar-profile">
                <img src={Profile_img} alt="" className='profile'/>
                <img src={caret_icon} alt="" className='caret'/>
                <div className="dropdown">
                    <p onClick={()=>{
                        logout();
                    }}>Sign Out of Netflix</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar