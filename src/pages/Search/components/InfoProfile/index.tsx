import React from 'react';
import { Profile } from 'core/types/Profile';
import {dateConvert} from 'core/utils/date';
import './styles.scss';

type Props = {

    profile: Profile;

}

const InfoProfile = ( { profile }: Props ) => {

    return (

        <div className="profile-description-container">

            <div className="statistics-container">

                <div className="statistics-text-container">
                    <h1 className="statistics-text">
                        Repositórios Públicos: {profile?.public_repos}
                    </h1>
                </div>

                <div className="statistics-text-container">
                    <h1 className="statistics-text">
                        Seguidores: {profile?.followers}
                    </h1>
                </div>

                <div className="statistics-text-container">
                    <h1 className="statistics-text">
                        Seguindo: {profile?.following}
                    </h1>
                </div>    

            </div>

            <div className="information-container">

                <div className="information-title">
                    Informações
                </div>

                <div className="information-field-container">
                    <h1 className="information-field-text">
                        <strong>Empresa:&nbsp; </strong> {profile?.company}
                    </h1>
                </div>

                <div className="information-field-container">
                    <h1 className="information-field-text">
                        <strong>Website/Blog:&nbsp; </strong> {profile?.blog}
                    </h1>
                </div>

                <div className="information-field-container">
                    <h1 className="information-field-text">
                        <strong>Localidade:&nbsp; </strong> {profile?.location}
                    </h1>
                </div>

                { profile?.created_at &&
                    <div className="information-field-container">
                        <h1 className="information-field-text">
                            <strong>Membro desde:&nbsp; </strong> {dateConvert(profile?.created_at)}
                        </h1> 
                    </div>
                }

            </div>

        </div>
    );

}

export default InfoProfile;