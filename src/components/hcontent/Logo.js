import React from 'react';

function Logo() {

    const sourceImage = './images/logo.png';
    const title = 'Pronto e Fitness';
    const subtitle = 'Comida Fitness Congelada';

    return (
        <div className="logo">
            <img src={sourceImage} alt="Pronto e fitness" />
            <div className="description">
                <span className="title">{title}</span>
                <span className="subtitle">{subtitle}</span>
            </div>
        </div>
    );

}

export default Logo;