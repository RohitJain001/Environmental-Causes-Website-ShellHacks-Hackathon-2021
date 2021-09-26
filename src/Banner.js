import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import Search from './Search';
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}

                <button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search by Dates and City"}
                </button>
            </div>
            <div className='banner__info'>
                <h1>Find Sustainable Events Near You</h1>
                <h5>
                    Plan, Organize or attend environmetal programmes.
                </h5>
                <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
