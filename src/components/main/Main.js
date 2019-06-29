import React from 'react';
import Feedback from './Feedback';
import atendimento from '../../images/atendimento.png';
import person from '../../images/person2.png';

class Presentation extends React.Component {

    render() {

        const wellcomeCall = 'Que tal ter uma vida mais saudável?';

        const welcomeDescription =
            'Uma dieta saudável ajuda a manter ou melhorar a saúde, fornecendo ao ' +
            'corpo o essencial da nutrição humana, isto é, fluidos, macronutrientes, micronutrientes e ' +
            'quantidade adequada de calorias.';

        return (
            <article className="s-region s-region-top">
                <div className="s-left salt">
                    <div className="s-title">
                        <h5>Bem vindo</h5>
                        <label>{wellcomeCall}</label>
                    </div>
                    <p className="s-description">{welcomeDescription}</p>
                </div>
                <div className="s-right">
                    <div className="s-person" style={{'backgroundImage':'url('+person+')'}}></div>
                </div>
            </article>
        );

    }

}

function AttendanceItem(props) {
    return (
        <span className="attendance-item">{props.icon} {props.text}</span>
    )
}

function Attendance() {
    return (
        <article className="s-region s-region-bottom">
            <div className="s-left salt">
                <div className="s-title">
                    <h5>Atendimento</h5>
                    <label>Como funciona?</label>
                </div>
                <p className="s-description">
                    <AttendanceItem icon="⛿" text="Aceitamos: Alelo, Cartões de Débito/Crédito" />
                    <AttendanceItem icon="⛟" text="Delivery nos finais de semana" />
                    <AttendanceItem icon="☞" text="Segunda a Quinta, de 08:00 às 18:00" />
                </p>
            </div>
            <div className="s-right">
                <img src={atendimento} />
            </div>
        </article>
    );
}

function Main() {

    return (
        <main>
            <section>
                <Presentation />
                <Feedback />
                <Attendance />
            </section>
        </main>
    );

}

export default Main;