import Button from 'core/components/Button';
import { Profile } from 'core/types/Profile';
import React from 'react';
import './styles.scss';
import {GITHUB_PROFILE_LINK} from 'core/utils/request';

type Props = {

    login: string;
    profile: Profile;

}

const ImageProfile = ({ login, profile }: Props ) => {

    return (

        <div>

            <img src={profile?.avatar_url} alt={login} className="profile-image" />
            
            <div className="btn-profile">
                <a href={`${GITHUB_PROFILE_LINK}${login}`} target="_blank" rel="noopener noreferrer">
                    <Button text="Ver perfil" />
                </a>
            </div>

        </div>                     

    )

}

export default ImageProfile;