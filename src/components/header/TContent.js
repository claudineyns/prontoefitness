import React from 'react';

function TextLink(props) {

  return (
    <a href="javascript:"
      className="t-text"
      onClick={() => window.open(props.link, '_blank')}>{props.label}</a>
  );

}

function WhatsappItem() {
  const title = '(92) 98105-3211';
  const link = 'https://api.whatsapp.com/send?phone=5592981053211';
  return (
    <div className="t-item ts">
      <i className="fab fa-whatsapp t-icon"></i>
      <TextLink link={link} label={title} />
    </div>
  );
}

function FacebookItem() {
  const title = 'Pronto e Fitness';
  // const link = 'https://www.facebook.com/1494809067300933/';
  const link = 'https://www.facebook.com/prontoefitness/';
  return (
    <div className="t-item ts">
      <i className="fab fa-facebook fa-lg t-icon"></i>
      <TextLink link={link} label={title} />
    </div>
  );
}

function InstagramItem() {
  const title = 'prontoe_fitness';
  const link = 'https://www.instagram.com/prontoe_fitness/';
  return (
    <div className="t-item ts">
      <i className="fab fa-instagram t-icon"></i>
      <TextLink link={link} label={title} />
    </div>
  );
}

function TLink(props) {

  function openLink() {
    window.open(props.link, '_blank');
  }

  return (
    <a href="javascript:" onClick={() => openLink()} className="t-icon">
      <i className={props.className}></i>
    </a>
  );

}

function TSocial() {

  const facebookLink = 'https://www.facebook.com/1494809067300933/';
  const facebookClassName = 'fab fa-facebook-f fa-xs';

  const instagramLink = 'https://www.instagram.com/prontoe_fitness/';
  const instagramClassName = 'fab fa-instagram fa-xs';

  return (
    <div className="t-social ts">
      <TLink link={facebookLink} className={facebookClassName} />
      <TLink link={instagramLink} className={instagramClassName} />
    </div>
  );
  
}

function TContent() {

  return (
    <div className="t-content">
      <WhatsappItem />
      <FacebookItem />
      <InstagramItem />
      <TSocial />
    </div>
  );

}

export default TContent;