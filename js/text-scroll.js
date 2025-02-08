const container = document.querySelector('.example-2 .scroll-text__inner')
const _words = []

const words = ['interesting', 'beautiful', 'amazing', 'funny']
const colors = ['gold', 'coral', 'royalblue', 'limegreen']

let currentWordIndex = 0
const maxWordIndex = words.length - 1
const outDuration = 380

const createWord = () => {
  const div = document.createElement('div')
  div.classList.add('scroll-text__word')

  return div
}

const createLetter = (text, color) => {
  const span = document.createElement('span')
  span.classList.add('scroll-text__letter')
  span.style.color = color
  span.textContent = text

  return span
}

words.forEach((word, index) => {
  const _word = createWord()
  const letters = word.split('')

  letters.forEach(letter => {
    const color = colors[index > colors.length - 1 ? colors.length - 1 : index]
    const _letter = createLetter(letter, color)
    _word.append(_letter)
  })

  _word.style.opacity = 0
  _words.push(_word)
  container.append(_word)
})

const rotateText = () => {
  const currentWord = _words[currentWordIndex]
  const nextWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1
  const nextWord = _words[nextWordIndex]

  currentWord.style.opacity = 1

  Array.from(currentWord.children).forEach((letter, index) => {
    setTimeout(() => {
      letter.className = 'scroll-text__letter out'
    }, index * 80)
  })

  nextWord.style.opacity = 1

  Array.from(nextWord.children).forEach((letter, index) => {
    setTimeout(() => {
      letter.className = 'scroll-text__letter behind'

      setTimeout(() => {
        letter.className = 'scroll-text__letter in'
      }, index * 80 + outDuration)
    }, index * 80)
  })

  currentWordIndex = nextWordIndex
}

rotateText()
setInterval(rotateText, 4000)