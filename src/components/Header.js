import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from '../assets/images/logo-with-name.svg'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><img src={logo} alt="Balstar"/></Link>
        <nav>
            <a href="/#contact" className="button special scrolly">Contact us</a>
            {/*<a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>*/}
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
