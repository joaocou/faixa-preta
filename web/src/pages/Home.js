import React, { Component } from 'react';
import '../style.css'

import logo from '../assets/logo-x.svg';
import background from '../assets/background.jpg';

export default class Home extends Component {


  render() {

    return (
        <div className="home">

            <div className="header">
                <a href="/"><img id="logo" src={logo} alt="Faixa Preta" /></a>

                <ul>
                  <li><a href="/sobre"><i className="fa fa-info"></i> Sobre</a></li>
                  <li><a href="/contato"><i className="fa fa-envelope"></i> Contato</a></li>
                  <li><a href="https://github.com/joaocou/faixa-preta"><i className="fa fa-github"></i> GitHub</a></li>
                </ul>

            </div>

            <div className="content animate-opacity">
              <div className="section">
                <h2>O treino que vai além da academia.</h2>
                <p>O <i>Faixa Preta</i> é a proposta de um app para ajudar karatecas em seus treinos individuais, contando com recursos que facilitam o o seu aprendizado e aperfeiçoamento. Além disso, ele é totalmente <i>open-source</i>!</p>

                <a href="https://expo.io/@joaohouto/faixa-preta">
                  <button className="button"><i className="fa fa-link"></i> Download</button>
                </a>
      
              </div>

              <img src={background} id="belt" alt="Faixa" />

              <div className="section"></div>
            </div>

            <div className="footer">
              &copy; 2020 Faixa Preta
            </div>
        </div>
    );
  }
}
