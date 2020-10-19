import React, { useState } from 'react';
import { Profile } from 'core/types/Profile';
import { makeRequest } from 'core/utils/request';
import './styles.scss';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader'; 
import Information from './components/InfoProfile';
import Form from './components/Form';
import ImageProfile from './components/ImageProfile';

const Search = () => {
    
    const [login, setLogin] = useState("");
    const [profile, setProfile] = useState<Profile>();
    const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        setLogin(event.target.value);

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();

        setIsLoading(true);
        makeRequest({ url: login })
            .then(response => setProfile(response.data))
            .finally(() => setIsLoading(false));            
    }

    return (

        <>

            <Form 
                login={login} 
                handleOnChange={handleOnChange} 
                handleSubmit={handleSubmit} 
            />

            {profile && <div className="result-area">

                {isLoading ? <ImageLoader /> : (
                
                    <ImageProfile login={login} profile={profile} />                   

                )}

                {isLoading ? <InfoLoader /> : (
                
                    <Information profile={profile} />

                )}

            </div> }

        </>

    );

};

export default Search;
