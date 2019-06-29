import React from 'react';
import TextLink from './TextLink';

export default class FacebookItem extends React.Component {
    
    render() {
        const title = 'Pronto e Fitness';
        // const link = 'https://www.facebook.com/1494809067300933/';
        const link = 'https://www.facebook.com/prontoefitness/';
        return(
            <div className="t-item ts">
                <i className="fab fa-facebook fa-lg t-icon"></i>
                <TextLink link={link} label={title}/>
            </div>
        );
    }
    
  }