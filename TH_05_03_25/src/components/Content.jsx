import React, { useEffect, useState } from 'react';
import './Content.css'

export default function Header() {

    const [array, setArray] = useState([])

    useEffect(() =>{
        var fn = fetch('https://67c81bf20acf98d07084e0cf.mockapi.io/items')
        var fn1 = fn.then((res)=>{return res.json();})
        var fn2 = fn1.then((data)=>{
            setArray(data)
        })
    }, [])

    return (
        <>
            <div className='content'>
            {array.map((item, index)=>{
                        return(
                            <div key={index} className='item_content'>
                                <img src={item.image} alt="" height="200px" width="350px"/>
                                <div>
                                    <span>{item.name}</span> 
                                    <button>Save</button>
                                </div>
                            </div>
                        )
            })}
            </div>
        </>
    );
}
