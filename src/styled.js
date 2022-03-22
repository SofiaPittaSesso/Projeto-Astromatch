import styled, { keyframes } from "styled-components"

export const DisplayContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    width: 375px;
    border-radius: 15px;
    background-color: #3b022b;
    color: #EF3A47;
    font-family: 'Rubik', sans-serif;
`

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px;

    h3 {
        margin: 0;
        display: inline;
        font-size: 25px;
    }

    button {
        border: none;
        cursor: pointer;
        background-color: transparent;
    }

    img {
        height: 40px;
        width: 40px;
    }

    #yellow-text {
        color: #EFC41A;
    }
`

export const ProfileContainer = styled.div`
    border-radius: 15px;
    display: grid;
    grid-template-rows: 450px 1fr;
    width: 340px;
    height: 100%;

    #no-profiles-message-box{
        border-radius: 15px;
        background-color: lightgrey;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: justify;

        h3 {
            margin-bottom: 20px;
            font-size: x-large;
        }

        p {
            width: 80%;
            padding: 10px;
            border-radius: 10px;
            background-color: aliceblue;
        }
    }

    @keyframes swipeRight {
        0% {
            transform: rotate(0deg);
            left: 0;
        }

        100% {
            transform: rotate(20deg);
            left: 200px;
            opacity: 0;
        }
    }

    .swipe-right {
        animation: swipeRight 0.5s;
    }

    @keyframes swipeLeft {
        0% {
            transform: rotate(0deg);
            left: 0;
        }

        100% {
            transform: rotate(-20deg);
            left: -200px;
            opacity: 0;
        }
    }

    #swipe-left {
        animation: swipeLeft 0.5s;
    }
`

export const SwipeRight = keyframes`
    0% {
        transform: rotate(0deg);
        left: 0;
    }

    100% {
        transform: rotate(20deg);
        left: 200px;
        opacity: 0;
    }
`

export const InfoCard = styled.div`    
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    display: grid;
    grid-template-rows: 1fr 80px;
    height: 450px;
    border-radius: 15px;
    position: relative;

    #img-container {
        height: 450px;
        -webkit-backdrop-filter: blur(20px);
        backdrop-filter: blur(20px);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-self: center;
        border-radius: 15px;

        img {
            max-width: 340px;
            max-height: 350px;
        }

        div {
            padding-left: 10px;
            display: flex;
            flex-direction: column;
        }
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #3b022b;

    button {
        background: transparent;
        border: none;
        cursor: pointer; 

        img {
            height: 70px;
            width: 70px;
        }

        &:hover{
	        transform: scale(1.15, 1.15);
        }
    }

    #accept-button {
        &:active {
            filter: invert(10%) sepia(10%) saturate(350%) hue-rotate(110deg) brightness(87%) contrast(205%);
        }
    }

    #reject-button {
          &:active {
            filter: invert(10%) sepia(10%) saturate(350%) hue-rotate(380deg) brightness(87%) contrast(205%);
        }
    } 
`

export const MatchesContainer = styled.div`
    width: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const MatchCard = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    padding: 10px 20px;
    width: calc(100% - 40px);

    img {
        height: 60px;
        width: 60px;
        border-radius: 30px;
        margin-right: 20px;
    }

    &:hover{
        background-color: #26021c;
        border-radius: 15px;
    }
`

export const ResetMatchContainer = styled.div`
    img {
        height: 25px;
        width: 25px;
        margin-left: 7px;
    }

     button {
        border: none;
        cursor: pointer;
        background-color: #EF3A47;
        width: 180px;
        height: 35px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px 0;
        font-size: large;
        color: lightgrey;
    }
`