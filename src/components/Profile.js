import React from 'react'
import { ProfileContainer, InfoCard } from '../styled'
import loading from '../images/loading.png'
import { Heart } from '../components/LoadingAnimation'

export default function Profile(props) {
    return (
        <ProfileContainer>
            {props.profile.photo && props.profile.name
                && props.profile.age && props.profile.bio ?
                (
                    <InfoCard
                        className={props.swipeRight ? 'swipe-right' : ''}
                        id={props.swipeLeft ? 'swipe-left' : ''}
                        style={{ backgroundImage: `url(${props.profile.photo})` }}
                    >
                        <div id='img-container'>
                            <img src={props.profile.photo} alt='Foto do Perfil' />
                            <div>
                                <h2>{props.profile.name}, {props.profile.age}</h2>
                                <p>{props.profile.bio}</p>
                            </div>
                        </div>
                    </InfoCard>
                ) :
                <Heart src={loading} alt='Icone de carregando' />
            }
        </ProfileContainer >)
}