import React, { useState } from 'react';
import { Perfil } from 'core/types/Perfil';
import { makeRequest } from 'core/utils/request';
import Button from 'core/components/Button';
import './styles.scss';
import {dateConvert} from 'core/utils/date';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader'; 

const GITHUB_PROFILE_LINK = 'https://github.com/';

const Search = () => {
    
    const [login, setLogin] = useState("");
    const [perfil, setPerfil] = useState<Perfil>();
    const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        setLogin(event.target.value);

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();

        setIsLoading(true);
        makeRequest({ url: login })
            .then(response => setPerfil(response.data))
            .finally(() => setIsLoading(false));            
    }

    return (

        <>

            <div className="search-area">

                <form onSubmit={handleSubmit}>

                    <div className="form-title">
                        Encontre um perfil Github                        
                    </div>


                    <input className="search-box"
                        value={login}
                        name="login"
                        type="text" 
                        placeholder="Usuário Github"
                        onChange={handleOnChange}
                    />

                    <div className="btn-search">
                        <Button text="Encontrar" />
                    </div>

                </form>

            </div>    

            {perfil && <div className="result-area">

               {isLoading ? <ImageLoader /> : (
                
                    perfil && <div className="profile-image-container">

                        <img src={perfil?.avatar_url} alt={login} className="profile-image" />
                        
                        <div className="btn-profile">
                            <a href={`${GITHUB_PROFILE_LINK}${login}`}>
                                <Button text="Ver perfil" />
                            </a>
                        </div>

                    </div>                     

                )}

                <div className="profile-description-container">

                    {isLoading ? <InfoLoader /> : (
                    
                        <>

                        <div className="statistics-container">

                            <div className="statistics-text-container">
                                <h1 className="statistics-text">Repositórios Públicos: {perfil?.public_repos}</h1>
                            </div>

                            <div className="statistics-text-container">
                                <h1 className="statistics-text">Seguidores: {perfil?.followers}</h1>
                            </div>

                            <div className="statistics-text-container">
                                <h1 className="statistics-text">Seguindo: {perfil?.following}</h1>
                            </div>    

                        </div>

                        <div className="information-container">

                            <div className="information-title">
                                Informações
                            </div>

                            <div className="information-field-container">
                                <h1 className="information-field-text">Empresa: {perfil?.company}</h1>
                            </div>

                            <div className="information-field-container">
                                <h1 className="information-field-text">Website/Blog: {perfil?.blog}</h1>
                            </div>

                            <div className="information-field-container">
                                <h1 className="information-field-text">Localidade: {perfil?.location}</h1>
                            </div>

                            <div className="information-field-container">
                                { perfil?.created_at && <h1 className="information-field-text">Membro desde: {dateConvert(perfil?.created_at)}</h1> }
                            </div>

                        </div>

                        </>

                    )}

                </div> 

            </div> }

        </>

    );

};

export default Search;
