import React from 'react';
import './styles/style.css';
import './styles/fonts.css';
import './LabWork';
import './functionality';
import LabWork from "./LabWork";
import {lw1} from "./labworks/lw1";
import {disactivePreviousButton} from "./functionality";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "b-0-page",
      numer: "0",
      theme: "",
      aim: "",
      task: "",
      imgsrc: "",
      labcode: "",
      commentary: "",
      conclusions: ""
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.state.currentPage === nextState.currentPage);
  }

  handleClick(event) {
    disactivePreviousButton();
    const classN = event.target.className.slice(0, "b-n-page".length);
    event.target.className += " isActive";
    switch (classN) {
      case "b-0-page": {
        this.setState(
          {
            currentPage: classN,
            numer: "0",
            theme: "",
            aim: "",
            task: "",
            imgsrc: "",
            labcode: "",
            commentary: "",
            conclusions: ""}
        )
        break;
      }
      case "b-1-page": {
        this.setState({...{currentPage: classN}, ...lw1});
        break;
      }
      default: {
        break;
      }
    }
  }

  render() {
    return(
      <div className="main-container">
        <div className="side-menu">
          <ul className="list">
            {[...Array(2).keys()].map((num) => {
              return num === 0 ?
                  <li><button className={`b-${num}-page able isActive`} onClick={(event) => this.handleClick(event)}>Головна</button></li>
                : <li><button className={`b-${num}-page able`} onClick={(event) => this.handleClick(event)}>Лабораторна робота №{num}</button></li>
            })}
          </ul>
        </div>
        <div id="main-content">

          {this.state.currentPage === "b-0-page" ?
            <div>
              <h2>Огляд</h2>
              <p>Мета даної сторінки полягає в хостингу фрагментів коду із лабораторних робіт з курсу "Основи розробки
                на платформі Java"</p>
              <p>Можливості HTML5, CSS, JS (зокрема і ReactJS) будуть використані для акуратнішого оформлення звітності
                і для зручнішої презентації при захисті лабораторної роботи</p>
              <br/>
              <p>Важливим буде зазначити те, що це моя перша односторінкова веб-сторінка із застосуванням ReactJS, проте
                її практично-навчальний потенціал для мене не змінюється.</p>
              <p>(Критику з приводу організації, дизайнів та вигляду сторінки прийматиму тільки в рамках курсу
                "Технології програмування користувацьких інтерфейсів (Front-end)" ))0)</p>
            </div>
            :
            <LabWork numer={this.state.numer}
                     theme={this.state.theme}
                     aim={this.state.aim}
                     task={this.state.task}
                     imgsrc={this.state.imgsrc}
                     labcode={this.state.labcode}
                     commentary={this.state.commentary}
                     conclusions={this.state.conclusions}>
            </LabWork>
          }
        </div>
      </div>
      )
  }
}

export default App;
