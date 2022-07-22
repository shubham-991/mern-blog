import React, { useState } from 'react'
import { useEffect } from 'react';
import './sidebar.css'
import axios from "axios"
import { Link } from 'react-router-dom';



function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() =>{
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        
        };
        getCats();
    }, []);

  return (
    <div className= "sidebar">
        <div className='sidebarItem'>
            <span className='sidebarTitle'>Citius . Altius . Fortius</span>
            <img src='https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' alt = '' />
        </div>

        <div className='sidebarItem'>
            <span className='sidebarTitle'></span>
            <ul className='sidebarList'>
                {cats.map((c) =>(
                    <Link to = {`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
                
            </ul>
        </div>
    
        <div className='sidebarItem'>
            <span className='sidebarTitle'>
                FOLLOW US
            </span>

            <div classNAme='sidebarSocial'>
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            </div>
        </div>
    
    
    </div>
  )
}

export default Sidebar