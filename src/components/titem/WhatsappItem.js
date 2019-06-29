import React from 'react';

export default class WhatsappItem extends React.Component {
    
    openLink() {
        window.open('https://api.whatsapp.com/send?phone=5592981053211', '_blank');
    }

    render() {
        const phoneNumber = '(92) 9 8105-3211';
        return(
            <div className="t-item">
                <i className="material-icons t-icon">call</i>
                <a  href="javascript:"
                    className="t-text"
                    onClick={()=>this.openLink()} >{phoneNumber}</a>
            </div>
        );
    }
  
  }