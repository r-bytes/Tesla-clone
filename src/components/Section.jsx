import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Fade from "react-reveal/Fade"

const Section = ({title, description, leftBtnText, rightBtnText, backgroundImage}) => {
    return (
        <Wrapper bgImage={backgroundImage}>
            <Fade bottom>
                <ItemText>
                    <h1> {title} </h1>
                    <p> {description} </p>
                </ItemText>
            </Fade>

            <ButtonGroup>
                <Fade bottom>
                    <Buttons>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>}
                    </Buttons>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </ButtonGroup>
        </Wrapper>
    )
}

export default Section

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    
`

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.875rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 2.5rem;
    width: 16rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .2rem;
    opacity: .85;
    text-transform: uppercase;
    font-size: .75rem;
    cursor: pointer;

`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: .65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 1.25rem;
    height: 2.5rem;
    animation: animateDown infinite 1.5s;
`