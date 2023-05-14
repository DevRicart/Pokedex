const changeButton = document.getElementById('change-button')

const body = document.querySelector('body')

const changeButtonImage = document.querySelector('.button-image')

changeButton.addEventListener('click', () => {
  const darkModeIsActive = body.classList.contains('dark-mode')

  body.classList.toggle('dark-mode')

  if (darkModeIsActive) {
    changeButtonImage.setAttribute('src', './assets/images/sun.png')
  } else {
    changeButtonImage.setAttribute('src', './assets/images/moon.png')
  }
})
