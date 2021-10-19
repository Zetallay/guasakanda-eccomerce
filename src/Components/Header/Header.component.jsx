import React from 'react';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import ProfileDropDown from '../ProfileDropdown/profileDropdown.component'
import { ReactComponent as Logo  } from '../../assets/logo.svg'
import { ReactComponent as ProfileLogo } from '../../assets/profile-logo.svg'

import './header.styles.scss'

const Header = (props) => {
    return props.location.pathname==='/signin' ? null :(
        <div className='header'>
            <Link to='/'>
                <Logo className='header-logo'></Logo>
            </Link>
            <input className='header-search' type="search" placeholder='Search product' name="search-product" id="search-product" />
            <ul className='header-options'> 
                <li>
                    <Link to='/shop'>Shop</Link>
                </li>
                <li>
                    <Link to='/sell'>Sell</Link>
                </li>
                <li>
                    <ProfileLogo onClick={()=>
                    console.log('a')
                        // hidden ? null : <ProfileDropDown/>
                    }/>
                </li>
            </ul>
        </div>
    );
};

export default withRouter(Header);