import React from 'react';

function TextLink(props) {

    return(
        <a  href="javascript:"
            className="t-text"
            onClick={()=>window.open(props.link, '_blank')}>{props.label}</a>
    );
  
  }

  export default TextLink;