import styled from "styled-components"

export const Heart = styled.img`
    display: flex;
    justify-self: center;
    align-self: center;
    width: 80px;
    height: 80px;

    @keyframes heartBeat {
        0% {
        transform: scale( .75 );
        }
        20% {
        transform: scale( 1.1 );
        }
        40% {
        transform: scale( .75 );
        }
        60% {
        transform: scale( 1.1 );
        }
        80% {
        transform: scale( .75 );
        }
        100% {
        transform: scale( .75 );
        }
    }

    animation: heartBeat 1s infinite;
`