const loginField = document.querySelector('.form__login')
const passwordField = document.querySelector('.form__password')
const submitButton = document.querySelector('.form__submit')
const backButton = document.querySelector('.form__back')

const validate = () => {
  const isValidLogin = !!loginField.value
  const isValidPassword = !!passwordField.value

  if (!isValidLogin) {
    loginField.classList.add('error')
    loginField.setAttribute('placeholder', 'This field is required')
  }

  if (!isValidPassword) {
    passwordField.classList.add('error')
    passwordField.setAttribute('placeholder', 'This field is required')
  }

  return isValidLogin && isValidPassword
}

const send = async () => {
  const valid = validate()

  if (!valid) return

  const submitButtonLabel = submitButton.querySelector('span')
  submitButton.setAttribute('disabled', 'true')
  submitButtonLabel.textContent = 'Wait...'

  setTimeout(() => {
    submitButton.removeAttribute('disabled')
    submitButton.classList.add('success')
    submitButtonLabel.textContent = 'Login'
    backButton.style.display = 'block'
  }, 2000);
}

loginField.addEventListener('input', () => {
  loginField.setAttribute('placeholder', 'Your login')
  loginField.classList.remove('error')
})
passwordField.addEventListener('input', () => {
  passwordField.setAttribute('placeholder', 'Your password')
  passwordField.classList.remove('error')
})

submitButton.addEventListener('click', send)