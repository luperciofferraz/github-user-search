import React from 'react';
import './styles.scss';

type Props = {

    text: string;

}

const Button = ({ text }: Props) => (

    <div>
        <button className="btn-icon">
            <div className="btn-text">{text}</div>
        </button>
    </div>
);

export default Button;