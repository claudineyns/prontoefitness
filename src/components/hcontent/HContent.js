import React from 'react';

import Logo from './Logo';
import MenuTopo from './MenuTopo';

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