import React from 'react';
import TextLink from './TextLink';

export default class InstagramItem extends React.Component {

    render() {
        const title = 'prontoe_fitness';
        const link = 'https://www.instagram.com/prontoe_fitness/';
        return(
            <div className="t-item ts">
                <i className="fab fa-instagram t-icon"></i>
                <TextLink link={link} label={title}/>
            </div>
        );
    }
  
  }