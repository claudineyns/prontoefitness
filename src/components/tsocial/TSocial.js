import React from 'react';

function TLink(props) {

    function openLink() {
        window.open(props.link, '_blank');
    }

    return (
        <a href="javascript:" onClick={()=>openLink()} className="t-icon">
            <i className={props.className}></i>
        </a>
    );

}

export default class TSocial extends React.Component {

    render() {
        
        const facebookLink = 'https://www.facebook.com/1494809067300933/';
        const facebookClassName = 'fab fa-facebook-f fa-xs';

        const instagramLink = 'https://www.instagram.com/prontoe_fitness/';
        const instagramClassName = 'fab fa-instagram fa-xs';

        return(
            <div className="t-social ts">
                <TLink link={facebookLink} className={facebookClassName}/>
                <TLink link={instagramLink} className={instagramClassName}/>
            </div>
        );
    }
  
  }