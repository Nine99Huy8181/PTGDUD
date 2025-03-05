import React from 'react';
import './Footer.css'; // Import the CSS file for styles

export default function Footer() {
    return (
        <div className="container">
            <div className="leftSection">
                <h3>About us</h3>
                <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
                <input type="text" className="inputStyle" />
                <button className="buttonStyle">Send</button>
            </div>
            <div>
                <div>
                    <ul>
                        <h4>Learn more</h4>
                        <li className="listStyle"><a className="linkStyle" href="">Our Cooks</a></li>
                        <li className="listStyle"><a className="linkStyle" href="">See Our Features</a></li>
                        <li className="listStyle"><a className="linkStyle" href="">FAQ</a></li>
                    </ul>
                    <ul>
                        <h4>Learn more</h4>
                        <li className="listStyle"><a className="linkStyle" href="">Our Cooks</a></li>
                        <li className="listStyle"><a className="linkStyle" href="">See Our Features</a></li>
                    </ul>
                </div>
            </div>
            <div className="rightSection">
                <ul>
                    <h4>Learn more</h4>
                    <li className="listStyle"><a className="linkStyle" href="">Our Cooks</a></li>
                    <li className="listStyle"><a className="linkStyle" href="">See Our Features</a></li>
                    <li className="listStyle"><a className="linkStyle" href="">FAQ</a></li>
                    <li className="listStyle"><a className="linkStyle" href="">Our Cooks</a></li>
                    <li className="listStyle"><a className="linkStyle" href="">See Our Features</a></li>
                    <li className="listStyle"><a className="linkStyle" href="">FAQ</a></li>
                    <li className="listStyle"><a className="linkStyle" href="">Our Cooks</a></li>
                </ul>
            </div>
        </div>
    );
}
