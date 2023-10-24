import React from 'react'
import amala from '../assests/lastback.jpg'
import { Link } from 'react-router-dom';
import '../styles/Home.css'
import Homedetail from '../assests/homedetail';

function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${amala})` }}>
            <div className='headerContainer'>
                <Homedetail
                    num1='Food Arena'
                    num2='Branch for all forms of Locally made Foods'
                />
                <Link>
                    <button>
                        Order Now!
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home;