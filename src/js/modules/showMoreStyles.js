import { getData } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  let errorMessage = document.createElement('div');
      errorMessage.classList.add('status');
      errorMessage.style.marginBottom = '20px'
      errorMessage.classList.add('animated', 'fadeInUp', 'col-sm-4', 'col-sm-offset-4', 'col-xs-10', 'col-xs-offset-1');

  let errorImg = document.createElement('img');
      errorImg.setAttribute('src', 'assets/img/fail.png');
      errorImg.classList.add('animated', 'fadeInUp');
      errorMessage.appendChild(errorImg);

  let textMessage = document.createElement('div');
      textMessage.textContent = 'Что-то пошло не так';
      errorMessage.appendChild(textMessage);

  btn.addEventListener('click', function() {
    getData('assets/db.json')
        .then(res => createCards(res.styles))
        .catch(error => {
          document.querySelector(wrapper).appendChild(errorMessage)
        });

    this.remove();
  });

  function createCards(response) {
    response.forEach(({src, title, link}) => {
      let card = document.createElement('div');

      card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

      card.innerHTML = `
        <div class='styles-block'>
          <img src=${src} alt="style">
          <h4>${title}</h4>
          <a href=${link}>Подробнее</a>
        </div>
      `;

      document.querySelector(wrapper).appendChild(card);
    });
  };

}

export default showMoreStyles;