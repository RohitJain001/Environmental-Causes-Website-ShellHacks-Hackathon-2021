import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import {List} from "./List";

function Header() {
    return (
        <div className='header'>
            <Link to='/EnvironmentalCauses'>
                <img
                    className="header__icon"
                    src="https://t4.ftcdn.net/jpg/01/37/78/17/360_F_137781704_dUUl0onbYwSk51aQxjiLg4Rl5gcuWsTz.jpg"
                    alt=""
                />
                
            </Link>
            <h2 className="ml-auto" style={{float:'left', "padding-left":"170px" }}>MyEnvi</h2>
            {/* <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div> */}

            <div className='header__right'>
            {/* <Link to="/List" className="btn btn-primary">Sign In</Link> */}
            SignOut
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
