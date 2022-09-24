import React from 'react';
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useStateContext } from "../context/StateContext";

const Header = () => {
    const {showBurger, setShowBurger, cars} = useStateContext()

    return (
        <Container show={showBurger}>
            <Logo show={showBurger}>
                <img src="/images/logo.svg" alt="/" />
            </Logo>
            <Menu show={showBurger}>
                {cars && cars.map((car, index) => 
                    <a href="#" key={index}>
                        {car.name}
                    </a>
                )}
            </Menu>
            <RightMenu show={showBurger}>
                <a href="#"> Shop </a>
                <a href="#"> Tesla Account </a>
                <IconButton onClick={() => setShowBurger(true)}>
                    <CustomMenu />
                </IconButton>
            </RightMenu>
            <BurgerNav show={showBurger}>
                <CloseWrapper>
                    <IconButton onClick={() => setShowBurger(false)}>
                        <CloseIcon />
                    </IconButton>
                </CloseWrapper>
                {cars && cars.map((car, index) => 
                    <li key={index}>
                        <a href="#">{car.name}</a>
                    </li>
                )}
                <li> <a href="#"> Solar Roof </a> </li>
                <li> <a href="#"> Solar Panels </a></li>
                <li> <a href="#"> Existing Inventory </a></li>
                <li> <a href="#"> Used Inventory </a></li>
                <li> <a href="#"> Trade-In </a></li>
                <li> <a href="#"> Test Drive </a></li>
                <li> <a href="#"> Insurance </a></li>
                <li> <a href="#"> Powerwall </a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    z-index: 1;
    min-height: 3.75rem;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.25rem;
    top: 0;
    left: 0;
    right: 0;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    filter: ${props => props.show ? "blur(8px)" : ""};
    -webkit-filter: ${props => props.show ? "blur(8px)" : ""};

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 .625rem;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px) {
        display: none;
    }   
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    filter: ${props => props.show ? "blur(8px)" : ""};
    -webkit-filter: ${props => props.show ? "blur(8px)" : ""};

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 0.625rem;
    } 
`
const CustomMenu = styled(MenuIcon)`

`

const BurgerNav = styled.div`
    z-index: 100;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 18.75rem;
    list-style: none;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
    transition: .2s ease-in-out;

    li {
        padding: 1rem 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }

    }
`
const Logo = styled.a`
    filter: ${props => props.show ? "blur(8px)" : ""};
    -webkit-filter: ${props => props.show ? "blur(8px)" : ""};
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`