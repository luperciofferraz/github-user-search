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

                <div>{perfil?.avatar_url}</div>
                <div>{perfil?.blog}</div>
                <div>{perfil?.company}</div>
                <div>{perfil?.created_at}</div>
                <div>{perfil?.followers}</div>
                <div>{perfil?.following}</div>
                <div>{perfil?.location}</div>
                <div>{perfil?.public_repos}</div>

            </div>

        </div>

    );

};

export default Search;