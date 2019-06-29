import React from 'react';

import TContent from './TContent';
import HContent from './HContent';

function Header() {

  return (
    <header>
      <div className="testeira">
        <TContent />
      </div>
      <HContent />
    </header>
  );

}

export default Header;