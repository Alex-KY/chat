window.blockTemplate = (function() {
  return `
    <div class="">
      <h1>404</h1>
      <p>Не туда попали</p>
      <a href="/">Назад к чатам</a>
    </div>
  `;
})();

const tmpl = new Templator(window.blockTemplate);

const context = {
  text: 'Мой очень важный span',
  className: '',
  user: {
    info: {
      firstName: 'Alexander'
    }
  }
};

const renderedTemplate = tmpl.compile(context); // Строка с html-вёрсткой

const root = document.querySelector('.root');
root.innerHTML = renderedTemplate;