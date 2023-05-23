const checkTextInputs = (selector) => {
  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach(input => {
    input.addEventListener('input', () => {
			if (input.value.match(/[a-z]/ig)) {
				input.value = '';
			}
		});
    input.addEventListener('keypress', (e) => {
      if (e.key.match(/[^а-я 0-9]/ig)) {
        e.preventDefault();
      }
    });
  })
};

export default checkTextInputs;