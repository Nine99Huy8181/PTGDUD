import React, { useEffect, useState } from 'react';
import searchImg from '../img/icons8-search-30.png';
import imgGroup from "../img/Group 15.png";
import imgAvt from "../img/Avatar 35.png";
import './Header.css'; // Import the CSS file for styles

export default function Header() {

    const [array, setArray] = useState([])

    useEffect(() =>{
        var fn = fetch('https://67c81bf20acf98d07084e0cf.mockapi.io/menus')
        var fn1 = fn.then((res)=>{return res.json();})
        var fn2 = fn1.then((data)=>{
            setArray(data)
        })
    }, [])

    return (
        <div className="container_head">
            <div><img src={imgGroup} alt="" className="imgPadding" /></div>
            <div className="searchContainer">
                <div><img src={searchImg} alt="" /></div>
                <div><input type="text" placeholder="abc" className="inputStyle" /></div>
            </div>
            <div className="navContainer">
                <ul className="navList">
                    {array.map((item, index)=>{
                        return(
                            <li key={index}><a className="navItem" href="">{item.title}</a></li>
                        )
                    })}
                    
                </ul>
            </div>
            <div><button className="buttonStyle_head">Your Recipe Box</button></div>
            <div><img src={imgAvt} alt="" className="avatarStyle" /></div>
        </div>
    );
}
