const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        no = document.querySelectorAll('.portfolio-no');

        useFilter('.all', '.all');
        useFilter('.lovers', '.lovers');
        useFilter('.chef', '.chef');
        useFilter('.girl', '.girl');
        useFilter('.guy', '.guy');
        useFilter('.grandmother', '.portfolio-no');
        useFilter('.granddad', '.portfolio-no');

  const typeFilter = (markType) => {
    markAll.forEach(mark => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    })

    no[0].style.display = 'none';
    no[0].classList.remove('animated', 'fadeIn');

    if (markType) {
      markType.forEach(mark => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      })
    } else {
      no[0].style.display = 'block';
      no[0].classList.add('animated', 'fadeIn');
    }
  };

  menu.addEventListener('click', (e) => {
    let target = e.target;

    if (target && target.tagName == 'LI') {

      items.forEach(btn => btn.classList.remove('active'));
      target.classList.add('active');

    }

  })

  function useFilter(btn, mark) {
    const button = document.querySelector(btn);
    const marks = document.querySelectorAll(mark);

    button.addEventListener('click', () => {
      typeFilter(marks);
    })
  }
}

export default filter;