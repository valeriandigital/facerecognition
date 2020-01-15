import React from "react";
import './logo.css'
import Tilt from 'react-tilt'

const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner">
                    <div className='logo'>
                        <form action="">
                            <input type="text" placeholder='USERNAME'/>
                            <input type="text" placeholder='PASSWORD'/>
                        </form>
                    </div>
                </div>
            </Tilt>
        </div>
    )
};

export default Logo;