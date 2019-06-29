import React from 'react';
import FeedbackLeft from './FeedbackLeft';
import FeedbackRight from './FeedbackRight';

export default class MainSection extends React.Component {

    componentDidMount() {

        const sRegionTop    = document.querySelector('.s-region-top');
        const sRegionBottom = document.querySelector('.s-region-bottom');

        fetch('./content-top-tpl.html')
        .then((r)=>r.text())
        .then((r)=>{sRegionTop.innerHTML = r;});

        fetch('./content-bottom-tpl.html')
        .then((r)=>r.text())
        .then((r)=>{sRegionBottom.innerHTML = r;});

    }

    render() {
        return (
            <section>
                <article className="s-region s-region-top"></article>
                <article className="s-region s-region-middle">
                    <FeedbackLeft />
                    <FeedbackRight />
                </article>
                <article className="s-region s-region-bottom"></article>
            </section>
        );
    }

}
