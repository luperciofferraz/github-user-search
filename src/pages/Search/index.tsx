import React, { useState } from 'react';
import { Perfil } from 'core/types/Perfil';
import { makeRequest } from 'core/utils/request';
import Button from 'core/components/Button';

const Search = () => {
    
    const [login, setLogin] = useState("");
    const [perfil, setPerfil] = useState<Perfil>();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        setLogin(event.target.value);

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();

        makeRequest({ url: login })
            .then(response => setPerfil(response.data));
    }

    return (

        <div className="profile-container">

            <div className="search-area">

                <form onSubmit={handleSubmit}>

                    <div className="form-title">
                        Encontre um perfil Github                        
                    </div>


                    <input className="search-box"
                        value={login}
                        name="login"
                        type="text" 
                        placeholder="login"
                        onChange={handleOnChange}
                    />

                    <Button text="Encontrar" />

                </form>

            </div>    

            <div className="result-area">
                
                <div className="profile-image-container">

                    <img src={perfil?.avatar_url} alt={login} className="profile-image" />

                    <Button text="Ver perfil" />

                </div>                     

                <div className="profile-description-container">

                    <div className="statistics-data-container">

                        <h1>Repositórios Públicos: {perfil?.public_repos}</h1>
                        <h1>Seguidores: {perfil?.followers}</h1>
                        <h1>Seguindo: {perfil?.following}</h1>

                    </div>

                    <div className="information-container">

                        <div className="information-title">
                            Informações
                        </div>

                        <div className="information-field">
                            Empresa: {perfil?.company}
                        </div>

                        <div className="information-field">
                            Website/Blog: {perfil?.blog}
                        </div>

                        <div className="information-field">
                            Localidade: {perfil?.location}
                        </div>

                        <div className="information-field">
                            Membro desde: {perfil?.created_at}
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Search;
