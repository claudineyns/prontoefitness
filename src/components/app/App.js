import React from 'react';
import Header from '../header/Header';
import Main from '../main/Main';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {started: false};
  }

  componentDidMount = () => {

    if( this.state.started ) { return; }

    this.setState({started: true});

    window.addEventListener('load', function () {

      let body = document.getElementsByTagName('body')[0];

      body.addEventListener('click', function (e) {
        let menuMobile = document.getElementById('menu-mobile');
        let menuTopo = document.getElementById('menu-topo');
        if (body.offsetWidth <= 820) {
          if (e.target.parentNode === menuMobile) {
            menuTopo.style.display = 'block';
          } else {
            menuTopo.style.display = 'none';
          }
        }
      });

      window.addEventListener('resize', function () {
        let menuTopo = document.getElementById('menu-topo');
        if (menuTopo === null) { return; }
        if (body.offsetWidth > 820) {
          menuTopo.style.display = 'block';
        } else {
          menuTopo.style.display = 'none';
        }
      });

    });

  };

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }

}

//export default App;
