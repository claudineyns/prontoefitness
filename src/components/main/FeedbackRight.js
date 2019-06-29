import React from 'react';

export default class FeedbackRight extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            comments:[{
                person: 'André Freitas',
                text: '“Muito deliciosa sua comida!<br/>Estou recomendando pra geral...”'
            },{
                person: 'Warlley Rodrigues',
                text: '“Ei, estou gostando muito da sua comida.<br/>Parabéns!” '
            }],
            actual: 0
        };
    }

    onPrevious() {

        let actual = this.state.actual + 1;
        if(actual > this.state.comments.length) {
            actual = 0;
        }
        this.setState({actual: actual});

    }

    onNext() {

        let actual = this.state.actual - 1;
        if(actual < 0) {
            actual = this.state.comments.length-1;
        }
        this.setState({actual: actual});

    }

    render() {

        const comment = this.state.comments[this.state.actual];

        return (

            <div className="s-right">

                <div className="s-title">
                    <h5>Histórias de Sucesso</h5>
                    <label>O que os clientes estão dizendo</label>
                </div>

                <p className="s-description">
                    <span dangerouslySetInnerHTML={{__html: comment.text}}></span>
                    <br /> <br />
                    <strong className="testimonial-person">{comment.person}</strong>
                </p>

                <div className="arrows">
                    <a href="javascript:" className="i-default" onClick={() => this.onPrevious()}>
                        <i className="material-icons">chevron_left</i>
                    </a>
                    <a href="javascript:" className="i-default" onClick={() => this.onNext()}>
                        <i className="material-icons">chevron_right</i>
                    </a>
                </div>

            </div>

        );

    }

}