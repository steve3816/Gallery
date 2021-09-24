import React from 'react';
import './styles/style.css';
var navbarItems = ['首頁', '關於我們','產品介紹'];

const Nav = () => {
    return (
        <div>
            <div>我的title</div>
            <div style={{color:'blue'}}>
                <ul>
                    {navbarItems.map(itemName => <li>{itemName}</li>)}
                </ul>
            </div>
        </div>
    )
};

export default Nav
