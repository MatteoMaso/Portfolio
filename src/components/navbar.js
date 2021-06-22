import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import {
    mobileNav,
    navBar
} from '../styles/navbar.module.css'

const MenuIcon = styled.button`
    position: absolute;
    top: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.5rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 5;

    div {
        width: 1.5rem;
        height: .2rem;
        border-radius: 5px;
        transform-origin: 1px;
        position: relative;
        transition: opacity 300ms, transform 300ms, background 300ms;
        background: ${({nav}) => nav ? 'white' : 'black'};

        :first-child {
            transform: ${({nav}) => nav ? 'rotate(45deg)' : 'rotate(0)'}
        }

        :nth-child(2) {
            opacity: ${({nav}) => nav ? '0' : '1'}
        }

        :nth-child(3) {
            transform: ${({nav}) => nav ? 'rotate(-45deg)' : 'rotate(0)'}
        }
    }
`

const MenuLinks = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 100vh;
    background: #2400A2;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    transition: transform 300ms;
    transform: ${({nav}) => nav ? "translateX(0)" : "translateX(100%)"};
    z-index: 4;

    ul {
        list-style-type: none;
        padding: 0px;
    }

    li {
        margin-top: 20px;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 2rem;
        transition: color 300ms;

        :hover {
            color: blue;
        }
    }

`


const Navbar = () =>
{
    const [nav, showNav] = useState(false);

    return (
        <div>
            <div className={mobileNav} >
                <MenuIcon nav={nav} onClick={() => showNav(!nav)} >
                    <div/>
                    <div/>
                    <div/>
                </MenuIcon>
                <MenuLinks nav={nav}>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/cv">Resume</a>
                        </li>
                    </ul>
                </MenuLinks>
            </div>
            <div className={navBar}>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/cv">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar