import React from 'react'
import "./Header.css"
import Searchicon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">

            {/* amazon logo */}
            <Link to="/">
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
            </Link>
            {/* search bar */}
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                    <Searchicon className="header_searchIcon" />
            </div>
            {/* navigation options */}
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello Guest</span>
                    <span className="header_optionLineTwo">Sign in</span>

                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>

                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingCartIcon />
                    <span className="header_optionLineTwo header_basketCount">0</span>
                </div>
                </Link>
            </div>
        </div>
    )
}
 
export default Header;
