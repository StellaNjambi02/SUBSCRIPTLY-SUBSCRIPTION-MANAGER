import React, { useState, useEffect } from 'react';
import '../App.css';
import './Navbar.css';
import { NavbarData } from './NavbarData';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = ({ user, onLogout }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        let timer;
        if (isExpanded) {
            timer = setTimeout(() => {
                setIsExpanded(false);
            }, 4000); // 5 seconds
        }
        return () => clearTimeout(timer); // Clear the timer if the component unmounts or if `isExpanded` changes
    }, [isExpanded]);

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    };

    const menuItems = [
        {
            id: 'greeting',
            icon: <PersonIcon />,
            title: user ? `Welcome, ${user}` : 'Login',
            link: user ? null : '/login',
            onClick: user ? null : () => { window.location.pathname = '/login' },
        },
        ...NavbarData,
        user && {
            id: 'logout',
            icon: <LogoutIcon />,
            title: 'Logout',
            onClick: onLogout,
        },
    ].filter(Boolean); // Remove null items (like logout when not logged in)

    return (
        <div className={`NavBar ${isExpanded ? "expanded" : "collapsed"}`}>
            <button onClick={toggleNavbar}>
                <MenuIcon />
            </button>
            <ul className="NavBarList">
                {menuItems.map((item, key) => (
                    <li
                        className={`row ${item.id === 'logout' ? 'logout-row' : ''}`}
                        id={window.location.pathname === item.link ? "active" : ""}
                        key={key}
                        onClick={item.onClick || (() => { if (item.link) window.location.pathname = item.link })}
                    >
                        <div id="icon">
                            {item.icon}
                        </div>
                        {isExpanded && (
                            <div id="title">
                                {item.title}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
