import React from 'react';

class FeedbackComments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [{
                person: 'André Freitas',
                text: '“Muito deliciosa sua comida!<br/>Estou recomendando pra geral...”'
            }, {
                person: 'Warlley Rodrigues',
                text: '“Ei, estou gostando muito da sua comida.<br/>Parabéns!” '
            }],
            current: 0
        };
    }

    onPrevious = () => {
        let current = (this.state.current - 1);
        if (current < 0) {
            current = (this.state.comments.length - 1);
        }
        this.setState({ current: current });
    };

    onNext = () => {
        let current = (this.state.current + 1);
        if (current === this.state.comments.length) {
            current = 0;
        }
        this.setState({ current: current });
    };

    render() {

        const comment = this.state.comments[this.state.current];

        return (

            <div className="s-right">

                <div className="s-title">
                    <h5>Histórias de Sucesso</h5>
                    <label>O que os clientes estão dizendo</label>
                </div>

                <p className="s-description">
                    <span dangerouslySetInnerHTML={{ __html: comment.text }}></span>
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

function Feedback() {
    return (
        <article className="s-region s-region-middle">
            <div className="s-left s-ballon">
                <i className="material-icons">feedback</i>
            </div>
            <FeedbackComments />
        </article>
    );
}

export default Feedback;
