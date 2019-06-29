import React from 'react';

import logo from '../../images/logo.png';

function Logo() {

    const title = 'Pronto e Fitness';
    const subtitle = 'Comida Fitness Congelada';

    return (
        <div className="logo">
            <img src={logo} alt="Pronto e fitness" />
            <div className="description">
                <span className="title">{title}</span>
                <span className="subtitle">{subtitle}</span>
            </div>
        </div>
    );

}

function MenuTopo() {

  return (
      <ul id="menu-topo">
          <li>
              <a href="javascript:">Início</a>
          </li>
          <li>
              <a href="javascript:" onClick={()=>window.open('https://www.facebook.com/prontoefitness/','_blank')}
              >Sobre</a>
          </li>
          <li>
              <a href="javascript:" onClick={()=>window.open('https://api.whatsapp.com/send?phone=5592981053211','_blank')}
              >Pedidos</a>
          </li>
          <li>
              <a href="javascript:" onClick={()=>window.open('https://www.instagram.com/prontoe_fitness/','_blank')}
              >Galeria</a>
          </li>
      </ul>
  );

}

function HContent() {

  return (
    <div className="h-content">
      <Logo />
      <a href="javascript:" className="short-menu" id="menu-mobile">
        <i className="material-icons">menu</i>
      </a>
      <MenuTopo />
    </div>
  );

}

export default HContent;