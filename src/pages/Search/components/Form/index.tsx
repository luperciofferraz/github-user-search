import React from 'react';
import './styles.scss';
import Button from 'core/components/Button';

type Props = {

    login: string;
    handleSubmit: Function;
    handleOnChange: Function;

}


const Form = ({ login, handleSubmit, handleOnChange }: Props) => {

    return (

        <div className="search-area">

            <form onSubmit={(e) => handleSubmit(e)}>

                <div className="form-title">
                    Encontre um perfil Github                        
                </div>


                <input className="search-box"
                    value={login}
                    name="login"
                    type="text" 
                    placeholder="Usuário Github"
                    onChange={(e) => handleOnChange(e)}
                />

                <div className="btn-search">
                    <Button text="Encontrar" />
                </div>

            </form>

        </div> 

    );

}

export default Form;