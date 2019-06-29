import React from 'react';

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

export default MenuTopo;