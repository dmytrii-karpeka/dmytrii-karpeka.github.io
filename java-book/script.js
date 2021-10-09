class LabWork extends React.Component {
  render() {
    return (
      <div>
        <h2>Лабораторна робота №{this.props.numer}</h2>
        <h4><b>Тема</b>: {this.props.theme}</h4>
        <h4><b>Мета</b>: {this.props.aim}</h4>
        <h4><b>Завдання</b>: {this.props.task}</h4>
        <img src={this.props.imgsrc} alt={"image of function"}/>
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


function rendered(elem) {
  ReactDOM.render(
    elem,
    document.getElementById('main-content')
  );
}


function disableButton() {
  if (document.getElementsByClassName('isActive')[0]) {
    const activeButton = document.getElementsByClassName('isActive')[0];
    activeButton.className = activeButton.className.slice(0, -' isActive'.length);
  }
}


function clicked(event) {
  let element = event.target;
  if (element && element.className === 'b-main-page able') {
    disableButton();
    element.className += ' isActive';

    const elem = (
      <div>
        <h2>Огляд</h2>
        <p>Мета даної сторінки полягає в хостингу фрагментів коду із лабораторних робіт з курсу "Основи розробки на платформі Java"</p>
        <p>Можливості HTML5, CSS, JS (зокрема і ReactJS) будуть використані для акуратнішого оформлення звітності і для зручнішої презентації при захисті лабораторної роботи</p>
        <br />
        <p>Важливим буде зазначити те, що це моя перша односторінкова веб-сторінка із застосуванням ReactJS, проте її практично-навчальний потенціал для мене не змінюється.</p>
        <p>(Критику з приводу організації, дизайнів та вигляду сторінки прийматиму тільки в рамках курсу "Технології програмування користувацьких інтерфейсів (Front-end)" ))0)</p>
      </div>
    )
    rendered(elem);
  } else if (element && element.className === 'b-1-page able') {
    disableButton();
    element.className += ' isActive';

    const elem = (
      <LabWork numer={"1"}
               theme={"Основні типи та оператори мови програмування Java"}
               aim={"Ознайомлення з основними типами та операторами в Java. Здобуття навичок у використанні типів та операторів в Java."}
               task={"Створити клас, який складається з виконавчого методу, що виконує обчислення значення функції"}
               imgsrc={"https://asdjonok.github.io/OOP-SITE/pages/1/formula.png"}
               labcode={`
public class App {
    public static void main(String[] args) {
        int variant = 9212;

        /**
         * c2 = 0 -- o1 = +
         * c3 = 2 -- c = 2
         * c5 = 2 -- o2 = %
         * c7 = 0 -- type of i and j = byte
         */
        
         // type of data "byte" can be number from -128 to 127 (inclusive)
        byte a = 1;
        byte b = 1;
    
        byte n = 1;
        byte m = 2;

        int c = 2;

        float result = 0;

        if (n < a || m < b || (a <= -2 && n >= -2) || (b <= 0 && m >= 0)) {
            System.out.println("There is a problem in input data!");
        } else {
            for (byte i = a; i <= n; i++) {
                for (byte j = b; j <= m; j++) {
                    result += (float)(i % j) / (i + c);
                }
            }
            System.out.println(result);
        }
    }
}`}
               commentary={`
В лабораторній роботі було використано bytes як основний тип даних. Задати змінну із цим типом можна числом в районі [-128, 127]. 
Такий малий діапазон може стати в пригоді при роботі із роботою у великих масивах, де збереження пам'яті дійсно необхідне.
Окрім цього, змінна з цим типом може бути використана замість int у випадках, де обмеження допомагають краще зрозуміти код.
Якщо ми знаємо про факт обмеженого невеликого діапазону, то використання в коді цього типу може служити певною формою документування
про змінну.`}
               conclusions={`
Таким чином була проведена робота із застосуванням типу byte, досліджене застосування цього типу.
Згадано синтаксис циклів у мові Java, приведення типів та його роль у правильності виконання задачі.               
               `}>
      </LabWork>
    )
    rendered(elem);
  } else if (element && element.className === 'b-2-page') {
    disableButton();
    element.className += ' isActive';

    const elem = (
      <div>
        <h2>Лабораторна робота №2</h2>
      </div>
    )
    rendered(elem);
  }
}


document.getElementsByClassName('list')[0].addEventListener('click', clicked);
document.getElementsByClassName('b-main-page')[0].click();
