import Button from 'core/components/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => (

    <div className="home-container">
    
        <div className="text-title"> 
            
            Desafio do Capítulo 3, <br/>Bootcamp DevSuperior
        
        </div>
    
        <div className="text-subtitle"> 
            
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br/>
            Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br/>
            Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <h1 className="text-email">antforfigma@gmail.com</h1>
        
        </div>

        <Link to="/search">
            <Button text="Começar" />
        </Link>    
    
    </div>
);

export default Home;