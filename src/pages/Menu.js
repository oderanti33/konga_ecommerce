import React from 'react'
import { Data } from '../data';
import Menudetails from '../component/Menudetails';
import '../styles/Menu.css'


function Menu() {

    function menudetails(menudetails) {
        return <div>
            <Menudetails
                image={menudetails.image}
                name={menudetails.name}
                price={menudetails.price}
            />
        </div>
    }

    return (
        <div className='menu'>
            <div className='menuTitle'>
                <div className='menuTopic'><h1>Menu List</h1></div>
                <div className='menuList'>
                    {Data.map(menudetails)}
                </div>

            </div>

        </div>
    )
}

export default Menu