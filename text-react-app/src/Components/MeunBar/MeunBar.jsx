import React from 'react';
import './MeunBar.css';
const MeunBar = ({count}) => {
    return (
        <nav>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-2">LOGO</div>
                    <div className="col-md-10 text-end">
                        <ul className='main-menu'>
                            <li>Home</li>
                            <li>Contact</li>
                            <li>Cart <sup></sup></li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MeunBar;