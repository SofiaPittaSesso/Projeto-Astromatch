import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BaseUrl } from '../../constants/BaseUrl'
import Profile from '../../components/Profile'
import { ProfileContainer, ButtonContainer } from '../../styled'
import reject from '../../images/reject.png'
import heart from '../../images/heart.png'

export default function InicialPage() {

    const [profile, setProfile] = useState({})
    const [swipeRight, setSwipeRight] = useState(false)
    const [swipeLeft, setSwipeLeft] = useState(false)

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = () => {
        axios.get(`${BaseUrl}/person`)
            .then((response) => {
                setProfile(response.data.profile)
            })
            .catch((error) => {
                alert(error.response.data)
            })
    }

    const chooseOrRejectProfile = (id, choice, setSwipe) => {
        const body = {
            id: id,
            choice: choice
        }
        console.log(typeof setSwipe)

        axios.post(`${BaseUrl}/choose-person`, body)
            .then(() => {
                getProfileToChoose()
                setSwipe(true)

                setTimeout(() => setSwipe(false), 500)
            })
            .catch((error) => {
                console.log(error.response || error.response.data)
            })
    }

    return (<ProfileContainer>
        {profile ? (
            <Profile
                profile={profile}
                swipeRight={swipeRight}
                swipeLeft={swipeLeft}
            />
        ) :
            <div id='no-profiles-message-box'>
                <h3>Acabaram os perfis 😵</h3>
                <p>Por favor, volte para a página de matches e delete suas matches atuais para receber mais perfis 😊</p>
            </div>
        }
        <ButtonContainer>
            <button
                id='reject-button'
                onClick={() => chooseOrRejectProfile(profile.id, false, setSwipeLeft)}><img src={reject} alt='Icone de rejeitar perfil' />
            </button>
            <button
                id='accept-button'
                onClick={() => chooseOrRejectProfile(profile.id, true, setSwipeRight)}><img src={heart} alt='Icone de aceitar perfil' />
            </button>
        </ButtonContainer>
    </ProfileContainer>
    )
}