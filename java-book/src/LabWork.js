import React from 'react';
import './styles/style.css';
import './styles/fonts.css';

class LabWork extends React.Component {
  render() {
    return (
      <div>
        <h2>Лабораторна робота №{this.props.numer}</h2>
        <h4><b>Тема</b>: {this.props.theme}</h4>
        <h4><b>Мета</b>: {this.props.aim}</h4>
        <h4><b>Завдання</b>: {this.props.task}</h4>
        <img src={this.props.imgsrc} alt="Function in laboratory"/>
        <h4>Виконання:</h4>
        <div className={"code-div"}>
          <pre className={"code-block"}>{this.props.labcode}</pre>
        </div>
        <h4>Пояснення:</h4>
        <p>{this.props.commentary}</p>
        <h4>Висновки:</h4>
        <p>{this.props.conclusions}</p>
      </div>
    )
  }
}

export default LabWork;