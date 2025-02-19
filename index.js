const container = document.querySelector('.main-page__grid')
const cards = [
  {
    title: 'Parallax #1',
    link: './pages/parallax-1.html',
    tags: ['CSS', 'JS'],
  },
  {
    title: 'Parallax #2',
    link: './pages/parallax-2.html',
    tags: ['CSS', 'JS'],
  },
  {
    title: 'Running line #1',
    link: './pages/running-line-1.html',
    tags: ['CSS'],
  },
  {
    title: 'Animated z-index',
    link: './pages/animated-z-index.html',
    tags: ['CSS'],
  },
  {
    title: 'Interactive button',
    link: './pages/interactive-button.html',
    tags: ['CSS', 'JS'],
  },
  {
    title: 'Motion blur',
    link: './pages/motion-blur.html',
    tags: ['CSS'],
  },
  {
    title: 'Loaders',
    link: './pages/loaders.html',
    tags: ['CSS'],
  },
  {
    title: 'Text scroll',
    link: './pages/text-scroll.html',
    tags: ['CSS'],
  },
  {
    title: 'Pacman',
    link: './pages/pacman.html',
    tags: ['CSS'],
  },
  {
    title: 'Submarine',
    link: './pages/submarine.html',
    tags: ['CSS'],
  },
  {
    title: 'Wiggle box',
    link: './pages/wiggle.html',
    tags: ['CSS'],
  },
  {
    title: 'Hover',
    link: './pages/hover.html',
    tags: ['CSS'],
  },
  {
    title: 'Letter',
    link: './pages/letter.html',
    tags: ['CSS'],
  },
  {
    title: 'Cube',
    link: './pages/cube.html',
    tags: ['CSS'],
  },
  {
    title: 'Headers',
    link: './pages/headers.html',
    tags: ['CSS'],
  },
  {
    title: '3D scroll #1',
    link: './pages/3d-scroll-1.html',
    tags: ['CSS', 'JS'],
  },
  {
    title: 'SVG Filters',
    link: './pages/svg-filters.html',
    tags: ['SVG'],
  },
]

const createTag = (item) => {
  const tag = document.createElement('span')
  tag.classList.add('card__tag')
  tag.textContent = item
  return tag
}

const createCard = (item) => {
  const card = document.createElement('a')
  card.classList.add('main-page__card')
  card.classList.add('card')
  card.setAttribute('href', item.link)

  const cardTags = document.createElement('div')
  cardTags.classList.add('card__tags')

  item.tags.forEach(tag => {
    const _tag = createTag(tag)
    cardTags.append(_tag)
  })

  const cardTitle = document.createElement('h2')
  cardTitle.classList.add('card__title')
  cardTitle.textContent = item.title

  card.append(cardTags)
  card.append(cardTitle)
  return card
}

cards.forEach(card => {
  const _card = createCard(card)
  container.append(_card)
})
