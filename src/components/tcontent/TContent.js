import React from 'react';

import WhatsappItem from '../titem/WhatsappItem';
import FacebookItem from '../titem/FacebookItem';
import InstagramItem from '../titem/InstagramItem';
import TSocial from '../tsocial/TSocial';

export default class TContent extends React.Component {

    render() {
      return(
        <div className="t-content">
            <WhatsappItem />
            <FacebookItem />
            <InstagramItem />
            <TSocial />
        </div>
      );
    }
  
  }