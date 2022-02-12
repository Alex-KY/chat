window.template = (function() {
  return `
    <div class="sign-block">
      <p class="title">{{ title }}</p>
      <form class="sign-block__form">
        <div class="sign-block__form__inputs">
          <input type="text" placeholder="{{ inputs.1.placeholder }}" />
          <input type="text" placeholder="{{ inputs.2.placeholder }}" />
          <input type="text" placeholder="{{ inputs.3.placeholder }}" />
          <input type="text" placeholder="{{ inputs.4.placeholder }}" />
          <input type="text" placeholder="{{ inputs.5.placeholder }}" />
          <input type="text" placeholder="{{ inputs.6.placeholder }}" />
          <input type="text" placeholder="{{ inputs.7.placeholder }}" />
        </div>
        <div class="sign-block__form__buttons">
          <button type="submit">{{ buttons.login.text }}</button>
          <a href="/login">{{ buttons.link.text }}</a>
        </div>
      </form>
    </div>
  `;
})();

const tmpl = new Templator(window.template);

const context = {
  title: 'Регистрация',
  inputs: {
    1: {
      placeholder: 'Почта'
    },
    2: {
      placeholder: 'Логин'
    },
    3: {
      placeholder: 'Имя'
    },
    4: {
      placeholder: 'Фамилия'
    },
    5: {
      placeholder: 'Телефон'
    },
    6: {
      placeholder: 'Пароль'
    },
    7: {
      placeholder: 'Пароль (ещё раз)'
    }
  },
  buttons: {
    login: {
      text: 'Зарегистрироваться'
    },
    link: {
      text: 'Войти'
    }
  }
};

const renderedTemplate = tmpl.compile(context);
const root = document.querySelector('.root');

root.classList = 'root signup-page';
root.innerHTML = renderedTemplate;