// BlogFeatured.jsx

import React from 'react';
import logo from '../../assets/photos/LWClogo.svg'
import tile1 from '../../assets/photos/clearing-fog-tile.png'
import tile2 from '../../assets/photos/orange-door-tile.png'
import tile3 from '../../assets/photos/modern-window-tile.png'
import tile4 from '../../assets/photos/ferry-tile.png'
import './Featured.css';

const Featured = () => {
    return (
        <div className='blog-bg'>
            <div className="container featured">
                <h1 className="title"><img src={logo} /> Blog</h1>
                <a href="/blog/1" className="large-tile"
                    style={{ backgroundImage: `url(${tile1})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                >
                    <span className='date-tile'>10.25.2023</span><br />
                    Clearing the Fog
                    <p className='bloglist-description'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </a>
                <a href="/" className="large-tile"
                    style={{ backgroundImage: `url(${tile2})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                >
                    <span className='date-tile'>10.25.2023</span><br />
                    Green and Clean
                    <p className='bloglist-description'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </a>
                <a href="/" className="small-tile"
                    style={{ backgroundImage: `url(${tile3})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                >
                    <span className='date-tile'>10.25.2023</span><br />
                    Windows to the Soul
                </a>
                <a href="/" className="small-tile"
                    style={{
                        backgroundImage: `url(${tile4})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
                >
                    <span className='date-tile'>10.25.2023</span><br />
                    Local Luster
                </a>
            </div>

        </div>
    );
};

export default Featured;
